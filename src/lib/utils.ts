import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const millisToMinutesAndSeconds = (millis: number): string => {
  const minutes = Math.floor(millis / 60000)
  const seconds = Number(((millis % 60000) / 1000).toFixed(0))

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}