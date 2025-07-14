

function Header(){
    return(
        <>
        <header className="fixed w-full top-0 left-0 bg-[linear-gradient(to_right,#0051FF,#FF1194)] p-2 text-white">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round-icon lucide-users-round">
            <path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/>
            </svg>
            <span className="font-semibold">List User</span>
            </div>
        </header>
        </>
    )
}

export default Header;
