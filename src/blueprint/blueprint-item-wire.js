"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blueprint_item_1 = require("./blueprint-item");
const draw_helpers_1 = require("../drawing/draw-helpers");
class BlueprintItemWire extends blueprint_item_1.BlueprintItem {
    constructor(id) {
        super(id);
        this.connections_ = 0;
    }
    get connections() { return this.connections_; }
    set connections(value) {
        if (value != this.connections_)
            this.reloadCamera = true;
        this.connections_ = value;
    }
    importOniBuilding(building) {
        this.connections = building.connections;
        super.importOniBuilding(building);
    }
    importBniBuilding(building) {
        this.connections = building.flags;
        super.importBniBuilding(building);
    }
    importMdbBuilding(original) {
        if (original.connections == undefined)
            this.connections = 0;
        else
            this.connections = original.connections;
        super.importMdbBuilding(original);
    }
    cleanUp() {
        if (this.connections == null)
            this.connections = BlueprintItemWire.defaultConnections;
        super.cleanUp();
        this.updateDrawPartVisibilityBasedOnConnections();
    }
    cameraChanged(camera) {
        super.cameraChanged(camera);
        this.updateDrawPartVisibilityBasedOnConnections();
    }
    modulateSelectedTint(camera) {
        super.modulateSelectedTint(camera);
        this.updateDrawPartVisibilityBasedOnConnections();
    }
    modulateBuildCandidateTint(camera) {
        super.modulateBuildCandidateTint(camera);
        this.updateDrawPartVisibilityBasedOnConnections();
    }
    updateDrawPartVisibilityBasedOnConnections() {
        if (this.drawParts != null)
            for (let drawPart of this.drawParts)
                drawPart.makeEverythingButThisTagInvisible(draw_helpers_1.DrawHelpers.connectionTag[this.connections]);
    }
    toMdbBuilding() {
        let returnValue = super.toMdbBuilding();
        if (this.connections != BlueprintItemWire.defaultConnections)
            returnValue.connections = this.connections;
        return returnValue;
    }
    toBniBuilding() {
        let returnValue = super.toBniBuilding();
        returnValue.flags = this.connections;
        return returnValue;
    }
    updateTileables(blueprint) {
        super.updateTileables(blueprint);
    }
}
BlueprintItemWire.defaultConnections = 0;
exports.BlueprintItemWire = BlueprintItemWire;
