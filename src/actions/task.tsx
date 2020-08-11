import {ADD_SUCCESSS,EDIT_SUCCESSS,DELETE_SUCCESSS} from './types';




export const ADD_TASK=(msg:Todo)=>(dispatch:any)=>{
    console.log(msg,"kljasdaaskj")
    dispatch({
        type:ADD_SUCCESSS,
        payload:{msg}
    })
}
export const Edit_TASK=(msg:Todo)=>(dispatch:any)=>{
    console.log(msg,"kljasdaaskj")
    dispatch({
        type:EDIT_SUCCESSS,
        payload:{msg}
    })
}
export const delete_TASK=(msg:Todo)=>(dispatch:any)=>{
    console.log(msg,"kljasdaaskj")
    dispatch({
        type:DELETE_SUCCESSS,
        payload:{msg}
    })
}