"use client"
import React from "react"
import { Listbox, ListboxItem, Divider } from "@nextui-org/react"
import {
  FaBuilding,
  FaCalculator,
  FaCashRegister,
  FaChartLine,
  FaCheck,
  FaCoins,
  FaConciergeBell,
  FaFileCsv,
  FaHandshakeSlash,
  FaReceipt,
  FaSearch,
  FaStore,
  FaStoreSlash,
  FaUser,
  FaUsersSlash,
} from "react-icons/fa"
import { cn } from "@nextui-org/react"

const IconWrapper = ({ children, className }) => (
  <div
    className={cn(
      className,
      "flex items-center rounded-small justify-center w-7 h-7",
    )}>
    {children}
  </div>
)

function TopItem({ text }) {
  return (
    <div className="py-1 text-center">
      <span className="font-bold text-gray-500 text-xs">{text}</span>
    </div>
  )
}

function CustomList({ topText, children }) {
  return (
    <Listbox
      topContent={<TopItem text={topText} />}
      aria-label="User Menu"
      className="p-0 gap-0 bg-content1 overflow-visible shadow-small rounded-medium"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}>
      {children}
    </Listbox>
  )
}

// financiamientos
function Financiamientos() {
  return (
    <CustomList topText={"FINANCIAMIENTOS"}>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <FaCoins />
          </IconWrapper>
        }>
        <span className="font-bold">REPORTE GENERAL</span>
      </ListboxItem>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <FaChartLine />
          </IconWrapper>
        }>
        <span className="font-bold">MOVIMIENTOS POR RANGO DE FECHAS</span>
      </ListboxItem>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <FaCalculator />
          </IconWrapper>
        }>
        <span className="font-bold">CONTABILIDAD MENSUAL</span>
      </ListboxItem>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <FaCheck />
          </IconWrapper>
        }>
        <span className="font-bold">REPORTE DE PRECALIFICACIONES</span>
      </ListboxItem>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <FaFileCsv />
          </IconWrapper>
        }>
        <span className="font-bold">REPORTE DE PAGOS CSV</span>
      </ListboxItem>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <FaSearch />
          </IconWrapper>
        }>
        <span className="font-bold">TRANSUNION</span>
      </ListboxItem>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <FaConciergeBell />
          </IconWrapper>
        }>
        <span className="font-bold">REPORTE DE SOLICITUDES</span>
      </ListboxItem>
    </CustomList>
  )
}

// Clientes
function Clientes() {
  return (
    <CustomList topText={"CLIENTES"}>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-sky-400/10 text-blue-400">
            <FaUser />
          </IconWrapper>
        }>
        <span className="font-bold">REPORTE GENERAL</span>
      </ListboxItem>
    </CustomList>
  )
}

// Agencias
function Agencias() {
  return (
    <CustomList topText={"AGENCIAS"}>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-purple-500/10 text-purple-500">
            <FaBuilding />
          </IconWrapper>
        }>
        <span className="font-bold">REPORTE GENERAL</span>
      </ListboxItem>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-purple-500/10 text-purple-500">
            <FaCashRegister />
          </IconWrapper>
        }>
        <span className="font-bold">DEPOSITO AGENCIA</span>
      </ListboxItem>
    </CustomList>
  )
}

// Cobranza
function Cobranza() {
  return (
    <CustomList topText={"COBRANZA"}>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-teal-500/10 text-teal-500">
            <FaStore />
          </IconWrapper>
        }>
        <span className="font-bold">REPORTE GENERAL</span>
      </ListboxItem>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-teal-500/10 text-teal-500">
            <FaReceipt />
          </IconWrapper>
        }>
        <span className="font-bold">COBROS POR FECHAS</span>
      </ListboxItem>
    </CustomList>
  )
}

// PAPELERA
function Papelera() {
  return (
    <CustomList topText={"PAPELERA"}>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-rose-500/10 text-rose-500">
            <FaHandshakeSlash />
          </IconWrapper>
        }>
        <span className="font-bold">FINANCIAMIENTOS INACTIVOS</span>
      </ListboxItem>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-rose-500/10 text-rose-500">
            <FaUsersSlash />
          </IconWrapper>
        }>
        <span className="font-bold">CLIENTES INACTIVOS</span>
      </ListboxItem>
      <ListboxItem
        startContent={
          <IconWrapper className="bg-rose-500/10 text-rose-500">
            <FaStoreSlash />
          </IconWrapper>
        }>
        <span className="font-bold">AGENCIAS INACTIVAS</span>
      </ListboxItem>
    </CustomList>
  )
}

function Reports() {
  return (
    <div className="mx-auto px-4 max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-3">Reportería General</h1>
      <Divider className="mb-3" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Financiamientos />
        <Clientes />
        <Agencias />
        <Cobranza />
        <Papelera />
      </div>
    </div>
  )
}

export default Reports
