// Easy: 6 numbers
// Medium: 5 numbers
// Difficult: 4 numbers

import { GameResult } from "../types/gameTypes"

// Horizontal check: 1,2,3 || 4, 5, 6,

const createHorizontalCheckArray = (position: number, squareId: number, game: GameResult) => {
  const firstRow = [1, 2, 3]
  const secondRow = [4, 5, 6]
  const thirdRow = [7, 8, 9]
  let line: number[] = []
  if (firstRow.includes(position)) {
    let rowToUse: number[] = []
    if (firstRow.includes(squareId)) rowToUse = rowToUse.concat(firstRow)
    else if (secondRow.includes(squareId)) rowToUse = rowToUse.concat(secondRow)
    else if (thirdRow.includes(squareId)) rowToUse = rowToUse.concat(thirdRow)
    for (let i = 0; i < rowToUse.length; i++) {
      const gameRow: number[] = game[rowToUse[i].toString()]
      const squareNumbers: number[] = gameRow.slice(0, 3) // the first three items of each row
      line = line.concat(squareNumbers)
    }
  } else if (secondRow.includes(position)) {
    let rowToUse: number[] = []
    if (firstRow.includes(squareId)) rowToUse = rowToUse.concat(firstRow)
    else if (secondRow.includes(squareId)) rowToUse = rowToUse.concat(secondRow)
    else if (thirdRow.includes(squareId)) rowToUse = rowToUse.concat(thirdRow)
    for (let i = 0; i < rowToUse.length; i++) {
      const gameRow: number[] = game[rowToUse[i].toString()]
      const squareNumbers: number[] = gameRow.slice(3, 7) // the first three items of each row
      line = line.concat(squareNumbers)
    }
  } else if (thirdRow.includes(position)) {
  }
  return line
}

export const checkIfNumberIsInHorizontalLine = (n: number, position: number, squareId: number, game: GameResult): boolean => {
  if (position === 1 || position === 2 || position === 3) {
    if (squareId === 1 || squareId === 2 || squareId === 3) {
      const square1 = game["1"].slice(0, 3)
      const square2 = game["2"].slice(0, 3)
      const square3 = game["3"].slice(0, 3)
      const line = square1.concat(square2).concat(square3)
      if (!line.includes(n)) return false
      else return true
    }
  } else if (position === 4 || position === 5 || position === 6) {
  } else if (position === 7 || position === 8 || position === 9) {
  }
  return false
}

export const generateSquareNumbers = (squareId: number, initialGame: GameResult): number[] => {
  let result: number[] = []
  for (let i = 1; i <= 9; i++) {
    const n: number = Math.floor(Math.random() * 10)
    if (!result.includes(n)) result.push(n)
    else result.push(0)
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