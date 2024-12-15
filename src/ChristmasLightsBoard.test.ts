import { ChristmasLightsBoard } from "./ChristmasLightsBoard";

describe("The Christmas light board,", () => {
  it("has no lights turned on", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(0);
  });

  it("turns on the light at position [0, 0]", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([0, 0], [0, 0]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(1);
  });
});
