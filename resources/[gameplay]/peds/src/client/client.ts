import { startMenu } from "./src/mainMenu"
import { sleep } from "../utils";

onNet('peds', () => startMenu())

async function addChatEvents() {
    await sleep(1000) //ensure chat is loaded

    TriggerEvent('chat:addSuggestion', '/trigger', 'dispara um TriggerEvent com o parâmetro enviado', [
        { name: "peds", help: "inicia o editor de personagem" },
        { name: "startChar", help: "inicia o editor usando o char menu" }
    ])
}

addChatEvents()

//async function startup() {
    //FreezeEntityPosition(PlayerId(), true)
//}

//setTick(startup)