import express from 'express'
import handlebars from 'express-handlebars'
import ecommerceRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import mongoose from 'mongoose'

//const uri='mongodb+srv://coder:coder@backend39755.v9fwrug.mongodb.net/'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Config. del motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

//start config. de carpeta de archivos estáticos
app.use(express.static('./src/public'))
//end config. archivos estáticos

app.get('/', (req, res) => res.send('Server OK!'))
app.use('/products', ecommerceRouter)
app.use('/carts', cartsRouter)

mongoose.set('strictQuery', false)

try{
    await mongoose.connect('mongodb+srv://coder:coder@backend39755.v9fwrug.mongodb.net/integradora1')
    app.listen(8080, ()=> console.log('Server Up'))
}catch(error){
    console.log('No se puede conectar con la BD')
}

