//Tools
htmlItem = (value) => {
    const item = document.createElement('div');
    item.className = 'list__item';
    item.innerHTML = `
        <input type="checkbox" class="item__check">
            <label class="item__value">${value}</label>
            <a class="item__delete" href="#">
                <i class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
            </a>
        <hr class="item_hr">
    `;
    return item;
} 

//Funtions from Events
addItem = e => {
    let value = document.getElementById("item_value").value;
    let list = document.querySelector(".todo__list");
    list.appendChild(htmlItem(value));
    document.getElementById("item_value").value="";
};

filterItem = e => {
    alert("T_T Me falto Tiempo para Implementar esto T_T");
};

deleteItem = e => {
    if(e.target.tagName == "I"){
        let list = document.querySelector(".todo__list");
        list.removeChild(e.target.parentElement.parentElement);
    }
};

//Add Events
document.querySelector("#add").addEventListener("click",addItem);
document.querySelector("#fil").addEventListener("click",filterItem);
document.querySelector(".todo__list").addEventListener("click",deleteItem);