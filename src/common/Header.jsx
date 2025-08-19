import { User } from 'lucide-react';
import { Navigate, useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    function handleDivClick(){
        window.location.reload()
    }

    return(
        <>
        <div className="fixed flex justify-center items-center w-full h-18 z-10">

        <header className="flex w-[90%] z-10 top-0 left-0 py-1 px-2  text-white items-center justify-around border-1 border-[#543CDC] rounded-lg bg-white/10 backdrop-blur-2xl">
            <div className="flex items-center bg-gradient-to-r from-[#0051FF] to-[#FF1194] bg-clip-text text-transparent cursor-pointer w-auto"
            onClick={handleDivClick}
            >
            <img src="/CR.png" alt="" className="size-10" />
            <span className="font-bold text-lg">ConectaRandom</span>
            </div>
            <div className="hidden md:flex gap-4">
                <a href='#start'>Inicio</a>
                <a href='#add'>Añadir</a>
                <a href="">Usuarios</a>
            </div>
             <button onClick={()=> navigate('/createUser')} className='flex gap-2 items-center justify-center cursor-pointer bg-[linear-gradient(to_right,#0051FF,#FF1194)] px-2 py-1 rounded-lg'>
               <User/> <span className='font-semibold'>Ramdom</span>
             </button>
        </header>
       </div>
        </>
    )
}

export default Header;
