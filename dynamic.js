function setSize() {
  var size = 0;
  var randomNum = Math.floor(Math.random() * 10);
  for (var i = 0; i < randomNum; i++) {
    size += 10
  }
  return size;
}

function moveVertical() {
  var catPicture = document.getElementById('picture')
  console.log('move vert');
  if (catPicture) {
    catPicture.style.top = setSize() + 'px'
  }
}

function move() {
  moveVertical();
  moveHorizontal();
}

function moveHorizontal() {
  var catPicture = document.getElementById('picture')
  console.log('move hori');
  if (catPicture) {
    catPicture.style.left = setSize() + 'px'
  }
}
