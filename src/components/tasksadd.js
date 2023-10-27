import { useDispatch  } from "react-redux";
import {add} from '../reducers/task_slice';
import { useRef } from "react";

export default function TaskAdd()
{
    const TaskName = useRef();
    const dis = useDispatch();
    const addt=()=>{
        dis(add(TaskName.current.value));
    }
    return (<>
        <div class="input-group input-group-sm mb-3 ">
        <input type="text" ref={TaskName} placeholder="Input task name" class="form-control  " />
        <button class="btn btn-primary btn-lg ms-5 " onClick={addt}>Add</button>
        </div>
    </>);
}