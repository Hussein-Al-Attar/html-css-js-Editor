var j = 0;
let text =
  htmlCode +
  "<style>" +
  cssCode +
  "</style>" +
  "<scri" +
  "pt>" +
  javascriptCode +
  "</scri" +
  "pt>";
//Function for live Rendering
function update(i) {
  if (i == 0) {
    let htmlCode = document.getElementById("htmlCode").value;
    let cssCode = document.getElementById("cssCode").value;
    let javascriptCode = document.getElementById("javascriptCode").value;
    let text =
      htmlCode +
      "<style>" +
      cssCode +
      "</style>" +
      "<scri" +
      "pt>" +
      javascriptCode +
      "</scri" +
      "pt>";
    let iframe = document.getElementById("viewer").contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
  } else if (i == 1) {
    let htmlCode = document.getElementById("htmlCode").value;
    let html = htmlCode.slice(0, htmlCode.length);
    document.getElementById("htmlCode").value = html;
    j = 1;
  }
}

function onkeydownHtml() {
  if (event.keyCode === 9) {
    var v = this.value,
      s = this.selectionStart,
      e = this.selectionEnd;
    this.value = v.substring(0, s) + "\t" + v.substring(e);
    this.selectionStart = this.selectionEnd = s + 1;
    return false;
  }
  if (event.keyCode == 8) {
    update(1);
  }
}
function onkeydownCss() {
  if (event.keyCode === 9) {
    var v = this.value,
      s = this.selectionStart,
      e = this.selectionEnd;
    this.value = v.substring(0, s) + "\t" + v.substring(e);
    this.selectionStart = this.selectionEnd = s + 1;
    return false;
  }
  if (event.keyCode == 8) {
    update(1);
  }
}
function onkeydownJs() {
  if (event.keyCode === 9) {
    var v = this.value,
      s = this.selectionStart,
      e = this.selectionEnd;
    this.value = v.substring(0, s) + "\t" + v.substring(e);
    this.selectionStart = this.selectionEnd = s + 1;
    return false;
  }
  if (event.keyCode == 8) {
    update(1);
  }
}
