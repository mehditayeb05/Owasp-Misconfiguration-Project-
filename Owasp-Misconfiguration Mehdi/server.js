const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to simulate the Direct Message API
app.get('/dm/user_updates.json', (req, res) => {
    const conversationId = req.query.conversation_id;
    // Simulate retrieving messages from database based on conversationId
    const messages = getMessagesFromDatabase(conversationId);
    // Simulate delay for demonstration purposes
    setTimeout(() => {
        res.json({ messages });
    }, 1000);
});

// Function to simulate retrieving messages from database
function getMessagesFromDatabase(conversationId) {
    // Simulated messages data
    const messages = [
        { id: 1, text: "Hello there!" },
        { id: 2, text: "How are you?" },
        { id: 3, text: "This is a private message." }
    ];
    // For demonstration, return messages related to the provided conversationId
    return messages.filter(message => message.conversationId === conversationId);
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
