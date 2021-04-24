import EasyDraw from "./EasyDraw.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.drawer = new EasyDraw({ ctx: this.ctx });
    this.drawSky();
  }

  drawSky() {
    for (var j = 1; j < 5000; j++) {
      this.ctx.fillStyle = "rgb(250, 252, 255)";

      const x = Math.floor(Math.random() * this.canvas.width);
      const y = Math.floor(Math.random() * this.canvas.height);
      const min = 1;
      const max = 5;
      const r = Math.random() * (max - min) + min;
      const angle = Math.random() * 180;
      const sharpness = Math.random() * (50 - 20) + 20;
      this.drawer.moveTo(x, y);
      this.drawer.rotate(angle);

      this.drawStar(r, sharpness);
    }

    this.ctx.fill();
  }

  drawStar(r, sharpness) {
    const smallAngle = 180 - sharpness;
    const bigAngle = 288 - sharpness - 180;

    for (let i = 0; i < 5; i++) {
      this.drawer.lineForward(r);
      this.drawer.rotate(smallAngle);
      this.drawer.lineForward(r);
      this.drawer.rotate(-bigAngle);
    }
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);
  }
}

window.onload = () => {
  new App();
};
