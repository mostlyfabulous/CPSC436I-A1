// addEventListener once page loads fully
window.onload=function(){
  document.getElementById('submitMessage').addEventListener("click", addMessage);
}

function addMessage() {
  var msg = document.getElementById('message').value;
  var msgList = document.getElementsByClassName('messageList')[0];
  var node = document.createElement('LI');
  var textNode = document.createTextNode(msg);
  node.appendChild(textNode);
  msgList.appendChild(node);
}
