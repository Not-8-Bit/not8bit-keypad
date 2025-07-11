name 'Not 8 Bit Keypad'
author 'Holiday'
description 'On screen PIN pad'
version 'v2.0.0'
fx_version "cerulean"

game 'gta5'
ui_page "html/index.html"

shared_scripts {
    'shared/sh_*.lua'
}

client_scripts {
    'client/*.lua'
}

files{
    "html/*",
}

lua54 'yes'