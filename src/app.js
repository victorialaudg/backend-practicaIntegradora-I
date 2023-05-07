import express from 'express'
import handlebars from 'express-handlebars'
import ecommerceRouter from './routes/ecommerce.router.js'
import cartsRouter from './routes/carts.router.js'
import mongoose from 'mongoose'


const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

//start config. de carpeta de archivos estáticos
app.use(express.static('./src/public'))
//end config. archivos estáticos

app.get('/', (req, res) => res.send('Server OK!'))
app.use('/ecommerce', ecommerceRouter)
app.use('/carts', cartsRouter)

mongoose.set('strictQuery', false)

try{
    await mongoose.connect('link en 3:18')
    app.listen(8080, ()=> console.log('Server Up'))
}catch(error){
    console.log('No se puede conectar con la BD')
}
//3:29
