let myLeeds = []
const inputEl = document.getElementById("input-el")
const buttonClick = document.getElementById("input-btn")
const ulel = document.getElementById("ul-el")
const dltbtn = document.getElementById("dlt-btn")
const tabbtn = document.getElementById("tab-btn")
console.log(ulel)

let storageValue = JSON.parse( localStorage.getItem("myLeeds") )


function render(leads)
{
    let listitems = ""
    for(let i=0; i<leads.length ; i++)
    {
        listitems += 
        `<li>
            <a target="_blank" href="${leads[i]}">
            ${leads[i]}
            </a>
        </li>`
    }

    ulel.innerHTML = listitems
}

if(storageValue)
{
    myLeeds = storageValue
    render(myLeeds)
}

dltbtn.addEventListener("dblclick", function() {
    myLeeds=""
    render(myLeeds)
    localStorage.clear()
})

buttonClick.addEventListener("click", function() {
    myLeeds.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeeds", JSON.stringify(myLeeds))
    render(myLeeds)
})

tabbtn.addEventListener("click", function() {

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeeds.push(tabs[0].url)
    localStorage.setItem("myLeeds", JSON.stringify( myLeeds ) )
    render(myLeeds)
});
})



//const email = `Hey ${recipent} How its going cheers ${sender}!`