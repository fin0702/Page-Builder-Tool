//Rotate menu chevrons
setInterval (function rotateChev(){
document.getElementById('chev0').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection0').getAttribute('aria-expanded') === "true") {
document.getElementById('chev0').style.transform = 'rotate(180deg)';
};
document.getElementById('chev1').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection1').getAttribute('aria-expanded') === "true") {
document.getElementById('chev1').style.transform = 'rotate(180deg)';
};
document.getElementById('chev2').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection2').getAttribute('aria-expanded') === "true") {
document.getElementById('chev2').style.transform = 'rotate(180deg)';
};
document.getElementById('chev3').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection3').getAttribute('aria-expanded') === "true") {
document.getElementById('chev3').style.transform = 'rotate(180deg)';
};
document.getElementById('chev4').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection4').getAttribute('aria-expanded') === "true") {
document.getElementById('chev4').style.transform = 'rotate(180deg)';
};
document.getElementById('chev5').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection5').getAttribute('aria-expanded') === "true") {
document.getElementById('chev5').style.transform = 'rotate(180deg)';
};
document.getElementById('chev6').style.transform = 'rotate(0deg)';
if (document.getElementById('menusection6').getAttribute('aria-expanded') === "true") {
document.getElementById('chev6').style.transform = 'rotate(180deg)';
};
;},100)

//Clear menu searchTerm
function clearSearch(){
input = document.getElementById("accordion_search_bar");
input.value = "";
input.focus();
};
// image caption random id and insert
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
};
function upDateImageCaption(){
var imageframe = document.getElementById('image-caption-frame').contentWindow;
imageframe.document.getElementById('imageid').value = getRndInteger(1, 5000);
let imgid = imageframe.document.getElementById('imageid').value;
var els = imageframe.document.getElementsByClassName('standardimg');
for (var i = 0; i < els.length; i++ ) {
    els[i].id = imgid;};
imageframe.document.getElementById(imgid).src = 'https://asp.arrival.co'+ document.getElementById('urlcaption').value +'';
};

// image random id and insert
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
};
function upDateImage(){
var imageframe = document.getElementById('image-frame').contentWindow;
imageframe.document.getElementById('imageid').value = getRndInteger(1, 5000);
let imgid = imageframe.document.getElementById('imageid').value;
var els = imageframe.document.getElementsByClassName('standardimg');
for (var i = 0; i < els.length; i++ ) {
    els[i].id = imgid;};
imageframe.document.getElementById(imgid).src = 'https://asp.arrival.co'+ document.getElementById('url').value +'';
};

// Marked image random id and insert
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
};
function upDateMarkedImage(){
var imageframe = document.getElementById('image-marked-frame').contentWindow;
imageframe.document.getElementById('imageid').value = getRndInteger(1, 5000);
let imgid = imageframe.document.getElementById('imageid').value;
var els = imageframe.document.getElementsByClassName('markedimg');
for (var i = 0; i < els.length; i++ ) {
    els[i].id = 'marked'+imgid;};
imageframe.document.getElementById('marked'+imgid).src = 'https://asp.arrival.co'+ document.getElementById('urlmarked').value +'';
};

// Multi image random id and insert
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
};
function upDateImageMulti1(){
var imageframe = document.getElementById('multi-image-frame').contentWindow;
imageframe.document.getElementById('imageid1').value = getRndInteger(1, 5000);
let imgid = imageframe.document.getElementById('imageid1').value;
var els = imageframe.document.getElementsByClassName('multi-image1');
for (var i = 0; i < els.length; i++ ) {
    els[i].id = imgid;};
imageframe.document.getElementById(imgid).src = 'https://asp.arrival.co'+ document.getElementById('urlmulti1').value +'';
};
function upDateImageMulti2(){
var imageframe = document.getElementById('multi-image-frame').contentWindow;
imageframe.document.getElementById('imageid2').value = getRndInteger(1, 5000);
let imgid = imageframe.document.getElementById('imageid2').value;
var els = imageframe.document.getElementsByClassName('multi-image2');
for (var i = 0; i < els.length; i++ ) {
    els[i].id = imgid;};
imageframe.document.getElementById(imgid).src = 'https://asp.arrival.co'+ document.getElementById('urlmulti2').value +'';
};

// Letterbox image random id and insert
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
};
function upDateImageLetterbox(){
var imageframe = document.getElementById('image-letterbox-frame').contentWindow;
imageframe.document.getElementById('imageid').value = getRndInteger(1, 5000);
let imgid = imageframe.document.getElementById('imageid').value;
var els = imageframe.document.getElementsByClassName('letterboximage');
for (var i = 0; i < els.length; i++ ) {
    els[i].id = imgid;};
imageframe.document.getElementById(imgid).src = 'https://asp.arrival.co'+ document.getElementById('urlletterbox').value +'';
};

// Video id and insert
function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
};
function upDateVideo(){
var imageframe = document.getElementById('video-frame').contentWindow;
imageframe.document.getElementById('imageid').value = getRndInteger(1, 5000);
let imgid = imageframe.document.getElementById('imageid').value;
var els = imageframe.document.getElementsByClassName('standardvideo');
for (var i = 0; i < els.length; i++ ) {
    els[i].id = imgid;};
imageframe.document.getElementById(imgid).src = 'https://asp.arrival.co'+ document.getElementById('urlvideo').value +'';
};

// Download Link insert
function downloadLinkHref(){
var dlinkframe = document.getElementById('dlink-frame').contentWindow;
let dlinkurl = document.getElementById('urldlink').value;
let downloadid = dlinkframe.document.getElementById('downloadid').value;
dlinkframe.document.getElementById('download'+downloadid).href='https://asp.arrival.co'+dlinkurl;
}
function downloadLinkDesc(){
var dlinkframe = document.getElementById('dlink-frame').contentWindow;
let dlinkdesc = document.getElementById('dlinkdesc').value;
let downloadid = dlinkframe.document.getElementById('downloadid').value;
dlinkframe.document.getElementById('description'+downloadid).innerHTML = dlinkdesc;
}

// External Link insert
function extLinkHref(){
var extlinkframe = document.getElementById('extlink-frame').contentWindow;
let extlinkurl = document.getElementById('urlextlink').value;
let downloadid = extlinkframe.document.getElementById('downloadid').value;
extlinkframe.document.getElementById('download'+downloadid).href= extlinkurl;
}
function extLinkDesc(){
var extlinkframe = document.getElementById('extlink-frame').contentWindow;
let extlinkdesc = document.getElementById('extlinkdesc').value;
let downloadid = extlinkframe.document.getElementById('downloadid').value;
extlinkframe.document.getElementById('description'+downloadid).innerHTML = extlinkdesc;
}

// iFrame Link insert
function extLinkSpFrame(){
var extlinkspframe = document.getElementById('sp-frame').contentWindow;
let extlinkspframeurl = document.getElementById('urlspframe').value;
extlinkspframe.document.getElementById('sp-iframe').src = extlinkspframeurl;
}

//function to download a .txt version of the markup
(function () {
var textFile = null,
makeTextFile = function (text) {
var data = new Blob([text], {type: 'text/plain'});
// If we are replacing a previously generated file we need to
// manually revoke the object URL to avoid memory leaks.
if (textFile !== null) {
window.URL.revokeObjectURL(textFile);
}
textFile = window.URL.createObjectURL(data);
return textFile;
};
//button and markup textarea
var create = document.getElementById('create'),
textbox = document.getElementById('generatedmarkup');
//add click listener to download button
create.addEventListener('click', function () {
var link = document.getElementById('downloadlink');
link.href = makeTextFile(generatedmarkup.value);
link.style.display = 'inline-block';
}, false);
})();

//function to update html preview for TESTING only - remove comments for testing
//setInterval(function() {
//var html = document.getElementById('page-builder-html');
//var content = document.getElementById('page-builder').innerHTML;
 //html.value = content; {
//  }
//}, 1000);

//left menu show/hide accordian function
function componentMenu(id) {
var x = document.getElementById(id);
if (x.className.indexOf("w3-hide") == 0) {
x.className += " w3-hide";
} else {
x.className = x.className.replace(" w3-hide", "w3-show");
}
}

//function to move the div component block up or down the DOM
function moveUp(element) {
if(element.previousElementSibling)
element.parentNode.insertBefore(element, element.previousElementSibling).scrollIntoView({behavior: 'smooth'});
}
function moveDown(element) {
if(element.nextElementSibling)
element.parentNode.insertBefore(element.nextElementSibling, element).scrollIntoView({behavior: 'smooth'});
}
document.querySelector('#page-builder').addEventListener('click', function(e) {
if(e.target.className === 'down') moveDown(e.target.parentNode);
else if(e.target.className === 'up') moveUp(e.target.parentNode);
});

//function to move the FULL div component block up or down the DOM
function moveUpFull(element) {
if(element.previousElementSibling)
element.parentNode.insertBefore(element, element.previousElementSibling).scrollIntoView({behavior: 'smooth'});
}
function moveDownFull(element) {
if(element.nextElementSibling)
element.parentNode.insertBefore(element.nextElementSibling, element).scrollIntoView({behavior: 'smooth'});
}
document.querySelector('#page-builder').addEventListener('click', function(e) {
if(e.target.className === 'down-full') moveDown(e.target.parentNode);
else if(e.target.className === 'up-full') moveUp(e.target.parentNode);
});

//function to move the answers up or down in question component
function moveUpAnswer(element) {
if(element.previousElementSibling)
element.parentNode.insertBefore(element, element.previousElementSibling);
}
function moveDownAnswer(element) {
if(element.nextElementSibling)
element.parentNode.insertBefore(element.nextElementSibling, element);
}
document.querySelector('#page-builder').addEventListener('click', function(e) {
if(e.target.className === 'down-answer') moveDownAnswer(e.target.parentNode);
else if(e.target.className === 'up-answer') moveUpAnswer(e.target.parentNode);
});

// Remove rich text styling when text is pasted
document.querySelector('[contenteditable]').addEventListener('paste', function (event) {
event.preventDefault();
document.execCommand('inserttext', false, event.clipboardData.getData('text/plain'));
});

// Save div content to LocalStorage temporarily, load from localStorage and clearLocalStorage
var content = document.getElementById('content'),
saveButton = document.getElementById('save'),
loadButton = document.getElementById('load');
clearButton = document.getElementById('clear');
editor = document.getElementById('page-builder');

var localStore = {
saveLocalStorage: function() {
localStorage.setItem('item', content.innerHTML);
},
loadLocalStorage: function() {
var contentStored = localStorage.getItem('item');
if ( contentStored ) {
content.innerHTML = contentStored;
}
},
clearLocalStorage: function() {
localStorage.removeItem('item');
}
};
clearButton.addEventListener('click', function() {
editor.innerHTML = "";
}, false);
saveButton.addEventListener('click', function() {
localStore.saveLocalStorage();
}, false);
loadButton.addEventListener('click', function() {
localStore.loadLocalStorage();
}, false);

// Text styling execCommand
/* To replace execCommand eventually function onBoldClick() {
    const strongElement = document.createElement("strong");
    const userSelection = window.getSelection();
    const selectedTextRange = userSelection.getRangeAt(0);
    selectedTextRange.surroundContents(strongElement);
}*/
function onBoldClick() {
document.execCommand( 'bold', false, null );
}
function onItalicClick() {
document.execCommand( 'italic', false, null );
}
function onUnderlineClick() {
document.execCommand( 'underline', false, null );
}
function onUnderlineClick() {
document.execCommand( 'underline', false, null );
}
function onH1Click() {
document.execCommand( 'formatBlock', false, 'h1' );
}
function onH2Click() {
document.execCommand( 'formatBlock', false, 'h2' );
}
function onH3Click() {
document.execCommand( 'formatBlock', false, 'h3' );
}
function onBodyClick() {
document.execCommand( 'formatBlock', false, 'p' );
}

// functions for inserting components
//html urls
const componenttitleurl = 'components/component-title.html';
const componenttitleheadingurl = 'components/component-title-heading.html';
const componentparagraphurl = 'components/component-paragraph.html';
const componentparagraphtitleurl = 'components/component-small-title-paragraph.html';
const componentsectionparagraphurl = 'components/component-section-title-paragraph.html';
const componentsectionnumberingurl = 'components/component-section-numbering.html';
const componentnoteadmonitionurl = 'components/component-note-admonition.html';
const componentcautionadmonitionurl = 'components/component-caution-admonition.html';
const componentwarningadmonitionurl = 'components/component-warning-admonition.html';
const componentdangeradmonitionurl = 'components/component-danger-admonition.html';
const componentnumberedlisturl = 'components/component-numbered-list.html';
const componentnumberedlisttitleurl = 'components/component-numbered-list-title.html';
const componentbulletlisturl = 'components/component-bullet-list.html';
const componentalphalisturl = 'components/component-alpha-list.html';
const componentcontinuednumberingurl = 'components/component-section-numbering.html';
const componenttableurl = 'components/component-table.html';
const componentdividerurl = 'components/component-divider.html';
const componentfooterurl = 'components/component-footer.html';
const componentheaderurl = 'components/component-header.html';
const templatetopicoverviewurl = 'components/template-topic-overview.html';

// fetch html and insert title component
function insertTitle(){
fetch(componenttitleurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('title');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// fetch html and insert title heading component
function insertTitleHeading(){
fetch(componenttitleheadingurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('title-heading');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// fetch html and insert paragraph component
function insertParagraph(){
fetch(componentparagraphurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById("paragraph");
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// fetch html and insert paragraph with title component
function insertParagraphTitle(){
fetch(componentparagraphtitleurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('small-title-paragraph');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// fetch html and insert section paragraph
function insertSectionParagraph(){
fetch(componentsectionparagraphurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('section-title-paragraph');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// fetch html and insert divider component
function insertDivider(){
fetch(componentdividerurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('divider');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// List - number, bullet,etc
// fetch html and insert numbered list component
function insertNumberList(){
fetch(componentnumberedlisturl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('numbered-list');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// fetch html and insert numbered list component
function insertNumberListTitle(){
fetch(componentnumberedlisttitleurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('numbered-list-title');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// fetch html and insert alphabet list component
function insertAlphaList(){
fetch(componentalphalisturl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('alpha-list');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};
// fetch html and insert bulletlist component
function insertBulletList(){
fetch(componentbulletlisturl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('bullet-list');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};
// fetch html and insert section numbering component
function insertContinueNumberList(){
fetch(componentcontinuednumberingurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('section-numbering');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// Admonitions - note, caution, warning, danger
// fetch html and insert note admonition
function insertNoteAdmonition(){
fetch(componentnoteadmonitionurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('note-admonition');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};
// fetch html and insert caution admonition
function insertCautionAdmonition(){
fetch(componentcautionadmonitionurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('caution-admonition');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};
// fetch html and insert warning admonition
function insertWarningAdmonition(){
fetch(componentwarningadmonitionurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('warning-admonition');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};
// fetch html and insert danger admonition
function insertDangerAdmonition(){
fetch(componentdangeradmonitionurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('danger-admonition');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// fetch html and insert table component
function insertSimpleTable(){
fetch(componenttableurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('table');
// insert Html
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// fetch html and insert header component
function insertHeader(){
fetch(componentheaderurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('header');
// insert Html and insert year in footer
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});
});
};

// fetch html and insert footer component
function insertFooter(){
// function to pdate footer year with current year
function insertCurrentYear(){
document.getElementById('publishyear').appendChild(document.createTextNode(new Date().getFullYear()))};
fetch(componentfooterurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('footer');
// insert Html and insert year in footer
editor.appendChild(sec).scrollIntoView({behavior: 'smooth'});insertCurrentYear();
});
};

// Insert simple question component
function insertSimpleQuestion(){
const editor = document.getElementById('page-builder');
// get the iframe
var questionframe = document.getElementById('question-frame');
// get the element wthin the iframe
cont = questionframe.contentWindow.document.getElementById('question-4');

var clone = cont.cloneNode(true);
// insert Html
editor.appendChild(clone).scrollIntoView({behavior: 'smooth'});
};

// Insert simple image component
function insertSimpleImage(){
const editor = document.getElementById('page-builder');
// get the iframe
var imageframe = document.getElementById('image-frame');
// get the element wthin the iframe
cont = imageframe.contentWindow.document.getElementById('image');

var clone = cont.cloneNode(true);
// insert Html
editor.appendChild(clone).scrollIntoView({behavior: 'smooth'});
};

// Insert Marked image component
function insertMarkedImage(){
const editor = document.getElementById('page-builder');
// get the iframe
var markedimageframe = document.getElementById('image-marked-frame');
// get the element wthin the iframe
cont = markedimageframe.contentWindow.document.getElementById('marker-image');

var clone = cont.cloneNode(true);
// insert Html
editor.appendChild(clone).scrollIntoView({behavior: 'smooth'});
};

// Insert letterbox image component
function insertLetterboxImage(){
const editor = document.getElementById('page-builder');
// get the iframe
var imageframe = document.getElementById('image-letterbox-frame');
// get the element wthin the iframe
cont = imageframe.contentWindow.document.getElementById('letterbox-image');

var clone = cont.cloneNode(true);
// insert Html
editor.appendChild(clone).scrollIntoView({behavior: 'smooth'});
};

// Insert Multi image component
function insertMultiImage(){
const editor = document.getElementById('page-builder');
// get the iframe
var imageframe = document.getElementById('multi-image-frame');
// get the element wthin the iframe
cont = imageframe.contentWindow.document.getElementById('multi-image');

var clone = cont.cloneNode(true);
// insert Html
editor.appendChild(clone).scrollIntoView({behavior: 'smooth'});
};

// Insert image with caption component
function insertImageCaption(){
const editor = document.getElementById('page-builder');
// get the iframe
var imageframe = document.getElementById('image-caption-frame');
// get the element wthin the iframe
cont = imageframe.contentWindow.document.getElementById('image');

var clone = cont.cloneNode(true);
// insert Html
editor.appendChild(clone).scrollIntoView({behavior: 'smooth'});
};

// Insert Video component
function insertVideo(){
const editor = document.getElementById('page-builder');
// get the iframe
var imageframe = document.getElementById('video-frame');
// get the element wthin the iframe
cont = imageframe.contentWindow.document.getElementById('video');

var clone = cont.cloneNode(true);
// insert Html
editor.appendChild(clone).scrollIntoView({behavior: 'smooth'});
};

// Insert Download Link component
function insertDlink(){
const editor = document.getElementById('page-builder');
// get the iframe
var dlinkframe = document.getElementById('dlink-frame');
// get the element wthin the iframe
cont = dlinkframe.contentWindow.document.getElementById('download-link');

var clone = cont.cloneNode(true);
// insert Html
editor.appendChild(clone).scrollIntoView({behavior: 'smooth'});
};

// Insert External Link component
function insertExtlink(){
const editor = document.getElementById('page-builder');
// get the iframe
var extlinkframe = document.getElementById('extlink-frame');
// get the element wthin the iframe
cont = extlinkframe.contentWindow.document.getElementById('new-window-link');

var clone = cont.cloneNode(true);
// insert Html
editor.appendChild(clone).scrollIntoView({behavior: 'smooth'});
};

// Insert Single Page iframe component
function insertSpIframe(){
const editor = document.getElementById('page-builder');
// get the iframe
var spframe = document.getElementById('sp-frame');
// get the element wthin the iframe
cont = spframe.contentWindow.document.getElementById('single-page-iframe');

var clone = cont.cloneNode(true);
// insert Html
editor.appendChild(clone).scrollIntoView({behavior: 'smooth'});
};

// fetch html and insert Topic Overview Template
function insertTopicOverviewTemplate(){
fetch(templatetopicoverviewurl).then(function (response) {
// The API call was successful!
return response.text();
}).then(function (html) {
// Convert the HTML string into a document object
var parser = new DOMParser();
var doc = parser.parseFromString(html, 'text/html');
// get the element
const editor = document.getElementById('page-builder');
var sec = doc.getElementById('topic-overview-template').innerHTML;
// insert Html and insert year in footer
editor.innerHTML = sec;
});
};

// remove classes from question components and refresh iframe
function removeQuestionClassFrame() {
var correct = document.getElementById('question-frame').contentWindow.document.querySelectorAll(".answer-correct");
[].forEach.call(correct, function(el) {
el.classList.remove("answer-correct");
});
var incorrect = document.getElementById('question-frame').contentWindow.document.querySelectorAll(".answer-incorrect");
[].forEach.call(incorrect, function(el) {
el.classList.remove("answer-incorrect");
});
};
function removeQuestionClassPage() {
var correct = document.querySelectorAll(".answer-correct");
[].forEach.call(correct, function(el) {
el.classList.remove("answer-correct");
});
var incorrect = document.querySelectorAll(".answer-incorrect");
[].forEach.call(incorrect, function(el) {
el.classList.remove("answer-incorrect");
});
};
function refreshIframe() {
var ifr = document.getElementsByName('simplequestion')[0];
ifr.src = ifr.src;
}

/* Get the textarea field */
var markup = document.getElementById('generatedmarkup');
/* Get the 'generate' button and add click event */
document.getElementById('generate').addEventListener('click', (ev)=>{
//remove class from question if user has clicked before generating
removeQuestionClassPage();
/* Get the component by Id and select innerHTML */
var content = document.getElementById('page-builder').outerHTML;
/* Replace contents of textarea with component innerHTML and remove blank lines */
markup.value = content.replace('<div id="page-builder" style="display:block" contenteditable="false" class="componenthover">', '<link rel="stylesheet" href="https://lms-page-builder.s3.eu-west-2.amazonaws.com/style/components-style.css"> <div id="page-builder">').replaceAll('<button id="controls" style="position:absolute" class="row-buttons add-row" onclick="this.nextElementSibling.insertAdjacentHTML(&quot;beforeend&quot;, &quot;<tr><td contenteditable=true>Battery Capacity:</td><td contenteditable=true class=rightcol>44kWh - 133kWh</td></tr>&quot;);"></button>', "").replaceAll('<button id="controls" class="row-buttons remove-row" onclick="this.previousElementSibling.deleteRow(-1);"></button>', "").replaceAll(' style="display:inline-block"', "").replaceAll('<button id="controls" contenteditable="false" class="remove-element" onclick="this.parentNode.remove();"></button>', "").replaceAll(' style="display:inline-block"', "").replaceAll('<span class="up-full"></span><span class="down-full"></span>', "").replaceAll('<span id="controls" class="up"></span><span id="controls" class="down"></span>', "").replaceAll('<span class="up-answer"></span><span class="down-answer"></span>', "").replaceAll(' data-text="Enter text"', "").replaceAll(' data-text="Enter title"', "").replaceAll(' data-text="Enter your question"', "").replaceAll(' data-text="Enter the correct answer"', "").replaceAll(' data-text="Enter an incorrect answer"', "").replaceAll(' data-text="Enter sub-title"', "").replaceAll(' contenteditable="true"', "").replaceAll('<ul><div style="display:inline-block;">', "<ul>").replaceAll('</div></ul>', "</ul>").replaceAll('<ol><div style="display:inline-block;">', "<ol>").replaceAll('</div></ol>', "</ol>").replaceAll('<ol class="alpha-list"><div style="display:inline-block;">', '<ol class="alpha-list">').replaceAll('div class="resizable"', "div").replaceAll('div id="title"', "div").replaceAll('div id="title-heading"', "div").replaceAll('div id="paragraph"', "div").replaceAll('div id="small-title-paragraph"', "div").replaceAll('div id="divider"', "div").replaceAll('div id="numbered-list"', "div").replaceAll('div id="alpha-list"', "div").replaceAll('div id="bullet-list"', "div").replaceAll('div id="section-numbering"', "div").replaceAll('div id="note-admonition"', "div").replaceAll('div id="question-4"', "div").replaceAll('div id="caution-admonition"', "div").replaceAll('div id="warning-admonition"', "div").replaceAll('div id="danger-admonition"', "div").replaceAll('<button contenteditable="false" class="remove-element" onclick="this.parentNode.remove();">remove</button>', "").replace(/^\s*[\r\n]/gm, "");
/* Remove resizable class from divs */
/* select the text inside the text field */
markup.select();
markup.setSelectionRange(0, 99999); /* For mobile devices */
/* Copy the text inside the text field */
dialog.showModal();document.execCommand('copy');
});

// left menu searchTerm
(function(){
var searchTerm, panelContainerId;
// Create a new contains that is case insensitive
$.expr[':'].containsCaseInsensitive = function (n, i, m) {
return jQuery(n).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

$('#accordion_search_bar').on('change keyup paste click focus', function () {
searchTerm = $(this).val();
$('#accordion > .panel').each(function () {
panelContainerId = '#' + $(this).attr('id');
$(panelContainerId + ':not(:containsCaseInsensitive(' + searchTerm + '))').hide();
$(panelContainerId + ':containsCaseInsensitive(' + searchTerm + ')').show();
});
});
}());
