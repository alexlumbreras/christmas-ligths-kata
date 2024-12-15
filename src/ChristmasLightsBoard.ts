export class ChristmasLightsBoard {
  static readonly COLUMNS = 100;
  public christmasLightsBoard: number[];

  constructor() {
    this.christmasLightsBoard = new Array(ChristmasLightsBoard.COLUMNS).fill(0);
  }

  public getLightsOn(): number {
    const christmasLights = this.christmasLightsBoard.filter(
      (column) => column === 1
    ).length;

    return christmasLights;
  }
}
