import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserInfo(){
    const [user, setUser] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3000/user/${id}`)
        .then(response=>{
            if(!response.ok){
                throw new Error("Hubo un error al momento de obtener los datos")
            }
            return response.json(); // ¡IMPORTANTE
        })
        .then(data=>{
            setUser(data)
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
            <main className="flex w-full min-h-dvh bg-[#1E1E1E] justify-center items-center text-white">
                <div
                    className={`flex flex-col gap-5 border-1 rounded-lg p-4 w-[45%] 
                        ${user.sex == "M" ? 'bg-[#287eff1c] border-[#0051FF]' : 'bg-[#ff3ba718] border-[#FF1194]'}`}
                >
                   <div className="flex gap-6 items-center">
                     <img src={user.url_img}
                     alt=""
                     className="size-30 rounded-lg" 
                     />
                     <span className="font-semibold text-2xl">Hola soy {user.name} {user.lastname}</span>
                   </div>
                   <hr />
                   <div>
                    <div className="flex gap-2">
                        <span className="font-semibold">Edad:</span>
                        <span>{user.age}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-semibold">Pais:</span>
                        <span>{user.location}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-semibold">Email:</span>
                        <span>{user.email}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-semibold">Fecha de nacimiento:</span>
                        <span>{user.birthdate}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-semibold">Sexo:</span>
                        <span>{user.sex}</span>
                    </div>
                    
                   </div>
                   <hr />
                   <p>{user.hobby}</p>
                </div>
            </main>
        </>       
    )
}

export default UserInfo;