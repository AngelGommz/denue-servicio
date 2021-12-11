function busquedas(){
    // alert('entro');
    $.ajax({
        dataType: "json",
        url: "https://gaia.inegi.org.mx/wscatgeo/mgee/",
    })
    .done(function(r_datos){ 
        console.log(r_datos);
        var selectf = '<label for="estado" class="form-label">Estado</label><select id="seleest" class="form-select" onchange="bmunicipio();">';
        selectf = selectf + '<option></option>';
        selectf = selectf + datosest(r_datos);
        selectf = selectf + '</select>';
        document.getElementById('id_est').innerHTML = selectf;
    }) 
    .fail(function(){ console.log('no'); }) 
    .always(function(){ console.log('completado');});
}

function datosest(datosbus){
    var cumulo = '';
    datosbus['datos'].forEach(element => cumulo = cumulo + '<option value="'+element['cve_agee']+'">'+element['nom_agee']+'</option>');
    return cumulo;
}

function bmunicipio(){
    var claest = document.getElementById('seleest').value;
    if(claest == ''){
        var selectf = '<label for="estados" class="form-label">Municipio</label><select id="selemun" class="form-select" disabled>';
        selectf = selectf + '</select>';
        document.getElementById('id_mun').innerHTML = selectf;
    }else{
        $.ajax({
            dataType: "json",
            url: "https://gaia.inegi.org.mx/wscatgeo/mgem/"+claest,
        })
        .done(function(r_datos){ 
            console.log(r_datos);
            var selectf = '<label for="estados" class="form-label">Municipio</label><select id="selemun" class="form-select">';
            selectf = selectf + '<option>TODOS</option>';
            selectf = selectf + datosestado(r_datos);
            selectf = selectf + '</select>';
            document.getElementById('id_mun').innerHTML = selectf;
        }) 
        .fail(function(){ console.log('no'); }) 
        .always(function(){ console.log('completado');});
    }
}

function datosestado(datosbus){
    var cumulo = '';
    datosbus['datos'].forEach(element => cumulo = cumulo + '<option value="'+element['cve_agem']+'">'+element['nom_agem']+'</option>');
    return cumulo;
}

function busca_datos(){
    document.getElementById('dato_fichas').innerHTML = '';
    var clv_estado = document.getElementById('seleest').value;
    var clv_municipio = document.getElementById('selemun').value;
    var negocio = document.getElementById('inpnego').value;
    var fichas = '';
    var fichas2 = '';
    if(negocio == ''){
        alert('Favor de llenar el campo de negocio.');
        document.getElementById('dato_fichas').innerHTML = '<h1>SIN VALERES ENCONTRADOS</h1>';
        exit;
    }
    if(clv_estado != '' && clv_municipio != '' && negocio != ''){
        $.ajax({
            dataType: "json",
            url: "https://gaia.inegi.org.mx/wscatgeo/localidades/"+clv_estado+clv_municipio,
        })
        .done(function(r_datos){ 
            // console.log(r_datos);
            r_datos['datos'].forEach(element => 
                $.ajax({
                    dataType: "json",
                    url: "https://www.inegi.org.mx/app/api/denue/v1/consulta/Buscar/"+negocio+"/"+element['latitud']+","+element['longitud']+"/250/99fb09ed-8208-45b7-0994-ddf700be7099",
                })
                .done(function(r_datos2){ 
                    console.log(r_datos2);
                    if(r_datos2[0]['Nombre'] != ''){
                        r_datos2.forEach(element2 =>  fichas = fichas +'<div class="alert alert-primary row ms-3 me-3" role="alert"><div class="col-md-6"><b>NOMBRE:</b>'+element2['Nombre']+'</div><div class="col-md-6"><b>RAZON SOCIAL:</b>'+element2['Razon_social']+'</div><div class="col-md-12"><b>ACTIVIDAD:</b>'+element2['Clase_actividad']+'</div><div class="col-md-12"><b class="w-100 text-center"><p>DIRECCIÓN:</p></b></div><div class="col-md-4"><b>CALLE:</b>'+element2['Calle']+' '+element2['Num_Exterior']+' '+element2['Num_Interior']+'</div><div class="col-md-4"><b>COLONIA:</b>'+element2['Colonia']+' </div><div class="col-md-4"><b>CP:</b>'+element2['CP']+'</div><div class="col-md-12"><b>UIBCACION:</b>'+element2['Ubicacion']+'</div><div class="col-md-6"><b>TELEFONO:</b>'+element2['Telefono']+'</div><div class="col-md-6"><b>CORREO:</b>'+element2['Correo_e']+'</div></div>');
                    }
                    document.getElementById('dato_fichas').innerHTML = document.getElementById('dato_fichas').innerHTML + fichas;
                }) 
                // .fail(function(){ console.log('no2'); }) 
            );
        }) 
        .fail(function(){ console.log('no'); }) 
        .always(function(){ console.log('completado');});
    }
    if(document.getElementById('dato_fichas').innerHTML == ''){
        // document.getElementById('dato_fichas').innerHTML = '<h1>SIN VALERES ENCONTRADOS</h1>';
    }
}
