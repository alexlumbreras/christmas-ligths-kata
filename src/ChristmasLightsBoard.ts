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
        const isBoardLightOn = boardLight === 1;
        return isBoardLightOn;
      });
    const numberOfLightsOn = lightsBoard.length;

    return numberOfLightsOn;
  }

  public turnOn(initialCoordinates: number[], finalCoordinates: number[]) {
    return (this.christmasLightsBoard[initialCoordinates[0]][
      initialCoordinates[1]
    ] = 1);
  }
}
