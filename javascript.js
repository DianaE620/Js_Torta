$( document ).ready(function() {

  // Clase Torta
  function Torta(type){
    this.type = type;
  }

  function Oven(torta, tiempo){
    this.torta = torta;
    this.tiempo = tiempo
  }

  Oven.prototype.cook = function(){
    var tiempo = this.tiempo;
    var tipo_torta = this.torta.type;
    var t = 0;
    var estatus = "";
    
    var timer = setInterval(function(){

      if(t >= 0 && t <= 3){
        $("#timer").html("<br><div>"+t+"</div><br><div>crudo</div>");
        $("#timer").css("background-color", "transparent");
        estatus = "crudo";
      }else if(t >= 4 && t <= 5){
        $("#timer").html("<br><div>"+t+"</div><br><div>casi listo</div>");
        $("#timer").css("background-color", "orange");
        estatus = "casi listo";
      }else if(t >= 6 && t <= 8){
        $("#timer").html("<br><div>"+t+"</div><br><div>listo</div>");
        $("#timer").css("background-color", "green");
        estatus = "listo";
      }else if(t >= 9){
        $("#timer").html("<br><div>"+t+"</div><br><div>quemado</div>");
        $("#timer").css("background-color", "red");
        estatus = "quemado";
      }

      t++

      if(t > tiempo){
        $("#history").append("<li>" + tipo_torta + " -> " + estatus + "</li>")
        clearInterval(timer);
      }

    }, 1000);

    
  }

  $(".create-oven").on('submit', function(){
    event.preventDefault();
    $(".oven").fadeIn(1000);
  });

  $("#cook").on('submit', function(){
    event.preventDefault();
    var ingrediente = $("#ingrediente").val();
    var tiempo = $("#tiempo").val();

    //console.log(ingrediente);
    //console.log(tiempo);

    var torta = new Torta(ingrediente);
    //console.log(torta)

    var horno = new Oven(torta, tiempo);
    //console.log(cocinar)

    horno.cook();


  });




});

// Class Torta

// Class TortaBatch

// Class Oven
