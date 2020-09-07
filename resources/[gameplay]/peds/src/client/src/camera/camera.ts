import { f } from "../../../utils"

export function resetCamera() {
    RenderScriptCams(false, true, 1000, false, false)
}

export function pointCameraToFullBody() {
    const [x, y, z] = GetOffsetFromEntityInWorldCoords(PlayerPedId(), f(0), f(2.8), f(.3))
    const camera = CreateCam('DEFAULT_SCRIPTED_CAMERA', true)
    SetCamActive(camera, true)
    SetCamCoord(camera, x, y, z)
    const [pedx, pedy, pedz] = GetEntityCoords(PlayerPedId())
    PointCamAtCoord(camera, pedx, pedy, pedz)
    RenderScriptCams(true, true, 1000, false, false)
}

export function pointCameraToHead() {
    const [x, y, z] = GetOffsetFromEntityInWorldCoords(PlayerPedId(), f(0), f(0.9), f(.65))
    const camera = CreateCam('DEFAULT_SCRIPTED_CAMERA', true)
    SetCamActive(camera, true)
    SetCamCoord(camera, x, y, z)
    const [pedx, pedy, pedz] = GetEntityCoords(PlayerPedId())
    PointCamAtCoord(camera, pedx, pedy, pedz + f(.6))
    RenderScriptCams(true, true, 1000, false, false)
}