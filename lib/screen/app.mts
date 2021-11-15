import blessed from "blessed";
import { Cloud, cloudBox } from "./cloud-box.mjs";
import { Rain, rainBox } from "./rain-box.mjs";
import { Sun, sunBox } from "./sun-box.mjs";
import { Temp, tempBox } from "./temp-box.mjs";
import { Wind, windBox } from "./wind-box.mjs";

export class App {
  screen: blessed.Widgets.Screen;

  constructor() {
    // Create a screen object.
    this.screen = blessed.screen({
      smartCSR: true,
    });

    this.screen.title = "Weather";

    // Quit on Escape, q, or Control-C.

    this.screen.key(["escape", "q", "C-c"], function () {
      return process.exit(0);
    });

    // Render the screen.
    this.screen.render();
  }

  addRain(rain: Rain) {
    this.screen.append(rainBox(rain));
    this.screen.render();
  }
  addSun(sun: Sun) {
    this.screen.append(sunBox(sun));
    this.screen.render();
  }
  addWind(wind: Wind) {
    this.screen.append(windBox(wind));
    this.screen.render();
  }
  addTemp(temp: Temp) {
    this.screen.append(tempBox(temp));
    this.screen.render();
  }
  addCloud(cloud: Cloud) {
    this.screen.append(cloudBox(cloud));
    this.screen.render();
  }
}
