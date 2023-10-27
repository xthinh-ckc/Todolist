import {createSlice} from "@reduxjs/toolkit";
export  const TaskSlice = createSlice (
{
    name:'task',
    initialState:
    {
        list:[],
    },
    reducers:
    {
        add: (state,action)=>
        {
            state.list = state.list.concat(action.payload)
        },
        del:(state,action)=>
        {
            state.list =state.list.filter(function(task)
            {
                return task != action.payload;
            })
        },
    }
})

export const {add,del} = TaskSlice.actions
export default TaskSlice.reducer