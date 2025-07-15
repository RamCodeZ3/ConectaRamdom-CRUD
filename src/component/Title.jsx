function Title(){
    return(
        <>
        <div className="flex flex-col gap-6 text-center w-1/2 justify-center items-center h-[470px] border-1 border-t-[#0051FF] border-l-[#0051FF] border-r-[#FF1194] border-b-[#FF1194] rounded-lg bg-neutral-900 ">
            <span className="font-semibold text-5xl text-transparent bg-clip-text" style={{
           backgroundImage: 'linear-gradient(to right, #0051FF, #FF1194)'
         }}>ConectaRandom</span>
        <p className="text-md text-neutral-300">
            ¿Te gustaría hablar con alguien nuevo sin saber quién será? ConectaRandom te conecta al instante con personas aleatorias de todo el mundo. Sin presiones, sin filtros, solo charlas genuinas y la posibilidad de hacer nuevos amigos en cada encuentro.
        </p>
        <img src="././Public/CR.png" alt="" className="size-60" />
        </div>
        </>
    )
}

export default Title