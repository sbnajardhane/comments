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
$('#description span').mouseup(function(e) {
    var selectionObject = getSelectedText();
    var text = selectionObject.toString();
    if (text != '') {
        console.log("text == " + text);
        evn = e;
        a = selectionObject;
        // console.log(selectionObject);
        // console.log(event.currentTarget.innerHTML);
        // console.log(event);
        a = selectionObject;
        var startIndecx = selectionObject.anchorOffset < selectionObject.focusOffset ? selectionObject.anchorOffset : selectionObject.focusOffset;
        var endIndex = selectionObject.focusOffset > selectionObject.anchorOffset ? selectionObject.focusOffset : selectionObject.anchorOffset;
        var description = selectionObject.focusNode.data;
        console.log(selectionObject.anchorNode);
        var array = [];
        array[0] = description.slice(0, startIndecx);
        array[1] = description.slice(endIndex);
        console.log(startIndecx + " endIndex" + endIndex);
        // console.log(array);
        count++;
        var remaining = e.target.innerHTML;
        console.log(remaining);
        var remainingLength = selectionObject.anchorNode.length;
        remaining = remaining.slice(0, -remainingLength);
        e.target.innerHTML = remaining + array[0] + '<span class="green" id="' + count + '">' + text + '</span>' + array[1];
    }
});
