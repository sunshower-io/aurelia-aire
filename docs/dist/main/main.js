"use strict";
exports.__esModule = true;
var Velocity = require("velocity-animate");
var Main = /** @class */ (function () {
    function Main() {
        this.size = 500;
        this.center = { x: 0, y: 250 };
        this.minSegmentHeight = 5;
        this.groundHeight = this.size - 20;
        // private color = "hsl(180, 80%, 80%)";
        this.color = "#660066";
        this.roughness = 0.9;
        this.maxDifference = this.size / 5;
        this.count = 0;
        this.maxCount = 10;
    }
    Main.prototype.configureRouter = function (cfg, router) {
        cfg.map([
            {
                nav: true,
                title: "Home",
                route: ['', 'home'],
                moduleId: 'aire-demo/main/content'
            }, {
                nav: true,
                title: 'docs',
                route: 'docs',
                moduleId: 'aire-demo/index'
            }
        ]);
    };
    Main.prototype.resolveBody = function () {
        var c = this.container;
        for (; !(c || c.classList.contains('aire-body')); c = c.parentElement) {
        }
        return c;
    };
    Main.prototype.attached = function () {
        this.loading = false;
        var v = Velocity.animate(this.page, 'transition.fadeIn', { duration: 2000 });
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
    };
    Main.prototype.render = function () {
        var _this = this;
        var ctx = this.context, size = this.width;
        // ctx.shadowBlur = 0;
        ctx.globalCompositeOperation = "source-over";
        ctx.fillRect(0, 0, size, size);
        // ctx.globalCompositeOperation = "lighter";
        ctx.shadowBlur = 100;
        var lightning = this.createLightning();
        ctx.beginPath();
        for (var i = 0; i < lightning.length; i++) {
            ctx.lineTo(lightning[i].x, lightning[i].y);
        }
        ctx.stroke();
        if (this.count++ < this.maxCount) {
            setTimeout(function () {
                requestAnimationFrame(_this.render.bind(_this));
            }, 50);
        }
    };
    Main.prototype.createLightning = function () {
        var groundHeight = this.groundHeight, center = this.center, maxDifference = this.maxDifference, minSegmentHeight = this.minSegmentHeight, segmentHeight = groundHeight - center.y, roughness = this.roughness, lightning = [];
        lightning.push({ x: center.x, y: this.height * Math.random() / 5 });
        lightning.push({ x: this.width, y: this.height * Math.random() });
        var currDiff = maxDifference;
        while (segmentHeight > minSegmentHeight) {
            var newSegments = [];
            for (var i = 0; i < lightning.length - 1; i++) {
                var start = lightning[i], end = lightning[i + 1], midX = (start.x + end.x) / 2, newX = midX + (Math.random() * 2 - 1) * currDiff;
                newSegments.push(start, { x: newX, y: (start.y + end.y) / 2 });
            }
            newSegments.push(lightning.pop());
            lightning = newSegments;
            currDiff /= roughness;
            segmentHeight /= 2;
        }
        return lightning;
    };
    Main.prototype.setup = function () {
        var context = this.canvas.getContext('2d'), size = this.size, color = this.color;
        context.globalCompositeOperation = 'destination-atop';
        context.strokeStyle = color;
        context.shadowColor = color;
        context.fillStyle = color;
        context.fillRect(0, 0, this.width, this.height);
        // context.fillStyle = 'rgba(255,255,255,100)';
        // context.fillStyle = "hsla(328, 100%, 20%, 1)";
        context.fillStyle = '#ffffff';
        this.context = context;
    };
    return Main;
}());
exports.Main = Main;

//# sourceMappingURL=main.js.map
