// 
var c=document.getElementById("view");
function touping(){
    c.classList.add("act");
    // document.body.classList.remove("overhide");
}
// 

navi=document.getElementById("navham")
navi2=document.getElementById("iconn")
navi.addEventListener("click",function(){
    var element = document.getElementById("smallnav");
    element.classList.add("active");
});

navi2.addEventListener("click",function(){
    var element = document.getElementById("smallnav");
    element.classList.remove("active");
});


// For changing good morning 
var time=new Date();
var hours=time.getHours();
console.log(hours);
if (hours>=4 && hours<12){
    const a=document.getElementById("timechnge");
    a.innerHTML="Good Morning,";
}
else if (hours>=12 && hours<15){
    const a=document.getElementById("timechnge");
    a.innerHTML="Good AfterNoon,";
}
else if (hours>=15 && hours<20){
    const a=document.getElementById("timechnge");
    a.innerHTML="Good Evening,";
}
else{
    const a=document.getElementById("timechnge");
    a.innerHTML="Good Night,";
}
// For changing good morning 

var today=new Date();
var aaj=document.getElementById("today");
aaj.innerHTML=today.toDateString();
var aajdate=today.getDate();
var aajmonth=today.getMonth()+1;
var aajyear=today.getFullYear();
var dd=aajdate;
var mm=aajmonth
if (dd < 10) {
  dd = '0' + dd;
}
if (mm < 10) {
  mm = '0' + mm;
}
var tocheck=aajyear+"-"+ mm +"-"+dd;
console.log(tocheck);

// -------main work starts here -------
const addButton=document.querySelector(".add");
const addButton2=document.querySelector(".right .add");

// local storage is changed / updated here
const updateLSData = () => {
    const textAreaData = document.querySelectorAll(".write");
    const ttlwAreaData = document.querySelectorAll(".ttlw");
    const note = [];
    const ttl=[];
    textAreaData.forEach((notes) => {
        return note.push(notes.value);
    });
    ttlwAreaData.forEach((notes) => {
        return ttl.push(notes.value);
    });
    //   -----------------------------------------
    const dudte=document.querySelectorAll("#duedate");
    const dte=[];
    dudte.forEach((notes) => {
        return dte.push(notes.innerHTML);
    });
    //   -----------------------------------------
    console.log(note);
    console.log(ttl);
    console.log(dte);
    localStorage.setItem("note", JSON.stringify(note));
    localStorage.setItem("ttl", JSON.stringify(ttl));
    localStorage.setItem("dte", JSON.stringify(dte));
};


const addnotes = (text = "",title="",dates="") => {
    const container= document.querySelector(".notescontainer");
    const note = document.createElement("div");
    note.classList.add("notes");
    const htmlData = `
        <div class="operation">
            <div id="edited">
                <div class="ttlm ${title ?"":"hidden"}"></div>
                <textarea class="ttlw ${title ?"hidden":""}" placeholder="Title Here"></textarea>
            </div>
            <div class="but">
                <button class="edit"> <i class="fas fa-edit"></i> </button>
                <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
            </div>
        </div>
        <div class="likhna">
            <div class="main ${text ? "" : "hidden"} "></div>
            <textarea class="write ${text ? "hidden" : ""}"></textarea>
        </div>
        <div id="duedate"></div>`;
    note.insertAdjacentHTML("afterbegin", htmlData);
    const editButton = note.querySelector(".edit");
    const delButton = note.querySelector(".delete");
    const mainDiv = note.querySelector(".main");
    const textArea = note.querySelector(".write");
    const ttlmdiv= note.querySelector(".ttlm");
    const ttlwtarea= note.querySelector(".ttlw");

// -----------------------------------------
    const ddate=note.querySelector("#duedate");
    const caldate=document.getElementById("calendar").value;
    ddate.innerHTML = caldate;
    if (dates!=""){
        ddate.innerHTML=dates;
        console.log(dd)
        if ((dates[8]+dates[9])<=dd && (dates[5]+dates[6])<=mm && (dates[0]+dates[1]+dates[2]+dates[3])<=aajyear){
            note.remove();
            updateLSData();
            // note.classList.add("notered");

        }
    }
// -----------------------------------------
    // deleting the child node
    delButton.addEventListener("click", () => {
        note.remove();
        updateLSData();
    });
    // toggle using edit button
    textArea.value = text;
    mainDiv.innerHTML = text;
    ttlwtarea.value = title;
    ttlmdiv.innerHTML = title;
    editButton.addEventListener("click", () => {
      mainDiv.classList.toggle("hidden");
      textArea.classList.toggle("hidden");
      ttlmdiv.classList.toggle("hidden");
      ttlwtarea.classList.toggle("hidden");
    });
    textArea.addEventListener("change", (event) => {
      const value = event.target.value;
      mainDiv.innerHTML = value;
      updateLSData();
    });
    ttlwtarea.addEventListener("change", (event) => {
      const value = event.target.value;
      ttlmdiv.innerHTML = value;
      updateLSData();
    });
    container.appendChild(note);
    // it appeds a node as the last child of  a node
};

// used to make notes for small screen 
const addnotes2 = (text = "",title="",dates="") => {
    const container= document.querySelector(".notescontainer");
    const note = document.createElement("div");
    note.classList.add("notes");
    const htmlData = `
        <div class="operation">
            <div id="edited">
                <div class="ttlm ${title ?"":"hidden"}"></div>
                <textarea class="ttlw ${title ?"hidden":""}" placeholder="Title Here"></textarea>
            </div>
            <div class="but">
                <button class="edit"> <i class="fas fa-edit"></i> </button>
                <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
            </div>
        </div>
        <div class="likhna">
            <div class="main ${text ? "" : "hidden"} "></div>
            <textarea class="write ${text ? "hidden" : ""}"></textarea>
        </div>
        <div id="duedate"></div>`;

    note.insertAdjacentHTML("afterbegin", htmlData);                
    const editButton = note.querySelector(".edit");
    const delButton = note.querySelector(".delete");
    const mainDiv = note.querySelector(".main");
    const textArea = note.querySelector(".write");
    const ttlmdiv= note.querySelector(".ttlm");
    const ttlwtarea= note.querySelector(".ttlw");

// -----------------------------------------
    const ddate=note.querySelector("#duedate");
    const caldate=document.getElementById("calendar2").value;
    ddate.innerHTML = caldate;
    if (dates!=""){
        ddate.innerHTML=dates;
        if (dates==tocheck){
          note.remove();
          updateLSData();
            // note.classList.add("notered");
        }
    }
// -----------------------------------------
    // deleting the node
    delButton.addEventListener("click", () => {
      note.remove();
      updateLSData();
    });

    // toggle using edit button
    textArea.value = text;
    mainDiv.innerHTML = text;
    ttlwtarea.value = title;
    ttlmdiv.innerHTML = title;
    editButton.addEventListener("click", () => {
      mainDiv.classList.toggle("hidden");
      textArea.classList.toggle("hidden");
      ttlmdiv.classList.toggle("hidden");
      ttlwtarea.classList.toggle("hidden");
    });
    textArea.addEventListener("change", (event) => {
      const value = event.target.value;
      mainDiv.innerHTML = value;
      updateLSData();
    });
    ttlwtarea.addEventListener("change", (event) => {
      const value = event.target.value;
      ttlmdiv.innerHTML = value;
      updateLSData();
    });
    container.appendChild(note);
    // it appeds a node as the last child of  a node
};
// --------------------

// getting data back from localStorage
const note = JSON.parse(localStorage.getItem("note"));
const ttl = JSON.parse(localStorage.getItem("ttl"));
const dte = JSON.parse(localStorage.getItem("dte"));


if (note && ttl && dte){
    note.forEach((notes,index) =>{
        const title = ttl[index]; 
        const dates = dte[index];
        addnotes(notes,title,dates)});
}

addButton.addEventListener('click',()=>{
    const caldate=document.getElementById("calendar").value;
    var selectedDate = new Date(caldate);
    var monthValue = selectedDate.getMonth() + 1;
    var DateValue = selectedDate.getDate();
    var YearValue = selectedDate.getFullYear();
    console.log(monthValue+" "+DateValue+" "+YearValue);
    if (DateValue>aajdate || monthValue>aajmonth || YearValue>aajyear){
        addnotes();
    }
    else{
        alert("Enter Date that is greater than today");
    }
});
addButton2.addEventListener('click',()=>{
    const caldate=document.getElementById("calendar2").value;
    var selectedDate = new Date(caldate);
    var monthValue = selectedDate.getMonth() + 1;
    var DateValue = selectedDate.getDate();
    var YearValue = selectedDate.getFullYear();
    console.log(monthValue+" "+DateValue+" "+YearValue);
    if (DateValue>aajdate || monthValue>aajmonth || YearValue>aajyear){
        addnotes2();
    }
    else{
        alert("Enter Date that is greater than today");
    }
});