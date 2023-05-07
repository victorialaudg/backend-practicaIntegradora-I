import {Router} from 'express'
import productModel from '../models/ecommerce.model.js'
const router = Router()

router.get('/', async (req,res)=>{
    //res.send('Listando productos...')
    const products = await productModel.find().lean().exec()
    console.log(products)
    res.render('list', {products})
})

//ruta ecomerce/create
router.get('/create', (req, res) =>{
    res.render('create',{})
})
//ruta ecomerce/update
router.get('/update/:name', async (req, res) =>{
    const name = req.params.name
    const products = await productModel.findOne({name}).lean().exec()
    res.render('update',{products})
})

router.get('/:name', async (req, res)=>{
    const name = req.params.name
    //res.send(`Listando producto ${name}`)
    const products = await productModel.findOne({name}).lean().exec()
    res.render('one', {products})
})

router.post('/', async (req, res) => {
    //res.send('Creando producto...')
    const productNew= req.body
    const productGenerated = new productModel(productNew)
    await productGenerated.save()
    res.redirect(`/ecommerce/${productGenerated.name}`)
})

router.put('/:name', async (req,res)=>{
    const name= req.params.name
    const productNewData = req.body
    try{
        await productModel.updateOne({name}, {...productNewData})
    }catch(err){
        res.send({err})
    }
})

router.delete('/:name', async (req, res) => {
    const name = req.params.name
    try{
        await productModel.deleteOne({name})
        res.send(`Producto ${name} borrado exitosamente!`)
    }catch (err){
        res.send({err})
    }
    
})

export default router