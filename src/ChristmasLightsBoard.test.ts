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

  it("turn on all the lights on the board", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([0, 0], [999, 999]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(1000000);
  });

  it("turns off the first light on the board", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([0, 0], [999, 999]);
    christmasLightsBoard.turnOff([0, 0], [0, 0]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(999999);
  });

  it("turns off the lights on the board at position [500,500], [509,509]", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([0, 0], [999, 999]);
    christmasLightsBoard.turnOff([500, 500], [509, 509]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(999900);
  });

  it("turns off all the lights on the board", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([0, 0], [999, 999]);
    christmasLightsBoard.turnOff([0, 0], [999, 999]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(0);
  });

  it("Toggle the board with the first light turned on", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.toggle([0, 0], [0, 0]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(2);
  });

  it("Toggle the board with the lights at position [500,500], [509,509] turned on", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.toggle([500, 500], [509, 509]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(200);
  });

  it("Toggle the board with all lights turned on", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.toggle([0, 0], [999, 999]);
    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(2000000);
  });

  it("test: toggle lights and turn off/on specific lights correctly", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.toggle([0, 0], [2, 2]);
    christmasLightsBoard.turnOff([1, 1], [1, 1]);
    christmasLightsBoard.turnOff([1, 1], [1, 1]);
    christmasLightsBoard.turnOn([1, 1], [1, 1]);

    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(17);
  });

  it("the light cannot have a brightness less than zero", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOff([0, 0], [0, 0]);

    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(0);
  });

  it("verify correct number of lights after multiple on/off/toggle actions", () => {
    const christmasLightsBoard = new ChristmasLightsBoard();

    christmasLightsBoard.turnOn([887, 9], [959, 629]);
    christmasLightsBoard.turnOn([454, 398], [844, 448]);
    christmasLightsBoard.turnOff([539, 243], [559, 965]);
    christmasLightsBoard.turnOff([370, 819], [676, 868]);
    christmasLightsBoard.turnOff([145, 40], [370, 997]);
    christmasLightsBoard.turnOff([301, 3], [808, 453]);
    christmasLightsBoard.turnOn([351, 678], [951, 908]);
    christmasLightsBoard.toggle([720, 196], [897, 994]);
    christmasLightsBoard.toggle([831, 394], [904, 860]);

    const numberOfLights = christmasLightsBoard.getLightsOn();

    expect(numberOfLights).toEqual(539560);
  });
});
