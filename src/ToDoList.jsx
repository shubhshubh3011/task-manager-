import React,{useState} from "react"
import { MdAddCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";




function ToDoList(){
    const [tasks,setTasks]=useState(["eat breakfast","take a shower","do exercise"]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim()!==""){  ///to avoid empty
            setTasks(t=>[...t,newTask]); //current tasks=>new tasks as needed
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updateTask=tasks.filter((_,i)=> i!== index);
        setTasks(updateTask);

    }
    function moveTaskUp(index){
        if(index > 0){
        const updatedTasks = [...tasks];   
        [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]; 
        setTasks(updatedTasks); 
    }
    }

    return(
        <div className="todolist"> 
            <h1>
                To-Do-List
            </h1>
            <div className="inputandadd">
            <input type="text" placeholder="Enter the task..." value={newTask} onChange={handleInputChange}/>
            <button className="addbutton" onClick={addTask} >
                <MdAddCircle />
            </button>
            </div>

            <ol>
                {
                    tasks.map((tasks,index)=>
                        <li key={index}>
                            <span className="litems">
                                {
                                    tasks
                                }
                            </span>
                            <button className="moveup" onClick={()=>moveTaskUp(index)}><FaArrowUp /></button>
                            <button className="delete-button" onClick={()=>deleteTask(index)}>
                                <MdDelete />
                            </button>
                        </li>
                    )
                }
            </ol>
        </div>
      
    )
}
export default ToDoList