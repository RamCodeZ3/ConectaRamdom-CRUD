const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

app.use(express.json())

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY 
)

app.get('/', (req, res) =>{
    res.send("Saludo usuario")
})

app.get('/users', async(req, res) =>{
    const {data, error} = await supabase
     .from("users")
     .select("*");
    
     if (error) return res.status(500).json({error: error.message});
     res.json(data)
})

app.listen(port, () =>{
    console.log("Server in port 3000")
})