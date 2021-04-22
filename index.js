// console.dir(document);

// console.log(document.URL);
// console.log(document.title);
// to change title
// document.title="Mohan Mishra only improve";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.scripts);

var text_color = document.getElementById("hello");
text_color.style.margin = "auto";
text_color.style.color = "Pink";
text_color.style.fontSize = "55px";
text_color.style.border = "3px  groove red";
text_color.style.height = "100px";
text_color.style.width = "450px";
text_color.style.padding = "15px";

//Get elementbyclassname

var items = document.getElementsByClassName("input");
console.log(items);
items.textContent = "Mohan only one";

//Get element by tagname

var tag = document.getElementsByTagName("input");
console.log(tag[1]);
for (let i = 0; i < tag.length; i++) {
  tag[i].style.backgroundColor = "indigo";
  tag[i].style.color = "white";
  tag[i].style.height = "40px";
  tag[i].style.fontSize = "20px";
  tag[i].style.borderRadius = "15px";
}
var hello = document.getElementsByTagName("body");
console.log(hello);
hello[0].style.backgroundColor = "khaki";

var button = document
  .getElementById("button")
  .addEventListener("click", function () {
    console.log("123");
  });
