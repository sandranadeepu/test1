import React ,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {Edit_TASK,delete_TASK} from './actions/task';


interface TodoListItemprops{
    todo:Todo
}



export const TodoListItem:React.FC<TodoListItemprops>=({todo})=>{
    useEffect(()=>{
        console.log("hii",todo)
    },[todo])
    const dispatch:any=useDispatch();

            let statetodo=todo;
            console.log(statetodo)
 const editTaskinc=(e:any,loc:string)=>{
                if(loc==="price"){
                    statetodo.price=statetodo.price+1;

                    statetodo.amt=statetodo.price*statetodo.qty;
                    console.log("price",statetodo)

                }
                else if(loc==="qty"){

                    statetodo.qty=statetodo.qty+1;
                    statetodo.amt=statetodo.price*statetodo.qty;   
                                     console.log(statetodo,"qty")

                }
                 dispatch(Edit_TASK(statetodo));

            }
 const delTaskinc=(e:any,loc:string)=>{
                if(loc==="price"){
                    if(statetodo.price>=1){
                    statetodo.price=statetodo.price-1;
                    }
                    statetodo.amt=statetodo.price*statetodo.qty;
                    console.log("price",statetodo)

                }
                else if(loc==="qty"){
                    if(statetodo.qty>=2){

                    statetodo.qty=statetodo.qty-1;
                    }
                    statetodo.amt=statetodo.price*statetodo.qty;   
                                     console.log(statetodo,"qty")

                }
                 dispatch(Edit_TASK(statetodo));

            }
 const deleteTask=(e:any)=>{
                
                 dispatch(delete_TASK(todo));

            }

    return(
        <li className="li">
            <label >
            {todo.text} </label>
            <label style={{marginLeft:"6%"}}>
            <button type="button" className="btn btn-warning " style={{padding:"0px 8px",marginRight:"5px",marginLeft:"5px"}} onClick={(e)=>delTaskinc(e,"qty")} >-</button>

            Qty: {todo.qty}           
             <button type="button" className="btn btn-warning " style={{padding:"0px 8px",marginRight:"5px",marginLeft:"5px"}} onClick={(e)=>editTaskinc(e,"qty")} >+</button>
 </label>
            <label style={{marginLeft:"3%"}}>
            <button type="button" className="btn btn-warning " style={{padding:"0px 8px",marginRight:"5px",marginLeft:"5px"}} onClick={(e)=>delTaskinc(e,"price")} >-</button>

            Price:{todo.price}            
             <button type="button" className="btn btn-warning " style={{padding:"0px 8px",marginRight:"5px",marginLeft:"5px"}} onClick={(e)=>editTaskinc(e,"price")} >+</button>
</label>
            <label style={{marginLeft:"3%",marginRight:"3px"}}>
            Amount:{todo.amt}            
</label>
            
            <button type="button" className="btn btn-danger " style={{padding:"0px 8px",marginLeft:"25px"}} onClick={(e)=>deleteTask(e)} >
                <i className="fa fa-trash-o"/>
            </button>
            
            </li>
    )
}