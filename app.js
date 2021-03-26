let myCafe = [
    {
        name: "Highlands",
        city: "Hanoi"
    },

    {
        name: "Phúc Long",
        city: "Hanoi"
    },
    {
        name: "Twitter Beans",
        city: "Hanoi"
    } 
]

function renderItem(doc) {
    let myForm = document.getElementById ("cafe-list");
    let li = document.createElement("li");
    let name =document.createElement ("span");
    let city =document.createElement ("span");
    let cross =document.createElement ("div");


    name.textContent = doc.name;
    city.textContent = doc.city;
    cross.textContent = "x";

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    myForm.appendChild(li);
}

Cafes.forEach (doc => renderItem(doc));


localStorage.setItem("myCafe", JSON.stringify(myCafe));

let retrievedObject = localStorage.getItem("myCafe");
console.log("retrievedObject: ", JSON.parse(retrievedObject))
