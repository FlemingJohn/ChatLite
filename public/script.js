const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message");

  const formattedText = text
    .replace(/\n/g, "<br>")                      // Convert newlines to <br>
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")      // Bold **text**
    .replace(/\*(.*?)\*/g, "<i>$1</i>");         // Italic *text*

  msg.innerHTML = `<span class="${sender}">${sender}:</span> ${formattedText}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}


async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("user", message);
  userInput.value = "";

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    appendMessage("bot", data.reply || "No reply");
  } catch (error) {
    appendMessage("bot", "Error connecting to server.");
    console.error(error);
  }
}
