// imports need to make this app run
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


// react wrapper fro power bi js sdk
import { PowerBIEmbed } from 'powerbi-client-react';
// power bi constants/enums
import * as powerbi from 'powerbi-client';
// css styling
import './App.css'

// type definitions for report list and embed token response
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

const App: React.FC = () => {
    // lists of reports available for embedding
    const [reports, setReports] = useState<Report[]>([]);
    
    // current power bi embed configuration
    const [embedConfig, setEmbedConfig] = useState<powerbi.IEmbedConfiguration | null>(null);
    
    // unique key for forcing re-render of power bi component
    const [embedKey, setEmbedKey] = useState<string>('');
    
    // reference to the div container where the report will be embedded
    const embedRef = useRef<HTMLDivElement | null>(null);
    
    // fetch the available reports
    useEffect(() => {
        axios.get<Report[]>('http://localhost:3001/api/reports')
        .then(res => setReports(res.data))
        .catch(err => console.log(err));
    }, []);
    
    // called when a user clicks on a report
    const loadReport = async (report: Report) => {
            try {
                // reset any previous embedded report
                if (embedRef.current) {
                    window['powerbi'].reset(embedRef.current);
                }
                
                // request embed token and url from backend
                const res = await axios.post<EmbedTokenResponse>(
                    'http://localhost:3001/api/embed-token',
                    {reportId: report.id}
                );
                
                // get the response from the backend
                const {embedToken, embedUrl, reportId: id, reportType} = res.data;
                const typeOfReport = reportType === 'PaginatedReport' ? 'paginatedReport' : 'report';

                // clear old configuration before updating
                setEmbedConfig(null);
                
                // create a slight delay to allow Power BI Embed to clean up
                setTimeout(() => {
                    // configure and set the new embed config
                    setEmbedConfig({
                        type: 'report',
                        id: id,
                        embedUrl: embedUrl,
                        accessToken: embedToken,
                        tokenType: powerbi.models.TokenType.Embed,
                        settings: {
                            panes: {
                                filters: {visible: true},
                                pageNavigation: {visible: true},
                            },
                            background: powerbi.models.BackgroundType.Transparent,
                        },
                    });
                    
                    // set the key to force a power bi embed refresh when new report is selected
                    setEmbedKey(id + typeOfReport);
                }, 0);
                } catch (err) {
                    console.error('Login or embed error:', err);
                }
    };

    
    return (
        // create the navigation bar that list the available reports
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