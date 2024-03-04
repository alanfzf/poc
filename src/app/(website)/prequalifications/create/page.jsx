"use client"
import { Button, Input, Checkbox } from "@nextui-org/react"

function PrequalificationCreate() {
  return (
    <div className="mx-auto px-4 max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-3">Crear precalificación</h1>
      <form onSubmit={() => {}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <Input
            type="text"
            variant="bordered"
            placeholder="Primer Nombre"
            isRequired
            isClearable
          />
          <Input
            type="text"
            variant="bordered"
            placeholder="Primer apellido"
            isRequired
            isClearable
          />

          <Checkbox>
            ¿Posee recibo de luz propio o de algun familiar directo?
          </Checkbox>
          <Input
            type="file"
            variant="bordered"
            placeholder="No. documento"
            isRequired
            isClearable
          />
        </div>
        <Button color="primary" size="lg" type="submit" isLoading={false}>
          Iniciar sesión
        </Button>
      </form>
    </div>
  )
}

export default PrequalificationCreate
