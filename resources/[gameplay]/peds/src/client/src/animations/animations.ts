import { f } from "../../../utils";

export function stopAllAnimations() {
    ClearPedTasks(PlayerPedId())
}

export function playAnimRaiseWrist() {
    TaskPlayAnim(PlayerPedId(), "anim@random@shop_clothes@watches", "BASE", f(4), f(-4), -1, 1, 0, false, false, false);
}