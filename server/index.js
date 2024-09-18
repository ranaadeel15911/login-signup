import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import routes from './routes/form.js'

const app = express()
const port = 8000
connectDB()
app.use(cors())
app.use(express.json())

app.get('/',(req,resp)=>{
resp.send('Api is running')
})
app.use('/api/v1',routes)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})



