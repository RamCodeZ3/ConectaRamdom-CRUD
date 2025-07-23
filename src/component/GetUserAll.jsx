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
         <div className=" flex flex-col gap-5 w-full mx-auto h-[500px] overflow-y-auto p-2 py-6 bg-[#7c26cd0a] border-[#543CDC] border-b-1 border-t-1">
            <div className="flex w-full justify-center py-2 h-auto items-center">
                <span className="font-semibold text-4xl text-transparent bg-clip-text" style={{
           backgroundImage: 'linear-gradient(to right, #0051FF, #FF1194)'
         }}>Lista de usuarios</span>
            </div>
      <div className="grid grid-cols-12 gap-2">
        {users.map((user) => (
          <div
            key={user.id}
            className={`flex items-center justify-center border rounded-lg px-0.5 py-2 cursor-pointer transition-all max-h-[100px] w-auto duration-300 hover:scale-105
              ${
                user.sex == "M"
                  ? "bg-[#287eff1c] border-[#0051FF] hover:bg-[#287eff50]"
                  : "bg-[#ff3ba718] border-[#FF1194] hover:bg-[#ff3ba749]"
              }`}
            onClick={() => navigate(`/user/${user.id}`)}
          >
            <img
              src={user.url_img}
              className="w-[80%] h-auto rounded-lg"
              alt=""
            />
          </div>
        ))}
      </div>
      <img src="../public/CR.png" alt="" />
    </div>
        </>
    )
}

export default GetUserAll;