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


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}