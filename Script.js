const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {

    const message = messageInput.value.trim();

    if(message === "") return;

    const div = document.createElement("div");

    div.classList.add("message");
    div.classList.add("sent");

    div.innerText = message;

    chatBox.appendChild(div);

    messageInput.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("audioCall").addEventListener("click",()=>{
    alert("Audio Calling Feature Connected With WebRTC");
});

document.getElementById("videoCall").addEventListener("click",()=>{
    alert("Video Calling Feature Connected With WebRTC");
});
