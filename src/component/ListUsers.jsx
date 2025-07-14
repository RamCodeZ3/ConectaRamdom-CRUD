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
        <div className="flex flex-col border-1 border-white rounded-lg p-4 w-[60%] h-[500px] overflow-y-scroll overflow-hidden ">
            {users.map(user =>(
                <div className="flex gap-4 items-center w-full border-b-1 py-2">
                    <img 
                     src={user.url_img}
                     className="w-[10%] h-auto rounded-lg "
                     alt="" />

                    <div className="flex flex-col">
                         <span className="text-lg font-semibold">{user.name} {user.lastname}</span>
                        <div className="flex gap-2">
                         <span className="font-semibold">Pais :</span>
                         <span>{user.location}</span>
                        </div>
                        <div className="flex gap-2">
                         <span className="font-semibold">Edad: </span>
                         <span>{user.age}</span>
                        </div>
                        <div className="flex gap-2">
                         <span className="font-semibold">Sexo: </span>
                         <span>{user.sex}</span>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
        </>
    )
}

export default ListUsers;