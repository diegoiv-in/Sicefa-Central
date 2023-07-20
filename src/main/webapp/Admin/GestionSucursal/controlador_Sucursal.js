        let indexProductoSeleccionado; // es el índice del arreglo
        let obj = []; // arreglo que se llenará de objetos JSON
        
        var text = '{"sucursales":[ ' +
          '{ "nomSuc" :"Sicefa Galerias", "nomTit"  : "Armando ", "rfc"  : "FC29D837", "domicilio"  : "calle orquidea #108", "colonia"  : "Santa rosa ","ciudad"  : "Leon", "codigoPostal"  : "37680", "telefono"  : "4772902221","estado"  : "Guanajuato","longitud"  : "-12330","latitud"  : "-34567","estatus" : "Activo"},' +
          '{ "nomSuc" :"Sicefa Altacia", "nomTit"  : "Jimena ", "rfc"  : "HI35837", "domicilio"  : "Av orquidea #108", "colonia"  : "Santa rosa ","ciudad"  : "Leon", "codigoPostal"  : "37680", "telefono"  : "4772902221","estado"  : "Guanajuato","longitud"  : "-12330","latitud"  : "-34567","estatus" : "Activo"},' +
          '{ "nomSuc" :"Sicefa Norte", "nomTit"  : "Jonathan ", "rfc"  : "JML4323", "domicilio"  : "Independencia #1142", "colonia"  : "Santa Miguel ","ciudad"  : "Leon", "codigoPostal"  : "37390", "telefono"  : "4771170214","estado"  : "Guanajuato","longitud"  : "-1456","latitud"  : "-5431","estatus" : "Activo"},' +
          '{ "nomSuc" :"Sicefa Sur", "nomTit"  : "Pedro ", "rfc"  : "PED3837", "domicilio"  : "Miunich #221", "colonia"  : "El faro","ciudad"  : "Leon", "codigoPostal"  : "37490", "telefono"  : "4771145213","estado"  : "Michoacán","longitud"  : "-2375","latitud"  : "-19381","estatus" : "Activo"},' +
          '{ "nomSuc" :"Sicefa Centro Max", "nomTit"  : "Rafael ", "rfc"  : "KD76KE07", "domicilio"  : "calle alamos #302", "colonia"  : "Los lopez ","ciudad"  : "Acapulco", "codigoPostal"  : "38690", "telefono"  : "4772956985","estado"  : "Guerrero","longitud"  : "-36330","latitud"  : "-37567","estatus" : "Activo"}] }';
        
      
        
        obj = JSON.parse(text);
        console.log(obj);
        actualizaTabla();
        
        //Primera Funcion
        
        function actualizaTabla() {
            let cuerpo = "";
            obj.sucursales.forEach(function (nuevoProd) {
                let registro =
                '<tr onclick="selectProducto(' + obj.sucursales.indexOf(nuevoProd) + ');">' +
                '<td>' + obj.sucursales.indexOf(nuevoProd)  + '</td>' +
        
                '<td>' + nuevoProd.nomSuc + '</td>' +
                '<td>' + nuevoProd.nomTit + '</td>' +
                '<td>' + nuevoProd.rfc + '</td>' +
                '<td>' + nuevoProd.domicilio + '</td>' +
                '<td>' + nuevoProd.colonia + '</td>' +
                '<td>' + nuevoProd.ciudad + '</td>' +
                '<td>' + nuevoProd.codigoPostal + '</td>' +
                '<td>' + nuevoProd.telefono + '</td>' +
                '<td>' + nuevoProd.estado + '</td>' +
                '<td>' + nuevoProd.longitud + '</td>' +
                '<td>' + nuevoProd.latitud + '</td>' +
                '<td>' + nuevoProd.estatus + '</td></tr>';
        
                cuerpo += registro;
            });
            document.getElementById("tblProductos").innerHTML = cuerpo;
        }
        
         // Segunda Funcion
        
        function selectProducto(index) {
            document.getElementById("txtnomSuc").value = obj.sucursales[index].nomSuc;
            document.getElementById("txtnomTit").value = obj.sucursales[index].nomTit;
            document.getElementById("txtRfc").value = obj.sucursales[index].rfc;
            document.getElementById("txtdomicilio").value = obj.sucursales[index].domicilio;   
            document.getElementById("txtcolonia").value = obj.sucursales[index].colonia;
            document.getElementById("txtciudad").value = obj.sucursales[index].ciudad;
            document.getElementById("txtcodigoPostal").value = obj.sucursales[index].codigoPostal;
            document.getElementById("txttelefono").value = obj.sucursales[index].telefono;
            document.getElementById("txtestado").value = obj.sucursales[index].estado;
            document.getElementById("txtlongitud").value = obj.sucursales[index].longitud;
            document.getElementById("txtlatitud").value = obj.sucursales[index].latitud;
        
        
            document.getElementById("btnModificar").classList.remove("disabled");
            document.getElementById("btnEliminar").classList.remove("disabled");
            document.getElementById("btnAgregar").classList.add("disabled");
            indexProductoSeleccionado = index;
        
        }
        
        
         //Tercera Funcion
        
        
        function validarCampos() {
           
         const nameSuc=document.getElementById("txtnomSuc").value;
         const nameTit=  document.getElementById("txtnomTit").value;
         const address  = document.getElementById("txtdomicilio").value; 
         const col= document.getElementById("txtcolonia").value;
         const city =document.getElementById("txtciudad").value;
         const  state= document.getElementById("txtestado").value; 
         const long=document.getElementById("txtlongitud").value;
         const lat =document.getElementById("txtlatitud").value;
         const RFC = document.getElementById("txtRfc").value;
         const cP=document.getElementById("txtcodigoPostal").value;
          const tel=document.getElementById("txttelefono").value;
        
           if (nameSuc == '' || nameTit == '' || address == ''|| col == '' || city == ''||state == '' ||cP == ''||tel == '' ||long == ''||lat == ''||RFC == '' ) {
              alertCampos();
              return false; 
        
            } else if (isNaN(parseFloat(cP)) || isNaN(parseFloat(tel)) || isNaN(parseFloat(long)) || isNaN(parseFloat(lat))  ) {
                alertNumber();
               return ; 
             }
           
             return true; 
            
        }
          
        //Cuarta Funcion
        
        function agregarProducto() {
            if (!validarCampos()) {
                return; 
              }
            let nomSuc, nomTit, rfc,domicilio,colonia,ciudad,codigoPostal,telefono,estado,longitud,latitud;
          
            nomSuc = document.getElementById("txtnomSuc").value;
            nomTit = document.getElementById("txtnomTit").value;
            rfc = document.getElementById("txtRfc").value;
             domicilio=document.getElementById("txtdomicilio").value;   
            colonia=document.getElementById("txtcolonia").value;
            ciudad=document.getElementById("txtciudad").value;
            codigoPostal=document.getElementById("txtcodigoPostal").value;
            telefono=document.getElementById("txttelefono").value;
            estado=document.getElementById("txtestado").value;
            longitud=document.getElementById("txtlongitud").value;
            latitud=document.getElementById("txtlatitud").value;
        
          
            let newProd = {};
              newProd.nomSuc= nomSuc,
              newProd.nomTit= nomTit,
              newProd.rfc= rfc,
              newProd.domicilio= domicilio,
              newProd.colonia= colonia,
              newProd.ciudad=ciudad,
              newProd.codigoPostal= codigoPostal,
              newProd.telefono= telefono,
              newProd.estado= estado,
              newProd.longitud= longitud,
              newProd.latitud= latitud,
              newProd.estatus="Activo";
              obj.sucursales.push(newProd);
                
              alertGoodJobs();
              limpiar();
              actualizaTabla();
          }
        //Tercera Funcion
          function limpiar(){
            document.getElementById("txtnomSuc").value = "";
            document.getElementById("txtnomTit").value = "";
            document.getElementById("txtRfc").value = "";
            document.getElementById("txtdomicilio").value = "";   
            document.getElementById("txtcolonia").value = "";
            document.getElementById("txtciudad").value = "";
            document.getElementById("txtcodigoPostal").value = "";
            document.getElementById("txttelefono").value = "";
            document.getElementById("txtestado").value = "";
            document.getElementById("txtlongitud").value = "";
            document.getElementById("txtlatitud").value = "";
        
        
        
            document.getElementById("btnModificar").classList.add("disabled");
            document.getElementById("btnEliminar").classList.add("disabled");
            document.getElementById("btnAgregar").classList.remove("disabled");
        
                indexProductoSeleccionado=0;
        }
        
        function modificarRegistro() {
            let nomSuc, nomTit, rfc,domicilio,colonia,ciudad,codigoPostal,telefono,estado,longitud,latitud;
          
            nomSuc = document.getElementById("txtnomSuc").value;
            nomTit = document.getElementById("txtnomTit").value;
            rfc = document.getElementById("txtRfc").value;
             domicilio=document.getElementById("txtdomicilio").value;   
            colonia=document.getElementById("txtcolonia").value;
            ciudad=document.getElementById("txtciudad").value;
            codigoPostal=document.getElementById("txtcodigoPostal").value;
            telefono=document.getElementById("txttelefono").value;
            estado=document.getElementById("txtestado").value;
            longitud=document.getElementById("txtlongitud").value;
            latitud=document.getElementById("txtlatitud").value;
        
           let newProd = {};
            newProd.nomSuc= nomSuc,
            newProd.nomTit= nomTit,
            newProd.rfc= rfc,
            newProd.domicilio= domicilio,
            newProd.colonia= colonia,
            newProd.ciudad=ciudad,
            newProd.codigoPostal= codigoPostal,
            newProd.telefono= telefono,
            newProd.estado= estado,
            newProd.longitud= longitud,
            newProd.latitud= latitud,
            newProd.estatus="Activo";
           obj.sucursales[indexProductoSeleccionado] = newProd;
           
        }
        
        function modificaSucursal() {
            if (!validarCampos()) {
                return; 
              }
            swal({
              title: "¿Quieres modificar la sucursal seleccionada?",
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
        
        
        
        
        
                
        function eliminarSucursal() {
                   
                    swal({
                      title: "¿Quieres eliminar la sucursal seleccionada?", 
                      icon: "warning", 
                      buttons: true, 
                      dangerMode: true, 
                    })
                    .then((willDelete) => {
                      
                      if (willDelete) {
                        obj.sucursales[indexProductoSeleccionado].estatus ="Inactivo";
                        limpiar();
                        actualizaTabla();
        
                   swal("Eliminada con éxito!", {
                          icon: "success", 
                        });
                      } else {
                        
                      }
                    });
                }


                function searchCliente() {
                    // Obtener el valor del campo de búsqueda con id "txtBusquedaCliente"
                    let valor= document.getElementById("txtBusquedaCliente").value;
                
                    // Convertir el valor obtenido a minúsculas para hacer una búsqueda insensible a mayúsculas/minúsculas
                    let filtroMinuscula = valor.toLowerCase();
                
                    // Filtrar los elementos del arreglo "obj.medicinas" que coincidan con el filtro
                    let result = obj.sucursales.filter(element =>



                        element.nomSuc.toLowerCase().includes(filtroMinuscula) ||
                        element.nomTit.toLowerCase().includes(filtroMinuscula) ||
                        element.rfc.toString().includes(filtroMinuscula) ||
                        element.domicilio.toLowerCase().includes(filtroMinuscula) ||
                        element.colonia.toLowerCase().includes(filtroMinuscula) ||
                        element.ciudad.toString().includes(filtroMinuscula) ||
                        element.codigoPostal.toString().includes(filtroMinuscula) ||
                        element.telefono.toLowerCase().includes(filtroMinuscula) ||
                        element.estado.toLowerCase().includes(filtroMinuscula) ||
                        element.longitud.toString().includes(filtroMinuscula) ||
                        element.latitud.toString().includes(filtroMinuscula) ||

                        element.estatus.toLowerCase().includes(filtroMinuscula)


                    );
                
                    // Crear una cadena vacía para almacenar el contenido de la tabla resultante
                    let cuerpo = "";
                
                    // Iterar sobre los resultados del filtro y generar las filas de la tabla con los datos correspondientes
                    result.forEach(function ( nuevoProd) {
                        // Crear una fila de la tabla con los datos del elemento
                        let registro = 
                        '<tr onclick="selectProducto(' + obj.sucursales.indexOf( nuevoProd) + ');">' +
                         '<td>' + obj.sucursales.indexOf( nuevoProd) + 
                       
                        '<td>' + nuevoProd.nomSuc + '</td>' +
                        '<td>' + nuevoProd.nomTit + '</td>' +
                        '<td>' + nuevoProd.rfc + '</td>' +
                        '<td>' + nuevoProd.domicilio + '</td>' +
                        '<td>' + nuevoProd.colonia + '</td>' +
                        '<td>' + nuevoProd.ciudad + '</td>' +
                        '<td>' + nuevoProd.codigoPostal + '</td>' +
                        '<td>' + nuevoProd.telefono + '</td>' +
                        '<td>' + nuevoProd.estado + '</td>' +
                        '<td>' + nuevoProd.longitud + '</td>' +
                        '<td>' + nuevoProd.latitud + '</td>' +
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
                  text: "Sucursal agregada correctamente",
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
            