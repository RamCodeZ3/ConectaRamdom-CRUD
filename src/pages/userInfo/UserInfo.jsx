import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pencil, Trash2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import ButtonReturn from '../../common/ButtonReturn';
import PanelDelete from "./component/PanelDelete";
import Loading from "../../common/Loading";
import Error from "../../common/Error";

function UserInfo(){
    const [user, setUser] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate()
    const [isPanelActive, setIsPanelActive] = useState(false);

    const handleTogglePanel = () => {
    setIsPanelActive(!isPanelActive);
  };

  const handleCancel = () => {
    setIsPanelActive(false);
  };

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

    if(loading) return <Loading/>
    if(error) return <Error/>
    return(
        <>
            <main className="flex w-full justify-center items-center text-white">
                <ButtonReturn/>
                <PanelDelete activate={isPanelActive} onCancel={handleCancel} />
                <div
                    className={`flex flex-col gap-5 border-1 rounded-lg p-4 w-[90%] md:w-[45%] 
                        ${user.sex == "M" ? 'bg-[#287eff1c] border-[#0051FF]' : 'bg-[#ff3ba718] border-[#FF1194]'}`}
                >
                    
                   <div className="flex  justify-between">
                     <div className="flex gap-6 items-center">
                        <img src={user.url_img}
                     alt=""
                     className="size-30 rounded-lg" 
                     />
                     <div className="flex flex-col">
                        <span className="font-semibold text-2xl">Hola soy {user.name} {user.lastname}</span>
                        <div className="flex gap-1 text-sm text-neutral-400">
                            <span className="font-semibold">ID:</span>
                            <span>{user.id}</span>
                        </div>
                     </div>
                     </div>

                     <div className="flex gap-4 h-full">
                        <button className="cursor-pointer" onClick={() => navigate(`/editUser/${user.id}`)}>
                            <Pencil className="hover:text-blue-500 duration-300"/>
                       </button>

                        <button className="cursor-pointer" onClick={handleTogglePanel}>
                            <Trash2 className="hover:text-red-500 duration-300"/>
                        </button>
                     </div>

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