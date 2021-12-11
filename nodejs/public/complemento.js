$(document).ready(function(){
    alert('entro2');
    $.ajax({
        dataType: "json",
        url: "https://gaia.inegi.org.mx/wscatgeo/mgee/",
    })
    .done(function(r_datos){ 
        console.log(r_datos);
        document.getElementById('datos').innerHTML = r_datos;
    }) 
    .fail(function(){ console.log('no'); }) 
    .always(function(){ console.log('completado');});
});