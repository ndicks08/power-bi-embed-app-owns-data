// imports need to make this app run
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


// react wrapper fro pwoer bi js sdk
import { PowerBIEmbed } from 'powerbi-client-react';
// power bi constants/enums
import * as powerbi from 'powerbi-client';
// css styling
import './App.css'


interface Report {
    id: string;
    name: string;
    reportType: "PowerBIReport" | "PaginatedReport";
}
interface EmbedTokenResponse {
    embedToken: string;
    embedUrl: string;
    reportId: string;
    reportType: "PowerBIReport" | "PaginatedReport";
}

// creates react componenet
const App: React.FC = () => {
    const [reports, setReports] = useState<Report[]>([]);
    //power bi configuration
    const [embedConfig, setEmbedConfig] = useState<powerbi.IEmbedConfiguration | null>(null);
    const [embedKey, setEmbedKey] = useState<string>('');
    const embedRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        axios.get<Report[]>('http://localhost:3001/api/reports')
        .then(res => setReports(res.data))
        .catch(err => console.log(err));
    }, []);
    
    // function load and embed a report
    const loadReport = async (report: Report) => {
            try {
                if (embedRef.current) {
                    window['powerbi'].reset(embedRef.current);
                }
                
                const res = await axios.post<EmbedTokenResponse>(
                    'http://localhost:3001/api/embed-token',
                    {reportId: report.id}
                );
                
                // backend returns the embedToken, embedUrl, and reportId, all needed in PowerBIEmbed Tag
                const {embedToken, embedUrl, reportId: id, reportType} = res.data;
                const typeOfReport = reportType === 'PaginatedReport' ? 'paginatedReport' : 'report';

                // set the configuration need for PowerBIEmbed
                //settings for embed itself (cna be altered easily)
                setEmbedConfig(null);
                console.log(embedConfig);
                setTimeout(() => {
                    setEmbedConfig({
                        type: 'report',
                        id: id,
                        embedUrl: embedUrl,
                        accessToken: embedToken,
                        tokenType: powerbi.models.TokenType.Embed,
                        settings: {
                            panes: {
                                filters: {visible: false},
                                pageNavigation: {visible: true},
                            },
                            background: powerbi.models.BackgroundType.Transparent,
                        },
                    });
                    setEmbedKey(id + typeOfReport);
                }, 0);
                } catch (err) {
                    console.error('Login or embed error:', err);
                }
    };

    /* If embedConfig is set up simply returns the embed report itself
    PowerBIEmbed is wrapper that renders and handles an iframe */
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '250px', padding: '1rem', background: '#0967d2', overflowY: 'auto' }}>
                <h3>Available Reports</h3>
                {reports.map(report => (
                    <div key={report.id} style={{ marginBottom: '1rem' }}>
                        <button onClick={() => loadReport(report)} style={{ width: '100%', background: '#0967d2' }}>
                            {report.name} 
                        </button>
                    </div>
                ))}
            </div>
            <div style={{ flexGrow: 1 }}>
                {embedConfig && (
                    <PowerBIEmbed
                        key={embedKey}
                        embedConfig={embedConfig}
                        cssClassName="report-style-class"
                        getEmbeddedComponent={(embedObject: powerbi.Embed) => {
                            console.log('Report loaded:', embedObject);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default App;