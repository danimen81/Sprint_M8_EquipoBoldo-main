
const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {

    // Intenta obtener el token del encabezado 'Authorization'
    const bearerHeader = req.headers["authorization"];
   // console.log("Encabezado Authorization:", bearerHeader);
    
    let token;
   // console.log(token)
    if (bearerHeader && bearerHeader.startsWith('Bearer ')) {
        token = bearerHeader.split(' ')[1];
    }
  
    if (!token) {
        token = req.body.token || req.query.token || req.headers["x-access-token"];
    }
    if (!token) {

        return res.status(403).send({code: 403, message: "Usted no tiene los permisos necesarios para acceder a la ruta"})
    } else {
        try {
            const datosDecodificados = jwt.verify(token, process.env.SECRET_PASSWORD);
            req.body.usuario = datosDecodificados;
            return next();
        } catch (error) {
            return res.status(401).send({code: 401, message: "Token no válido, se le ha negado el acceso"});
        }
    }

}

module.exports = verificarToken;