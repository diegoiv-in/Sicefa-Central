 let indexProductoSeleccionado;
 let obj = [];
 
 var text = '{ "productos": ['+
            '{"nomProd": "Karet", "nomGen": "Levotiroxina Sódica","formfarm": "Tabletas","undme": "microgramos","pres": "Caja","priind": "trastornos de la tiroides","contra": "Hipersensibilidad","concen": "tabletas","unenva": "25 mcg, 50 mcg, 75 mcg","precio": "349","foto": "descarga.jpeg","rutfoto": "documents/fotos","codebar": "564asd57as65454","estatus": "Activo"}]}';

    obj = JSON.parse(text);
          console.log(obj);
          actualizaTabla();

    // Actualiza la tabla con los datos del objeto JSON
    function actualizaTabla() {
        let cuerpo = "";
        obj.productos.forEach(function (nuevoProd) {
            let registro =
                '<tr onclick="selectProducto(' + obj.productos.indexOf(nuevoProd) + ');">' +
                '<td>' + obj.productos.indexOf(nuevoProd) + '</td>' +
                '<td>' + nuevoProd.nomProd + '</td>' +
                '<td>' + nuevoProd.nomGen + '</td>' +
                '<td>' + nuevoProd.formfarm + '</td>' +
                '<td>' + nuevoProd.undme + '</td>' +
                '<td>' + nuevoProd.pres + '</td>' +
                '<td>' + nuevoProd.priind + '</td>' +
                '<td>' + nuevoProd.contra + '</td>' +
                '<td>' + nuevoProd.concen + '</td>' +
                '<td>' + nuevoProd.unenva + '</td>' +
                '<td>' + nuevoProd.precio + '</td>' +
                '<td> <img src="img/' + nuevoProd.foto + ' " width="100" > </td>' +
                '<td>' + nuevoProd.rutfoto + '</td>' +
                '<td>' + nuevoProd.codebar + '</td>' +
                '<td>' + nuevoProd.estatus + '</td></tr>';

            cuerpo += registro;
        });
        document.getElementById("tblProductos").innerHTML = cuerpo;
    }

    // Selecciona un producto y actualiza los campos del formulario
    function selectProducto(index) {
        document.getElementById("txtnomProd").value = obj.productos[index].nomProd;
        document.getElementById("txtnomGen").value = obj.productos[index].nomGen;
        document.getElementById("txtformfarm").value = obj.productos[index].formfarm;
        document.getElementById("txtundme").value = obj.productos[index].undme;
        document.getElementById("txtpres").value = obj.productos[index].pres;
        document.getElementById("txtpriind").value = obj.productos[index].priind;
        document.getElementById("txtcontra").value = obj.productos[index].contra;
        document.getElementById("txtconcen").value = obj.productos[index].concen;
        document.getElementById("txtunenva").value = obj.productos[index].unenva;
        document.getElementById("txtprecio").value = obj.productos[index].precio;
        document.getElementById("txtcodebar").value = obj.productos[index].codebar;

        let ruta = 'img/';
        document.getElementById("txtFoto").src = ruta + obj.productos[index].foto;

        document.getElementById("btnModificar").classList.remove("disabled");
        document.getElementById("btnEliminar").classList.remove("disabled");
        document.getElementById("btnAgregar").classList.add("disabled");
        indexProductoSeleccionado = index;
    }
    
    function validarCampos() {
           
       const nomPro = document.getElementById("txtnomProd").value;
        const nomGe = document.getElementById("txtnomGen").value;
        const formfar = document.getElementById("txtformfarm").value;
        const undm= document.getElementById("txtundme").value;
        const pre =  document.getElementById("txtpres").value;
        const priin= document.getElementById("txtpriind").value;
        const contr= document.getElementById("txtcontra").value;
        const conce= document.getElementById("txtconcen").value;
        const unenv= document.getElementById("txtunenva").value;
        const preci= document.getElementById("txtprecio").value;
        const codeba= document.getElementById("txtcodebar").value;
        const archiv = document.getElementById("archivo").files[0];
        
           if (nomPro == '' || nomGe == '' || formfar == ''|| undm == '' || pre == ''||priin == '' ||contr == ''||conce == '' ||unenv == ''||preci == ''||codeba == ''||archiv == '' ) {
              alertCampos();
              return false; 
        
            } else if (isNaN(parseFloat(preci))  ) {
                alertNumber();
               return ; 
             }
           
             return true; 
            
        }
    
    
    function agregarProducto2() {
        if (!validarCampos()) {
            return;
        }

        // Obtener los valores del formulario
        let nomProd, nomGen, formfarm, undme, pres, priind, contra, concen, unenva, precio, rutfoto, codebar;

        nomProd = document.getElementById("txtnomProd").value;
        nomGen = document.getElementById("txtnomGen").value;
        formfarm = document.getElementById("txtformfarm").value;
        undme = document.getElementById("txtundme").value;
        pres = document.getElementById("txtpres").value;
        priind = document.getElementById("txtpriind").value;
        contra = document.getElementById("txtcontra").value;
        concen = document.getElementById("txtconcen").value;
        unenva = document.getElementById("txtunenva").value;
        precio = document.getElementById("txtprecio").value;
        rutfoto = document.getElementById("archivo").value;
        codebar = document.getElementById("txtcodebar").value;
        
        
        let newProd = {};
            newProd.nomProd = nomProd,
            newProd.nomGen= nomGen,
            newProd.formfarm= formfarm,
            newProd.undme= undme,
            newProd.pres= pres,
            newProd.priind= priind,
            newProd.contra= contra,
            newProd.concen= concen,
            newProd.unenva= unenva,
            newProd.precio= precio,
            newProd.rutfoto= rutfoto,
            newProd.codebar= codebar,
            newProd.estatus= "Activo";
            obj.productos.push(newProd);
            alertGoodJobs();
              limpiar();
              actualizaTabla();
        };
        
       

    // Método limpiar
    function limpiar() {
        document.getElementById("txtnomProd").value = "";
        document.getElementById("txtnomGen").value = "";
        document.getElementById("txtformfarm").value = "";
        document.getElementById("txtundme").value = "";
        document.getElementById("txtpres").value = "";
        document.getElementById("txtpriind").value = "";
        document.getElementById("txtcontra").value = "";
        document.getElementById("txtconcen").value = "";
        document.getElementById("txtunenva").value = "";
        document.getElementById("txtprecio").value = "";
        document.getElementById("txtcodebar").value = "";

        document.getElementById("btnModificar").classList.add("disabled");
        document.getElementById("btnEliminar").classList.add("disabled");
        document.getElementById("btnAgregar").classList.remove("disabled");
        indexProductoSeleccionado = 0;
    }
    
    function modificarRegistro(){
    let nomProd, nomGen, formfarm, undme, pres, priind, contra, concen, unenva,precio, archivo,codebar;
    
        nomProd = document.getElementById("txtnomProd").value;
        nomGen = document.getElementById("txtnomGen").value;
         formfarm = document.getElementById("txtformfarm").value;
        undme = document.getElementById("txtundme").value;
        pres = document.getElementById("txtpres").value;
        priind = document.getElementById("txtpriind").value;
        contra = document.getElementById("txtcontra").value;
        concen = document.getElementById("txtconcen").value;
         unenva = document.getElementById("txtunenva").value;
         precio= document.getElementById("txtprecio").value;
         archivo= document.getElementById("archivo").value;
         codebar= document.getElementById("txtcodebar").value;
        
        let newProd = {};
        newProd.nomProd = nomProd,
        newProd.nomGen = nomGen,
        newProd.formfarm = formfarm,
        newProd.undme = undme,
        newProd.pres = pres,
        newProd.priind = priind,
        newProd.contra = contra,
        newProd.concen = concen,
        newProd.unenva = unenva,
        newProd.precio = precio,
        newProd.rutfoto = archivo,
        newProd.codebar = codebar, 
        newProd.estatus="Activo";
        obj.productos[indexProductoSeleccionado] = newProd;
    }

 function modificaProducto() {
            if (!validarCampos()) {
                return; 
              }
            swal({
              title: "¿Quieres modificar el Producto seleccionado?",
              text: "",
              icon: "warning",
              buttons: true,
              dangerMode: true,
              
            })
            .then((willDelete) => {
              if (willDelete) {
                
                modificarRegistro();
                actualizaTabla();
                limpiar();
                swal("¡Registro modificado con éxito!", {
                  icon: "success",
                });
              } else {
                swal("¡Tu registro no fue modificado!");
              }
            });
          }
          
          
          function eliminarProducto() {
                   
                    swal({
                      title: "¿Quieres eliminar el Producto seleccionado?", 
                      icon: "warning", 
                      buttons: true, 
                      dangerMode: true, 
                    })
                    .then((willDelete) => {
                      
                      if (willDelete) {
                        obj.productos[indexProductoSeleccionado].estatus ="Inactivo";
                        limpiar();
                        actualizaTabla();
        
                   swal("Eliminado con éxito!", {
                          icon: "success", 
                        });
                      } else {
                        
                      }
                    });
                }
                
                
                function searchProducto() {
                    // Obtener el valor del campo de búsqueda con id "txtBusquedaCliente"
                    let valor= document.getElementById("txtBusquedaProducto").value;
                
                    // Convertir el valor obtenido a minúsculas para hacer una búsqueda insensible a mayúsculas/minúsculas
                    let filtroMinuscula = valor.toLowerCase();
                
                    // Filtrar los elementos del arreglo "obj.medicinas" que coincidan con el filtro
                    let result = obj.productos.filter(element =>

                       

                        element.nomProd.toLowerCase().includes(filtroMinuscula) ||
                        element.nomGen.toLowerCase().includes(filtroMinuscula) ||
                        element.formfarm.toString().includes(filtroMinuscula) ||
                        element.undme.toLowerCase().includes(filtroMinuscula) ||
                        element.pres.toLowerCase().includes(filtroMinuscula) ||
                        element.priind.toString().includes(filtroMinuscula) ||
                        element.contra.toString().includes(filtroMinuscula) ||
                        element.concen.toLowerCase().includes(filtroMinuscula) ||
                        element.precio.toLowerCase().includes(filtroMinuscula) ||
                        element.rutfoto.toString().includes(filtroMinuscula) ||
                        element.codebar.toString().includes(filtroMinuscula) ||

                        element.estatus.toLowerCase().includes(filtroMinuscula)


                    );
                
                    // Crear una cadena vacía para almacenar el contenido de la tabla resultante
                    let cuerpo = "";
                
                    // Iterar sobre los resultados del filtro y generar las filas de la tabla con los datos correspondientes
                    result.forEach(function ( nuevoProd) {
                        // Crear una fila de la tabla con los datos del elemento
                        let registro = 
                        '<tr onclick="selectProducto(' + obj.productos.indexOf( nuevoProd) + ');">' +
                         '<td>' + obj.productos.indexOf( nuevoProd) + 
                          '<td>' + nuevoProd.nomProd + '</td>' +
                          '<td>' + nuevoProd.nomGen + '</td>' +
                          '<td>' + nuevoProd.formfarm + '</td>' +
                          '<td>' + nuevoProd.undme + '</td>' +
                          '<td>' + nuevoProd.pres + '</td>' +
                          '<td>' + nuevoProd.priind + '</td>' +
                          '<td>' + nuevoProd.contra + '</td>' +
                          '<td>' + nuevoProd.concen + '</td>' +
                          '<td>' + nuevoProd.unenva + '</td>' +
                          '<td>' + nuevoProd.precio + '</td>' +
                          '<td> <img src="img/' + nuevoProd.foto + ' " width="100" > </td>' +
                          '<td>' + nuevoProd.rutfoto + '</td>' +
                          '<td>' + nuevoProd.codebar + '</td>' +
                          '<td>' + nuevoProd.estatus + '</td></tr>';
                        
                                            
                        
                                // Agregar la fila a la cadena "cuerpo"
                                cuerpo += registro;
                            });
                
                    // Mostrar la cadena "cuerpo" en el cuerpo de la tabla con id "tblProductos"
                    document.getElementById("tblProductos").innerHTML = cuerpo;
                }

    function alertCampos() {
                swal({
                  title: "¡Advertencia!",
                  text: "Por favor, complete todos los campos.",
                  icon: "warning",
                  button: "¡Entendido!",
                });
              }
              function alertNumber() {
                swal({
                  title: "¡Advertencia!",
                  text: "Por favor, ingrese solo números en los campos solicitados..",
                  icon: "warning",
                  button: "¡Entendido!",
                });
              }
              function alertGoodJobs() {
                swal({
                  title: "¡Buen trabajo!",
                  text: "Producto agregado correctamente",
                  icon: "success",
                  button: "Aceptar",
                });
              }
    function mantenimiento() {
                swal({
                    icon: 'error',
                    icon: "warning",
                    text: 'Lo sentimos, este módulo está en mantenimiento!',
                    button: "Aceptar",
                });
            }
            