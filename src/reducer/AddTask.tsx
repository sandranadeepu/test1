import {ADD_SUCCESSS, EDIT_SUCCESSS,DELETE_SUCCESSS} from '../actions/types';
const initialTodos: Array<Todo>=[
    {
      text:" Bread",
      complete:true,
      price:30,
      amt:30,
      qty:1
    },
  
    {
      text:"Apple",
      complete:false,
      price:15,
      amt:15,
      qty:1
    }
  ]
  const initialState={
    Todo:initialTodos
  }
  const ADD=(state:any,payload:any)=>{
       
               
       return {...state,Todo:[...state.Todo,payload["msg"]]}
  }
  const Edit=(state:any,payload:any)=>{
                   let td=payload["msg"];
                   let Td=state.Todo;
                   Td.map((t:Todo)=>{
                     if(t.text===td.text){
                            t=td;
                            
                     }
                     return t;
                   })

       return {...state,Todo:[...Td]}
  }
  const Delete=(state:any,payload:any)=>{
                   let td=payload["msg"];
                   let Td=state.Todo;
                  let ft= Td.filter((t:Todo)=>t.text===td.text)
                    
                   
               console.log(ft,"fts")
       return {...state,Todo:[...ft]}
  }
export default function(state=initialState,action:any){
          const {type,payload}=action
    switch(type) {
        case ADD_SUCCESSS:
              
            return ADD(state,payload);
        case EDIT_SUCCESSS:
          return Edit(state,payload)
        case DELETE_SUCCESSS:
          return Delete(state,payload)
        default:
            return state
    }

}