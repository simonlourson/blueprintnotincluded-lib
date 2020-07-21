import { Vector2 } from "../vector2";
import { SpriteTag } from "../enums/sprite-tag";

export class BSpriteModifier
{
  name: string = '';
  spriteInfoName: string = '';

  translation: Vector2 = new Vector2();
  scale: Vector2 = new Vector2();
  rotation: number = 0;
  tags: SpriteTag[] = [];

  // This is used by database editing stuff
  public static clone(original: BSpriteModifier) {
    let returnValue = new BSpriteModifier();

    returnValue.name = original.name;
    returnValue.spriteInfoName = original.spriteInfoName;
    returnValue.translation = Vector2.clone(original.translation);
    returnValue.scale = Vector2.clone(original.scale);
    returnValue.rotation = original.rotation;
    
    returnValue.tags = [];
    for (let tag of original.tags) returnValue.tags.push(tag);

    return returnValue;
  }
}