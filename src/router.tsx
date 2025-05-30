import { createRootRoute, createRoute } from "@tanstack/react-router"
import { RootPage } from "./root-page"
import { Timer } from "./modules/timer/components/timer"

const rootRoute = createRootRoute({
  component: RootPage
})

const timerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Timer
})

export const routeTree = rootRoute.addChildren([
  timerRoute
])