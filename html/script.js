var checking = false;
var password = undefined;
window.addEventListener('message', function (event) {
    if (event.data.type == "open") {
        if (event.data.data != undefined) {
            password = event.data.data;
            $('#inputstatus').text(''); 
            $('body').removeClass('hidden').addClass('keypadblocks');
        }
    }
});
function numpad(pad) {
    if (pad == '*') {
        if (checking == false) {
            $('#passwordInput').val('');
        }
    } else if (pad == '#' || pad == 'Enter') {
        if ($('#passwordInput').val().length == $('#passwordInput').val().length) {
            checking = true;
            $('#inputstatus').text('AUTHORIZING...');
            if (password != 'setpass') {
                setTimeout(() => {
                    if ($('#passwordInput').val() == password) {
                        $('#inputstatus').text('APPROVED');
                        setTimeout(() => {
                            $('body').removeClass('keypadblocks').addClass('hidden');
                            $.post(`https://${GetParentResourceName()}/clear`);
                            $.post(`https://${GetParentResourceName()}/get-callback`, JSON.stringify({
                                open: true,
                                inputPass: $('#passwordInput').val(),
                            }));
                            defaultValue();
                            checking = false;
                            password = undefined;
                        }, 250);
                    } else {
                        $('#inputstatus').text('ERROR');
                        setTimeout(() => {
                            defaultValue();
                            checking = false;
                        }, 250);
                    }
                }, 250);
            } else {
                setTimeout(() => {
                    $('#inputstatus').text('APPROVED');
                    setTimeout(() => {
                        $('body').removeClass('keypadblocks').addClass('hidden');
                        $.post(`https://${GetParentResourceName()}/clear`);
                        $.post(`https://${GetParentResourceName()}/get-callback`, JSON.stringify({
                            open: true,
                            inputPass: $('#passwordInput').val(),
                        }));
                        defaultValue();
                        checking = false;
                        password = undefined;
                    }, 250);
                }, 250);
            }
        }
    } else {
        if (checking == false) {
            let oldvalue = $('#passwordInput').val();
            if (oldvalue.length < 8) {
                $('#passwordInput').val(oldvalue + '' + pad);
            }
        }
    }
}
function defaultValue() {
    $('#inputstatus').text('');
    $('#passwordInput').val('');
}
$(document).on('keyup', function (evt) {
    if (evt.keyCode == 27) {
        $('body').removeClass('keypadblocks').addClass('hidden');
        $.post(`https://${GetParentResourceName()}/clear`);
        $.post(`https://${GetParentResourceName()}/get-callback`, JSON.stringify({
            open: false,
        }));
        defaultValue();
    }
    else if ((evt.keyCode >= 48 && evt.keyCode <= 57) || (evt.keyCode >= 96 && evt.keyCode <= 105)) {
        let num = String.fromCharCode(evt.keyCode >= 96 ? evt.keyCode - 48 : evt.keyCode);
        numpad(num);
    }
    else if (evt.keyCode == 56 && evt.shiftKey || evt.keyCode == 110 || evt.keyCode == 46) {
        numpad('*');
    }
    else if ((evt.keyCode == 51 && evt.shiftKey) || evt.keyCode == 13) {
        numpad('#');
    }
});