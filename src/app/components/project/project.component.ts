import { Component, OnInit } from '@angular/core';
declare var PIXI : any;
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  app : any;
  displacementSprite :any;
  displacementFilter : any;
  constructor() { }

  ngOnInit(): void {
    this.initPixi();
  }

  initPixi() {
    this.app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
    document.body.appendChild(this.app.view);
    var image = new PIXI.Sprite.from("../../assets/images/1.jpg");
    image.width = window.innerWidth;
    image.height = window.innerHeight;
    this.app.stage.addChild(image);
    this.displacementSprite = new PIXI.Sprite.from("../../assets/images/cloud.png");
    this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);
    this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    this.app.stage.addChild(this.displacementSprite);
    this.app.stage.filters = [this.displacementFilter];
    this.app.renderer.view.style.transform = 'scale(1.02)';
    this.displacementSprite.scale.x = 4;
    this.displacementSprite.scale.y = 4;
    this.animate();
  }
   animate() {
    this.displacementSprite.x += 10;
    this.displacementSprite.y += 4;
    requestAnimationFrame(this.animate.bind(this));
  }
}
