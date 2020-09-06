import * as NativeUI from '../../lib/nativeui/NativeUi'
import { print } from '../../utils'

export interface Amenu {
    item: NativeUI.UIMenuItem
    menu?: NativeUI.Menu
}

export const editorMenuBuilder = (menu: NativeUI.Menu): Amenu[] => [
    genreMenuBuilder(menu),
    inheritanceMenuBuilder(menu),
    apearenceMenuBuilder(menu),


    //new NativeUI.UIMenuItem('Rosto', 'Customize a face do personagem'),
    //new NativeUI.UIMenuItem('Tatuagens', 'Tatuagens'),
    //new NativeUI.UIMenuItem('Roupas', 'Roupas do seu personagem'),
    //new NativeUI.UIMenuItem('Acessórios', 'Relógios, pulseiras, brincos, etc'),
    facialExpressionsMenuBuilder(menu)
    //new NativeUI.UIMenuItem('Salvar e continuar', 'Salvar o personagem e continuar o jogo') */
]

//#region Genre menu
function genreMenuBuilder(nativeMenu: NativeUI.Menu): Amenu {

    const item = new NativeUI.UIMenuListItem('Sexo', 'Selecione o sexo do seu personagem',
        new NativeUI.ItemsCollection(['Masculino', 'Feminino'])
    )

    nativeMenu.DynamicListChange.on(item=> {
        print(`humor chenged: ${typeof item}`)
    })

    return {item}

}
//#endregion

//#region Inheritance menu
function inheritanceMenuBuilder(nativeMenu: NativeUI.Menu): Amenu {
    const item = new NativeUI.UIMenuItem('Parentesco', 'Selecione o herança genética do seu personagem')
    const menu = new NativeUI.Menu('Parentesco', 'Herança genética', new NativeUI.Point(50, 50))

    menu.AddItem(new NativeUI.UIMenuListItem('Mãe', 'Mãe do personagem',
        new NativeUI.ItemsCollection(['Sua', 'admin', 'puta'])
    ))
    menu.AddItem(new NativeUI.UIMenuListItem('Pai', 'Pai do personagem',
        new NativeUI.ItemsCollection(['Sua', 'admin', 'puto'])
    ))

    item.RightBadge = NativeUI.BadgeStyle.ArrowRight

    nativeMenu.AddSubMenu(menu, item)

    return { menu, item }
}
//#endregion

//#region Apearence menu
function apearenceMenuBuilder(nativeMenu: NativeUI.Menu): Amenu {
    const item = new NativeUI.UIMenuItem('Aparência', 'Opções relacionadas a aparência do seu personagem')
    const menu = new NativeUI.Menu('Aparência', 'Aparência do personagem', new NativeUI.Point(50, 50))

    menu.AddItem(new NativeUI.UIMenuListItem('Olhos', 'olhos',
        new NativeUI.ItemsCollection(['Sua', 'admin', 'puta'])
    ))
    menu.AddItem(new NativeUI.UIMenuListItem('Cor do cu', 'Cor do cu',
        new NativeUI.ItemsCollection(['Sua', 'admin', 'puto'])
    ))

    item.RightBadge = NativeUI.BadgeStyle.ArrowRight

    nativeMenu.AddSubMenu(menu, item)

    return { menu, item }
}
//#endregion

//#region Facial expressions menu
function facialExpressionsMenuBuilder(nativeMenu: NativeUI.Menu): Amenu {
    return {
        item: new NativeUI.UIMenuListItem('Expressão facial', 'Humor do personagem',
            new NativeUI.ItemsCollection(['Normal', 'Feliz', 'Puto', 'Mirando', 'Indignado', 'Estressado', 'Convencido', 'Mau humorado'])
        )
    }
}
//#endregion