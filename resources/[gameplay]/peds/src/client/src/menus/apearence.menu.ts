import * as NativeUI from '../../../lib/nativeui/NativeUi'
import { Amenu } from '../types/amenu'
import { getPedDrawablesList, setPedComponent, getAllColors, setEyeColor, setHair, getAllHairVariations, setHeadOverlay } from '../controllers/apearence.controller'
import { Component, FaceOverlay } from '../types/components'
import { print } from '../../../utils'
import { blemishesCount, facialHairCount, eyebrowsCount, ageingCount, makeupCount, blushCount, complexionCount, sunDamageCount, lipstickCount, molesFrecklesCount, chestHairCount, bodyBlemishesCount } from '../resources/apearence'

export function apearenceMenuBuilder(): Amenu {
    const opacityRange = [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1]

    const item = new NativeUI.UIMenuItem('Aparência', 'Opções relacionadas a aparência do seu personagem')
    const menu = new NativeUI.Menu('Aparência', 'Aparência do personagem', new NativeUI.Point(50, 50))

    const eyeColor = new NativeUI.UIMenuListItem('Cor dos olhos', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const hairStyle = new NativeUI.UIMenuListItem('Cabelo', 'Escolha um estilo', new NativeUI.ItemsCollection(getPedDrawablesList(Component.Hair)))
    const hairColor = new NativeUI.UIMenuListItem('Cor do cabelo', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))
    const hairHighlight = new NativeUI.UIMenuListItem('Destaque do cabelo', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const blemStyle = new NativeUI.UIMenuListItem('Manchas', 'Escolha um estilo', new NativeUI.ItemsCollection(blemishesCount.toArray().toIndexedLabel()))
    const blemOpacity = new NativeUI.UIMenuSliderItem('Opacidade das manchas', opacityRange, 0, 'Define a intensidade', false)

    const beardStyle = new NativeUI.UIMenuListItem('Barba', 'Escolha um estilo', new NativeUI.ItemsCollection(facialHairCount.toArray().toIndexedLabel()))
    const beardOpacity = new NativeUI.UIMenuSliderItem('Opacidade da barba', opacityRange, 0, 'Define a intensidade', false)
    const beardColor = new NativeUI.UIMenuListItem('Cor da barba', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const eyebrowStyle = new NativeUI.UIMenuListItem('Sobrancelha', 'Escolha um estilo', new NativeUI.ItemsCollection(eyebrowsCount.toArray().toIndexedLabel()))
    const eyebrowOpacity = new NativeUI.UIMenuSliderItem('Opacidade da sobrancelha', opacityRange, 0, 'Define a intensidade', false)
    const eyebrowColor = new NativeUI.UIMenuListItem('Cor da sobrancelha', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const ageingStyle = new NativeUI.UIMenuListItem('Envelhecimento', 'Escolha um estilo', new NativeUI.ItemsCollection(ageingCount.toArray().toIndexedLabel()))
    const ageingOpacity = new NativeUI.UIMenuSliderItem('Opacidade do envelhecimento', opacityRange, 0, 'Define a intensidade', false)

    const makeupStyle = new NativeUI.UIMenuListItem('Maquiagem', 'Escolha um estilo', new NativeUI.ItemsCollection(makeupCount.toArray().toIndexedLabel()))
    const makeupOpacity = new NativeUI.UIMenuSliderItem('Opacidade da maquiagem', opacityRange, 0, 'Define a intensidade', false)
    const makeupColor = new NativeUI.UIMenuListItem('Cor da maquiagem', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const blushStyle = new NativeUI.UIMenuListItem('Blush', 'Escolha um estilo', new NativeUI.ItemsCollection(blushCount.toArray().toIndexedLabel()))
    const blushOpacity = new NativeUI.UIMenuSliderItem('Opacidade do blush', opacityRange, 0, 'Define a intensidade', false)
    const blushColor = new NativeUI.UIMenuListItem('Cor do blush', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const complexionStyle = new NativeUI.UIMenuListItem('Semblante', 'Escolha um estilo', new NativeUI.ItemsCollection(complexionCount.toArray().toIndexedLabel()))
    const complexionOpacity = new NativeUI.UIMenuSliderItem('Opacidade do semblante', opacityRange, 0, 'Define a intensidade', false)

    const sunDamageStyle = new NativeUI.UIMenuListItem('Queimadura de sol', 'Escolha um estilo', new NativeUI.ItemsCollection(sunDamageCount.toArray().toIndexedLabel()))
    const sunDamageOpacity = new NativeUI.UIMenuSliderItem('Opacidade da queimadura de sol', opacityRange, 0, 'Define a intensidade', false)

    const lipstickStyle = new NativeUI.UIMenuListItem('Batom', 'Escolha um estilo', new NativeUI.ItemsCollection(lipstickCount.toArray().toIndexedLabel()))
    const lipstickOpacity = new NativeUI.UIMenuSliderItem('Opacidade do batom', opacityRange, 0, 'Define a intensidade', false)
    const lipstickColor = new NativeUI.UIMenuListItem('Cor do batom', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const molesFrecklesStyle = new NativeUI.UIMenuListItem('Sardas e verrugas', 'Escolha um estilo', new NativeUI.ItemsCollection(molesFrecklesCount.toArray().toIndexedLabel()))
    const molesFrecklesOpacity = new NativeUI.UIMenuSliderItem('Opacidade das sardas e verrugas', opacityRange, 0, 'Define a intensidade', false)

    const chestHairStyle = new NativeUI.UIMenuListItem('Cabelo no peito', 'Escolha um estilo', new NativeUI.ItemsCollection(chestHairCount.toArray().toIndexedLabel()))
    const chestHairOpacity = new NativeUI.UIMenuSliderItem('Opacidade do cabelo no peito', opacityRange, 0, 'Define a intensidade', false)
    const chestHairColor = new NativeUI.UIMenuListItem('Cor do cabelo no peito', 'Escolha uma cor', new NativeUI.ItemsCollection(getAllColors()))

    const bodyBlemishesStyle = new NativeUI.UIMenuListItem('Manchas no corpo', 'Escolha um estilo', new NativeUI.ItemsCollection(bodyBlemishesCount.toArray().toIndexedLabel()))
    const bodyBlemishesOpacity = new NativeUI.UIMenuSliderItem('Opacidade das manchas no corpo', opacityRange, 0, 'Define a intensidade', false)

    const items = getAllHairVariations()

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
        setHair(hairStyle.Index, hairColor.Index, hairHighlight.Index)
        setHeadOverlay(FaceOverlay.Blemishes, blemStyle.Index, opacityRange[blemOpacity.Index])
    })

    return { menu, item }
}