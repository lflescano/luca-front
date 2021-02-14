class User
{
	id = null;
    email = null;
    clave = null;
    estado = null;
    habilitado = null;
    ultimo_login = null;
    creado = null;
    actualizado = null;

    confirmed = null;

    constructor(obj) {    
	    // IF AN OBJECT WAS PASSED THEN INITIALISE PROPERTIES FROM THAT OBJECT
    	for (var prop in obj) this[prop] = obj[prop];
  	}
}

export default User