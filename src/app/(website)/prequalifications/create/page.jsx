"use client"
import { Button, Input, Checkbox } from "@nextui-org/react"

function PrequalificationCreate() {
  return (
    <div className="mx-auto px-4 max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-3">Crear precalificación</h1>
      <form onSubmit={() => {}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <Input
            //{...register("correo")}
            type="text"
            label="Primer nombre"
            isRequired
            isClearable
            variant="bordered"
            // isInvalid={errors.correo}
            // errorMessage={errors.correo?.message}
          />
          <Input
            //{...register("correo")}
            type="text"
            label="Primer apellido"
            isRequired
            isClearable
            variant="bordered"
            // isInvalid={errors.correo}
            // errorMessage={errors.correo?.message}
          />
          <Checkbox>
            ¿Posee recibo de luz propio o de algun familiar directo?
          </Checkbox>
          <Input
            type="file"
            variant="bordered"
            label="No. documento"
            isRequired
            isClearable
          />
        </div>
        <div>
          <Button
            color="primary"
            size="lg"
            type="submit"
            isLoading={false}
            className="mr-5">
            Precalificar
          </Button>
          <Button color="secondary" size="lg" href="/prequalifications">
            Volver al inicio
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PrequalificationCreate
