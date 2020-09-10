import { ComponentVariation, print } from "../../../utils";
import { Component, FaceOverlay } from "../types/components";

const ped = PlayerPedId()

export function setPedComponent({ c, drawableId = 0, textureId = 0, paletteId = 0 }: ComponentVariation) {
    SetPedComponentVariation(ped, c, drawableId, textureId, paletteId)
}

export function setEyeColor(colorIndex: number) {
    SetPedEyeColor(ped, colorIndex)
}

export function setHair(drawableId: number, colorId: number, highlightColor: number) {
    setPedComponent({ c: Component.Hair, drawableId, textureId: 0, paletteId: 0 })
    SetPedHairColor(ped, colorId, highlightColor)
}

export function setHeadOverlay(overlayID: FaceOverlay, index: number, opacity: number) {
    print(`${overlayID}, ${index}, ${opacity}`)
    SetPedHeadOverlay(ped, overlayID, index, opacity)
}

export function getPedDrawablesList(component: Component): string[] {
    const variations = GetNumberOfPedDrawableVariations(ped, component)
    console.log(`variations: ${variations}`)
    return variations.toArray().toIndexedLabel()
}

export function getPedTexturesList(component: Component, drawableId: number) {
    const variations = GetNumberOfPedTextureVariations(ped, component, drawableId)
    console.log(`variations: ${variations}`)
    return variations.toArray().toIndexedLabel()
}

export function getAllColors() {
    return GetNumHairColors().toArray().toIndexedLabel()
}

export function getAllHairVariations() {
    return GetNumberOfPedDrawableVariations(ped, Component.Hair)
        .toArray()
        .map((d, index) => {
            return {
                index,
                textures: GetNumberOfPedTextureVariations(ped, Component.Hair, index)
                    .toArray()
            }
        })
}

