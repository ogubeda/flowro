import { routeTree } from "@/router"
import { createRouter, RouterProvider } from "@tanstack/react-router"


const router = createRouter({ routeTree })


export const AppRouterProvider = () => {
  return <RouterProvider router={ router } />
}