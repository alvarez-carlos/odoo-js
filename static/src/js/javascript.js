"use strict";

/*
necesitamos que odo compile las funciones javascript que vamosa escribir, primero para acceder a toda la dinamica que tienen los precompiladores de odoo que vamos a necesitar como el ajax, los controles.
pero que estos compiladores compilen el js y pese lo minimo posible comprimido en un solo archivo necesimos utilizar el objeto odoo.define
 */


/*
web.dom_ready ( Podemos utilizar varias opciones como jquery , document ready , pero utilizaremos la funcion que ya trae el propio sistema de odoo, la cual es web.dom_ready) . Esto lo que hara es ejecutar todo el codigo que venga despues una vez el dom este cargado.

web.ajax (es fundamental ya que nos va a permitir hacer la conexion con controllers de odoo y luego con la db sin que se nos rompa nada)


require.core (este es tambien utilizado para otro tipo avanzado de funciones.)

 */

/*
COMUNICACION ENTRE EL JS DE ODOO Y EL DB DE ODOO


 */
odoo.define("odoo.js", function(require){
    require('web.dom_ready')
    var ajax = require('web.ajax')

    var button = $('#boton');

    var _onButton = function (e){
        // console.log(e)

        /*
        jsonRpc(
            route,
            method,
            parametros que necesitemos mandar
        )
        
        */
        ajax.jsonRpc(
            '/get_products',
            'call',
            {}
        )
        .then(function (data){
            console.log(data)
        })
    }

    button.click(_onButton)

});
