const listaDeTareas = document.querySelector("#tareasTodas")
        const tareaInput = document.querySelector("#nuevaTarea")
        const btnSumarTarea = document.querySelector("#agregarTarea")
        const conteo = document.querySelector("#cuentaTareas")


        
        let tareas = [
        {
            id: 17,
            nombre: "Hacer la cama",
            realizado: true,  
        },
         {
            id: 61,
            nombre: "Limpiar el establo",
            realizado: false,
        },
         {
            id: 22,
            nombre: "Ordeñar las vacas",
            realizado: true, 
        },
        ];
        
        const renderLista = (id, nombre, realizado) => (
            `<li>
            <span>${id}</span>
            <span>${nombre}</span>
            <input type="checkbox">
            <button type="button" onclick="deleteTarea('${id}')">X</button>
            </li>`
        );
        
        const addTarea = () => {
            if (tareaInput.value != ""){ 
                tareas.push(
                { 
                  id: Date.now(),
                  name: tareaInput.value,
                  realizado: false,
                }
              )
            }
            renderTareas()
          }




        btnSumarTarea.addEventListener('click', addTarea)

        const deleteTarea = (idTareaBorrar) => {
            tareas = tareas.filter((tareas) => tareas.id != idTareaBorrar)
            renderTareas()
        }


        const renderTareas = () => {
            listaDeTareas.innerHTML = ""
            for (tarea in tareas){
                listaDeTareas.innerHTML += renderLista(
                    tareas[tarea].id,
                    tareas[tarea].nombre
                )
            }
            cuentaTareas.innerHTML = tareas.length
        }