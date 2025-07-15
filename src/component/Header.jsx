function Header(){
    function handleDivClick(){
        window.location.reload()
    }

    return(
        <>
        <header className="fixed w-full top-0 left-0  p-2 text-white m-0 items-center">
            <div className="flex items-center bg-gradient-to-r from-[#0051FF] to-[#FF1194] bg-clip-text text-transparent cursor-pointer w-[105px]"
            onClick={handleDivClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0051FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round-icon lucide-users-round">
            <path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>
            </svg>
            <span className="font-semibold ">List User</span>
            </div>
             <div className="bg-[linear-gradient(to_right,#0051FF,#FF1194)] w-full h-0.5"></div>
        </header>
       
        </>
    )
}

export default Header;
