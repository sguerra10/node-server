const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class ServicesMiddlewares {
    handelPost = ((req,res,next)=>{
        if (req.method == 'POST' && Object.keys(req.body).length === 0 )  
            return res.status(400).send('error Solicitud POST con el cuerpo vacio')
        if(req.method == 'POST' &&  !req.body.title && !req.body.description)
            return res.status(400).send('error información no valida o atributos faltantes para crear las tareas')
        next();
    })
    handelPutOrPath = ((req,res,next)=>{
        if (req.method == 'PUT' || req.method == 'PATCH' && Object.keys(req.body).length === 0 )  
            return res.status(400).send('error Solicitud PUT con el cuerpo vacio')
        if(req.method == 'PUT' || req.method == 'PATCH' &&  !req.body.title && !req.body.description)
            return res.status(400).send('error información no valida o atributos faltantes para modificar las tareas')
        next();
    })
    handelRequest = ((req,res,next)=>{
        if(req.method != 'PATCH' && req.method != 'PUT' && req.method != 'POST' && req.method != 'DELETE' && req.method != 'GET' )
            return res.status(400).send('Error al recibir la solicitud metodo invalido')
        next();
    })
    handelSendParams = ((req,res,next)=>{
        if (req.query.params === '') {
            return res.status(400).send('Error al recibir parametros invalidos')
        }
        next();
    })
    handelLoguinAuth = ((req,res,next)=>{
        const token = req.headers.authorization
        if(!token){
            return res.status(401).send('acceso denegado')
        }
        jwt.sign(token,process.env.SECRET_KEY,(error,decoded)=>{
            if (error) {
                return res.status(401).json({ error: "Invalid token" });
              }
              console.log( decoded.tipo)
              req.tipo = decoded.tipo;      
        })
        next();
    })
}

module.exports = ServicesMiddlewares;