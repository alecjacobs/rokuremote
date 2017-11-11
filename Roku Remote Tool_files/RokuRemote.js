var RokuRemote = {};

// roku remote key mapping via keyboard
RokuRemote.keyMap = [
    {commandName : "Back",          keyCodes : [{keyCode : 27 /*Ecs*/}, {keyCode : 96 /*NumPad 0*/}]},
    {commandName : "Home",          keyCodes : [{keyCode : 192 /*~ §*/}, {keyCode : 36 /*Home*/}]},
    {commandName : "Up",            keyCodes : [{keyCode : 38 /* Arrow Up*/}, {keyCode : 104 /* NumPad 8*/}]},
    {commandName : "Left",          keyCodes : [{keyCode : 37 /* Arrow Left*/}, {keyCode : 100 /* NumPad 4*/}]},
    {commandName : "Right",         keyCodes : [{keyCode : 39 /* Arrow Right*/}, {keyCode : 102 /* NumPad 6*/}]},
    {commandName : "Down",          keyCodes : [{keyCode : 40 /* Arrow Down*/}, {keyCode : 98 /* NumPad 2*/}]},
    {commandName : "Select",        keyCodes : [{keyCode : 13 /* Enter, NumPad Enter*/}]},
    {commandName : "InstantReplay", keyCodes : [{keyCode : 189 /*-*/}, {keyCode : 45 /* Insert*/}, {keyCode : 110 /* NumPad ,*/}]},
    {commandName : "Info",          keyCodes : [{keyCode : 187 /*+*/}, {keyCode : 19 /* Pause Break*/} , {keyCode : 107 /* NumPad +*/}]},
    {commandName : "Rev",           keyCodes : [{keyCode : 219 /*[*/}, {keyCode : 34 /* Page Down*/}, {keyCode : 111 /* NumPad /*/}]},
    {commandName : "Play",          keyCodes : [{keyCode : 220 /*\*/}, {keyCode : 35 /* End*/}, {keyCode : 106 /* NumPad **/}]},
    {commandName : "Fwd",           keyCodes : [{keyCode : 221 /*]*/}, {keyCode : 33 /* Page Up*/}, {keyCode : 109 /* NumPad -*/}]}
]

RokuRemote.keyNames = [];
$.grep(RokuRemote.keyMap, function(keyMapElement) {
   RokuRemote.keyNames.push(keyMapElement.commandName);
});

// local buffer
RokuRemote.inputBuffer = "";
RokuRemote.cursorBuffer = 0;
RokuRemote.isBotModeOn = false;

// history
RokuRemote.addToHistory = function(text) {
    var currValue = $("#rokuBoxKeyHistory").val();
    $("#rokuBoxKeyHistory").val('[' + new Date().toLocaleTimeString() + '] ' + text + '\n' + currValue);
}

// automation bot
RokuRemote.addKeyBot = function(command) {
    var currValue = $("#rokuBoxKeyBot").val();
    $("#rokuBoxKeyBot").val(currValue + ((currValue && currValue.length > 0) ? "," : "") + command);
}

// ip-address
RokuRemote.getIp = function() {
    return $("#rokuBoxIpAddress").val();
}

// Main HTTP Post Request
RokuRemote.post = function(command, optionalMode) {
    optionalMode = optionalMode === undefined ? 'keypress' : optionalMode;
    ipAddress = RokuRemote.getIp();
    isIpValid = RokuRemote.isIpValid(ipAddress);

    if (isIpValid) {
      this.validator.ipValid();
    } else {
      this.validator.ipError();
      return;
    }

    if (command.length > 0) {
        command = encodeURIComponent(command);
        //console.log(command);
        $.ajax({
            method: "POST",
            url: "http://" + ipAddress + ":8060/" + optionalMode + "/" + command
        });
    }
}

// ip-address validation: <0-255>.<0-255>.<0-255>.<0-255>
RokuRemote.isIpValid = function(ipAddress) {
    ipArray = ipAddress.split(".");

    if (ipArray.length != 4) {
        return false;
    }

    result = ipArray.every(function(element, index, array) {
        return (element >= 0 && element <= 255);
    });

    return result;
}

RokuRemote.syncInput = function(obj, inputUIObj, inputStr, newInputStr) {
    if (obj !== undefined && inputUIObj !== undefined && inputStr !== undefined && newInputStr !== undefined) {
        inputUIObj.prop('disabled', true);

        var inputChars = inputStr.split('');
        var newInputChars = newInputStr.split('');
        var charCount = inputChars.length;
        var newCharCount = newInputChars.length;
        // clear box input (remove char by char)
        inputChars.forEach(function(value, index) {
            obj.delay(300).queue(function() {
                RokuRemote.post("Backspace");
                obj.dequeue();
                //if box input cleared
                if (index == charCount - 1) {
                    // if text was selected and just deleted, not replaced with new text.
                    if (newCharCount == 0) {
                        inputUIObj.prop('disabled', false);
                    }
                    //send new web input to box (char by char)
                    newInputChars.forEach(function(value, index) {
                        obj.delay(300).queue(function() {
                            RokuRemote.post("LIT_" + value);
                            obj.dequeue();
                            //if box input is updated, enable web input
                            if (index == newCharCount - 1) {
                                inputUIObj.prop('disabled', false);
                            }
                        });
                    });
                }
            });
        });

        // if need only to add and nothing to update/delete
        if (charCount == 0 && newCharCount > 0) {
            //send new web input to box (char by char)
            newInputChars.forEach(function(value, index) {
                obj.delay(300).queue(function() {
                    RokuRemote.post("LIT_" + value);
                    obj.dequeue();
                    //if box input is updated, enable web input
                    if (index == newCharCount - 1) {
                        inputUIObj.prop('disabled', false);
                    }
                });
            });
        }
    }
}

RokuRemote.startBot = function() {
    RokuRemote.isBotModeOn = true;
    var sleepCmdRegEx = /^sleep(\d+)$/i

    $("#botModeSign").removeClass('glyphicon-play');
    $("#botModeSign").addClass('glyphicon-stop');

    var sleepTime = parseInt($("#defaultKeySleep").val(), 10);
    sleepTime = sleepTime !== undefined ? sleepTime : 1000;

    var keyString = $("#rokuBoxKeyBot").val();
    if (keyString !== undefined && keyString.trim().length > 0) {
        $("#rokuBoxKeyBot").prop('disabled', true);

        // Clear array from unknown command keys.
        var keyArray = keyString.trim().split(',');
        var keyArrayCleared = [];
        keyArray.forEach(function(value, index) {
            clearedValue = value.trim()
            $.inArray(clearedValue, RokuRemote.keyNames) != -1 || clearedValue.match(sleepCmdRegEx) ? keyArrayCleared.push(clearedValue) : false
        });

        // Shuffle keys
        if ($("#botShuffle").hasClass('active')) {
            keyArrayCleared.sort(function() {
                return 0.5 - Math.random()
            });
        }

        $("#rokuBoxKeyBot").val(keyArrayCleared.join(","));

        var charCount = keyArrayCleared.length;
        keyArrayCleared.forEach(function(value, index) {
            // Exit
            if (!RokuRemote.isBotModeOn) {
                return false;
            }

            // Check and apply user custom sleep between command keys.
            var customSleepTime = value.match(sleepCmdRegEx) ? parseInt(value.match(sleepCmdRegEx)[1], 10) : -1;
            customSleepTime = customSleepTime !== undefined && customSleepTime > -1 ? customSleepTime : sleepTime;

            $(this).delay(customSleepTime).queue(function() {
                if (RokuRemote.isBotModeOn) {
                    var key = value.trim();
                    if (key.length > 0) {
                        RokuRemote.addToHistory(key);
                        RokuRemote.post(key);
                    }
                }
                $(this).dequeue();
                //if box input is updated, enable web input
                if (index == charCount - 1) {
                    if ($("#botRepeat").hasClass('active') && RokuRemote.isBotModeOn) {
                        RokuRemote.startBot();
                    } else {
                        RokuRemote.stopBot();
                    }
                }
            });
        });
    }
}

RokuRemote.stopBot = function() {
    RokuRemote.isBotModeOn = false;
    $("#botModeSign").removeClass('glyphicon-stop');
    $("#botModeSign").addClass('glyphicon-play');
    $("#rokuBoxKeyBot").prop('disabled', false);
}

/* IP - address module */

// ip-address
RokuRemote.getIp = function(){
    return $("#rokuBoxIpAddress").val();
}

// localStorage getItem will not work locally in not preconfigured IE, Edge, only hosted.
RokuRemote.getIpList = function(){
    this.IpAddressList = JSON.parse(localStorage.getItem("RokuRemote_IpAddressList"));

    if (this.IpAddressList == null) {
        this.IpAddressList = [];
        this.saveIpListTostorage();
    }

    return this.IpAddressList
}

// localStorage setItem will not work locally in not preconfigured IE, Edge, only hosted.
RokuRemote.saveIpListTostorage = function(){
    localStorage.setItem("RokuRemote_IpAddressList", JSON.stringify(this.IpAddressList));
}

RokuRemote.showIpList = function(ipStartsWith){
    this.getIpList()

    removeButton = '<span style="padding-top: 3px;" role="button" class="removeIpAddress glyphicon glyphicon-remove pull-right btn btn-danger btn-circle btn-xs"></span>';
    divider = '<li class="divider"></li>';

    if (this.IpAddressList.length > 0) {
        $("#rokuBoxIpAddressList").html("");
        this.IpAddressList.forEach(function(ip, index, array){
            if (ipStartsWith == undefined || ip.startsWith(ipStartsWith)) {
                html = '<li class="IpAddressListView"><a href="javascript:void(0);" class="IpAddressItem">' + ip + '</a><a href="javascript:void(0);">' + removeButton + '</a></li>'
                html += divider;
                $("#rokuBoxIpAddressList").append(html);
            }
        });

        if ($("#rokuBoxIpAddressList").html() != "") {
            if ($("#rokuBoxIpAddressList").html().endsWith(divider)) {
                $("#rokuBoxIpAddressList").html($("#rokuBoxIpAddressList").html().slice(0, -divider.length));
            }
            $("#rokuBoxIpAddressList").show();
        }
    }
}

RokuRemote.removeIpFromStorage = function(ip){
    index = this.IpAddressList.indexOf(ip);

    if (index >= 0) {
        this.IpAddressList.splice(index, 1);
        this.saveIpListTostorage();
    }
}

RokuRemote.validator = {
      ipValid : function() {
          // Buttons
          $("#clearIpAddressInput").removeClass("btn-danger");
          $("#clearIpAddressInput").removeClass("btn-default");
          $("#clearIpAddressInput").addClass("btn-success");
          // Input
          $("#rokuBoxIpAddressValidator").removeClass("has-error");
          $("#rokuBoxIpAddressValidator").addClass("has-success");
          // Help
          $("#rokuBoxIpAddressHelp").addClass("hidden");
      },
      ipError : function() {
          // Buttons
          $("#clearIpAddressInput").removeClass("btn-default");
          $("#clearIpAddressInput").removeClass("btn-success");
          $("#clearIpAddressInput").addClass("btn-danger");
          // Input
          $("#rokuBoxIpAddressValidator").removeClass("has-success");
          $("#rokuBoxIpAddressValidator").addClass("has-error");
          // Help
          $("#rokuBoxIpAddressHelp").removeClass("hidden");
      },
      ipDefault : function() {
          // Buttons
          $("#clearIpAddressInput").removeClass("btn-danger");
          $("#clearIpAddressInput").removeClass("btn-success");
          $("#clearIpAddressInput").addClass("btn-default");
          // Input
          $("#rokuBoxIpAddressValidator").removeClass("has-success");
          $("#rokuBoxIpAddressValidator").removeClass("has-error");
          // Help
          $("#rokuBoxIpAddressHelp").addClass("hidden");
      }
}
