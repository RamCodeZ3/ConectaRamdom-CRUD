import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ListUsers(){
    const [users, setUsers] = useState([])
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null)
    const navigate = useNavigate()

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
        <div className="flex flex-col gap-2 border-1 border-white rounded-lg p-4 w-[50%] h-[500px] overflow-y-scroll overflow-hidden ">
            {users.map(user =>(
                <div className={`flex gap-4 items-center w-full border-1 rounded-lg py-2 px-2 ${user.sex == "M" ? 'bg-[#287eff1c] border-[#0051FF]' : 'bg-[#ff3ba718] border-[#FF1194]'}` } 
                onClick={()=>navigate(`/user/${user.id}`)}>
                    <img 
                     src={user.url_img}
                     className="w-[15%] h-auto rounded-lg "
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