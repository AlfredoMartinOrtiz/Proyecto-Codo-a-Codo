// Valida el formulario contacto

function validarEnviar() {
                        if (document.formContacto.nombre.value.length <= 2) {
                            alert("Tiene que escribir su nombre")
                            document.formContacto.nombre.focus()
                            return 0;
                        }
                        if (document.formContacto.apellido.value.length <= 2) {
                            alert("Tiene que escribir su apellido")
                            document.formContacto.apellido.focus()
                            return 0;
                        } 
                        if (document.formContacto.email.value.length <= 2) {
                            alert("Debe dejarnos su email para enviar la respuesta")
                            document.formContacto.email.focus()
                            return 0;
                        }
                        if (document.formContacto.interes.selectedIndex == 0) {
                            alert("Debe seleccionar el motivo de su contacto")
                            document.formContacto.interes.focus()
                            return 0;
                        }
                        //Finalmente, si llegó hasta aqui, se envia el form.
                        alert("Muchas gracias por enviar el formulario");
                        document.formContacto.submit();
                    }
