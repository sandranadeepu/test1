import React, { useEffect } from 'react';
import { TodoList } from './TodoList';
import {AddTodo} from './AddTodo'
import { useSelector, RootStateOrAny} from 'react-redux'

// import {login} from '../../actions/auth';




const  App=()=> {
  const itd:Array<Todo>=useSelector((state:RootStateOrAny)=>state.AddTask.Todo)

    // console.log(itd)
   useEffect(()=>{
    console.log("Hiiii")

   })

  return (
    
 <React.Fragment >
   <div className="todo">
     <div style={{margin:"2% 3%"}}>
       <label style={{alignItems:"center",marginLeft:"30%"}}>GROCERRY LIST</label>
     <AddTodo />
   </div>
   <div style={{margin:"4%"}}>
   <TodoList  todos={itd}/>
   </div>
   </div>
 
 </React.Fragment>
  );
}


export default App;