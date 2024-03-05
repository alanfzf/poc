import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHardHat } from "@fortawesome/free-solid-svg-icons"

function Reports() {
  return (
    <div className="mx-auto px-4 max-w-screen-lg">
      <h1 className="text-3xl font-bold">Reportes</h1>
      <div className="flex justify-center items-center h-96">
        <FontAwesomeIcon
          icon={faHardHat}
          className="text-amber-400 mr-5"
          style={{ height: "100px" }}
        />

        <div>
          <p className="font-bold text-4xl">En construcción...</p>
        </div>
      </div>
    </div>
  )
}

export default Reports
