import { Blueprint } from "./blueprint";
import { BlueprintItem } from "./blueprint-item";
import { OniBuilding } from "../io/oni/oni-building";
import { BniBuilding } from "../io/bni/bni-building";
import { MdbBuilding } from "../io/mdb/mdb-building";
import { CameraService } from "../drawing/camera-service";
export declare class BlueprintItemWire extends BlueprintItem {
    static defaultConnections: number;
    private connections_;
    connections: number;
    constructor(id: string);
    importOniBuilding(building: OniBuilding): void;
    importBniBuilding(building: BniBuilding): void;
    importMdbBuilding(original: MdbBuilding): void;
    cleanUp(): void;
    cameraChanged(camera: CameraService): void;
    modulateSelectedTint(camera: CameraService): void;
    private updateDrawPartVisibilityBasedOnConnections;
    toMdbBuilding(): MdbBuilding;
    toBniBuilding(): BniBuilding;
    updateTileables(blueprint: Blueprint): void;
}
//# sourceMappingURL=blueprint-item-wire.d.ts.map