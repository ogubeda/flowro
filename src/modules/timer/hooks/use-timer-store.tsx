import { constants } from "@/lib/constants"
import { create } from "zustand"

const TimerType = {
  focus: 'focus',
  rest: 'rest'
} as const
type TimerType = typeof TimerType[keyof typeof TimerType]

interface TimerState {
  timerType: TimerType
  time: number,
  setTime: (time: number) => void
  started: boolean
  start: () => void
  stop: () => void
  reset: () => void
}

export const useTimerStore = create<TimerState>((set) => ({
  timerType: TimerType.focus,
  time: constants.defaultTimer,
  setTime: (time) => set(() => ({ time })),
  started: false,
  start: () => set(() => ({ started: true })),
  stop: () => set(() => ({ started: false })),
  reset: () => set(() => ({ time: constants.defaultTimer, started: false }))
}))