document.addEventListener("DOMContentLoaded",function(){const gridItems=document.querySelectorAll(".grid-item");gridItems.forEach(item=>{item.addEventListener("click",function(){this.classList.toggle("selected");const paragraph=this.querySelector("p");const bulletPoints=this.querySelectorAll("li");if(paragraph){paragraph.classList.toggle("visible")}bulletPoints.forEach(bulletPoint=>{bulletPoint.classList.toggle("visible");bulletPoint.style.display=bulletPoint.classList.contains("visible")?"list-item":"none"});gridItems.forEach(gridItem=>{if(gridItem!==item){gridItem.classList.toggle("hidden");const otherParagraph=gridItem.querySelector("p");if(otherParagraph){otherParagraph.classList.toggle("visible")}}});gridItems.forEach(function(gridItem){if(gridItem!==item&&gridItem.classList.contains("selected")){gridItem.classList.remove("chat","todo")}})})})});