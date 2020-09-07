import { Component } from "./client/src/components/components";

export function sleep(timeout: number) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export const f = (value: number) => (value + 0.00001)

export function setPedComponent({ c, drawableId = 0, textureId = 0, paletteId = 1 }: ComponentVariation) {
    SetPedComponentVariation(GetPlayerPed(-1), c, drawableId, textureId, paletteId)
}

export const print = (value: string): string => {
    console.log(value)
    TriggerEvent('chat:addMessage', {
        templateId: 'print',
        multiline: true,
        args: [value]
    })
    return value
}

export interface ComponentVariation {
    c: Component,
    drawableId?: number,
    textureId?: number,
    paletteId?: number
}