function Loading(){
    return(
        <>
        <div className='w-full flex gap-3 justify-center items-center'>
            <img src="/CR.png" alt="" className='size-50'/>
            <span className="font-semibold text-3xl text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(to right, #0051FF, #FF1194)'
            }}>Cargando...</span>
        </div>
        </>
    )
}

export default Loading;