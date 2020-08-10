"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vector2_1 = require("../vector2");
class BSpriteInfo {
    constructor() {
        this.name = '';
        this.textureName = '';
        this.isIcon = false;
        this.uvMin = new vector2_1.Vector2();
        this.uvSize = new vector2_1.Vector2();
        this.realSize = new vector2_1.Vector2();
        this.pivot = new vector2_1.Vector2();
    }
    // Used when repacking textures
    static clone(source) {
        let returnValue = new BSpriteInfo();
        returnValue.name = source.name;
        returnValue.textureName = source.textureName;
        returnValue.isIcon = source.isIcon;
        let uvMin = vector2_1.Vector2.clone(source.uvMin);
        if (uvMin == null)
            uvMin = new vector2_1.Vector2();
        returnValue.uvMin = uvMin;
        let uvSize = vector2_1.Vector2.clone(source.uvSize);
        if (uvSize == null)
            uvSize = new vector2_1.Vector2();
        returnValue.uvSize = uvSize;
        let realSize = vector2_1.Vector2.clone(source.realSize);
        if (realSize == null)
            realSize = new vector2_1.Vector2();
        returnValue.realSize = realSize;
        let pivot = vector2_1.Vector2.clone(source.pivot);
        if (pivot == null)
            pivot = new vector2_1.Vector2();
        returnValue.pivot = pivot;
        return returnValue;
    }
}
exports.BSpriteInfo = BSpriteInfo;
