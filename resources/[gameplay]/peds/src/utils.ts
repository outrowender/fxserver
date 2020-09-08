import { Component } from "./client/src/types/components";

export function sleep(timeout: number) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export const f = (value: number) => (value + 0.00001)

export const print = (value: string): string => {
    console.log(value)
    TriggerEvent('chat:addMessage', {
        templateId: 'print',
        multiline: true,
        args: [value]
    })
    return value
}

export function convertToArray(quantity: number) {
    return Array.from({ length: quantity }, (_, i) => i)
}

export interface ComponentVariation {
    c: Component,
    drawableId?: number,
    textureId?: number,
    paletteId?: number
}

declare global {
    interface Array<T> {
        toIndexLabel(): string[];
    }

    interface Number {
        toArray(): any[]
    }
}

Array.prototype.toIndexLabel = function () {
    const _self = this as any[]
    return _self.map((x, i) => `#${i + 1}/${_self.length}`)
}

Number.prototype.toArray = function () {
    const _self = this as number
    return Array.from({ length: _self }, (_, i) => i)
}