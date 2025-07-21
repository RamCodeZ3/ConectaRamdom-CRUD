import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function GetUserAll(){
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
         <div className="grid grid-cols-12 grid-rows-10 gap-2 rounded-lg max-w-[1200px] mx-auto min-h-[500px]">
            {users.map(user =>(
                <div className={`flex items-center justify-center border-1 rounded-lg px-1 py-2 cursor-pointer transition-all max-h-[100px] w-auto duration-300 hover:scale-105
                    ${user.sex == "M" ? 'bg-[#287eff1c] border-[#0051FF] hover:bg-[#287eff50] ' : 'bg-[#ff3ba718] border-[#FF1194] hover:bg-[#ff3ba749]'}` } 
                onClick={()=>navigate(`/user/${user.id}`)}>
                    <img 
                     src={user.url_img}
                     className="w-[90%] h-auto rounded-lg "
                     alt="" />
                </div>
            ))}
        </div>
        </>
    )
}

export default GetUserAll;