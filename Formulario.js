
var Formulario = document.getElementById('Formulario'),
    nombre= Formulario.nombre,
    correo= Formulario.correo,
    genero= Formulario.genero,
    terminos= Formulario.terminos,
    error= document.getElementById('error');

function validarName(e){
    if(nombre.value=='' || nombre.value ==null){
        error.style.display='block';
        error.innerHTML += '<li>Completa el nombre</li>';
        console.log('Porfavor agregue un nombre');
        e.preventDefault();
    }
}

function validarEmail(e){
    if(correo.value =='' || correo.value == null){
        error.style.display='block';
        error.innerHTML += '<li>Completa el email</li>';
        console.log('Porfavor agrega un correo');
        e.preventDefault();
    }
}

function validarGender(e){
    if(genero.value =='' || genero.value == null){
        error.style.display='block';
        error.innerHTML += '<li>Selecciona un genero</li>';
        console.log('Porfavor agrega un genero');
        e.preventDefault();
    }
}

function validarTerms(e){
    if(!terminos.checked){
        error.style.display='block';
        error.innerHTML += '<li>Acepto los terminos y condiciones</li>';
        console.log('Porfavor valida los terminos & condiciones');
        e.preventDefault();
    }
}
//valida los campos
function validarForm(e){
        error.style.display='none';
        error.innerHTML=null;
        validarName(e);
        validarEmail(e);
        validarGender(e);
        validarTerms(e);
    }

Formulario.addEventListener('submit', validarForm);
