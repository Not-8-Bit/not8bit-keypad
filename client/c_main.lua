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

local resourceName = GetCurrentResourceName()
if Config.Debug == true then
    RegisterCommand("testkeypad",function()
        local DebugPassword = Config.DebugPassword
        exports[resourceName]:PasswordInput(DebugPassword, function(data)
            if (data.open == true) and (tonumber(data.input) == DebugPassword) then
            end
        end)
    end)
end