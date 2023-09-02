const Patient = ({patient, setPatient, deletePatient}) => {

  const {mascota, dueno, correo, alta, sintomas, id} = patient

  const handleDelete = () => {
    const answer = confirm("Desea eliminar este paciente?")
    if (answer) {
      deletePatient(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''} <span className="font-normal normal-case">{mascota}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Dueño: {''} <span className="font-normal normal-case">{dueno}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''} <span className="font-normal normal-case">{correo}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha de alta: {''} <span className="font-normal normal-case">{alta}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Síntomas: {''} <span className="font-normal normal-case">{sintomas}</span>
          </p>

          <div className="flex justify-between mt-7">
            <button className="py-2 px-10 bg-lime-500 hover:bg-lime-700 text-white font-bold uppercase rounded-lg" onClick={() => setPatient(patient)}>Editar</button>
            <button className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg" onClick={handleDelete}>Eliminar</button>
          </div>

        </div>
  )
}

export default Patient