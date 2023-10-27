import { useDispatch,useSelector } from "react-redux";
import {del} from '../reducers/task_slice';
export default function TasksList()
{   
    const dis = useDispatch();
    const tasks = useSelector((state)=> state.task.list);
    const DelTask =(name)=>{
        dis(del(name));
    }

    return(
        <>
        <div class="list-group mb-0">
           {
            tasks.map(function(task,id){
                return(
                    <>
                    <ul key={id} className="list-group" >
                        <li className="list-group-item"> {task} </li>
                        <button className="btn btn-danger btn-outline-dark  " onClick={()=> DelTask(task)}>Delete</button>  
                    </ul>
                    </>
                );
            })
           }
        </div>

        </>
    );
}