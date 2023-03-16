const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");
let myLeads = [];
let oldLeads = [];

const leadsFromlS = JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromlS){
    myLeads = leadsFromlS
    render(myLeads)
}
function render(leads){
    let listItems = "";
    for(let i=0;i<leads.length;i++){
        /*const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li)
        ulEl.innerHTML += `<li>${myLeads[i]}</li>`
        */
         listItems +=`<li><a href='${leads[i]}' target="_blank">${leads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
}




tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    render(myLeads)
    })
    
})



deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
    
});

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    //
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    //
    render(myLeads);
    console.log(localStorage.getItem("myLeads"))
});
input



