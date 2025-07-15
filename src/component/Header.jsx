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
            <img src="././public/CR.png" alt="" className="size-10" />
            <span className="font-bold text-lg">CR</span>
            </div>
             <div className="bg-[linear-gradient(to_right,#0051FF,#FF1194)] w-full h-0.5"></div>
        </header>
       
        </>
    )
}

export default Header;
