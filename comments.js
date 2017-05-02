function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}
var a;
$('#commands').mouseup(function(e) {
    var text = getSelectedText();
    if (text != '') {
        console.log("text == " + text);
        a = e;
        console.log(e);
    }
});
