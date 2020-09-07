import * as NativeUI from '../../lib/nativeui/NativeUi'
import { editorMenuBuilder } from './menu.builder'
import { resetCamera, pointCameraToFullBody } from './camera/camera'
import { stopAllAnimations } from './animations/animations'

export function startMenu(close: (boolean) => void) {

    const menu = new NativeUI.Menu("Ped Editor", "outrowender", new NativeUI.Point(50, 50))

    editorMenuBuilder.filter(e => e).forEach(element => {
        element.menu ? menu.AddSubMenu(element.menu, element.item) : menu.AddItem(element.item)
    })

    //call action defined on menuBuilder
    menu.ListChange.on((item: NativeUI.UIMenuListItem) => item.Data.action())

    menu.MenuOpen.on(() => openMenu())
    menu.MenuClose.on(() => closeMenu())
    menu.Open()
}

function openMenu() {
    pointCameraToFullBody()

    /*  currentTick = setTick(async () => {
         DisableAllControlActions(0)
         HideHudComponentThisFrame(19)
         HideHudComponentThisFrame(20)
         await sleep(0)
     }) */
}

function closeMenu() {
    resetCamera()
    stopAllAnimations()
    //clearTick(currentTick)
}

