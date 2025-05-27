import { useEffect } from "react"

import { millisToMinutesAndSeconds } from "@/lib/utils"
import { useTimerStore } from "../hooks/use-timer-store"

export const TimerClock = () => {
  const { started, time, setTime } = useTimerStore()

  useEffect(() => {
    if (!started) return

    const interval = setInterval(() => {
      const newTime = time - 1000
      setTime(newTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [started, time, setTime])

  return (
    <>
      <div>
        { millisToMinutesAndSeconds(time) }
      </div>
    </>
  )
}