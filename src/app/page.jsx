import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
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
          {/* sm: 640px */}
          {/* md: 768px */}
          {/* lg: 1024px */}
          {/* xl: 1280px */}
          {/* 2xl: 1536px */}

          <div className="w-full  md:w-2/3 lg:w-10/12 xl:w-7/12">
            <div className="mb-3">
              <p className="text-6xl font-bold">Bienvenido</p>
            </div>

            <Input
              type="email"
              label="Correo electronico"
              isRequired
              isClearable
              variant="bordered"
              className="mb-3"
            />
            <Input
              type="password"
              label="Contraseña"
              isRequired
              isClearable
              variant="bordered"
              className="mb-3"
            />
            <div className="mb-3">
              <Link className="text-white">¿Olvidaste tu contraseña?</Link>
            </div>
            <Button color="primary" size="lg">
              Iniciar sesión
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
