import { ChristmasLights } from "./ChristmasLights";

describe("The Christmas light board,", () => {
  it("has no lights turned on", () => {
    const christmasLightsBoard = new ChristmasLights();
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(0);
  });
});
