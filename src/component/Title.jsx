function Title(){
    return(
        <>
        <div className="w-1/2 p-0.5 bg-[linear-gradient(to_right,#0051FF,#FF1194)] rounded-lg">
            <div className="flex flex-col gap-6 text-center w-full justify-center items-center h-[470px] rounded-lg bg-neutral-900 ">
            <span className="font-semibold text-5xl text-transparent bg-clip-text" style={{
           backgroundImage: 'linear-gradient(to right, #0051FF, #FF1194)'
         }}>ConectaRandom</span>
        <p className="text-md text-neutral-300">
            ¿Te gustaría hablar con alguien nuevo sin saber quién será? ConectaRandom te conecta al instante con personas aleatorias de todo el mundo. Sin presiones, sin filtros, solo charlas genuinas y la posibilidad de hacer nuevos amigos en cada encuentro.
        </p>
        <img src="././Public/CR.png" alt="" className="size-60" />
        </div>
        </div>
        </>
    )
}

export default Title