import * as NativeUI from '../../../lib/nativeui/NativeUi'
import { Amenu } from '../types/amenu'
import { setCharacterGender } from "../controllers/genre.controller"

export function genderMenuBuilder(): Amenu {

    const options = ['m', 'f']

    const item = new NativeUI.UIMenuListItem('Sexo', 'Selecione o sexo do seu personagem',
        new NativeUI.ItemsCollection(['Masculino', 'Feminino'])
    )

    item.Enabled = true

    item.Data = { action: () => setCharacterGender(options[item.Index]) }
    return { item }
}