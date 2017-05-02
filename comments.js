function getSelectedText() {
    if (window.getSelection) {

        return window.getSelection();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}
var a;
var evn = "shubham";
var count = 0;
$('#commands p').mouseup(function(e) {
    var selectionObject = getSelectedText();
    var text = selectionObject.toString();
    if (text != '') {
        console.log("text == " + text);
        evn = e;
        a = selectionObject;
        console.log(selectionObject);
        // console.log(event.currentTarget.innerHTML);
        // console.log(event);
        a = selectionObject;
        var startIndecx = selectionObject.anchorOffset;
        var endIndex = selectionObject.focusOffset;
        var description = selectionObject.focusNode.data;
        console.log(selectionObject.focusNode.outerHTML);
        var array = [];
        array[0] = description.slice(0, startIndecx);
        array[1] = description.slice(endIndex);
        console.log(startIndecx + " endIndex" + endIndex);
        console.log(array);
        count++;
        e.target.innerHTML = array[0] + '<span id="' + count + '">' + text + '</span>' + array[1];
    }
});
