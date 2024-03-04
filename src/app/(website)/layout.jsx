"use client"
import { useState } from "react"
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="layout">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
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
            <Button variant="light" size="lg">
              Dashboard
            </Button>
          </NavbarMenuItem>

          {/* apartado de la reporteria */}
          <NavbarMenuItem key={"reporteria"}>
            <Button variant="light" size="lg">
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
                onAction={(key) => alert(key)}>
                <DropdownItem key="createPreq">
                  Crear precalificacion
                </DropdownItem>
                <DropdownItem key="listPreq">
                  Listar precalificaciones
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <main className="bg-neutral-900 py-5">{children}</main>
    </div>
  )
}
