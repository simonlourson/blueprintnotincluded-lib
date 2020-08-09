import { PixiPolyfill } from "./pixi-polyfill";

declare var PIXI: any;

export class ImageSource
{
    imageId: string;
    imageUrl: string;

    constructor(imageId: string, imageUrl: string)
    {
        this.imageId = imageId;
        this.imageUrl = imageUrl;
    }

    // PIXI stuff
    private static imageSourcesMapPixi: Map<string, ImageSource>;
    public static get keys() { return Array.from(ImageSource.imageSourcesMapPixi.keys()); }
    private baseTexture: PIXI.BaseTexture | undefined;
    public static init()
    { 
      ImageSource.imageSourcesMapPixi = new Map<string, ImageSource>();
    }

    public static AddImagePixi(imageId: string, imageUrl: string)
    {
      let newImageSource = new ImageSource(imageId, imageUrl);
      ImageSource.imageSourcesMapPixi.set(newImageSource.imageId, newImageSource);
    }

    public static isTextureLoaded(imageId: string): boolean {
      let imageSource: ImageSource | undefined = ImageSource.imageSourcesMapPixi.get(imageId);

      if (imageSource == null) return false;

      return imageSource.baseTexture != null;
    }

    public static getBaseTexture(imageId: string): PIXI.BaseTexture | undefined
    {
      let imageSource: ImageSource | undefined = ImageSource.imageSourcesMapPixi.get(imageId);

      if (imageSource == null) return undefined;

      if (imageSource.baseTexture == null) {
        if (!PixiPolyfill.backend) {
          imageSource.baseTexture = PixiPolyfill.pixiPolyfill.getNewBaseTexture(imageSource.imageUrl);
        }
      }
     
      return imageSource.baseTexture;
    }

    public static setBaseTexture(imageId: string, baseTexture: PIXI.BaseTexture)
    {
      let imageSource: ImageSource | undefined = ImageSource.imageSourcesMapPixi.get(imageId);

      if (imageSource == null) return;

      if (imageSource.baseTexture == null) {
        imageSource.baseTexture = baseTexture;
      }
    }

    public static getUrl(imageId: string) {
      let imageSource: ImageSource | undefined = ImageSource.imageSourcesMapPixi.get(imageId);
      if (imageSource == null) throw new Error('ImageSource.getUrl : imageId not found : ' + imageId);
      return imageSource.imageUrl;
    }

    public static setUrl(imageId: string, imageUrl: string) {
      let imageSource: ImageSource | undefined = ImageSource.imageSourcesMapPixi.get(imageId);

      if (imageSource != null) imageSource.imageUrl = imageUrl;
    }
}