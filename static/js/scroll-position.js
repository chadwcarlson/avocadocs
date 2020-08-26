var el = document.querySelector(".sidebar");
var pos = el.scrollTop;

Object.defineProperty(HTMLElement.prototype, "scrollTo", {
    value: function(x, y) {
        el.scrollTop = y;
        el.scrollLeft = x;
    },
    enumerable: false
});

Object.defineProperty(HTMLElement.prototype, "scrollBy", {
    value: function(x, y) {
        el.scrollTop += y;
        el.scrollLeft += x;
    },
    enumerable: false
});

window.onbeforeunload = function () {
  // console.log(el.scrollTop)
  // var scrollPos = el.scrollTop
  let pos = el.scrollTop;
  console.log(pos)
}

window.onload = function () {
  // console.log(pos)
  el.scrollTo(0, pos);
  // console.log(el.scrollTop)
  console.log(pos)
}


// function refreshPage () {
//     var page_y = document.querySelector(".sidebar").scrollTop;
//     window.location.href = window.location.href.split('?')[0] + '?page_y=' + page_y;
//     console.log(page_y)
// }
// window.onload = function () {
//     // setTimeout(refreshPage, 40000);
//     var el = document.querySelector(".sidebar");
//     var page_y = el.scrollTop;
//     // el.scrollLeft = 500;
//     el.scrollTop = page_y;
//     console.log(page_y)
//     // if ( window.location.href.indexOf('page_y') != -1 ) {
//     //     var match = window.location.href.split('?')[1].split("&")[0].split("=");
//     //     document.querySelector(".sidebar").scrollTop = match[1];
//     // }
// }

//
// document.getElementById("link-sidebar-event").addEventListener("click", function() {
//   var el = document.querySelector(".sidebar");
//
//   // get scroll position in px
//   console.log(el.scrollLeft, el.scrollTop);
//   console.log("something")
// });
