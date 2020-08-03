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

    public static getBaseTexture(imageId: string): PIXI.BaseTexture | undefined
    {
      let imageSource: ImageSource | undefined = ImageSource.imageSourcesMapPixi.get(imageId);

      if (imageSource == null) return undefined;

      if (imageSource.baseTexture == null) {
        imageSource.baseTexture = PixiPolyfill.pixiPolyfill.getNewBaseTexture(imageSource.imageUrl);
      }
     
      return imageSource.baseTexture;
    }

    public static getBaseTextureElement(imageId: string, imgElement: any): PIXI.BaseTexture | undefined
    {
      let imageSource: ImageSource | undefined = ImageSource.imageSourcesMapPixi.get(imageId);

      if (imageSource == null) return undefined;

      if (imageSource.baseTexture == null) {
        imageSource.baseTexture = PixiPolyfill.pixiPolyfill.getNewBaseTextureElement(imgElement);
      }
     
      return imageSource.baseTexture;
    }

    public static getUrl(imageId: string) {
      let imageSource: ImageSource | undefined = ImageSource.imageSourcesMapPixi.get(imageId);

      if (imageSource == null) return undefined;

      return imageSource.imageUrl;
    }

    public static setUrl(imageId: string, imageUrl: string) {
      let imageSource: ImageSource | undefined = ImageSource.imageSourcesMapPixi.get(imageId);

      if (imageSource != null) imageSource.imageUrl = imageUrl;
    }
}