import { Button } from "@/shared/components/ui/button"

import { useTimerStore } from "../hooks/use-timer-store"

export const TimerButtons = () => {
  const { started, start, stop, reset } = useTimerStore()

  return (
    <>
      <div>
        
        {
          started
          ? (<Button onClick={stop}>Stop</Button>)
          : (<Button onClick={start}>Start</Button>)
        }
        <Button onClick={reset}>Reset</Button>
      </div>
    </>
  )
}