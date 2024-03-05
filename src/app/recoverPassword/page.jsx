"use client"
import { Input, Link } from "@nextui-org/react"
import { Button } from "@nextui-org/button"
import { useRouter } from "next/navigation"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  correo: yup.string().email().required(),
})

function RestorePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  })

  const router = useRouter()

  const goBack = () => router.push("/", { scroll: false })

  const sendData = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    alert("Solicitud enviada con exito!")
    goBack()
  }

  return (
    <main className="h-screen">
      <div className="h-full flex items-center justify-center">
        <div className="w-full md:w-2/3 lg:w-2/3 xl:w-1/3 rounded rounded-lg border border-gray-500 p-5">
          <div className="mb-4">
            <p className="text-3xl font-bold">Recuperar contraseña</p>
          </div>

          <form onSubmit={handleSubmit(sendData)}>
            <Input
              {...register("correo")}
              type="email"
              label="Correo electronico"
              isRequired
              isClearable
              variant="bordered"
              className="mb-4"
              isInvalid={!!errors.correo}
              errorMessage={errors.correo?.message}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Button
                type="submit"
                color="primary"
                size="lg"
                isLoading={isSubmitting}>
                Realizar solicitud
              </Button>
              <Button as={Link} color="secondary" size="lg" href="/">
                Volver
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default RestorePassword
