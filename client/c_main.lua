RegisterNUICallback('clear', function(data, cb)
    SetNuiFocus(false, false)
end)

RegisterNUICallback('get-callback', function(data, cb)
	SetNuiFocus(false, false)
    Callbackk({ open = data.open, input = data.inputPass })
    cb('ok')
end)

function PasswordInput(data, callback)
    Callbackk = callback
    SetNuiFocus(true, true)
    SendNUIMessage({
        type = "open",
        data = data
    })
end

exports('PasswordInput', PasswordInput)

if Config.Debug == true then
    RegisterCommand("testkeypad",function()
        local DebugPassword = Config.DebugPassword -- pass this from the database or where ever you are storing the pin number.
        print( 'password: ' .. DebugPassword )
        exports[Config.ResourceName]:PasswordInput(DebugPassword, function(data) -- Copy from this line to line 34 and use that in your scripts to open the keypad.
            print(data.open)
            print(data.input)
            if (data.open == true) and (tonumber(data.input) == DebugPassword) then
                print('open')
            else 
                print('denied')
            end
        end)
    end)
end