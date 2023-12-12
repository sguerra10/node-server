const express = require('express');
const router = express.Router();
const ProductServices = require('../../Services/services');
const ServicesMiddlewares  = require('../../services/Middlewares')
const Middlewares = new ServicesMiddlewares();
const services = new ProductServices()

router.use(Middlewares.handelPost);
router.use(Middlewares.handelPutOrPath);

router.post('/', async (req,res)=>{ 
    try {
        const data = req.body
        const newTask = await services.create(data);
        if (newTask) {
            res.status(201).json({
                message: "Tarea creada exitosamente",
                tarea: data
            })
        } else {
            res.status(400).json({
                message: "no se pudo crear el producto"
            })
        }
    } catch (error) {
        res.json({
            message: error
        })
    }
   
})
router.patch('/',  async (req,res)=>{
    const data = req.body; 
    const updatedTask = await services.edit(data)
    if (updatedTask) {
        res.status(201).json({
            message: "tarea editada exitosamente",
            data : updatedTask
        })
    } else {
        res.status(404).json({
            message: "ups no se puedo editar la tarea",
            data : updatedTask
        })
    }
    
})
router.delete('/', async(req,res)=>{    
    try {
        const {id} = req.body;
        const dataDelete = await services.delete(id);
        if (dataDelete) {
            res.status(200).json({ message: 'Tarea eliminada correctamente'})
        } else {
            res.status(400).json({message: "no se pudo eliminar la tarea"})
        }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
})
 module.exports = router;