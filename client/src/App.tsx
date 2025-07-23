// imports need to make this app run
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// react wrapper fro pwoer bi js sdk
import { PowerBIEmbed } from 'powerbi-client-react';
// power bi constants/enums
import { models, type IEmbedConfiguration, Embed } from 'powerbi-client';
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
    const [embedConfig, setEmbedConfig] = useState<IEmbedConfiguration | null>(null);
    
    useEffect(() => {
        axios.get<Report[]>('http://localhost:3001/api/reports')
        .then(res => setReports(res.data))
        .catch(err => console.log(err));
    }, []);
    
    // function that trigger microsoft login request
    const loadReport = async (report: Report) => {
            try {
               //pass in the access token to the backend to 1) authenticate user 2) generate the embed token need to embed report
                const res = await axios.post<EmbedTokenResponse>(
                    'http://localhost:3001/api/embed-token',
                    {reportId: report.id}
                );
                
                // backend returns the embedToken, embedUrl, and reportId, all needed in PowerBIEmbed Tag
                const {embedToken, embedUrl, reportId: id, reportType} = res.data;

                // set the configuration need for PowerBIEmbed
                //settings for embed itself (cna be altered easily)
                setEmbedConfig({
                    type: 'report',
                    id: id,
                    embedUrl: embedUrl,
                    accessToken: embedToken,
                    tokenType: models.TokenType.Embed,
                    settings: {
                        panes: {
                            filters: {visible: false},
                            pageNavigation: {visible: true},
                        },
                        background: models.BackgroundType.Transparent,
                    },
                });
            } catch (err) {
                console.error('Login or embed error:', err);
            }
    };

    /* If embedConfig is set up simply returns the embed report itself
    PowerBIEmbed is wrapper that renders and handles an iframe */
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '250px', padding: '1rem', background: '#f4f4f4', overflowY: 'auto' }}>
                <h3>Available Reports</h3>
                {reports.map(report => (
                    <div key={report.id} style={{ marginBottom: '1rem' }}>
                        <button onClick={() => loadReport(report)} style={{ width: '100%' }}>
                            {report.name}
                        </button>
                    </div>
                ))}
            </div>
            <div style={{ flexGrow: 1 }}>
                {embedConfig && (
                    <PowerBIEmbed
                        embedConfig={embedConfig}
                        cssClassName="report-style-class"
                        getEmbeddedComponent={(embedObject: Embed) =>
                            console.log('Report loaded:', embedObject)
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default App;