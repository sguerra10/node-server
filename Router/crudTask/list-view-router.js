const express = require('express');
const router = express.Router();
const  ProductServices = require('../../Services/services');
const services = new ProductServices()


router.get('/', async (req,res)  =>{
    const data = await services.find();
    res.json(data)
})
router.get('/completed', async (req,res)  =>{
    const data = await services.findCompleted();
    res.json(data)
})

router.get('/incompleted', async (req,res)  =>{
    const data = await services.findIncomplete();
    res.json(data)
})

router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    const data = await services.findOne(id);
    if (data) {
        res.status(201).json({
            message: "Datos encontrados",
            data: data
        })
    } else {
        res.status(400).json({
            message: "No se pudo encontrar la tarea"
        })
    }
})

module.exports = router;