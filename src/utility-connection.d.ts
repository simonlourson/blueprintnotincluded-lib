import { Vector2 } from "./vector2";
import { ConnectionType } from "./enums/connection-type";
import { Overlay } from "./enums/overlay";
import { ZIndex } from "./enums/z-index";
export interface UtilityConnection {
    type: ConnectionType;
    offset: Vector2;
    isSecondary: boolean;
}
export declare class ConnectionSprite {
    spriteInfoId: string;
    color: number;
}
export declare class ConnectionHelper {
    static getConnectionOverlay(connectionType: ConnectionType): Overlay;
    static getConnectionSprite(connectionType: UtilityConnection): ConnectionSprite;
    static getOverlayFromLayer(sceneLayer: ZIndex): Overlay;
}
//# sourceMappingURL=utility-connection.d.ts.map