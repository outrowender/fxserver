export function setPlayerinheritance(mom: number, dad: number, shape: number, skin: number) {
    mom = mom == 21 ? 45 : mom + 21 //gta has some weird stuff with indexes
    dad = dad > 20 ? dad + 21 : dad

    SetPedHeadBlendData(PlayerPedId(), mom, dad, 0, mom, dad, 0, shape, skin, 0, false)
}