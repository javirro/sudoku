import { createHorizontalCheckArray } from "../helpers/createHorizontalCheckArray"
import { GameResult } from "../types/gameTypes"

describe("Testing creating Horizontal check array", () => {
  test("Testing firstRow position and first row SquareId", () => {
    const initialGame: GameResult = {
      "1": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "2": [0, 0, 0, 9, 8, 1, 5, 7, 1],
      "3": [1, 2, 3, 4, 8, 1, 5, 7, 1],
      "4": [],
      "5": [],
      "6": [],
      "7": [],
      "8": [],
      "9": [],
    }
    const position: number = 1
    const squareId: number = 1
    const result = createHorizontalCheckArray(position, squareId, initialGame)
    expect(result).toEqual([2, 4, 6, 0, 0, 0, 1, 2, 3])
  })

  test("Testing secondRow position and first row SquareId", () => {
    const initialGame: GameResult = {
      "1": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "2": [0, 0, 0, 9, 8, 1, 5, 7, 1],
      "3": [1, 2, 3, 4, 8, 1, 5, 7, 1],
      "4": [],
      "5": [],
      "6": [],
      "7": [],
      "8": [],
      "9": [],
    }
    const position: number = 4
    const squareId: number = 1
    const result = createHorizontalCheckArray(position, squareId, initialGame)
    expect(result).toEqual([9, 8, 1, 9, 8, 1, 4, 8, 1])
  })

  test("Testing third row position and first row SquareId", () => {
    const initialGame: GameResult = {
      "1": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "2": [0, 0, 0, 9, 8, 1, 1, 2, 3],
      "3": [1, 2, 3, 4, 8, 1, 5, 7, 1],
      "4": [],
      "5": [],
      "6": [],
      "7": [],
      "8": [],
      "9": [],
    }
    const position: number = 7
    const squareId: number = 1
    const result = createHorizontalCheckArray(position, squareId, initialGame)
    expect(result).toEqual([5, 7, 1, 1, 2, 3, 5, 7, 1])
  })

  test("Testing first row position and second row SquareId", () => {
    const initialGame: GameResult = {
      "1": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "2": [0, 0, 0, 9, 8, 1, 1, 2, 3],
      "3": [1, 2, 3, 4, 8, 1, 5, 7, 1],
      "4": [9, 8, 7, 3, 2, 1, 3, 5, 6],
      "5": [1, 2, 4, 9, 8, 1, 3, 5, 6],
      "6": [4, 5, 6, 6, 9, 1, 2, 3, 4],
      "7": [],
      "8": [],
      "9": [],
    }
    const position: number = 1
    const squareId: number = 4
    const result = createHorizontalCheckArray(position, squareId, initialGame)
    expect(result).toEqual([9, 8, 7, 1, 2, 4, 4, 5, 6])
  })

  test("Testing second row position and second row SquareId", () => {
    const initialGame: GameResult = {
      "1": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "2": [0, 0, 0, 9, 8, 1, 1, 2, 3],
      "3": [1, 2, 3, 4, 8, 1, 5, 7, 1],
      "4": [9, 8, 7, 3, 2, 1, 3, 5, 6],
      "5": [1, 2, 4, 9, 8, 1, 3, 5, 6],
      "6": [4, 5, 6, 6, 9, 1, 2, 3, 4],
      "7": [],
      "8": [],
      "9": [],
    }
    const position: number = 5
    const squareId: number = 4
    const result = createHorizontalCheckArray(position, squareId, initialGame)
    expect(result).toEqual([3, 2, 1, 9, 8, 1, 6, 9, 1])
  })

  test("Testing third row position and second row SquareId", () => {
    const initialGame: GameResult = {
      "1": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "2": [0, 0, 0, 9, 8, 1, 1, 2, 3],
      "3": [1, 2, 3, 4, 8, 1, 5, 7, 1],
      "4": [9, 8, 7, 3, 2, 1, 3, 5, 6],
      "5": [1, 2, 4, 9, 8, 1, 3, 5, 6],
      "6": [4, 5, 6, 6, 9, 1, 2, 3, 4],
      "7": [],
      "8": [],
      "9": [],
    }
    const position: number = 9
    const squareId: number = 4
    const result = createHorizontalCheckArray(position, squareId, initialGame)
    expect(result).toEqual([3, 5, 6, 3, 5, 6, 2, 3, 4])
  })

  test("Testing first row position and third row SquareId", () => {
    const initialGame: GameResult = {
      "1": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "2": [0, 0, 0, 9, 8, 1, 1, 2, 3],
      "3": [1, 2, 3, 4, 8, 1, 5, 7, 1],
      "4": [9, 8, 7, 3, 2, 1, 3, 5, 6],
      "5": [1, 2, 4, 9, 8, 1, 3, 5, 6],
      "6": [4, 5, 6, 6, 9, 1, 2, 3, 4],
      "7": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "8": [1, 2, 4, 9, 8, 1, 3, 5, 6],
      "9": [8, 2, 4, 9, 7, 1, 3, 2, 6],
    }
    const position: number = 1
    const squareId: number = 9
    const result = createHorizontalCheckArray(position, squareId, initialGame)
    expect(result).toEqual([2, 4, 6, 1, 2, 4, 8, 2, 4])
  })

  test("Testing second row position and third row SquareId", () => {
    const initialGame: GameResult = {
      "1": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "2": [0, 0, 0, 9, 8, 1, 1, 2, 3],
      "3": [1, 2, 3, 4, 8, 1, 5, 7, 1],
      "4": [9, 8, 7, 3, 2, 1, 3, 5, 6],
      "5": [1, 2, 4, 9, 8, 1, 3, 5, 6],
      "6": [4, 5, 6, 6, 9, 1, 2, 3, 4],
      "7": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "8": [1, 2, 4, 9, 8, 1, 3, 5, 6],
      "9": [8, 2, 4, 9, 7, 1, 3, 2, 6],
    }
    const position: number = 6
    const squareId: number = 9
    const result = createHorizontalCheckArray(position, squareId, initialGame)
    expect(result).toEqual([9, 8, 1, 9, 8, 1, 9, 7, 1])
  })

  test("Testing third row position and third row SquareId", () => {
    const initialGame: GameResult = {
      "1": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "2": [0, 0, 0, 9, 8, 1, 1, 2, 3],
      "3": [1, 2, 3, 4, 8, 1, 5, 7, 1],
      "4": [9, 8, 7, 3, 2, 1, 3, 5, 6],
      "5": [1, 2, 4, 9, 8, 1, 3, 5, 6],
      "6": [4, 5, 6, 6, 9, 1, 2, 3, 4],
      "7": [2, 4, 6, 9, 8, 1, 5, 7, 1],
      "8": [1, 2, 4, 9, 8, 1, 3, 5, 6],
      "9": [8, 2, 4, 9, 7, 1, 3, 2, 6],
    }
    const position: number = 8
    const squareId: number = 9
    const result = createHorizontalCheckArray(position, squareId, initialGame)
    expect(result).toEqual([5, 7, 1, 3, 5, 6, 3, 2, 6])
  })
})
