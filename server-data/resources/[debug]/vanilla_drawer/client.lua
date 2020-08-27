Citizen.CreateThread(function()
    while true do

        --TAB
        if(IsControlJustReleased(0, 37)) then
            if current == 'x' then
                current = 'y'
            elseif current == 'y' then
                current = 'h'
            elseif current == 'h' then
                current = 'w'
            elseif current == 'w' then
                current = 'r'
            elseif current == 'r' then
                current = 'g'
            elseif current == 'g' then
                current = 'b'
            elseif current == 'b' then
                current = 'a'
            elseif current == 'a' then
                current = 'x'
            end
        end

        --left button
        if(IsControlJustPressed(0, 174)) then
            dir = 'LEFT'
        end

        if(IsControlJustReleased(0, 174)) then
            dir = ''
        end

        --right button
        if(IsControlJustPressed(0, 175)) then
            dir = 'RIGHT'
        end

        if(IsControlJustReleased(0, 175)) then
            dir = ''
        end

        

        --LEFT
        if(dir == 'LEFT') then
            if current == 'x' then
                x = x - 0.0005
            elseif current == 'y' then
                y = y - 0.0005
            elseif current == 'h' then
                h = h - 0.0005
            elseif current == 'w' then
                w = w - 0.0005
            elseif current == 'r' then
                r = r - 1
            elseif current == 'g' then
                g = g - 1
            elseif current == 'b' then
                b = b - 1
            elseif current == 'a' then
                a = a - 1
            end
        end

        --RIGHT
        if(dir == 'RIGHT') then
            if current == 'x' then
                x = x + 0.0005
            elseif current == 'y' then
                y = y + 0.0005
            elseif current == 'h' then
                h = h + 0.0005
            elseif current == 'w' then
                w = w + 0.0005
            elseif current == 'r' then
                r = r + 1
            elseif current == 'g' then
                g = g + 1
            elseif current == 'b' then
                b = b + 1
            elseif current == 'a' then
                a = a + 1
            end
        end

        --DrawRect(posx, posy, width, height, 0, 0, 0, 150)

        local pr = 'DrawRect('..tostring(x)..', '..tostring(y)..', '..tostring(w)..', '..tostring(h)..', '..tostring(r)..', '..tostring(g)..', '..tostring(b)..', '..tostring(a)..')'

        DrawRect(x, y, w, h, r, g, b, a)

        drawTxt('CURRENT> '..current, 2, {255,255,255}, 0.4, 0.1, 0.018)
      
        --z
        if(IsControlJustPressed(0, 48)) then
            
            TriggerServerEvent("newMessage", pr)
            print(pr)
           
        end

        Citizen.Wait(0)
    end
end)