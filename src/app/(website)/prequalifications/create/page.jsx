"use client"
import { Button, Input, Checkbox } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Link from "next/link"

const schema = yup.object().shape({})

function PrequalificationCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const router = useRouter()

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert("Solicitud enviada con exito!")
    router.push("/prequalifications")
  }

  return (
    <div className="mx-auto px-4 max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-3">Crear precalificación</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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

          <Input
            //{...register("correo")}
            type="text"
            label="DPI"
            isRequired
            isClearable
            variant="bordered"
            // isInvalid={errors.correo}
            // errorMessage={errors.correo?.message}
          />

          <Input
            //{...register("correo")}
            type="file"
            label="Recibo de luz"
            isRequired
            variant="bordered"
            placeholder="Recibo de luz"
            // isInvalid={errors.correo}
            // errorMessage={errors.correo?.message}
          />
          <Checkbox>
            ¿Posee recibo de luz propio o de algun familiar directo?
          </Checkbox>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Button
            color="primary"
            size="lg"
            type="submit"
            isLoading={isSubmitting}>
            Precalificar
          </Button>
          <Button
            as={Link}
            color="secondary"
            size="lg"
            href="/prequalifications">
            Volver a precalificaciones
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PrequalificationCreate
