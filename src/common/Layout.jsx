import { Outlet } from 'react-router-dom';


function Layout(){
    return(
        <>
        <div className='flex w-full min-h-dvh bg-[#0d031d] text-white justify-center'>
            <Outlet/>
        </div>
        </>
    )
}

export default Layout;