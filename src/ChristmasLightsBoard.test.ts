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

  it("turn on the first column of lights on the board", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([0, 0], [999, 0]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(1000);
  });

  it("turn on the lights on the board at position [0,0], [1,1]", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([0, 0], [1, 1]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(4);
  });

  it("turn on the lights on the board at position [500,500], [509,509]", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([500, 500], [509, 509]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(100);
  });
});
