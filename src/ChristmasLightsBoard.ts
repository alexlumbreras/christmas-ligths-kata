export class ChristmasLightsBoard {
  static readonly COLUMNS = 1000;

  private christmasLightsBoard: number[];

  constructor() {
    this.christmasLightsBoard = new Array(ChristmasLightsBoard.COLUMNS).fill(0);
  }

  public getLightsOn(): number {
    return this.christmasLightsBoard.filter((column) => column === 1).length;
  }
}
