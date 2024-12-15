type LightConfig = "turnOn" | "turnOff" | "toggle";

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
    const numberOfLightsOn = this.christmasLightsBoard
      .flat()
      .reduce(
        (accumulator, lightValue) =>
          accumulator + (this.isLightOff(lightValue) ? 0 : lightValue),
        0
      );

    return numberOfLightsOn;
  }

  public turnOn(initialCoordinates: number[], finalCoordinates: number[]) {
    this.modifyLightsBoard(initialCoordinates, finalCoordinates, "turnOn");
  }

  public turnOff(initialCoordinates: number[], finalCoordinates: number[]) {
    this.modifyLightsBoard(initialCoordinates, finalCoordinates, "turnOff");
  }

  public toggle(initialCoordinates: number[], finalCoordinates: number[]) {
    this.modifyLightsBoard(initialCoordinates, finalCoordinates, "toggle");
  }

  private modifyLightsBoard(
    [initialRow, initialColumn]: number[],
    [finalRow, finalColumn]: number[],
    action: LightConfig
  ) {
    for (let rowIndex: number = initialRow; rowIndex <= finalRow; rowIndex++) {
      for (
        let columnIndex: number = initialColumn;
        columnIndex <= finalColumn;
        columnIndex++
      ) {
        if (action === "turnOn") {
          this.incrementLightBright(rowIndex, columnIndex, 1);
        }

        if (action === "turnOff") {
          this.decrementLightBright(rowIndex, columnIndex, 1);
        }

        if (action === "toggle") {
          this.incrementLightBright(rowIndex, columnIndex, 2);
        }
      }
    }
  }

  private isLightOff(lightCell: number): boolean {
    return lightCell === 0;
  }

  private incrementLightBright(row: number, column: number, value: number) {
    this.christmasLightsBoard[row][column] =
      this.christmasLightsBoard[row][column] + value;
  }

  private decrementLightBright(row: number, column: number, value: number) {
    if (this.isLightOff(this.christmasLightsBoard[row][column])) {
      return;
    }
    this.christmasLightsBoard[row][column] =
      this.christmasLightsBoard[row][column] - value;
  }
}
