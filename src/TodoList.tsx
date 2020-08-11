import React, {useState,useEffect, useCallback, useRef } from 'react';
import { TodoListItem } from './TodoListItem';



interface TodoListprops{
    todos:Array<Todo>
}


export const TodoList:React.FC<TodoListprops>=({todos})=>{
    let tot=useRef<number>(0);

  let [total,setTotal]=useState(0);
   
let totfunc=useCallback(()=>{

   
    // console.log(tot,"tot1")
          
    let tt=todos.map((t:any)=>{    

          tot.current=t.amt+0;
        //   console.log(tot,"tot3")

          return tot.current
    
})
console.log(tot,"tt2",tt,tt[tt.length-1]);
let t=tt.reduce((a,b)=>a+b,0)
setTotal(t)


},[todos])

  
  useEffect(()=>{
   totfunc();
  },[todos,totfunc])

    return (
        <div>
        <ul style={{listStyleType:"none",overflow:"scroll"
}}>
            {todos.map((todo)=>{

            
           return <TodoListItem todo={todo}   />
        })}
        </ul>
        <div className="tli">Total: {total}</div>
        </div>
    )

}