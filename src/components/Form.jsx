import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {

  const [mascota, setMascota] = useState("");
  const [dueno, setDueno] = useState("");
  const [correo, setCorreo] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setMascota(patient.mascota)
      setDueno(patient.dueno)
      setCorreo(patient.correo)
      setAlta(patient.alta)
      setSintomas(patient.sintomas)
    }
  }, [patient])
  

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
  }

  const handledSubmit = (e) => {
    e.preventDefault();

    //Form validation
    if ( [mascota, dueno, correo, alta, sintomas].includes('') ) {
      setError(true)
    }

    setError(false)

    //Objet of patient
    const objetPatient = {
      mascota, 
      dueno, 
      correo, 
      alta, 
      sintomas
    }

    if (patient.id) {
      //Modifing patient
      objetPatient.id = patient.id
      const updatedPatients = patients.map( patientState => patientState.id === patient.id ? objetPatient : patientState)
      setPatients(updatedPatients)
      setPatient({})
    } else {
      //New patient
      objetPatient.id = generarId()
      setPatients([...patients, objetPatient])
    }

    //Restart form
    setMascota("")
    setDueno("")
    setCorreo("")
    setAlta("")
    setSintomas("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
          Añade Pacientes y {''}
          <span className='text-lime-500 font-bold'>Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg px-5 py-10" onSubmit={handledSubmit}>

          { error && <Error mensaje="Todos los campos son obligatorios" />}
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold ml-2" htmlFor="mascota">Nombre mascota</label>
            <input id="mascota" type="text" placeholder="Nombre de la mascota" 
            className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
            value={mascota}
            onChange={ (e) => setMascota(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold ml-2" htmlFor="nombreDueno">Nombre del dueño</label>
            <input id="nombreDueno" type="text" placeholder="Nombre del dueño" 
            className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
            value={dueno}
            onChange={ (e) => setDueno(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label className="block text-gray-700 uppercase font-bold ml-2" htmlFor="correo">Correo eléctronico</label>
            <input id="correo" type="email" placeholder="Correo eléctronico del dueño" 
            className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md" 
            value={correo}
            onChange={ (e) => setCorreo(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label className="block text-gray-700 uppercase font-bold ml-2" htmlFor="alta">Alta</label>
            <input id="alta" type="date" className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md" 
            value={alta}
            onChange={ (e) => setAlta(e.target.value) }
            />
          </div>

          <div className='mb-5'>
            <label className="block text-gray-700 uppercase font-bold ml-2" htmlFor="sintomas">Síntomas</label>
            <textarea id="sintomas" className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md" placeholder="Describe los síntomas" 
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
            />
          </div>

          <input type="submit" 
          className="bg-lime-500 w-full p-3 text-white uppercase font-bold hover:bg-lime-600 cursor-pointer transition-all" 
          value={patient.id ? "Editar paciente" : "Agregar paciente"} />

        </form>
    </div>
  )
}

export default Form
