const { createClient } = require('@supabase/supabase-js');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
require('dotenv').config();


// MIddlewares para ver las ultimas peticiones api
function dataAPI(req, res, next){
    const now = new Date()
    console.log(`Date:${now}: ${req.method}${req.url}`)
    next()
}

app.use(cors())
app.use(express.json())
app.use(dataAPI)

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY 
)

app.get('/', (req, res) =>{
    res.send("Saludo usuario")
})

// Endopoit para obtener todos los usuarios
app.get('/users', async(req, res) =>{
    const {data, error} = await supabase
     .from("users")
     .select("*");
    
     if (error) return res.status(500).json({error: error.message});
     res.json(data)
})

// Endopoit para obtener solo al usuario especificado
app.get('/user/:id', async(req, res) =>{
    const {data, error} = await supabase
     .from("users")
     .select("*")
     .eq('id',req.params.id)
     .single()
    
     if (error) return res.status(500).json({error: error.message});
     res.json(data)
})

// Endpoint para añadir un nuevo usuario a la lista
app.post('/create', async(req, res) =>{
    const {data, error} = await supabase
    const {name, lastname, age, email, location, sex, url_img} = req.body
    .from("users")
    .insert([{name, lastname, age, email, location, sex, url_img}]);
    
    if (error) return res.status(500).json({error: error.message});
     res.json(data)
})

// Endpoint para editar a los usuarios que ya estan en la lista
app.put('/update/:id', async(req, res) =>{
    const {data, error} = await supabase
    const {name, lastname, age, email, location, sex, url_img} = req.body
    .from("users")
    .update([{name, lastname, age, email, location, sex, url_img}])
    .eq("id", req.params.id)
    
    if (error) return res.status(500).json({error: error.message});
     res.json(data)
})

// Endpoint para eleminar al usuario especificado
app.delete('/delete/:id', async(req, res) =>{
    const {error} = await supabase
    .from("users")
    .delete()
    .eq("id", req.params.id)
    
    if (error) return res.status(500).json({error: error.message});
    res.send("se elimino el usuario correctamente")
})

app.listen(port, () =>{
    console.log("Server in port 3000")
})