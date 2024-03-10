"use client"
import React from "react"
import useSWR from "swr"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Chip,
  Spinner,
} from "@nextui-org/react"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Prequalifications() {
  const [page, setPage] = React.useState(1)
  const rowsPerPage = 5
  const { data, isLoading } = useSWR("/api/prequalifications", fetcher)

  const users = data || []
  const pages = Math.ceil(users.length / rowsPerPage)

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage
    return users.slice(start, end)
  }, [page, users])

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case "Recibo de Luz":
        return (
          <Chip
            className="capitalize"
            color={cellValue ? "success" : "danger"}
            size="sm"
            variant="flat">
            {cellValue ? "SI" : "NO"}
          </Chip>
        )

      case "RecordCrediticio":
        return (
          <Chip
            className="capitalize"
            color={cellValue ? "success" : "danger"}
            size="sm"
            variant="flat">
            {cellValue ? "SI" : "NO"}
          </Chip>
        )
      case "Porcentaje de aprobación":
        let resultado =
          cellValue >= 75 ? "success" : cellValue >= 45 ? "warning" : "danger"
        return (
          <Chip
            className="capitalize"
            color={resultado}
            size="sm"
            variant="flat">
            {cellValue}
          </Chip>
        )

      default:
        return cellValue
    }
  })

  if (isLoading) {
    return (
      <div className="flex w-full justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="mx-auto px-4 max-w-screen-lg">
      <h1 className="text-3xl font-bold">Listado de precalificaciones</h1>
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}>
        "Porcentaje de aprobación": "100%",
        <TableHeader>
          <TableColumn key="No.">NO.</TableColumn>
          <TableColumn key="Fecha Consulta">FECHA DE CONSULTA</TableColumn>
          <TableColumn key="Nombre Cliente">NOMBRE CLIENTE</TableColumn>
          <TableColumn key="DPI Cliente">DPI</TableColumn>
          <TableColumn key="Recibo de Luz">RECIBO DE LUZ</TableColumn>
          <TableColumn key="Usuario">AGENCIA</TableColumn>
          <TableColumn key="RecordCrediticio">RECORD</TableColumn>
          <TableColumn key="Porcentaje de aprobación">
            % DE APROBACION
          </TableColumn>
          <TableColumn key="Respuesta">RESPUESTA</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"Sin contenido para desplegar"} items={items}>
          {(item) => (
            <TableRow key={item["No."]}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default Prequalifications
