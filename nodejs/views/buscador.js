$(document).ready(function(){
    // alert('entro2');
    
    // var dloc = document.getElementById('localidad').value;
    // var dneg = document.getElementById('negocio').value;
    // document.getElementById('datosmostrar').innerHTML = '';
    
    // if(negocio == ''){
    //     alert('Favor de llenar el campo de negocio.');
    //     document.getElementById('dato_fichas').innerHTML = '<h1>SIN VALERES ENCONTRADOS</h1>';
    //     exit;
    // }
    // if(clv_estado != '' && clv_municipio != '' && negocio != ''){
    //     $.ajax({
    //         dataType: "json",
    //         url: "https://gaia.inegi.org.mx/wscatgeo/localidades/"+clv_estado+clv_municipio,
    //     })
    //     .done(function(r_datos){ 
    //         // console.log(r_datos);
    //         r_datos['datos'].forEach(element => 
    //             $.ajax({
    //                 dataType: "json",
    //                 url: "https://www.inegi.org.mx/app/api/denue/v1/consulta/Buscar/"+negocio+"/"+element['latitud']+","+element['longitud']+"/250/99fb09ed-8208-45b7-0994-ddf700be7099",
    //             })
    //             .done(function(r_datos2){ 
    //                 console.log(r_datos2);
    //                 if(r_datos2[0]['Nombre'] != ''){
    //                     r_datos2.forEach(element2 =>  fichas = fichas +'<div class="alert alert-primary row ms-3 me-3" role="alert"><div class="col-md-6"><b>NOMBRE:</b>'+element2['Nombre']+'</div><div class="col-md-6"><b>RAZON SOCIAL:</b>'+element2['Razon_social']+'</div><div class="col-md-12"><b>ACTIVIDAD:</b>'+element2['Clase_actividad']+'</div><div class="col-md-12"><b class="w-100 text-center"><p>DIRECCIÓN:</p></b></div><div class="col-md-4"><b>CALLE:</b>'+element2['Calle']+' '+element2['Num_Exterior']+' '+element2['Num_Interior']+'</div><div class="col-md-4"><b>COLONIA:</b>'+element2['Colonia']+' </div><div class="col-md-4"><b>CP:</b>'+element2['CP']+'</div><div class="col-md-12"><b>UIBCACION:</b>'+element2['Ubicacion']+'</div><div class="col-md-6"><b>TELEFONO:</b>'+element2['Telefono']+'</div><div class="col-md-6"><b>CORREO:</b>'+element2['Correo_e']+'</div></div>');
    //                 }
    //                 document.getElementById('dato_fichas').innerHTML = document.getElementById('dato_fichas').innerHTML + fichas;
    //             }) 
    //             // .fail(function(){ console.log('no2'); }) 
    //         );
    //     }) 
    //     .fail(function(){ console.log('no'); }) 
    //     .always(function(){ console.log('completado');});
    // }
    // if(document.getElementById('dato_fichas').innerHTML == ''){
    //     // document.getElementById('dato_fichas').innerHTML = '<h1>SIN VALERES ENCONTRADOS</h1>';
    // }
});