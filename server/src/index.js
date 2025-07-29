// enables cross-origin request from the frontend
const cors = require("cors");

// web server framework
const express = require('express');

// http client to call power bi apis
const axios = require('axios');

// loads env variables
const dotenv = require('dotenv');

const app = express();

dotenv.config();

// middleware
// enables cors so that frontend can communicate with backend
app.use(cors());

// parse the incoming json bodys
app.use(express.json());

// get from .env file (keeps secrets out of code)
const {
    AZURE_TENANT_ID,
    AZURE_CLIENT_ID,
    AZURE_CLIENT_SECRET,
    POWERBI_API_SCOPE,
    WORKSPACE_ID,
    PORT
} = process.env;

// get access token using client credentials flow (must be turned on in azure app regisration)
// token is then used to authenticate power bi rest api calls
async function getPowerBIAccessToken() {
    const url = `https://login.microsoftonline.com/${AZURE_TENANT_ID}/oauth2/v2.0/token`;
    const form = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: AZURE_CLIENT_ID,
        client_secret: AZURE_CLIENT_SECRET,
        scope: POWERBI_API_SCOPE
    });
    
    const response = await axios.post(url, form);
    return response.data.access_token;
}

// get all reports in a specific workspace
app.get('/api/reports', async (req, res) => {
    try{
        const token = await getPowerBIAccessToken();
        const response = await axios.get(`https://api.powerbi.com/v1.0/myorg/groups/${WORKSPACE_ID}/reports`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        // returns the list of reports (not metadata)
        res.json(response.data.value);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch reports' });
    }
})

// get embed token and report information for a specific report
app.post('/api/embed-token', async (req, res) => {
    const { reportId } = req.body;

    if (!reportId) {
        return res.status(400).json({ error: 'ReportId required' });
    }

    // use that access token to authorize a call to Power BIs API
    try {
        const token = await getPowerBIAccessToken();
        
        // generate the embed token
        const embedResponse = await axios.post(
            `https://api.powerbi.com/v1.0/myorg/groups/${WORKSPACE_ID}/reports/${reportId}/GenerateToken`,
            { accessLevel: 'View' }, // can be "Edit" as well
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        // get reports metadata including the embed url
        const reportDetails = await axios.get(
            `https://api.powerbi.com/v1.0/myorg/groups/${WORKSPACE_ID}/reports/${reportId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        // send embedToken, embedUrl, reportType, and reportId back to frontend to use
        res.json({
            embedToken: embedResponse.data.token, 
            embedUrl: reportDetails.data.embedUrl,
            reportId: reportDetails.data.reportId,
            reportType: reportDetails.data.reportType
        });
        
      // error handling
    } catch (error) {
        console.error('Power BI embed token generation failed:', error.response?.data || error.message);
        res.status(500).json({ error: ' Embed token generation failed' });
    }
});

// start the server on port 3001
app.listen(process.env.PORT || 3001, () => {
    console.log('Backend running on port ' + process.env.PORT);
});