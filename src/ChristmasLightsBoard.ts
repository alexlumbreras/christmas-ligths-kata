export class ChristmasLightsBoard {
  static readonly COLUMNS = 1000;
  static readonly ROWS = 1000;

  private christmasLightsBoard: number[][];

  constructor() {
    this.christmasLightsBoard = Array.from(
      { length: ChristmasLightsBoard.ROWS },
      () => new Array(ChristmasLightsBoard.COLUMNS).fill(0)
    );
  }

  public getLightsOn(): number {
    const lightsBoard = this.christmasLightsBoard
      .flat()
      .filter((boardLight) => {
        const isBoardLightOn = boardLight !== 0;
        return isBoardLightOn;
      });
    const numberOfLightsOn = lightsBoard.reduce(
      (accumulator, lightValue) => accumulator + lightValue,
      0
    );

    return numberOfLightsOn;
  }

  public turnOn(
    [initialRow, initialColumn]: number[],
    [finalRow, finalColumn]: number[]
  ) {
    for (let rowIndex: number = initialRow; rowIndex <= finalRow; rowIndex++) {
      for (
        let columnIndex: number = initialColumn;
        columnIndex <= finalColumn;
        columnIndex++
      ) {
        this.christmasLightsBoard[rowIndex][columnIndex]++;
      }
    }
  }

  public turnOff(
    [initialRow, initialColumn]: number[],
    [finalRow, finalColumn]: number[]
  ) {
    for (let rowIndex: number = initialRow; rowIndex <= finalRow; rowIndex++) {
      for (
        let columnIndex: number = initialColumn;
        columnIndex <= finalColumn;
        columnIndex++
      ) {
        const isLightTurnedOff =
          this.christmasLightsBoard[rowIndex][columnIndex] === 0;
        if (isLightTurnedOff) {
          return;
        }

        this.christmasLightsBoard[rowIndex][columnIndex]--;
      }
    }
  }

  public toogle(
    [initialRow, initialColumn]: number[],
    [finalRow, finalColumn]: number[]
  ) {
    for (let rowIndex: number = initialRow; rowIndex <= finalRow; rowIndex++) {
      for (
        let columnIndex: number = initialColumn;
        columnIndex <= finalColumn;
        columnIndex++
      ) {
        this.christmasLightsBoard[rowIndex][columnIndex] =
          this.christmasLightsBoard[rowIndex][columnIndex] + 2;
      }
    }
  }
}
