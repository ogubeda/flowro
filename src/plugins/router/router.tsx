import { createRootRoute, createRoute } from "@tanstack/react-router"
import { RootPage } from "./root-page"
import { Timer } from "../../modules/timer/components/timer"
import { Settings } from "@/modules/settings/components/settings"

const rootRoute = createRootRoute({
  component: RootPage
})

const timerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Timer
})

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: Settings
})

export const routeTree = rootRoute.addChildren([
  timerRoute,
  settingsRoute
])