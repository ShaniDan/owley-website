import axios from 'axios';

// Load environment variables
const apiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.MAILCHIMP_LIST_ID;
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Email is required and must be valid.' });
        }

        try {
            const data = {
                email_address: email,
                status: 'subscribed', // Use 'pending' to send a confirmation email
            };

            const response = await axios.post(
                `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/`,
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `apikey ${apiKey}`,
                    },
                }
            );

            // Handle success
            if (response.status === 200) {
                return res.status(200).json({ success: true, message: 'Subscription successful.' });
            } else {
                // Handle any other responses
                return res.status(response.status).json({ error: response.data.title || 'An error occurred' });
            }
        } catch (error) {
            // Handle errors
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                return res.status(error.response.status).json({ error: error.response.data.title || 'An error occurred' });
            } else if (error.request) {
                // The request was made but no response was received
                return res.status(500).json({ error: 'No response from Mailchimp server.' });
            } else {
                // Something happened in setting up the request that triggered an Error
                return res.status(500).json({ error: 'Error setting up request to Mailchimp.' });
            }
        }
    } else {
        // Handle any requests that aren't POST
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
