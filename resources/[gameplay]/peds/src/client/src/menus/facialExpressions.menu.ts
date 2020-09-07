import * as NativeUI from '../../../lib/nativeui/NativeUi'
import { Amenu } from '../types/amenu'
import { setPlayerHumor } from '../controllers/humor.controller'

export function facialExpressionsMenuBuilder(): Amenu {

    const options = ['mood_Normal_1', 'mood_Happy_1', 'mood_Angry_1', 'mood_Aiming_1', 'mood_Injured_1', 'mood_stressed_1', 'mood_smug_1', 'mood_sulk_1']

    const item = new NativeUI.UIMenuListItem('Expressão facial', `Humor do personagem`,
        new NativeUI.ItemsCollection(['Normal', 'Feliz', 'Puto', 'Mirando', 'Indignado', 'Estressado', 'Convencido', 'Mau humorado'])
    )

    item.Enabled = true

    item.Data = { action: () => setPlayerHumor(options[item.Index]) }
    return { item }
}