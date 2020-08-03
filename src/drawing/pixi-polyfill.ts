var PIXI = require('../pixi-polyfill/')

export class PixiPolyfill {

    public static backend: boolean = false;
    static pixiPolyfill: PixiPolyfill = new PixiPolyfill();
    pixiApp: PIXI.Application

    constructor() {
    
      let options = {
        forceCanvas: true,
        preserveDrawingBuffer: true
      }
      this.pixiApp = new PIXI.Application(options);
      //console.log({ "PIXI.Application": !!this.pixiApp });
      //console.log({ canvas: this.pixiApp.view });
      //document.body.appendChild(this.pixiApp.view);
    }

    public getNewContainer(): PIXI.Container {
        return new PIXI.Container();
    }

    public getNewBaseTexture(imageUrl: string): PIXI.BaseTexture {
        //et debugUrl = 'http://localhost:3000/'+imageUrl;
        //console.log(debugUrl)
        let baseTexture = new PIXI.BaseTexture(imageUrl);
        //console.log(baseTexture)
        return baseTexture;
    }

    public getNewBaseTextureElement(imageElement: any): PIXI.BaseTexture {
        let baseTexture = new PIXI.BaseTexture(imageElement);
        //console.log(baseTexture)
        return baseTexture;
    }

    public getNewRectangle(x1: number, y1: number, x2: number, y2: number) {
        return new PIXI.Rectangle(x1, y1, x2, y2);
    }

    public getNewTexture(baseTex: PIXI.BaseTexture, rectangle: PIXI.Rectangle) {
        return new PIXI.Texture(baseTex, rectangle);
    }

    public getNewSprite(texture: PIXI.Texture) {
        return PIXI.Sprite.from(texture);
    }

    public getNewGraphics() {
        return new PIXI.Graphics();
    }

    public getNewBaseRenderTexture(options: any) {
        return new PIXI.BaseRenderTexture(options);
    }

    public getNewRenderTexture(baseRenderTexture: PIXI.BaseRenderTexture) {
        return new PIXI.RenderTexture(baseRenderTexture);
    }
}