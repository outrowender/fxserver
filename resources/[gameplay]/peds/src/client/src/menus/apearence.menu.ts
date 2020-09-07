import * as NativeUI from '../../../lib/nativeui/NativeUi'
import { Amenu } from '../types/amenu'

export function apearenceMenuBuilder(): Amenu {
    const item = new NativeUI.UIMenuItem('Aparência', 'Opções relacionadas a aparência do seu personagem')
    const menu = new NativeUI.Menu('Aparência', 'Aparência do personagem', new NativeUI.Point(50, 50))

    menu.AddItem(new NativeUI.UIMenuListItem('Olhos', 'olhos',
        new NativeUI.ItemsCollection(['Sua', 'admin', 'puta'])
    ))
    menu.AddItem(new NativeUI.UIMenuListItem('Cor do cu', 'Cor do cu',
        new NativeUI.ItemsCollection(['Sua', 'admin', 'puto'])
    ))

    item.RightBadge = NativeUI.BadgeStyle.ArrowRight
    item.Enabled = false

    //SetPedFaceFeature

    return { menu, item }
}