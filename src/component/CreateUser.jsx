import { User } from 'lucide-react';

function CreateUser(){
    return(
        <>
       <div className="flex w-full h-auto justify">
         <div className="flex items-center w-1/2 p-0.5 rounded-lg bg-[#7c26cd38] border-[#7D26CD] border-1 px-4 py-2">
            <form action="" className="flex flex-col gap-2 h-auto w-full rounded-lg ">
            <div className="flex gap-2">
                <div className="flex flex-col flex-1">
                <span className="font-semibold">Nombre:</span>
                <input 
                type="text"
                placeholder="nombre del usuario"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
            </div>
            <div className="flex flex-col flex-1">
                <span className="font-semibold">Apellido:</span>
                <input 
                type="text"
                placeholder="apellido del usuario"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
            </div>
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col flex-1">
                <span className="font-semibold">Fecha de nacimiento:</span>
                <input 
                type="date"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
            </div>
            <div className="flex flex-col flex-1">
                <span className="font-semibold">Edad:</span>
                <input 
                type="number"
                min={0}
                placeholder=""
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
            </div>
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col flex-1">
                <span className="font-semibold">Email:</span>
                <input 
                type="text"
                placeholder="email del usuario"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
            </div>
            <div className="flex flex-col flex-1">
                <span className="font-semibold">Pais:</span>
                <input 
                type="text"
                placeholder="pais donde vive"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
                </div>
            </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Genero:</span>
                    <select name="" id="" className="bg-[#0d031d8a] rounded-md px-2 py-1">
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Imagen:</span>
                    <input 
                    type="text" 
                    placeholder="url"
                    className="bg-[#0d031d8a] rounded-md px-2 py-1"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Hobby:</span>
                    <textarea
                    placeholder="habla sobre ti"
                    className="bg-[#0d031d8a] rounded-md px-2 py-1 h-20"
                    />
                </div>
                <button type="submit" className=" flex gap-2 justify-center items-center bg-[linear-gradient(to_right,#0051FF,#FF1194)] rounded-lg py-2">
                    <User/>
                    <span className="font-semibold">Crear usuario</span>
                </button>
        </form>
         
         </div>
       </div>
        </>
    )
}

export default CreateUser;