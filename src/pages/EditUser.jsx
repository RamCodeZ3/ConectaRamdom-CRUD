import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { useParams } from "react-router-dom";
import ButtonReturn from '../component/ButtonReturn';

function EditUser(){
    const [formData, setFormData] = useState({
            name: '',
            lastname:'',
            birthdate: '',
            age: '',
            email: '',
            location: '',
            sex: '',
            url_img: '',
            hobby: ''
        })
    const { id } = useParams();

        const handleChange = (e)=>{
            const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value
            })
        }

        useEffect(()=>{
                fetch(`http://localhost:3000/user/${id}`)
                .then(response=>{
                    if(!response.ok){
                        throw new Error("Hubo un error al momento de obtener los datos")
                    }
                    return response.json(); // ¡IMPORTANTE
                })
                .then(data=>{
                    setFormData(data)
                    setloading(false)
                })
                .catch(err => {
                    setError(err.message)
                    setloading(false)
                })
            },[])
    
        const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Convertir edad a número antes de enviar
        const dataToSend = {
          ...formData,
          age: parseInt(formData.age)
        }
        try{
            const response = await fetch(`http://localhost:3000/update/${id}`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(dataToSend),
            });
            const data = await response.json();
            console.log("Los datos se enviaron correctamente")
    
        }catch(error){
            console.error('Error:', error);
        }
    }
    
    return(
        <>
        <ButtonReturn/>
        <div className="flex gap-10 w-full h-auto justify-center items-center">
         <div className={`flex gap-4 items-center w-[60%] p-0.5 rounded-lg border-1 px-4 py-2 ${formData.sex == "M" ? 'bg-[#287eff1c] border-[#0051FF]' : 'bg-[#ff3ba718] border-[#FF1194]'}`}>
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2 h-auto w-full rounded-lg ">
            <div className="flex gap-2">
                <div className="flex flex-col flex-1">
                <span className="font-semibold">Nombre:</span>
                <input 
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder="nombre del usuario"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
            </div>
            <div className="flex flex-col flex-1">
                <span className="font-semibold">Apellido:</span>
                <input
                name='lastname'
                value={formData.lastname}
                onChange={handleChange} 
                type="text"
                placeholder="apellido del usuario"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
            </div>
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col flex-1">
                <span className="font-semibold">Fecha de nacimiento:</span>
                <input
                name='birthdate'
                value={formData.birthdate}
                onChange={handleChange}
                type="date"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
            </div>
            <div className="flex flex-col flex-1">
                <span className="font-semibold">Edad:</span>
                <input
                name='age'
                value={formData.age} 
                onChange={handleChange}
                type="number"
                min={0}
                placeholder="Edad"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
            </div>
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col flex-1">
                    <span className="font-semibold">Genero:</span>
                    <select 
                    name='sex'
                    value={formData.sex}
                    onChange={handleChange}
                    className="bg-[#0d031d8a] rounded-md px-2 py-1">
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>
                
            <div className="flex flex-col flex-1">
                <span className="font-semibold">Pais:</span>
                <input
                name='location'
                value={formData.location} 
                onChange={handleChange}
                type="text"
                placeholder="pais donde vive"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
                </div>
            </div>
                <div className="flex flex-col flex-1">
                <span className="font-semibold">Email:</span>
                <input
                name='email'
                value={formData.email} 
                onChange={handleChange}
                type="text"
                placeholder="email del usuario"
                className="bg-[#0d031d8a] rounded-md px-2 py-1"
                />
            </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Imagen:</span>
                    <input
                    name='url_img'
                    value={formData.url_img} 
                    onChange={handleChange}
                    type="text" 
                    placeholder="url"
                    className="bg-[#0d031d8a] rounded-md px-2 py-1"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Hobby:</span>
                    <textarea
                    name='hobby'
                    value={formData.hobby}
                    onChange={handleChange}
                    placeholder="habla sobre ti"
                    className="bg-[#0d031d8a] rounded-md px-2 py-1 h-20"
                    />
                </div>
                
                <button type="submit" className="flex gap-2 justify-center items-center bg-[linear-gradient(to_right,#0051FF,#FF1194)] rounded-lg py-2">
                    <User/>
                    <span className="font-semibold">Editar usuario</span>
                </button>
        </form>
                <div >
                  <img 
                     src={formData.url_img} 
                     alt="" 
                     className={`p-2 rounded-lg border-1 w-50 h-auto ${formData.sex == "M" ? ' border-[#0051FF]' : ' border-[#FF1194]'}`} 
                  />
                  
                </div>
         </div>
         
       </div>
        </>
    )
}

export default EditUser;