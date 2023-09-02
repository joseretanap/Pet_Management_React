import Patient from "./Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">Listado de pancientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-lime-500 font-bold">Pacientes y citas</span>
          </p>

          {patients.map(patient => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>) :
        (<>
          <h2 className="font-black text-3xl text-center ">No hay pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-lime-500 font-bold">y los veras acá</span>
          </p>
        </>)}

    </div>
  )
}

export default PatientList;