    // Esta función valida todos los campos del form.
    // Si alguno no cumple con los requisitos, se aborta
    // con return. Caso contrario, al final se realiza
    // efectivamente el envio de los datos.

    function validarEnviar() {
        if (document.formAlta.nombre.value.length <= 2) {
            alert("Tiene que escribir su nombre")
            document.formAlta.nombre.focus()
            return 0;
        }
        if (document.formAlta.apellido.value.length <= 2) {
            alert("Tiene que escribir su apellido")
            document.formAlta.apellido.focus()
            return 0;
        }
        if (document.formAlta.dni.value <= 99999 || document.formAlta.dni.value >= 99999999) {
            alert("El Nro. del DNI debe ser mayor a 99.999 y menor que 99.999.999")
            document.formAlta.dni.focus()
            return 0;
        }
        //valido la edad. tiene que ser entero mayor que 18
        edad = document.formAlta.edad.value
        edad = validarEntero(edad)
        document.formAlta.edad.value = edad
        if (edad == "") {
            alert("Tiene que introducir un número entero en su edad.")
            document.formAlta.edad.focus()
            return 0;
        } else {
            if (edad < 12 || edad > 89) {
                alert("Debe ser mayor de 11 años y menor de 90")
                document.formAlta.edad.focus()
                return 0;
            }
        }
        if (document.formAlta.calledir.value.length <= 2) {
            alert("Tiene que escribir la calle de su domicilio")
            document.formAlta.calledir.focus()
            return 0;
        }
        if (document.formAlta.numerodir.value.length <= 0) {
            alert("Tiene que escribir el numero de su domicilio")
            document.formAlta.numerodir.focus()
            return 0;
        }
        if (document.formAlta.zona.selectedIndex == 0) {
            alert("Debe seleccionar una zona de residencia")
            document.formAlta.zona.focus()
            return 0;
        }
        if (document.formAlta.interes.selectedIndex == 0) {
            alert("Debe seleccionar lo que le interesa")
            document.formAlta.interes.focus()
            return 0;
        }
    
        //Finalmente, si llegó hasta aqui, se envia el form.
        alert("Muchas gracias por enviar el formulario");
        document.formAlta.submit();
    }
    
    function validarEntero(valor) {
        //intento convertir a entero.
        //si era un entero no le afecta, si no lo era lo intenta convertir
        valor = parseInt(valor)
        //Compruebo si es un valor numérico
        if (isNaN(valor)) {
            //entonces (no es numero) devuelvo el valor cadena vacia
            return ""
        } else {
            //En caso contrario (Si era un número) devuelvo el valor
            return valor
        }
    }
