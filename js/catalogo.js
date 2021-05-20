$(document).ready(function(){
    function cargar_catalogo() {
        $.ajax("./php/Count_catalogo.php", {
          success: function (data) {
            let limite = data;
            let template = ``;
            for (let x = 1; x <= limite; x++) {
              console.log(x);
              if (x >= 2 && x <= 9) {
                template += `
              <div class="carousel-item ">
              <img
                src="./img/Catalogo/CATALOGO_00${x}.png"
                class="d-block img_catalogo"
                alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <label class="text-black bg-primary">${x} de ${limite}</label>
              </div>
            </div>`;
              } else if (x >= 10) {
                template += `
              <div class="carousel-item ">
              <img
                src="./img/Catalogo/CATALOGO_0${x}.png"
                class="d-block img_catalogo"
                alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <label class="text-black bg-primary">${x} de ${limite}</label>
          </div>
            </div>`;
              } else {
                template += `
              <div class="carousel-item active">
              <img
                src="./img/Catalogo/CATALOGO_00${x}.png"
                class="d-block img_catalogo"
                alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <label class="text-black bg-primary">${x} de ${limite}</label>
              </div>
            </div>`;
              }
            }
            $("#elementos_carrousel").html(template);
          },
          error: function () {
            alert("There was some error performing the AJAX call!");
          },
        });
      }
  $('#catalogo').hide();

  setTimeout(function(){ 
    $('#Carga').hide() ; 
    cargar_catalogo();
   $('#catalogo').show().fadeIn("slow") ;  
  }, 5000);

  $('#catalogo').show().fadeIn("slow") ;
  $("#catalogo").carousel({
    pause: true,
    interval: false,
  });

});