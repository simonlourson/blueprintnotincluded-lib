import { Vector2 } from "../vector2";

export class BSpriteInfo
{
  name: string = '';
  textureName: string = '';
  isIcon: boolean = false;

  uvMin: Vector2 = new Vector2();
  uvSize: Vector2 = new Vector2();
  realSize: Vector2 = new Vector2();
  pivot: Vector2 = new Vector2();

  // Used when repacking textures
  static clone(source: BSpriteInfo): BSpriteInfo
  {
    let returnValue: BSpriteInfo = new BSpriteInfo();

    returnValue.name = source.name;
    returnValue.textureName = source.textureName;
    returnValue.isIcon = source.isIcon;

    let uvMin = Vector2.clone(source.uvMin); if (uvMin == null) uvMin = new Vector2();
    returnValue.uvMin = uvMin;
    let uvSize = Vector2.clone(source.uvSize); if (uvSize == null) uvSize = new Vector2();
    returnValue.uvSize = uvSize;
    let realSize = Vector2.clone(source.realSize); if (realSize == null) realSize = new Vector2();
    returnValue.realSize = realSize;
    let pivot = Vector2.clone(source.pivot); if (pivot == null) pivot = new Vector2();
    returnValue.pivot = pivot;

    return returnValue;
  }
}