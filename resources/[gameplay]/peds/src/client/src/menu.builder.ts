import { Amenu } from './types/amenu'

import { genderMenuBuilder } from './menus/genre.menu'
import { inheritanceMenuBuilder } from './menus/inheritance.menu'
import { apearenceMenuBuilder } from './menus/apearence.menu'
import { facialExpressionsMenuBuilder } from './menus/facialExpressions.menu'

export const editorMenuBuilder: Amenu[] = [
    genderMenuBuilder(),
    inheritanceMenuBuilder(),
    apearenceMenuBuilder(),

    //new NativeUI.UIMenuItem('Rosto', 'Customize a face do personagem'),
    //new NativeUI.UIMenuItem('Tatuagens', 'Tatuagens'),
    //new NativeUI.UIMenuItem('Roupas', 'Roupas do seu personagem'),
    //new NativeUI.UIMenuItem('Acessórios', 'Relógios, pulseiras, brincos, etc'),
    facialExpressionsMenuBuilder()
    //new NativeUI.UIMenuItem('Salvar e continuar', 'Salvar o personagem e continuar o jogo') */
]