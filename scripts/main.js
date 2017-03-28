function AddToList() {
  button = document.getElementById('buttonSubmit');
  input = document.getElementById('input').value;

  var para = document.createElement("p");
  var t = document.createTextNode(input);
  para.appendChild(t);
  document.body.appendChild(para);

  $(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

  // DEBUGING
  // console.log(input);
}
