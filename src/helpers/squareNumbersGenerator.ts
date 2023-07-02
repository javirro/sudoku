// Easy: 6 numbers
// Medium: 5 numbers
// Difficult: 4 numbers

import { GameResult } from "../types/gameTypes"
import { createHorizontalCheckArray } from "./createHorizontalCheckArray"
import { createVerticalCheckArray } from "./createVerticalCheckArray"

// Horizontal check: 1,2,3 || 4, 5, 6,

export const checkIfNumberIsInHorizontalLine = (n: number, position: number, squareId: number, game: GameResult): boolean => {
  const line: number[] = createHorizontalCheckArray(position, squareId, game)
  if (!line.includes(n)) return false
  else return true
}

export const checkIfNumberisInVerticalLine = (n: number, position: number, squareId: number, game: GameResult): boolean => {
  const line: number[] = createVerticalCheckArray(position, squareId, game)
  if (!line.includes(n)) return false
  else return true
}


export const generateSquareNumbers = (squareId: number, initialGame: GameResult): number[] => {
  let result: number[] = []
  for (let i = 1; i <= 9; i++) {
    const n: number = Math.floor(Math.random() * 10)
    if (!result.includes(n)) {
      if (!checkIfNumberIsInHorizontalLine(n, i, squareId, initialGame) && !checkIfNumberisInVerticalLine(n, i, squareId, initialGame)) result.push(n)
      else result.push(0)
    } else result.push(0)
  }
  return result
}

export const generateInitState = (): GameResult => {
  const initialGame: GameResult = {
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": [],
    "9": [],
  }

  for (let j = 1; j <= 9; j++) {
    initialGame[j.toString()] = generateSquareNumbers(j, initialGame)
  }

  return initialGame
}
