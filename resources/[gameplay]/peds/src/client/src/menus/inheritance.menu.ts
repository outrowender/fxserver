import * as NativeUI from '../../../lib/nativeui/NativeUi'
import { Amenu } from '../types/amenu'
import { print } from '../../../utils'

export function inheritanceMenuBuilder(): Amenu {
    const item = new NativeUI.UIMenuItem('Parentesco', 'Selecione o herança genética do seu personagem')
    const menu = new NativeUI.Menu('Parentesco', 'Herança genética', new NativeUI.Point(50, 50))

    const dadItem = new NativeUI.UIMenuListItem('Pai', 'Pai do personagem',
        new NativeUI.ItemsCollection(['Sua', 'admin', 'puto'])
    )
    menu.AddItem(dadItem)

    const momItem = new NativeUI.UIMenuListItem('Mãe', 'Mãe do personagem',
        new NativeUI.ItemsCollection(['Sua', 'admin', 'puta'])
    )
    menu.AddItem(momItem)

    const faceShape = new NativeUI.UIMenuSliderItem('Formato do rosto', [0, 1, 2, 3, 4], 2, 'Deixa mais parecido com a pai ou a mãe', true)
    menu.AddItem(faceShape)

    const bodyShape = new NativeUI.UIMenuSliderItem('Formato do corpo', [0, 1, 2, 3, 4], 2, 'Deixa mais parecido com a pai ou a mãe', true)
    menu.AddItem(bodyShape)

    item.RightBadge = NativeUI.BadgeStyle.ArrowRight
    item.Enabled = true

    menu.ListChange.on((item: NativeUI.UIMenuListItem) => print('mudou heranca'))

    return { menu, item }
}