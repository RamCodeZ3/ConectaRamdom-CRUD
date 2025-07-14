import { useState, useEffect } from "react";

function ListUsers(){
    const [users, setUsers] = useState([])
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then(response=>{
            if(!response.ok){
                throw new Error("Hubo un error al momento de obtener los datos")
            }
            return response.json(); // ¡IMPORTANTE
        })
        .then(data=>{
            setUsers(data)
            setloading(false)
        })
        .catch(err => {
            setError(err.message)
            setloading(false)
        })
    },[])

    if (loading) return <span>Cargando usuarios</span>
    if (error) return <span>Error: {error}</span>
    
    return(
        <>
        <div className="border-1 border-white rounded-lg p-4">
            {users.map(user =>(
                <div>
                    {user.name}
                    {user.age}
                </div>
            ))}
        </div>
        </>
    )
}

export default ListUsers;