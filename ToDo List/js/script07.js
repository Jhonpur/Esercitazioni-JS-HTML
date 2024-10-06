

// let li = document.createElement("li");
// li.textContent = "Aspirapolvere";

// listaToDo.appendChild(li);

// let li2 = document.createElement("li");
// li2.textContent = 

// listaToDo.appendChild(li2);

// li.addEventListener("click", registraLista);
// li2.addEventListener("click", registraLista);

// prendo listaTodo
let btnAdd = document.getElementById("btnAdd");

function registraLista(){
    let li = document.createElement("li");
    
    let toDoElement = document.getElementById("toDoElement").value;
    
    // li.textContent = toDoElement;
    
    //aggancio li a listaTodo
    let listaToDo = document.getElementById("listaToDo");
    listaToDo.appendChild(li);
    
    // inserisco la data 
    let data = document.getElementById("data").value;
    if (data) {
        li.textContent = toDoElement + (" " + moment(data).format('Do MMMM YYYY'));
    }else {
        li.textContent = toDoElement;
    }
    
    // Aggiungo la barratura
    li.addEventListener("click", completata);
    
    function completata() {
        li.classList.toggle("barrato");
    };
        // bottone per eliminazione lista 
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<i class="bi bi-trash-fill">`;
        li.appendChild(deleteButton);
        deleteButton.className = "trashBin";
        
        // bottone per modifica
        let modifyButton = document.createElement("button");
        modifyButton.innerHTML = `<i class="bi bi-pencil-square"></i>`;
        li.appendChild(modifyButton);
        modifyButton.className = "modifier";
    
        // eliminazione dalla lista
        deleteButton.addEventListener("click", function(){
        li.remove();
    });
    
        // modifica della lista con reinserimento della lista eliminata
        modifyButton.addEventListener("click", function(){
        document.getElementById("toDoElement").value = toDoElement;
        li.remove();
    })
    // svuota casella di testo
    document.getElementById("toDoElement").value = "";
    document.getElementById("data").value = "";
};
// inserimento in lista
btnAdd.addEventListener("click", registraLista);


// class Todo{
    //     constructor(info, data){
        //         this.info = info;
        //         this.data = data;
        //     }
        // }
        
        // let TodoList = [
            //     new Todo("Aspirapolvere", "04/11/2024"),
            //     new Todo("Doccia", "04/11/2024"),
            //     new Todo("Stoviglie", "04/11/2024")
            // ]
            