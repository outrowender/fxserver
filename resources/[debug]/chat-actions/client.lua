
RegisterNetEvent('chatMessage')
AddEventHandler('chatMessage', function(author, color, text)
    print('chatMessage: '..text)
    if text:sub(1, 1) == '/' then
        local command = split(text,' ')
        if(command[1] == '/trigger' and command[2] ~= nil) then
            --mpcreator:OpenMenu
            TriggerEvent(command[2])
        end
    end
end)

function split(pString, pPattern)
    local Table = {}  -- NOTE: use {n = 0} in Lua-5.0
    local fpat = "(.-)" .. pPattern
    local last_end = 1
    local s, e, cap = pString:find(fpat, 1)
    while s do
       if s ~= 1 or cap ~= "" then
      table.insert(Table,cap)
       end
       last_end = e+1
       s, e, cap = pString:find(fpat, last_end)
    end
    if last_end <= #pString then
       cap = pString:sub(last_end)
       table.insert(Table, cap)
    end
    return Table
 end