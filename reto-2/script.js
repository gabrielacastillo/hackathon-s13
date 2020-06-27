//Global Variables
let deleteElement;

//Tools
htmlItem = (nombre, raza, edad) => {
    const item = document.createElement('tr');
    item.innerHTML = `
        <td>${nombre}</td>
        <td>${raza}</td>
        <td>${edad}</td>
        <td>
            <a class="body__edit" href="#">
                <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
            </a>
        </td>
        <td>
            <a class="body__delete" href="#">
                <i class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
            </a>
        </td>
    `;
    return item;
} 

//Funtions from Events
saveItem = e => {
    let nombre = document.getElementById("input_nombre").value;
    let raza = document.getElementById("input_raza").value;
    let edad = document.getElementById("input_edad").value;

    let list = document.querySelector(".table__body");
    list.appendChild(htmlItem(nombre, raza, edad));
    cleanInputs();
};



deleteItemProposal = e => {
    if(e.target.tagName == "I" && e.target.parentElement.classList.contains("body__delete")){
        deleteElement = e.target.parentElement.parentElement.parentElement;
    }
};

deleteItem = e => {
    let list = document.querySelector(".table__body");
    list.removeChild(deleteElement);
};


//Tools
cleanInputs = () => {
    document.getElementById("input_nombre").value = "";
    document.getElementById("input_raza").value = "";
    document.getElementById("input_edad").value = "";
}

//Add Events
document.querySelector("#save").addEventListener("click",saveItem);
document.querySelector(".table__body").addEventListener("click",deleteItemProposal);
document.querySelector("#modal_aceptar").addEventListener("click",deleteItem);









//Funcion Constructora
function GabyModal(modalId) {
    this.modalId = modalId;
    this.init = function () {
      const questions = document.querySelectorAll(".question");
  
      // Click function for show the Modal
      document.querySelectorAll(".show").forEach((e) => {
        e.addEventListener("click", function () {
          document.querySelector(".mask").classList.add("active");
        });
      });
  
      // Function for close the Modal
      function closeModal() {
        document.querySelector(".mask").classList.remove("active");
      }
  
      // Call the closeModal function on the clicks/keyboard
      let list = document.querySelectorAll(".close, .mask, .aceptar, .cancelar");
      list.forEach((e) => {
        e.addEventListener("click", function () {
          closeModal();
        });
      });
  
      document.addEventListener("keyup", function (e) {
        if (e.keyCode == 27) {
          closeModal();
        }
      });
    };
  }
  
  let gabyModal = new GabyModal("Accordion1");
  gabyModal.init();