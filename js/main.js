function constructorTareas(registro,tarea){
 this.registro= registro;
 this.tarea= tarea;
}

(function(){
    // Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

    // Funciones
    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea),
     registro = Date.now(),
     identificador = new constructorTareas(registro,tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }



   localStorage.setItem(registro,JSON.stringify(identificador));
debugger;
var miUl = document.getElementById('lista');
nuevaTarea.id='li'+identificador.registro;
nuevaTarea.innerText=identificador.tarea;
miUl.appendChild(nuevaTarea);










      /*  // Agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // Le establecemos un atributo href
        enlace.setAttribute("href", "#");
        // Agrergamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";

        for (var i = 0; i < lista.children.length; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
*/
    };

    for (var i = 0; i < localStorage.length; i++) {
      console.log( localStorage.key(i) +" has value " + localStorage[localStorage.key(i)] );
    }


    var comprobarInput = function(){
        tareaInput.className = "";
        teareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    var eleminarTarea = function(){
        this.parentNode.removeChild(this);
    };

    // Eventos

    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

    // Borrando Elementos de la lista
    for (var i = 0; i < lista.children.length; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
        }
}());
