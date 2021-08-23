$(function(){
  let contador = $(".contador span");

  $("#quantidade-mais").on("click", function(){
   
    if(contador.text() < 10){
    let contagem = parseInt(contador.text());
    contador.text(contagem + 1);
    } else if(contador.text() == 10) {
      $(".alert").css("display", "block");
      $("#quantidade-mais").css({"background-color": "rgb(153, 87, 87)", "cursor": "no-drop"});

    };
  });

  $("#quantidade-menos").on("click", function(){
    if(contador.text() > 0){    
      let contagem = parseInt(contador.text());
    contador.text(contagem - 1);
    $(".alert").css("display", "none");
    $("#quantidade-mais").css({"background-color": "transparent", "cursor": "pointer"});
    };
  });
});