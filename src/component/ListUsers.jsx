import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ListUsers(){
    const [users, setUsers] = useState([])
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        fetch("http://localhost:3000/usersrandom")
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
        <div className="grid grid-cols-4 gap-2  rounded-lg p-4 max-w-[1000px] mx-auto h-[500px] justify-items-center ">
            {users.map(user =>(
                <div className={`flex flex-col gap-1.5 items-center border-1 rounded-lg py-2 px-1 cursor-pointer transition-all duration-300 hover:scale-105
                    ${user.sex == "M" ? 'bg-[#287eff1c] border-[#0051FF] hover:bg-[#287eff50] ' : 'bg-[#ff3ba718] border-[#FF1194] hover:bg-[#ff3ba749]'}` } 
                onClick={()=>navigate(`/user/${user.id}`)}>
                    <img 
                     src={user.url_img}
                     className="w-[80%] h-auto rounded-lg "
                     alt="" />
                    <span className="font-semibold text-xs">{user.name} {user.lastname}</span>
                </div>
            ))}
        </div>
        </>
    )
}

export default ListUsers;