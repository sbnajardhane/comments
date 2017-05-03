function heavy() {
    var a = 0;
    for (i = 0; i < 1000; i++) {
        for (j = 0; j < 1000; j++) {
            for (k = 0; k < 500; k++) {
                a = a + i + j + k;
            }
        }
    }
    console.log(a);
}
// setTimeout(function() {
//heavy();

$(document).ready(function() {
    if (Modernizr.websockets) {
        $("#result").html('Your browser has support for Web Sockets');
    } else {
        $("#result").html('Your browser does not support Web Sockets');
    }
});
// }, 0);

$(function() {
    $('#firstiFrame').on('load', function() {
        $(this).show();
        console.log('laod the first iframe');

    });
    $('#secondiFrame').on('load', function() {
        $(this).show();
        console.log('load the second iFrame');
    });
});
