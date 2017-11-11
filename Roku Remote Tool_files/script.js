$(function() {

    // Check for the various File API support and disable import/export if not supported.
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
        $("#fileImpExp").prop('disabled', true);
        $("#fileImpExp").attr("title", "Not Supported by Browser");
    }

    // Tooltips
    $('[data-ref="tooltip"]').tooltip({
      trigger: 'hover'
    });

    // Handling enter click on roku remote button
    $(".roku-remote-center .btn-roku").on("keypress", function(event) {
        event.preventDefault();
        return false;
    });

    // Handling mouse click on roku remote button
    $(".roku-remote-center .btn-roku").on("click", function(event) {
        command = $(this).attr("id");
        RokuRemote.addToHistory(command);
        RokuRemote.addKeyBot(command);
        RokuRemote.post(command);
    });

    // Handling Copy/Paste to the text input.
    $("#rokuBoxTextInput").on('paste', function(event) {
        inputStr = $(this).val();
        // split into array and count
        inputDataChars = inputStr.split('');
        inputCharCount = inputDataChars.length;

        // selection handling
        inputStrSelected = $(this).getSelection();
        selectionStart = $(this).getSelectionStart();
        selectionEnd = $(this).getSelectionEnd();

        //pasted data
        pastedDataStr = event.originalEvent.clipboardData.getData('text');

        // handle copy/paste of selected data
        if (pastedDataStr !== undefined && pastedDataStr.length > 0) {
            if (inputStrSelected !== undefined && inputStrSelected.length > 0) {
                textToDelete = inputStrSelected + inputStr.substring(selectionEnd, inputStr.length);
                textToDeleteChars = textToDelete.split('');
                textToDeleteCharCount = textToDeleteChars.length

                // update web UI input
                inputToUpdate = inputStr.substring(0, selectionStart) + pastedDataStr + inputStr.substring(selectionEnd, inputStr.length);
                $("#rokuBoxTextInput").val(inputToUpdate)

                // calculate what new data send to box
                newInputStr = pastedDataStr + inputStr.substring(selectionEnd, inputStr.length);
                newInputChars = newInputStr.split('');
                newCharCount = newInputChars.length;
                RokuRemote.syncInput($(this), $("#rokuBoxTextInput"), textToDelete, newInputStr);
            } else {
                // handle simple copy/paste data
                cursorPosition = $(this).getCursorPosition();
                textToUpdate = inputStr.substring(cursorPosition, inputStr.length);
                textWithPasted = pastedDataStr + textToUpdate;
                inputToUpdate = inputStr.substring(0, cursorPosition) + pastedDataStr + textToUpdate;
                $("#rokuBoxTextInput").val(inputToUpdate)

                if (cursorPosition == inputStr.length) {
                    textWithPasted = pastedDataStr;
                }
                RokuRemote.syncInput($(this), $("#rokuBoxTextInput"), textToUpdate, textWithPasted);
            }
        }

    });

    // Handling character key pressed on text input
    $("#rokuBoxTextInput").on("keypress", function(event) {
        char = String.fromCharCode(event.charCode)
        command = "LIT_" + char;

        inputText = $(this).val();
        inputCharCount = inputText.length;
        cursorPosition = $(this).getCursorPosition();
        if (cursorPosition == inputCharCount) {
            RokuRemote.post(command);
        } else {
            textToReSync = inputText.substring(cursorPosition, inputText.length);
            newInputStr = char + textToReSync
            inputUpdateText = inputText.substring(0, cursorPosition) + newInputStr;
            $("#rokuBoxTextInput").val(inputUpdateText);
            RokuRemote.syncInput($(this), $("#rokuBoxTextInput"), textToReSync, newInputStr);
        }

    });

    // Handling non-character key pressed on text input (keydown)
    $("#rokuBoxTextInput").on("keydown", function(event) {
        if ((event.keyCode == 8 || event.keyCode == 46)) {
            RokuRemote.inputBuffer = $(this).val();
            RokuRemote.cursorBuffer = $(this).getCursorPosition();
        }
    });

    // Handling non-character key pressed on text input (keyup)
    $("#rokuBoxTextInput").on("keyup", function(event) {
        if ((event.keyCode == 8 || event.keyCode == 46) && RokuRemote.isIpValid(RokuRemote.getIp())) {
            if (RokuRemote.inputBuffer !== undefined && RokuRemote.cursorBuffer !== undefined) {
                inputCursorPosition = RokuRemote.cursorBuffer;
                inputText = RokuRemote.inputBuffer;

                if (inputCursorPosition < inputText.length) {
                    RokuRemote.syncInput($(this), $("#rokuBoxTextInput"), inputText, $(this).val());
                } else {
                    RokuRemote.post("Backspace");
                }
            }

        }
    });

    $("#rokuBoxIpAddress").on("keyup", function(event) {
        RokuRemote.showIpList($(this).val());
    });

    // Show list of IP addresses
    $("#rokuBoxIpAddress").on("focus", function(event) {
        RokuRemote.showIpList();
    });

    // Save new IP address
    $("#rokuBoxIpAddress").on("focusout", function(event) {
        if (RokuRemote.isIpValid($(this).val())) {
            if (RokuRemote.IpAddressList.indexOf($(this).val()) < 0) {
                RokuRemote.IpAddressList.push($(this).val());
                RokuRemote.saveIpListTostorage();
            }
        }
    });

    // Hide list of IP addresses
    $("body").on("click", function(event){
        if ($(event.target).attr("id") != "rokuBoxIpAddress" && !$(event.target).hasClass("IpAddressItem") && !$(event.target).hasClass("removeIpAddress")){
            $("#rokuBoxIpAddressList").hide();
        }
    });

    // Select IP address from list
    $("#rokuBoxIpAddressList").on("click", ".IpAddressItem", function(event){
        if (!$(event.toElement).hasClass("removeIpAddress")) {
            $("#rokuBoxIpAddress").val(this.text);
            $("#rokuBoxIpAddressList").hide();
        }
    });

    // Remove IP address from list
    $("#rokuBoxIpAddressList").on("click", ".removeIpAddress", function(event){
        var item = $(this).parents("li");
        if (!item.is(":last-child") && item.next().hasClass("divider")) {
            item.next().remove();
        }
        if (item.is(":last-child") && item.prev().hasClass("divider")) {
            item.prev().remove();
        }
        $(this).parents("li").remove();
        RokuRemote.removeIpFromStorage(item.text());
    });

    // clear automation
    $("#clearBotInput").on("click", function(event) {
        $("#rokuBoxKeyBot").val('');
    });

    // clear history
    $("#clearHistoryInput").on("click", function(event) {
        $("#rokuBoxKeyHistory").val('');
    });

    // clear ip-address
    $("#clearIpAddressInput").on("click", function(event) {
        $("#rokuBoxIpAddress").val('');
        RokuRemote.validator.ipDefault();
    });

    // clear box text input
    $("#clearRokuBoxTextInput").on("click", function(event) {
        inputChars = $("#rokuBoxTextInput").val().split('');
        charCount = inputChars.length;
        if (RokuRemote.isIpValid(RokuRemote.getIp())) {
            if (charCount > 0) {
                $("#rokuBoxTextInput").prop('disabled', true);
            }
            // clear box input (remove char by char)
            inputChars.forEach(function(value, index) {
                $(this).delay(300).queue(function() {
                    $("#rokuBoxTextInput").val($("#rokuBoxTextInput").val().slice(0, -1));
                    RokuRemote.post("Backspace");
                    $(this).dequeue();
                    if (index == charCount - 1) {
                        $("#rokuBoxTextInput").prop('disabled', false);
                    }
                });
            });
        }

    });

    // start automation script.
    $("#botMode").on("click", function(event) {
        return $("#botModeSign").hasClass('glyphicon-play') ? RokuRemote.startBot() : RokuRemote.stopBot();
    });

    // Insert custom sleep time to TextArea.
    $("#insertSleep").on("click", function(event) {
        sleepTime = parseInt($("#customKeySleep").val(), 10);
        sleepTime = sleepTime !== undefined ? sleepTime : 1000;
        keyTextArea = $("#rokuBoxKeyBot").val();
        separator = keyTextArea.length > 0 ? "," : ""
        $("#rokuBoxKeyBot").val($("#rokuBoxKeyBot").val() + separator + "Sleep" + sleepTime)
    });

    // Import comma separated value file that contains remote command keys
    $("#importFile").change(function() {
        file = this.files[0];
        $("#rokuBoxKeyBot").attr("placeholder", "");
        var reader = new FileReader();

        reader.onload = function(e) {
            $("#rokuBoxKeyBot").val(reader.result);
        }

        reader.onabort = function(e) {
            $("#rokuBoxKeyBot").val('');
            $("#rokuBoxKeyBot").attr("placeholder", "File load canceled");
        }

        reader.onerror = function(e) {
            $("#rokuBoxKeyBot").val('');
            $("#rokuBoxKeyBot").attr("placeholder", "File load error!");
        }

        reader.readAsText(file);
    });

    // Export comma separated value file that contains remote command keys
    $("#exportFile").on("click", function(event) {
        var keysToExport = $("#rokuBoxKeyBot").val().trim();
        var blob = new Blob([keysToExport.length > 0 ? keysToExport : "no valid keys avaliable..."], {
          type: "text/plain;charset=utf-8"
        });
        saveAs(blob, "RokuRemote_" + new Date().toISOString() + ".csv");
    });

    // Handling shortcuts outside input text elements.
    // Prevent default key press behaviour in Browser.
    $(document).on( "keydown", function(event) {
        if (!$("#rokuBoxTextInput").is(":focus") &&
            !$("#rokuBoxIpAddress").is(":focus") &&
            !$("#rokuBoxKeyHistory").is(":focus") &&
            !$("#rokuBoxKeyBot").is(":focus") &&
            !$("#botSleepTime").is(":focus")) {

            // TODO: Old school search. Wide browser support.
            var keyMapObject;
            if (RokuRemote.keyMap !== undefined) {
              $.each(RokuRemote.keyMap, function(keysIndex, keysValue) {
                var continueSearch = true;
                if (keysValue !== undefined && keysValue.keyCodes !== undefined) {
                  $.each(keysValue.keyCodes, function(keyIndex, keyValue) {
                      if (keyValue.keyCode == event.keyCode) {
                        keyMapObject = keysValue;
                        continueSearch = false;
                        return continueSearch;
                      }
                  });
                }
                return continueSearch;
              });
            }

            // TODO: enable for quck and elegant search, not supported in old Browsers, IE, and so on.
            // keyMapObject = RokuRemote.keyMap.find(function(keyMapElement) {
            //     keyCodesObject = keyMapElement.keyCodes.find(function(keyCodesElement) {
            //         if (keyCodesElement.shiftKey === undefined) {
            //             keyCodesElement.shiftKey = false
            //         }
            //         return keyCodesElement.keyCode == event.keyCode && keyCodesElement.shiftKey == event.shiftKey
            //     });
            //     return keyCodesObject !== undefined;
            // });

            if (keyMapObject !== undefined) {
                event.preventDefault();
                command = keyMapObject.commandName;
                RokuRemote.addToHistory(command);
                RokuRemote.addKeyBot(command);
                RokuRemote.post(command);
            }
        }
    })
});

// Example jQuery get cursor position function call
// $("input[name='username']").getCursorPosition();
jQuery.fn.getCursorPosition = function() {
    if (this.length == 0) return -1;
    return $(this).getSelectionStart();
}

// Example jQuery get text selection start function call
// $("input[name='username']").getSelectionStart();
jQuery.fn.getSelectionStart = function() {
    if (this.length == 0) return -1;
    input = this[0];

    var pos = input.value.length;

    if (input.createTextRange) {
        var r = document.selection.createRange().duplicate();
        r.moveEnd('character', input.value.length);
        if (r.text == '')
            pos = input.value.length;
        pos = input.value.lastIndexOf(r.text);
    } else if (input.selectionStart !== undefined)
        pos = input.selectionStart;

    return pos;
}

//Example jQuery get text selection end function call
//$("input[name='username']").getSelectionEnd();
jQuery.fn.getSelectionEnd = function() {
    if (this.length == 0) return -1;
    input = this[0];

    var pos = input.value.length;

    if (input.createTextRange) {
        var r = document.selection.createRange().duplicate();
        r.moveStart('character', -input.value.length);
        if (r.text == '')
            pos = input.value.length;
        pos = input.value.lastIndexOf(r.text);
    } else if (input.selectionEnd !== undefined)
        pos = input.selectionEnd;

    return pos;
}

//Example jQuery get text selection function call
//$("input[name='username']").getSelection();
jQuery.fn.getSelection = function() {
    if (this.length == 0) return -1;
    var s = $(this).getSelectionStart();
    var e = $(this).getSelectionEnd();
    return this[0].value.substring(s, e);
}

//Example jQuery set cursor position function call
//$("input[name='username']").setCursorPosition(5);
jQuery.fn.setCursorPosition = function(position) {
    if (this.length == 0) return this;
    return $(this).setSelection(position, position);
}

//Example jQuery set text selection function call
//$("input[name='username']").setSelection(4, 20);
jQuery.fn.setSelection = function(selectionStart, selectionEnd) {
    if (this.length == 0) return this;
    input = this[0];

    if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    } else if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }

    return this;
}

// Polyfill: String.prototype.startsWith()
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

// Polyfill: String.prototype.endsWith()
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.lastIndexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}
