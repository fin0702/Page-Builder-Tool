const section1 = 'Equipment';
const frame1 = 'frame1.html';
const frame2 = 'frame2.html';
const frame3 = 'frame3.html';

function hideOverlays(){
Array.from(document.querySelectorAll('.overlay, .menuoverlay')).forEach((el) => el.classList.remove('show'));
};

function frameOne(){
fetch(frame1).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const learningcontent = document.getElementById('content');
const footer = document.getElementById('footer');
var frame = doc.getElementById('content').outerHTML;
var nav = doc.getElementById('footer').outerHTML;
// insert Html
learningcontent.outerHTML = frame;
footer.outerHTML = nav;
document.getElementById('section-name').innerHTML = section1;
//defines object as being draggable
    $("#object").draggable();
    $("#object2").draggable();
    $("#object3").draggable();
    $("#object4").draggable();
    $("#object5").draggable();
    $("#object6").draggable();
    $("#object7").draggable();
    $("#objectwrong").draggable();
    $("#dropzone").droppable({
    //defines what to do when object is dropped
    drop: function(event, ui) {
    //defines what to do when object is dropped
    $(this).addClass('change').removeClass('over');
    //if all CORRECT objects are dropped:
    if (($("#object").is(".dropped"))&&($("#object2").is(".dropped"))&&($("#object3").is(".dropped"))&&($("#object4").is(".dropped"))&&($("#object5").is(".dropped"))&&($("#object6").is(".dropped"))) {
    // change color
    $("#dropzone").addClass('complete');
    // and show button
    $("#forward").removeClass('disabled-btn');
    }
    //if INCORRECT objects are dropped:
    if ($("#objectwrong").is(".dropped")) {
    // remove color
    $("#dropzone").removeClass('complete').addClass('error');
    // hide button
    $("#forward").addClass('disabled-btn');
    }
    },
    over: function(event, ui) {
    // add hover color to dropzone
    $(this).addClass('over');
    // if objects are dragged over dropzone add dropped class
    if($("#object").is('.ui-draggable-dragging')){$("#object").addClass('dropped')};
    if($("#object2").is('.ui-draggable-dragging')){$("#object2").addClass('dropped')};
    if($("#object3").is('.ui-draggable-dragging')){$("#object3").addClass('dropped')};
    if($("#object4").is('.ui-draggable-dragging')){$("#object4").addClass('dropped')};
    if($("#object5").is('.ui-draggable-dragging')){$("#object5").addClass('dropped')};
    if($("#object6").is('.ui-draggable-dragging')){$("#object6").addClass('dropped')};
    if($("#object7").is('.ui-draggable-dragging')){$("#object7").addClass('dropped')};
    if($("#objectwrong").is('.ui-draggable-dragging')){$("#objectwrong").addClass('dropped')};
    },
    out: function(event, ui) {
    //remove class when object moves outside dropzone
    $(this).removeClass('over');
    // remove complete color and hide button when object leaves dropzone
    $(this).removeClass('complete');$("#forward").addClass('disabled');
    //if object moves out of dropzone AND is dragging AND has been dropped, remove dropped class
    if(($("#object").is('.ui-draggable-dragging'))&&($("#object").is('.dropped'))){$("#object").removeClass('dropped')};
    if(($("#object2").is('.ui-draggable-dragging'))&&($("#object2").is('.dropped'))){$("#object2").removeClass('dropped')};
    if(($("#object3").is('.ui-draggable-dragging'))&&($("#object3").is('.dropped'))){$("#object3").removeClass('dropped')};
    if(($("#object4").is('.ui-draggable-dragging'))&&($("#object4").is('.dropped'))){$("#object4").removeClass('dropped')};
    if(($("#object5").is('.ui-draggable-dragging'))&&($("#object5").is('.dropped'))){$("#object5").removeClass('dropped')};
    if(($("#object6").is('.ui-draggable-dragging'))&&($("#object6").is('.dropped'))){$("#object6").removeClass('dropped')};
    if(($("#object7").is('.ui-draggable-dragging'))&&($("#object7").is('.dropped'))){$("#object7").removeClass('dropped')};
    if(($("#objectwrong").is('.ui-draggable-dragging'))&&($("#objectwrong").is('.dropped'))){$("#objectwrong").removeClass('dropped');$("#dropzone").removeClass('error')};
    // if all CORRECT objects remain in dropzone reinstate complete color and button
    if (($("#object").is(".dropped"))&&($("#object2").is(".dropped"))&&($("#object3").is(".dropped"))&&($("#object4").is(".dropped"))&&($("#object5").is(".dropped"))&&($("#object6").is(".dropped"))) {
    $("#dropzone").addClass('complete');
    $("#forward").removeClass('disabled-btn');
    };
    }
    });
});
};
function frameTwo(){
fetch(frame2).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const learningcontent = document.getElementById('content');
const footer = document.getElementById('footer');
var frame = doc.getElementById('content').outerHTML;
var nav = doc.getElementById('footer').outerHTML;
// insert Html
learningcontent.outerHTML = frame;
footer.outerHTML = nav;
//Progress active card
$(".progress-section-card").removeClass('card-active');$("#surface").addClass('card-active');
});
};

function frameThree(){
fetch(frame3).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const learningcontent = document.getElementById('content');
const footer = document.getElementById('footer');
var frame = doc.getElementById('content').outerHTML;
var nav = doc.getElementById('footer').outerHTML;
// insert Html
learningcontent.outerHTML = frame;
footer.outerHTML = nav;
});
};

function slideOne(){
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
slide1.classList.add('animate__animated', 'animate__backOutLeft');
slide1.addEventListener('animationend', () => {
slide1.classList.add('hide');
slide2.classList.add('show', 'animate__animated', 'animate__slideInLeft');
});
};
function slideTwo(){
const slide3 = document.getElementById('slide3');
slide2.classList.remove('animate__animated', 'animate__slideInLeft');
slide2.classList.add('animate__animated', 'animate__backOutLeft');
slide2.addEventListener('animationend', () => {
slide2.classList.remove('show');
slide2.classList.add('hide');
slide3.classList.add('show', 'animate__animated', 'animate__slideInLeft');
});
};
