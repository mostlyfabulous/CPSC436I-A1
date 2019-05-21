// addEventListeners once page loads fully and then load existing messages
window.onload=function(){
  document.getElementById('submitMessage').addEventListener("click", () =>
  {addMessage(document.getElementById('message').value)});
  document.getElementById('clearMessage').addEventListener("click", clearText);
  document.getElementById('deleteAllMessages').addEventListener("click", deleteMessages);

  loadMessages();
  deleteMsgListener();
}

var initialMessages = {
  "messages": [
    "First!",
    "Hey everybody how's it going?",
    "",
    "What's up?"
  ]
}

function deleteMsgListener() {
  // deletes message currently being hovered over upon a click
  var msgList = document.getElementsByClassName('messageList')[0];
  msgList.addEventListener("click", removeMessage);
}

function addMessage(msg) {
  // var msg = document.getElementById('message').value;
  if (msg) {
    var user = document.getElementById('userName').value
    var msgList = document.getElementsByClassName('messageList')[0];
    var node = document.createElement('LI');
    var textNode = document.createTextNode(user + ": " + msg);
    if (!user) {
      textNode = document.createTextNode(msg);
    }
    node.appendChild(textNode);
    node.className = "delete";
    msgList.appendChild(node);
  }
}

function clearText() {
  document.getElementById('message').value = "";
}

function loadMessages() {
  messageString = JSON.stringify(initialMessages);
  localStorage.setItem("testJSON", messageString);
  text = localStorage.getItem("testJSON");
  obj = JSON.parse(text);
  // obj.messages.forEach((msg) => {addMessage(msg)});
  obj.messages.forEach((msg) => {addMessage(msg)});

}

function deleteMessages() {
  var msgList = document.getElementsByClassName('messageList')[0];
  var msgListLen = msgList.childElementCount;
  for (var i = msgListLen; i > 1; i--)
    msgList.removeChild(msgList.childNodes[i]);
}

function removeMessage() {
  var a = document.querySelectorAll('li:hover');
  var userDelete = confirm("Delete highlighted message?");
  if (userDelete)
    a[0].remove();
}
