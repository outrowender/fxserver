import * as NativeUI from '../../../lib/nativeui/NativeUi'
import { Amenu } from '../types/amenu'
import { print } from '../../../utils'
import { daddies, mothers } from '../resources/parents'
import { setPlayerinheritance } from '../controllers/inheritance.controller'

print('carrega o menu1')

export function inheritanceMenuBuilder(): Amenu {
    const shapeRange = [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1]

    const item = new NativeUI.UIMenuItem('Parentesco', 'Selecione o herança genética do seu personagem')
    const menu = new NativeUI.Menu('Parentesco', 'Herança genética', new NativeUI.Point(50, 50))

    const momItem = new NativeUI.UIMenuListItem('Mãe', 'Mãe do personagem', new NativeUI.ItemsCollection(mothers))
    const dadItem = new NativeUI.UIMenuListItem('Pai', 'Pai do personagem', new NativeUI.ItemsCollection(daddies))
    const faceShape = new NativeUI.UIMenuSliderItem('Formato do rosto', shapeRange, 0, 'Deixa mais parecido com a mãe ou o pai', true)
    const bodyShape = new NativeUI.UIMenuSliderItem('Cor da pele', shapeRange, 0, 'Deixa mais parecido com a mãe ou o pai', true)

    menu.AddItem(momItem)
    menu.AddItem(dadItem)
    menu.AddItem(faceShape)
    menu.AddItem(bodyShape)

    item.RightBadge = NativeUI.BadgeStyle.ArrowRight
    item.Enabled = true

    menu.ListChange.on((item: NativeUI.UIMenuListItem) =>
        setPlayerinheritance(momItem.Index, dadItem.Index, shapeRange[faceShape.Index], shapeRange[bodyShape.Index])
    )

    menu.SliderChange.on((item: NativeUI.UIMenuSliderItem) =>
        setPlayerinheritance(momItem.Index, dadItem.Index, shapeRange[faceShape.Index], shapeRange[bodyShape.Index])
    )

    return { menu, item }
}