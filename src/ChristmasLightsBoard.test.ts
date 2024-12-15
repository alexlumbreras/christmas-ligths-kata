import { ChristmasLightsBoard } from "./ChristmasLightsBoard";

describe("The Christmas light board,", () => {
  it("has no lights turned on", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(0);
  });
});
