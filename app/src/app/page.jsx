"use client"
import { Link, Button, Input } from "@nextui-org/react"
import Image from "next/image"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  correo: yup
    .string()
    .email("El formato de correo es invalido")
    .required("Este es un campo requerido"),
  clave: yup.string().required("Este es un campo requerido"),
})

export default function Home() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  })

  const onSubmit = async (_data) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    router.push("/dashboard", { scroll: false })
  }

  return (
    <main className="absolute inset-0 -z-10 h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#BEF264_100%)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="flex items-center justify-center">
          <Image
            src="/static/images/logo.png"
            width={450}
            height={450}
            alt="Picture of the author"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full  md:w-2/3 lg:w-10/12 xl:w-7/12">
            <div className="mb-3">
              <p className="text-6xl font-bold">Bienvenido</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register("correo")}
                type="email"
                label="Correo electronico"
                isRequired
                isClearable
                variant="bordered"
                className="mb-3"
                isInvalid={errors.correo}
                errorMessage={errors.correo?.message}
              />
              <Input
                {...register("clave")}
                type="password"
                label="Contraseña"
                isRequired
                isClearable
                variant="bordered"
                className="mb-3"
                isInvalid={errors.clave}
                errorMessage={errors.clave?.message}
              />
              <div className="mb-3">
                <Link className="text-white" href="/recoverPassword">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Button
                color="primary"
                size="lg"
                type="submit"
                isLoading={isSubmitting}>
                Iniciar sesión
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
