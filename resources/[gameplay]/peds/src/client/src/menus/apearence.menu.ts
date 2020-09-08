import * as NativeUI from '../../../lib/nativeui/NativeUi'
import { Amenu } from '../types/amenu'
import { getPedDrawablesList, setPedComponent, getAllColors, setEyeColor, setHairColor } from '../controllers/apearence.controller'
import { Component } from '../types/components'
import { print } from '../../../utils'

export function apearenceMenuBuilder(): Amenu {
    const opacityRange = [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1]

    const item = new NativeUI.UIMenuItem('Aparência', 'Opções relacionadas a aparência do seu personagem')
    const menu = new NativeUI.Menu('Aparência', 'Aparência do personagem', new NativeUI.Point(50, 50))

    const eyeColor = new NativeUI.UIMenuListItem('Cor dos olhos', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const hairStyle = new NativeUI.UIMenuListItem('Cabelo', 'Escolha um estilo', new NativeUI.ItemsCollection(getPedDrawablesList(Component.Hair)))
    const hairColor = new NativeUI.UIMenuListItem('Cor do cabelo', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))
    const hairHighlight = new NativeUI.UIMenuListItem('Destaque do cabelo', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const blemStyle = new NativeUI.UIMenuListItem('Manchas', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const blemOpacity = new NativeUI.UIMenuSliderItem('Opacidade das manchas', opacityRange, 0, 'Define a intensidade', false)

    const beardStyle = new NativeUI.UIMenuListItem('Barba', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const beardOpacity = new NativeUI.UIMenuSliderItem('Opacidade da barba', opacityRange, 0, 'Define a intensidade', false)
    const beardColor = new NativeUI.UIMenuListItem('Cor da barba', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const eyebrowStyle = new NativeUI.UIMenuListItem('Sobrancelha', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const eyebrowOpacity = new NativeUI.UIMenuSliderItem('Opacidade da sobrancelha', opacityRange, 0, 'Define a intensidade', false)
    const eyebrowColor = new NativeUI.UIMenuListItem('Cor da sobrancelha', 'Escolha uma cor', new NativeUI.ItemsCollection(['style #1']))

    const ageingStyle = new NativeUI.UIMenuListItem('Envelhecimento', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const ageingOpacity = new NativeUI.UIMenuSliderItem('Opacidade do envelhecimento', opacityRange, 0, 'Define a intensidade', false)

    const makeupStyle = new NativeUI.UIMenuListItem('Maquiagem', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const makeupOpacity = new NativeUI.UIMenuSliderItem('Opacidade da maquiagem', opacityRange, 0, 'Define a intensidade', false)
    const makeupColor = new NativeUI.UIMenuListItem('Cor da maquiagem', 'Escolha uma cor', new NativeUI.ItemsCollection(['style #1']))

    const blushStyle = new NativeUI.UIMenuListItem('Blush', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const blushOpacity = new NativeUI.UIMenuSliderItem('Opacidade do blush', opacityRange, 0, 'Define a intensidade', false)
    const blushColor = new NativeUI.UIMenuListItem('Cor do blush', 'Escolha uma cor', new NativeUI.ItemsCollection(['style #1']))

    const complexionStyle = new NativeUI.UIMenuListItem('Semblante', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const complexionOpacity = new NativeUI.UIMenuSliderItem('Opacidade do semblante', opacityRange, 0, 'Define a intensidade', false)

    const sunDamageStyle = new NativeUI.UIMenuListItem('Queimadura de sol', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const sunDamageOpacity = new NativeUI.UIMenuSliderItem('Opacidade da queimadura de sol', opacityRange, 0, 'Define a intensidade', false)

    const lipstickStyle = new NativeUI.UIMenuListItem('Batom', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const lipstickOpacity = new NativeUI.UIMenuSliderItem('Opacidade do batom', opacityRange, 0, 'Define a intensidade', false)
    const lipstickColor = new NativeUI.UIMenuListItem('Cor do batom', 'Escolha uma cor', new NativeUI.ItemsCollection(['style #1']))

    const molesFrecklesStyle = new NativeUI.UIMenuListItem('Sardas e verrugas', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const molesFrecklesOpacity = new NativeUI.UIMenuSliderItem('Opacidade das sardas e verrugas', opacityRange, 0, 'Define a intensidade', false)

    const chestHairStyle = new NativeUI.UIMenuListItem('Cabelo no peito', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const chestHairOpacity = new NativeUI.UIMenuSliderItem('Opacidade do cabelo no peito', opacityRange, 0, 'Define a intensidade', false)
    const chestHairColor = new NativeUI.UIMenuListItem('Cor do cabelo no peito', 'Escolha uma cor', new NativeUI.ItemsCollection(['style #1']))

    const bodyBlemishesStyle = new NativeUI.UIMenuListItem('Manchas no corpo', 'Escolha um estilo', new NativeUI.ItemsCollection(['style #1']))
    const bodyBlemishesOpacity = new NativeUI.UIMenuSliderItem('Opacidade das manchas no corpo', opacityRange, 0, 'Define a intensidade', false)

    menu.AddItem(eyeColor)
    menu.AddItem(hairStyle)
    menu.AddItem(hairColor)
    menu.AddItem(hairHighlight)
    menu.AddItem(blemStyle)
    menu.AddItem(blemOpacity)
    menu.AddItem(beardStyle)
    menu.AddItem(beardOpacity)
    menu.AddItem(beardColor)
    menu.AddItem(eyebrowStyle)
    menu.AddItem(eyebrowOpacity)
    menu.AddItem(eyebrowColor)
    menu.AddItem(ageingStyle)
    menu.AddItem(ageingOpacity)
    menu.AddItem(makeupStyle)
    menu.AddItem(makeupOpacity)
    menu.AddItem(makeupColor)
    menu.AddItem(blushStyle)
    menu.AddItem(blushOpacity)
    menu.AddItem(blushColor)
    menu.AddItem(complexionStyle)
    menu.AddItem(complexionOpacity)
    menu.AddItem(sunDamageStyle)
    menu.AddItem(sunDamageOpacity)
    menu.AddItem(lipstickStyle)
    menu.AddItem(lipstickOpacity)
    menu.AddItem(lipstickColor)
    menu.AddItem(molesFrecklesStyle)
    menu.AddItem(molesFrecklesOpacity)
    menu.AddItem(chestHairStyle)
    menu.AddItem(chestHairOpacity)
    menu.AddItem(chestHairColor)
    menu.AddItem(bodyBlemishesStyle)
    menu.AddItem(bodyBlemishesOpacity)

    item.RightBadge = NativeUI.BadgeStyle.ArrowRight
    item.Enabled = true

    menu.ListChange.on((item: NativeUI.UIMenuListItem) => {
        setEyeColor(eyeColor.Index)
        setHairColor(hairStyle.Index, hairColor.Index, hairHighlight.Index)
    })

    return { menu, item }
}