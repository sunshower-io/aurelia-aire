import * as Velocity                 from 'velocity-animate';
import {Router, RouterConfiguration} from "aurelia-router";

export class Main {

  loading : boolean;

  size = 500;
  canvas : HTMLCanvasElement;

  center = {x : 0, y : 250};

  page : HTMLDivElement;
  overlay : HTMLDivElement;

  private minSegmentHeight = 5;
  private groundHeight = this.size - 20;
  // private color = "hsl(180, 80%, 80%)";
  color = "#660066";
  private roughness = 0.9;

  private maxDifference = this.size / 5;
  private container : HTMLDivElement;

  private context : CanvasRenderingContext2D;

  width : number;
  height : number;


  configureRouter(cfg : RouterConfiguration, router : Router) {
    cfg.map([
      {
        nav      : true,
        title    : "Home",
        route    : ['', 'home'],
        moduleId : 'aire-demo/main/content'

      }, {
        nav      : true,
        title    : 'docs',
        route    : 'docs',
        moduleId : 'aire-demo/index'
      }
    ]);
  }

  private resolveBody() : HTMLElement {
    let c : HTMLElement = this.container;
    for (; !
             (c || c.classList.contains('aire-body'));
           c = c.parentElement
    ) {


    }
    return c;
  }

  attached() {
    this.loading = false;
    let v = Velocity.animate(this.page, 'transition.fadeIn', {duration : 2000});


    // let canvas = this.canvas,
    //   parent = this.resolveBody();
    // let height = parent.clientHeight,
    //   width = parent.clientWidth;
    // canvas.width = width;
    // canvas.height = height;
    // this.width = width;
    // this.height = height;


    // // canvas.width = this.size;
    // // canvas.height = this.size;
    // this.setup();
    //
    // this.render();
  }

  count = 0;
  maxCount = 10;

  render() {
    let ctx = this.context,
      size = this.width;
    // ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillRect(0, 0, size, size);
    // ctx.globalCompositeOperation = "lighter";
    ctx.shadowBlur = 100;
    let lightning = this.createLightning();
    ctx.beginPath();
    for (let i = 0; i < lightning.length; i++) {
      ctx.lineTo(lightning[i].x, lightning[i].y);
    }
    ctx.stroke();
    if (this.count++ < this.maxCount) {
      setTimeout(() => {
        requestAnimationFrame(this.render.bind(this));
      }, 50);
    }
  }

  createLightning() {
    let
      groundHeight = this.groundHeight,
      center = this.center,
      maxDifference = this.maxDifference,
      minSegmentHeight = this.minSegmentHeight,
      segmentHeight = groundHeight - center.y,
      roughness = this.roughness,
      lightning = [];
    lightning.push({x : center.x, y : this.height * Math.random() / 5});
    lightning.push({x : this.width, y : this.height * Math.random()});
    let currDiff = maxDifference;
    while (segmentHeight > minSegmentHeight) {
      let newSegments = [];
      for (let i = 0; i < lightning.length - 1; i++) {
        let start = lightning[i],
          end = lightning[i + 1],
          midX = (start.x + end.x) / 2,
          newX = midX + (Math.random() * 2 - 1) * currDiff;
        newSegments.push(start, {x : newX, y : (start.y + end.y) / 2});
      }

      newSegments.push(lightning.pop());
      lightning = newSegments;

      currDiff /= roughness;
      segmentHeight /= 2;
    }
    return lightning;
  }

  setup() {
    let context = this.canvas.getContext('2d'),
      size = this.size,
      color = this.color;
    context.globalCompositeOperation = 'destination-atop';
    context.strokeStyle = color;
    context.shadowColor = color;
    context.fillStyle = color;
    context.fillRect(0, 0, this.width, this.height);
    // context.fillStyle = 'rgba(255,255,255,100)';
    // context.fillStyle = "hsla(328, 100%, 20%, 1)";
    context.fillStyle = '#ffffff';
    this.context = context;
  }
}