function CardTemplate(){
    return(
        <>
        <div
                >
                   <div className="flex gap-6 items-center">
                     <img src= "././public/user.png"
                     alt=""
                     className="size-30 rounded-lg" 
                     />
                     <span className="font-semibold text-2xl">Hola soy </span>
                   </div>
                   <hr />
                   <div>
                    <div className="flex gap-2">
                        <span className="font-semibold">Edad:</span>
                        <span></span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-semibold">Pais:</span>
                        <span></span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-semibold">Email:</span>
                        <span></span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-semibold">Fecha de nacimiento:</span>
                        <span></span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-semibold">Sexo:</span>
                        <span></span>
                    </div>
                    
                   </div>
                   <hr />
                   <p></p>
                </div>
        
        </>
    )
}

export default CardTemplate;