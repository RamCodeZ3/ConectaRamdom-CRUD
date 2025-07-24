import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PanelDelete({ activate, onCancel }) {
    const {id} = useParams()
    const navigate = useNavigate()

    const handleClickButton = () =>{
        fetch(`http://localhost:3000/delete/${id}`, {
            method: "DELETE",
            headers: {
               "Content-Type": "application/json",
      },
        })
        .then(res =>{
            if(!res.ok) throw new Error('Hubo un error a eleminar el usuario');
            return res.json();
        })
        .then(data =>{
            console.log("Se elimino al usuario exitosamente.");
        })
        .catch(error =>{
            console.error("hubo un error", error);
        })
    }

  return (
    <div
      className={`${
        activate ? 'flex items-center justify-center absolute w-full h-full bg-[#000000]/70 backdrop-blur-lg' : 'hidden'
      }`}
    >
      <div className="flex flex-col gap-10 bg-[#15121a] p-4 rounded-lg w-auto h-[140px] border-1 border-[#543CDC]">
        <span className="font-semibold">¿Está seguro que quieres eliminar a ese usuario?</span>
        <div className="flex gap-8">
          <button className="cursor-pointer" onClick={onCancel}>
            Cancelar
          </button>
          <button className="cursor-pointer" onClick={()=>{
            handleClickButton()
            navigate(-1)
            }}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default PanelDelete;