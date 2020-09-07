import { startMenu } from "./src/mainMenu"

//add info in chat
TriggerEvent('chat:addSuggestion', '/trigger', 'dispara um TriggerEvent com o parâmetro enviado', [
    { name: "peds:start", help: "inicia o editor de personagem" },
    { name: "startChar", help: "inicia o editor usando o char menu" }
])

onNet('peds:start', value => {
    startMenu(null)
})



//async function startup() {
    //FreezeEntityPosition(PlayerId(), true)
//}

//setTick(startup)