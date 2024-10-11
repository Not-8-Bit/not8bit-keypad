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
    local resourceName = GetCurrentResourceName()
    exports[resourceName]:PasswordInput(DebugPassword, function(data)
        if (data.open == true) and (tonumber(data.input) == DebugPassword) then
        else 
            -- print('denied')
        end
    end)
```

## License
```
    On screen PIN pad for using in FiveM resources.
    Copyright (C) 2024  Not 8 Bit

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
```