import { Undo2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ButtonReturn(){
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate(-1);
    }

    return(
        <>
        <button 
        className='hidden md:flex absolute top-5 left-10 bg-[#7c26cd38] p-3 border border-[#7D26CD] rounded-full hover:bg-[#7c26cd75] transition-colors duration-300 cursor-pointer'
        onClick={handleClick}
        >
            <Undo2/>
        </button>
        </>
    )
}

export default ButtonReturn;