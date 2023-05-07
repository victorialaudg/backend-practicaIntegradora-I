import {Router} from 'express'
import productModel from '../models/ecommerce.model.js'
const router = Router()

router.get('/', async (req,res)=>{
    //res.send('Listando productos...')
    const products = await productModel.find()
    console.log(products)
    res.render('list', {products})
})

router.get('/:name', (req, res)=>{
    const name = req.params.name
    //res.send(`Listando producto ${name}`)
    res.render('one', {name})
})

router.post('/', (req, res) => {
    res.send('Creando producto')
})

router.delete('/:name', (req, res) => {
    const name = req.params.name
    res.send(`Borrando producto ${name}`)
})

export default router