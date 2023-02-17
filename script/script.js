//changes whats app icon size in child1
/*function bigImg (x) {
    x.style.width = "50px";
}

function smallImg (x) {
    x.style.width = "40px"
}*/


//welcome user message
/*function UserMessage() { 
    const header = document.querySelector(".socialmediaicons");
    const newPara = document.createElement("p");
    newPara.textContent = "welcome user";
    //header.appendChild(newPara);
    newPara.style.width="150px";
    newPara.style.margin="0 0 0 50px";
    newPara.style.float="right";
    newPara.style.color="white";
    newPara.style.textAlign="center";
}
UserMessage();*/


//this function opens a menu list of itens
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


//filter the options on the menu list
function filterFunction() {
    
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    ul = document.getElementById("myDropdown");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
      
    }
    
    
}

//sort the dropdown menu list in alphabetic order TO DO: FIGURE OUT WHY IT IS NOT WORKING
function Sort() {
  var list, i, switching, shouldSwitch;
  list = document.querySelector("#list");
  switching = true;
  while (switching)
  {
    switching = false;
    b = list.getElementsByTagName("li");
    for (i=0; i<(b.length - 1); i++){
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i+1].innerHTML.toLowerCase()){
        shouldSwitch = true;
        break;
      }
    }
  }

}