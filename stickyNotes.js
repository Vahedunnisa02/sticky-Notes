const btn = document.querySelector("button");

function removeStickyNote(evt) {
  evt.target.parentElement.remove();
}

function editStickyNote(evt) {
  // evt.target.parentElement.children[0].contentEditable = true;
  
}

function makeEditableFalse(evt) {
  evt.target.contentEditable = false;
}