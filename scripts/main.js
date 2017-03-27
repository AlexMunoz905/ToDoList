function AddToList() {
  button = document.getElementById('buttonSubmit');
  input = document.getElementById('input').value;

  var para = document.createElement("P");
  var t = document.createTextNode(input);
  para.appendChild(t);
  document.body.appendChild(para);

  // DEBUGING
  // console.log(input);
}
