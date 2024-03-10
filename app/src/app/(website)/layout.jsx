"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  // DROP DOWN
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react"

export default function WebsiteLayout({ children }) {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="layout">
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">FINANSSOREAL</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/" variant="flat">
              Cerrar sesión
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {/* apartado del dashboard */}
          <NavbarMenuItem key={"dashboard"}>
            <Button as={Link} variant="light" size="lg" href="/dashboard">
              Dashboard
            </Button>
          </NavbarMenuItem>

          {/* apartado de la reporteria */}
          <NavbarMenuItem key={"reporteria"}>
            <Button as={Link} variant="light" size="lg" href="/reports">
              Reporteria
            </Button>
          </NavbarMenuItem>

          {/* apartado de las Precalificaciones */}
          <NavbarMenuItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="light" size="lg">
                  Precalificaciones
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Static Actions"
                onAction={(key) => {
                  setIsMenuOpen(false)
                  router.push(key)
                }}>
                <DropdownItem key="/prequalifications/create">
                  Crear precalificacion
                </DropdownItem>
                <DropdownItem key="/prequalifications">
                  Listar precalificaciones
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <main className="py-5">{children}</main>
    </div>
  )
}
