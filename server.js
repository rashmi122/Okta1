const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Test endpoint
app.get("/", (req, res) => {
    res.json({
        message: "Okta Dashboard Backend is running"
    });
});

// Get users from Okta
app.get("/api/users", async (req, res) => {
    try {
        const response = await axios.get(
            `${process.env.OKTA_DOMAIN}/api/v1/users`,
            {
                headers: {
                    Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
                    Accept: "application/json"
                }
            }
        );

        res.json(response.data);

    } catch (error) {
        console.error(
            "Okta API Error:",
            error.response?.data || error.message
        );

        res.status(500).json({
            error: "Failed to retrieve users from Okta",
            details: error.response?.data || error.message
        });
    }
});
// Get a specific user from Okta
app.get("/api/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;

        const response = await axios.get(
            `${process.env.OKTA_DOMAIN}/api/v1/users/${userId}`,
            {
                headers: {
                    Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
                    Accept: "application/json"
                }
            }
        );

        res.json(response.data);

    } catch (error) {
        console.error(
            "Okta User Details API Error:",
            error.response?.data || error.message
        );

        res.status(500).json({
            error: "Failed to retrieve user details from Okta",
            details: error.response?.data || error.message
        });
    }
});
// Get groups from Okta
app.get("/api/groups", async (req, res) => {
    try {
        const response = await axios.get(
            `${process.env.OKTA_DOMAIN}/api/v1/groups`,
            {
                headers: {
                    Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
                    Accept: "application/json"
                }
            }
        );

        res.json(response.data);

    } catch (error) {
        console.error(
            "Okta Groups API Error:",
            error.response?.data || error.message
        );

        res.status(500).json({
            error: "Failed to retrieve groups from Okta",
            details: error.response?.data || error.message
        });
    }
});
// Get groups for a specific user
app.get("/api/users/:id/groups", async (req, res) => {
    try {
        const userId = req.params.id;

        const response = await axios.get(
            `${process.env.OKTA_DOMAIN}/api/v1/users/${userId}/groups`,
            {
                headers: {
                    Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
                    Accept: "application/json"
                }
            }
        );

        res.json(response.data);

    } catch (error) {
        console.error(
            "Okta User Groups API Error:",
            error.response?.data || error.message
        );

        res.status(500).json({
            error: "Failed to retrieve user groups from Okta",
            details: error.response?.data || error.message
        });
    }
});
// Get MFA factors for a specific user
app.get("/api/users/:id/factors", async (req, res) => {
    try {
        const userId = req.params.id;

        const response = await axios.get(
            `${process.env.OKTA_DOMAIN}/api/v1/users/${userId}/factors`,
            {
                headers: {
                    Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
                    Accept: "application/json"
                }
            }
        );

        res.json(response.data);

    } catch (error) {
        console.error(
            "Okta User Factors API Error:",
            error.response?.data || error.message
        );

        res.status(500).json({
            error: "Failed to retrieve user MFA factors from Okta",
            details: error.response?.data || error.message
        });
    }
});
// Get applications from Okta
app.get("/api/apps", async (req, res) => {
    try {
        const response = await axios.get(
            `${process.env.OKTA_DOMAIN}/api/v1/apps`,
            {
                headers: {
                    Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
                    Accept: "application/json"
                }
            }
        );

        res.json(response.data);

    } catch (error) {
        console.error(
            "Okta Apps API Error:",
            error.response?.data || error.message
        );

        res.status(500).json({
            error: "Failed to retrieve applications from Okta",
            details: error.response?.data || error.message
        });
    }
});
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});