// addEventListeners once page loads fully and then load existing messages
window.onload=function(){
  document.getElementById('submitMessage').addEventListener("click", () =>
  {addMessage(document.getElementById('message').value)});

  document.getElementById('clearMessages').addEventListener("click", clearAllMessages);

  loadMessages();
}

var initialMessages = {
  "messages": [
    "First!",
    "Hey everybody how's it going?",
    "",
    "What's up?"
  ]
}

function addMessage(msg) {
  // var msg = document.getElementById('message').value;
  if (msg) {
    var msgList = document.getElementsByClassName('messageList')[0];
    var node = document.createElement('LI');
    var textNode = document.createTextNode(msg);
    node.appendChild(textNode);
    msgList.appendChild(node);
  }
}

function loadMessages() {
  messageString = JSON.stringify(initialMessages);
  localStorage.setItem("testJSON", messageString);
  text = localStorage.getItem("testJSON");
  obj = JSON.parse(text);
  // obj.messages.forEach((msg) => {addMessage(msg)});
  obj.messages.forEach((msg) => {addMessage(msg)});

}

function clearAllMessages() {
  var msgList = document.getElementsByClassName('messageList')[0];
  var msgListLen = msgList.childElementCount;
  for (var i = msgListLen; i > 1; i--)
  msgList.removeChild(msgList.childNodes[i]);
}
