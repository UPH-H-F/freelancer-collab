const { HandlerResponse } = require('@netlify/functions');

exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
        const name = event.body.name;
        const email = event.body.email;
        const message = event.body.message;

        // You can process the data here (e.g., send an email)
        console.log(`Message received: ${name} - ${email} - ${message}`);

        return HandlerResponse.json({ message: 'Form submission successful!' });
    } else {
        return HandlerResponse.json({ message: 'Invalid request method' });
    }
};