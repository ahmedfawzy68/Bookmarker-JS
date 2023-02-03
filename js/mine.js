var AllBookMarks = [];

if(localStorage.getItem("Storage" )!= null){
  AllBookMarks = JSON.parse(localStorage.getItem("Storage"))
  displayBookMarks();
}

var myBtn = document.getElementById("SubmitButton")
myBtn.addEventListener("click", sumbit )


function sumbit(){
  if(document.getElementById("siteNameID").value == "" ){
    showNameError("Name is required");
    return;
  }
  if(document.getElementById("siteURLID").value == ""){
    showURLError("URL Field is Required")
    return;
  }

  for(var i = 0 ; i < AllBookMarks.length ; i++){
    if(document.getElementById("siteNameID").value == AllBookMarks[i].name){
      showNameError("Name already exist");
      return;
    }
    if(document.getElementById("siteURLID").value == AllBookMarks[i].URL){
      showURLError("URL already exist");
      return;
    }
  }
  nameError.style.opacity = '0';
  URLError.style.opacity = '0';

  addBookMark();
  clearItems();
  displayBookMarks();
}


function showNameError(msg) {
  var nameError = document.getElementById('nameError');
  nameError.innerHTML = msg;
  nameError.style.opacity = '1';
}

function showURLError(msg) {
  var URLError = document.getElementById('URLError');
  URLError.innerHTML = msg;
  URLError.style.opacity = '1';
}

function addBookMark(){
  var siteName = document.getElementById("siteNameID").value;
  var siteURL = document.getElementById("siteURLID").value;

  var oneBookMark = {name: siteName , URL: siteURL}
  AllBookMarks.push(oneBookMark)
  
  localStorage.setItem("Storage", JSON.stringify(AllBookMarks))
}


function clearItems(){
  document.getElementById("siteNameID").value = "";
  document.getElementById("siteURLID").value = ""
}


function displayBookMarks(){
  var total = ``;
  for(var i = 0 ; i < AllBookMarks.length ; i++){
    total += `<div class="box2 row ">
    <h2 class="col-2">`+ AllBookMarks[i].name +`</h2>
    <a href="https://`+ AllBookMarks[i].URL +`" class=" col-3 col-sm-3 col-md-2 col-lg-1 me-3 btn text-white submitButton" target="“_blank”">Visit</a>
    <button onclick="deleteBookMark(`+i+`)" class="col-3 col-sm-3 col-md-2 col-lg-1 btn text-white deleteButton">Delete</button>
</div>`
  }
  document.getElementById("printBM").innerHTML = total;
}


function deleteBookMark(myIndex){
  AllBookMarks.splice(myIndex , 1)
  displayBookMarks();
  localStorage.setItem("Storage" , JSON.stringify(AllBookMarks));
}

var remover1 = document.getElementById("siteNameID");
remover1.addEventListener("click", function(){
  nameError.style.opacity = '0';
})
var remover2 = document.getElementById("siteURLID");
remover2.addEventListener("click", function(){
  URLError.style.opacity = '0';
})