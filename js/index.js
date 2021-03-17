
$(document).ready(function () {
  console.log("jquery is working");

  function cargar_lentes() {
    $.ajax("./php/Count_lentes.php", {
      success: function (data) {
        let limite = data;
        let template = `<div class="col-sm pt-5 pb-5">
        <div class="card card-productos" style="width: 18rem; data-aos="fade-up"">
            <img class="card-img-top" src="img/varios/olive_people.jpg" alt="Card image cap">
            <div class="card-body card-body-1">
              <p class="card-text">     <span><img src="img/icono.png" alt="" height="50px"></span> <a href="Catalogo.html" target="blank"><button class="btn btn-danger">Click Para ver Catalogo de nuestra marca excluisva</button></a> </p>
            </div>
          </div>
    </div>`;
        for (let x = 1; x <= limite; x++) {
          console.log(x);
          if((x%2)==0){
            template += `
            <div class="col-sm pt-5 pb-5">
                                <div class="card card-productos" style="width: 18rem;" data-aos="fade-up">
                                    <img class="card-img-top" src="img/Lentes/Lentes_${x}.png" alt="Card image cap">
                                    <div class="card-body card-body-1">
                                      <p class="card-text">     <span><img src="img/icono.png" alt="" height="50px"></span> +Visón Economia a la vista.</p>
                                    </div>
                                  </div>
                            </div>

         `;
          }else if(((x%3)==0)){
            template += `
            <div class="col-sm pt-5 pb-5">
                                <div class="card card-productos" style="width: 18rem;" data-aos="fade-up">
                                    <img class="card-img-top" src="img/Lentes/Lentes_${x}.png" alt="Card image cap">
                                    <div class="card-body card-body-2">
                                      <p class="card-text"><span><img src="img/icono.png" alt="" height="50px"></span> +Visón Economia a la vista.</p>
                                    </div>
                                  </div>
                            </div>

         `;
          }else{
            template += `
            <div class="col-sm pt-5 pb-5" >
                                <div class="card card-productos" style="width: 18rem;" data-aos="fade-up">
                                    <img class="card-img-top" src="img/Lentes/Lentes_${x}.png" alt="Card image cap">
                                    <div class="card-body card-body-3">
                                      <p class="card-text text-white">     <span><img src="img/icono.png" alt="" height="50px"></span> +Visón Economia a la vista.</p>
                                    </div>
                                  </div>
                            </div>
         `;
          }

        }
        $("#cards").html(template);
      },
      error: function () {
        alert("There was some error performing the AJAX call!");
      },
    });
  }
  

  var año = new Date().getFullYear();
  $('#año').html(año);
  $("#Catalogo").carousel({
    pause: true,
    interval: false,
  });

  //lentes 
  $('#inicio').hide();

  setTimeout(function(){ 
    $('#Carga').hide() ; 
  cargar_lentes();
   $('#inicio').show() ;  
  }, 5000);

  $('#inicio').show();


  AOS.init({
    delay: 500, // values from 0 to 3000, with step 50ms
  });

  $(".btn_pages").mousedown(function () {
    var sonido = new Audio();
    sonido.src = "next-pages.mp3";
    sonido.play();
  });
$('#enviar').on('click',function(){
  var Nombre_completo = "";
  Nombre_completo = document.getElementById('first_name').value + " " + document.getElementById('last_name').value;
  var miUrl = "https://wa.me/50237604627?text=" + "Nombre:%20" + Nombre_completo + "%0A" + "Servicio:%20" + document.getElementById('service').value + "%0A" +"Fecha:%20" + document.getElementById('date').value +  "%0A" + "Hora:%20" + document.getElementById('time').value + "%0A" + "Contacto:%20" + document.getElementById('telefono').value;
  window.open(miUrl);
  $('#Modal_reservaciones').modal("hide");
});
});
$(window).scroll(function () {
  if ($("#menu").offset().top > 56) {
    $("#menu").addClass("color_nav_scroll");
  } else {
    $("#menu").removeClass("color_nav_scroll");
  }
});
