
function CreateUser(){
    return(
        <>
       <div className="w-full h-auto">
         <div className=" bg-[linear-gradient(to_right,#0051FF,#FF1194)] p-0.5 rounded-lg">
            <form action="" className="flex flex-col h-auto bg-[#261344] rounded-lg">
            <div className="flex gap-2">
                <div className="flex flex-col">
                <span>Nombre:</span>
                <input 
                type="text"
                placeholder="nombre del usuario"
                className=""
                />
            </div>
            <div className="flex flex-col">
                <span>Apellido:</span>
                <input 
                type="text"
                placeholder="apellido del usuario"
                className=""
                />
            </div>
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col">
                <span>Fecha de nacimiento:</span>
                <input 
                type="date"
                className=""
                />
            </div>
            <div className="flex flex-col">
                <span>Edad:</span>
                <input 
                type="number"
                min={0}
                placeholder=""
                className=""
                />
            </div>
            </div>
            <div className="flex">
                <div className="flex flex-col">
                <span>Email:</span>
                <input 
                type="text"
                placeholder="email del usuario"
                className=""
                />
            </div>
            <div className="flex flex-col">
                <span>Pais:</span>
                <input 
                type="text"
                placeholder="pais donde vive"
                className=""
                />
                </div>
            </div>
                <div className="flex flex-col">
                    <span>Genero:</span>
                    <select name="" id="">
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <span>Imagen:</span>
                    <input 
                    type="text" 
                    placeholder="url"
                    />
                </div>
                <div className="flex flex-col">
                    <span>Hobby:</span>
                    <textarea
                    placeholder="habla sobre ti"
                    />
                </div>
        </form>
         </div>
       </div>
        </>
    )
}

export default CreateUser;