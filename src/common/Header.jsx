import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { Navigate, useNavigate } from "react-router-dom";

function Header(){
    const [activate, setActivate] = useState(false)
    const navigate = useNavigate();
    
    function handleDivClick(){
        window.location.reload()
    }

    return(
        <>
        <div className="fixed flex flex-col justify-center items-center w-full h-18 z-10">

        <header className="flex w-[90%] z-10 top-0 left-0 py-1 px-2 text-white items-center justify-around border-1 border-[#543CDC] rounded-lg bg-white/10 backdrop-blur-2xl">
            <div className="flex items-center bg-gradient-to-r from-[#0051FF] to-[#FF1194] bg-clip-text text-transparent cursor-pointer w-auto"
            onClick={handleDivClick}
            >
            <img src="/CR.png" alt="" className="size-10" />
            <span className="font-bold text-lg">ConectaRandom</span>
            </div>
            <div className="hidden md:flex gap-4 font-semibold">
                <a href='#start' className='cursor-pointer hover:text-[#543CDC] transition-all duration-300'>Inicio</a>
                <a href="#list" className='cursor-pointer hover:text-[#543CDC] transition-all duration-300'>Usuarios</a>
                <a href='#add' className='cursor-pointer hover:text-[#543CDC] transition-all duration-300'>Añadir</a>
            </div>
             <button onClick={()=> navigate('/createUser')} className='flex gap-2 items-center justify-center cursor-pointer bg-[linear-gradient(to_right,#0051FF,#FF1194)] px-2 py-1 rounded-lg'>
               <User/> <span className='font-semibold'>Ramdom</span>
             </button>
             <div className='md:hidden' onClick={()=>{setActivate(!activate)}}>
                {activate ? <X/>: <Menu/>}
             </div>
        </header>
        {activate && (
          <div className="absolute top-13 md:hidden w-[90%] font-semibold flex flex-col gap-4 bg-white/10 backdrop-blur-2xl rounded-b-lg px-2 py-4">
            <a href='#start' className='border-b-1 border-[#543CDC]'>Inicio</a>
            <a href="#list" className='border-b-1 border-[#543CDC]'>Usuarios</a>
            <a href='#add' className='border-b-1 border-[#543CDC]'>Añadir</a>
          </div>
        )}
       </div>
        </>
    )
}

export default Header;
