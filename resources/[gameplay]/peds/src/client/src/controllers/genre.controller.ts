import { sleep, setPedComponent } from "../../../utils"
import { Component } from "../components/components"

export async function setCharacterGender(gender: string) {

    if (!['m', 'f'].includes(gender)) throw new Error('Invalid parameter. Gender must be "m" or "f"')

    const model = `mp_${gender}_freemode_01`

    const modelhashed = GetHashKey(model)
    RequestModel(modelhashed)
    while (!HasModelLoaded(modelhashed)) {
        RequestModel(modelhashed)
        await sleep(0)
    }
    SetPlayerModel(PlayerId(), modelhashed)
    setPedComponent({ c: Component.Accessory })

    if (gender == 'f') {
        setPedComponent({ c: Component.Face, drawableId: 34 })
        setPedComponent({ c: Component.Shoes, drawableId: 1, textureId: 1 })
        setPedComponent({ c: Component.Hair, drawableId: 2, textureId: 2 })
    }

    SetEntityMaxHealth(PlayerPedId(), 200)
    SetEntityHealth(PlayerPedId(), GetEntityMaxHealth(PlayerPedId()))

    SetModelAsNoLongerNeeded(modelhashed)
}