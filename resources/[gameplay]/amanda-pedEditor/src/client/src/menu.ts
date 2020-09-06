import * as NativeUI from '../../lib/nativeui/NativeUi'
import { print } from '../../utils';
import { editorMenuBuilder } from './menuBuilders';
import { resetCamera, pointCameraToFullBody } from './camera';
import { playAnimRaiseWrist, stopAllAnimations } from './animations'

export function startMenu(close: (boolean) => void) {

    const menu = new NativeUI.Menu("Ped Editor", "outrowender", new NativeUI.Point(50, 50))

    editorMenuBuilder(menu).forEach(element => {
        element.menu ? menu.AddSubMenu(element.menu, element.item) : menu.AddItem(element.item)
    })

    menu.IndexChange.on(index => {
        print(`index: ${index}`)
    })

    menu.ItemSelect.on((item: NativeUI.UIMenuItem) => {
        print(`selected: ${item.Text}`)
    })

    menu.MenuOpen.on(() => openMenu())
    menu.MenuClose.on(() => closeMenu())
    menu.Open()
}

function closeMenu() {
    resetCamera()
    stopAllAnimations()
    FreezeEntityPosition(PlayerPedId(), false);
}

function openMenu() {
    pointCameraToFullBody()
    FreezeEntityPosition(PlayerPedId(), true);
}