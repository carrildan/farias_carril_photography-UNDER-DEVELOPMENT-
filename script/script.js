
//this function opens a menu list of itens on footer
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


//sort the dropdown menu list in alphabetic order
function Sort() {
  var list, i, switching, shouldSwitch;
  div = document.querySelector(".search-block");
  //a = div.getElementsById("a");
  list = document.getElementById("list1");
  switching = true;
  while (switching)
  {
    switching = false;
    b = list.getElementsByTagName("li");
    for (i=0; i<(b.length - 1); i++){
      shouldSwitch = false;
      //innerHtml do not work here because it would return the whole element of a tag
      if (b[i].textContent.toLowerCase() > b[i+1].textContent.toLowerCase()){
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch)
    {
      b[i].parentNode.insertBefore(b[i+1], b[i]);
      switching = true;
    }
  }

}


//filter the options on the menu list
function filterFunction() {
    
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  ul = document.getElementById("list1");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    } else {
      li[i].style.display = "none";
    } 
  } 
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function ScreenSizeMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";

  } else {
    x.className = "topnav";
  }
}


