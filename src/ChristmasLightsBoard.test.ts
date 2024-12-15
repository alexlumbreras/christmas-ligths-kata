import { ChristmasLightsBoard } from "./ChristmasLightsBoard";

describe("The Christmas light board,", () => {
  it("has no lights turned on", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(0);
  });

  it("turns on the first light on the board", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([0, 0], [0, 0]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(1);
  });

  it("turn on the first row of lights on the board", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([0, 0], [0, 999]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(1000);
  });
});
