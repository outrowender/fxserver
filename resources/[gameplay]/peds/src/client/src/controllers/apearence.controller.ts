import { ComponentVariation, print } from "../../../utils";
import { Component } from "../types/components";

export function setPedComponent({ c, drawableId = 0, textureId = 0, paletteId = 0 }: ComponentVariation) {
    SetPedComponentVariation(PlayerPedId(), c, drawableId, textureId, paletteId)
}

export function setEyeColor(colorIndex: number) {
    SetPedEyeColor(PlayerPedId(), colorIndex)
}

export function getPedDrawableVariation(component: Component) {
    return GetPedDrawableVariation(PlayerPedId(), component)
}

export function getPedDrawablesList(component: Component): string[] {
    const variations = GetNumberOfPedDrawableVariations(PlayerPedId(), component)
    return variations.toArray().toIndexLabel()
}

export function getPedTexturesList(component: Component, drawableId: number) {
    const variations = GetNumberOfPedTextureVariations(PlayerPedId(), component, drawableId)
    return variations.toArray().toIndexLabel()
}

export function setHairColor(drawableId: number, colorId: number, highlightColor: number) {
    setPedComponent({ c: Component.Hair, drawableId, textureId: 0, paletteId: 0 })
    SetPedHairColor(PlayerPedId(), colorId, highlightColor)
}

export function getAllTexturesFromDrawable(component: Component) {

}

export function getAllColors() {
    return GetNumHairColors().toArray().toIndexLabel()
}

