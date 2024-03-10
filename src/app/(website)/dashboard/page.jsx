"use client"
import { ClientTypesChart } from "./components/clientTypesChart"
import { FinancingChart } from "./components/financingChart"
import { FinancingTypeChart } from "./components/financingChartType"
import { PaymentsChart } from "./components/paymentsChart"
import { RequestsChart } from "./components/requestsChart"
import { WinningsChart } from "./components/winningsChart"

function Dashboard() {
  return (
    <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 pb-10">
      <div>
        <h2 className="font-bold my-2">FINANCIAMIENTOS</h2>
        <FinancingChart />
      </div>

      <div>
        <h2 className="font-bold my-2">TIPOS DE FINANCIAMIENTOS</h2>
        <FinancingTypeChart />
      </div>

      <div>
        <h2 className="font-bold my-2">PAGOS</h2>
        <PaymentsChart />
      </div>

      <div>
        <h2 className="font-bold my-2">GANANCIAS</h2>
        <WinningsChart />
      </div>

      <div>
        <h2 className="font-bold my-2">SOLICITUDES</h2>
        <RequestsChart />
      </div>

      <div>
        <h2 className="font-bold my-2">CLIENTES</h2>
        <ClientTypesChart />
      </div>
    </div>
  )
}

export default Dashboard
