//Below pais are equivalent
//1.
var title = document.querySelector("h1");
console.log("This is using dom methods: " + title);
//2.
var jTitle = $("h1");
console.dir("jTitle");

//Below two methods are equivalent with one exception, jQuery will change all buttons
// 1.
document.querySelector("button").addEventListener("click", function(){
  document.querySelector("h1").style.color = "red";
});
// 2.
$("button").click(function (){
  $("h1").css("color","red");
});

//Below two are equivalent
//1.
document.querySelector("h1").classList.add("big-title");

//2.
$("h1").addClass("big-title");

//Below two are equivalent
//1.
document.querySelector("h1").innerText = "Goodbye";
//2.
$("h1").text("hello Again!");

//Below two are equivalent
//1.
document.querySelector("h1").innerHTML = "<em>Changed innerHTML with dom method</em>";
//2.
$("h1").html("<em>Changed with jQuery</em>");

//Below two are equivalent
//1.
console.log(document.querySelector("img").attributes.src);
//2.
console.log($("img").attr("src"));

//Below two are equivalent
//1.
document.querySelector("a").setAttribute("href","https://bing.com");

//2.
$("a").attr("href", "https://bing.com");

//Below two are equivalent
//1.
$("h1").click(function(){
  $("h1").css("color","yellow");
});

//2.
document.querySelector("h1").addEventListener("click",function(){
  document.querySelector("h1").style.color = "red";
});

//Below two are equivalent
//1.
for(var i = 0;i<5;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    document.querySelector("h1").style.color = "purple";
  });
}
//2.
$("button").click(function(){
  $("h1").css("color","purple");
});

//Below are additional jQuery examples:

$(document).keypress(function(e){
  $("h1").text(e.key);
});

$("h1").on("mouseover",function(){
  $("h1").css("color","purple");
});

//This jQuery function will remove html elements
$("button").remove();

//This will add html elements before opening tag of selected elements
$("h1").before("<button>New</button>");

//This will add html elements after the closing tag of the selected elements
$("h1").after("<button>New</button>");

//This will add html elements right after the opening tag of selected elements
$("h1").prepend("<button>new</button>");

//This will add html elements right before the closing tag of selected element.
$("h1").append("<button>new</button>");

//Below is an animation that will hide the selected element, additionally ther is .show(), or use toggle
$("button").on("click",function(){
  $("h1").toggle();
});

//Or you can use fadeOut() for more progressive transition, also fadeIn(), and fadeToggle
$("button").on("click",function(){
  $("h1").fadeToggle();
});

//Or you can collapse elements using slideUp, slideDown, slideToggle
$("button").on("click",function(){
  $("h1").slideToggle();
});

//Or you change transition css values that are numeric
$("button").on("click",function(){
  $("h1").animate({margin:"20%"});
});


//We can also chain animation functions for ex
//It does the in the order they are called
$("button").on("click",function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});















/*
Notes:
- To view an html element as an object so that you can manipulate it, use console.dir.
- In jquery we can use addClass and removeClass to add or remove classes
- In jQuery we can use .css() method to change any css property value
- We can add mulitiple classes by including them inside the quotation marks.
- Ex $("h1").addClass("big-title landing-page").
- jQuery also has .hasClass method that returns a boolean
- Use the jquery .text method to change the text within an html element
- We use the .html method to change the innerHtml
- For jQuery, if we do not provide a second parameter in css("color") or attr("href")
- then it will return the value of that property.
- .attr("class") will return all of the classes that are applied to that attribute













*/
