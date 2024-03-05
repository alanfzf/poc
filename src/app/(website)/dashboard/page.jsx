import { Progress } from "@nextui-org/react"

function Dashboard() {
  return (
    <div class="mx-auto px-4 max-w-screen-lg">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div class="flex justify-center items-center h-96">
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
        />
      </div>
    </div>
  )
}

export default Dashboard
