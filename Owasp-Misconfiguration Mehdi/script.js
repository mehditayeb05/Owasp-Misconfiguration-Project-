function fetchMessages() {
    var conversationId = document.getElementById("conversationId").value;
    var url = "/dm/user_updates.json?conversation_id=" + conversationId + "&cursor=GRlFp7LCUAAAA";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMessages(data.messages);
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
}

function displayMessages(messages) {
    var messagesContainer = document.getElementById("messages");
    messagesContainer.innerHTML = ""; // Clear previous messages

    if (messages.length === 0) {
        messagesContainer.innerHTML = "No messages found for this conversation.";
        return;
    }

    messages.forEach(message => {
        var messageElement = document.createElement("div");
        messageElement.textContent = message.text;
        messagesContainer.appendChild(messageElement);
    });
}
