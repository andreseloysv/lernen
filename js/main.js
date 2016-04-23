//Init Game
var infinitiv;
var praesens;
var praeteritum;
var perfekt;

var jInfinitivHint;
var jPraesensHint;
var jPraeteritumHint;
var jPerfektHint;



var verbenIdList = null;
var verbenIdListInitialSize=0;
var verb = null;

jQuery.extend(jQuery.expr[':'], {
    focus: "a == document.activeElement"
});

function showSpecialCharacter() {
    jQuery(document).mouseup(function (e)
    {
        var container = jQuery(".special-characters,.answer");

        if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            jQuery(".special-characters").hide();
        }
    });
    jQuery(".answer").focus(function () {

        var jSpecialCharactersAll = jQuery(".special-characters");
        jSpecialCharactersAll.hide();
        var jThis = jQuery(this);
        var jSpecialCharacters = jThis.siblings(".special-characters");
        jSpecialCharacters.show();
    });
    jQuery(".special-characters a").click(function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        var jThis = jQuery(this);
        var jParten = jThis.parents(".special-characters");

        var jInput = jParten.siblings(".answer");
        console.log(jParten);
        jInput.val(jInput.val() + jThis.text());
        jParten.hide();
        jThis.focus();
    });
}

function stringReplace(haystack, find, sub) {
    console.log("haystack");
    console.log(haystack);
    return haystack.split(find).join(sub);
}

function getVerbenId() {
    jQuery.post("api/index.php", {function: "getAllVerbenId", parameter: ""}, function (data) {
        console.log(data);
        verbenIdList = jQuery.parseJSON(data);
        verbenIdListInitialSize=verbenIdList.length;
    });
}
function getVerbById(id) {
    jQuery.post("api/index.php", {function: "getVerb", parameter: id}, function (data) {
        displayVerb(jQuery.parseJSON(data));
    });
}
function selectVerbById() {
    var verbenIdListSize = verbenIdList.length;
    if (verbenIdListSize > 0)
    {
        var itemPosition = Math.floor(Math.random() * verbenIdListSize);
        var itemId = verbenIdList[itemPosition].id;
        getVerbById(itemId);
        verbenIdList.splice(itemPosition, 1);
    }

    else {
        gameOver();
    }
}
function gameOver() {
    jQuery(".result").html("GAME OVER!");
}
function initInputs() {
    infinitiv = jQuery("#infinitiv");
    praesens = jQuery("#praesens");
    praeteritum = jQuery("#praeteritum");
    perfekt = jQuery("#perfekt");
}
function initGame() {
    initInputs();

    jInfinitivHint = jQuery("#infinitiv-hint");
    jPraesensHint = jQuery("#praesens-hint");
    jPraeteritumHint = jQuery("#praeteritum-hint");
    jPerfektHint = jQuery("#perfekt-hint");
}
function displayVerb(verb) {
    jQuery("#infinitiv-title").text(verb[0].infinitiv);
    jQuery("#meaning").text(verb[0].meaning);
console.log();
    var saveElement = stringReplace(verb[0].example_id, "...", "444");

    saveElement = stringReplace(saveElement, ".", ".<br/>");
    saveElement = stringReplace(saveElement, "444", "...");

    jQuery("#example").html(saveElement);
    infinitiv.data('customvalue', verb[0].infinitiv);
    praesens.data('customvalue', verb[0].praesens);
    praeteritum.data('customvalue', verb[0].praeteritum);
    perfekt.data('customvalue', verb[0].perfekt);


}
function elementHint(element) {
    element.click(function () {
        var jThis = jQuery(this);
        var jTargetElement = jQuery("#" + jThis.data("element"));
        console.log("#" + jThis.data("element"));
        jTargetElement.val(jTargetElement.data("customvalue"));
    });
}
function validate() {

//    if (infinitiv.val() !== infinitiv.data("customvalue")) {
//        jInfinitivHint.text("Das ist falsch, versucht noch mal! Wenn du hielfst braucht Click hier");
//
//        elementHint(jInfinitivHint);
//        return false;
//    }
    if (praesens.val() !== praesens.data("customvalue")) {
        jPraesensHint.text("Das ist falsch, versucht noch mal! Wenn du hielfst braucht Click hier");
        elementHint(jPraesensHint);

        return false;
    }
    if (praeteritum.val() !== praeteritum.data("customvalue")) {
        jPraeteritumHint.text("Das ist falsch, versucht noch mal! Wenn du hielfst braucht Click hier");
        elementHint(jPraeteritumHint);

        return false;
    }
    if (perfekt.val() !== perfekt.data("customvalue")) {
        jPerfektHint.text("Das ist falsch, versucht noch mal! Wenn du hielfst braucht Click hier");
        elementHint(jPerfektHint);

        return false;
    }
    cleanAllInputs();

    jInfinitivHint.prop('onclick', null).off('click');
    jPraesensHint.prop('onclick', null).off('click');
    jPraeteritumHint.prop('onclick', null).off('click');
    jPerfektHint.prop('onclick', null).off('click');
    return true;
}
function cleanAllInputs() {
    jQuery(".result").find("input[type=text]").val("");
    jQuery(".hint").text("");
}
var StartGame = false;
function playGame() {
    jQuery("#play").click(function () {
        var jThis = jQuery(this);
        jQuery(".hint").text("");
        if (StartGame === false) {
            StartGame = true;
            jThis.val("Weiter");

        }
        else {
            if (!validate()) {
                return false;
            }
        }
        showProgress();
        selectVerbById();
    });
}
function showProgress(){
    var jProgress=jQuery(".progress");
    console.log("verbenIdList.length:"+verbenIdList.length);
    console.log("verbenIdListInitialSize:"+verbenIdListInitialSize);
    var porcent=(((verbenIdListInitialSize-verbenIdList.length))*100)/verbenIdListInitialSize;
    console.log("porcent:"+porcent);
    jProgress.css("width",porcent.toString()+"%");
    jProgress.text(porcent.toFixed(0)+" %");
}
$(document).ready(function () {
    initGame();
    getVerbenId();
    playGame();
    showSpecialCharacter();
});