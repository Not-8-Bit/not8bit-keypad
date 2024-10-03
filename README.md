# Not 8 Bit Keypad
```
Keypad for doors, stashes, safes, and anything else requiring a keypad.
```

## Discord Link
```
https://discord.gg/AeK2kzN2YE
```

## Dependencies
```
A small amount of coding knowledge to insert the export into your resources.
```

## Keypad Instructions
```
PIN numbers need to be between 4-8 numbers.
Players can use the pin pad with their mouse, or enter the numbers using the keyboard.
ENTER submits the entered code.
Delete or . on the number pad will clear any inputs without closing the keypad. 
```

## Restarting the Resource
```
This script can be restarted on live with minimal impact to the players.
If a keypad is open on resource restart it will close. Players will need to reopen the keypad.
```

## Installation Steps

## Step 1
```
Download resource
Extract resource
Put the resource in your resource folder
Add ensure not8bit-keypad to server.cfg
Start server
```

## Step 2
```
At this point the test command will work. 
You will need to add the export into your resource to open the keypad using one of your resources.
```

## Client Side Export
```
    exports['holiday-keypad']:PasswordInput(DebugPassword, function(data)
        if (data.open == true) and (tonumber(data.input) == DebugPassword) then
        else 
            -- print('denied')
        end
    end)
```