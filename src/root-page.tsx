import { AppSidebar } from "@/shared/components/layout/app-sidebar"
import { Outlet } from "@tanstack/react-router"

export const RootPage = () => {
  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[1fr_auto] h-full divide-x-1 divide-y-1 divide-black">
      <AppSidebar />
      <main className='flex flex-col gap-2 items-center justify-center'>
        <Outlet />
      </main>
      <footer className='col-span-2 p-2'>
        Este es el footer
      </footer>
    </div>
  )
}