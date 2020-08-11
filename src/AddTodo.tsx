import React, { useState } from 'react';
import {ADD_TASK} from './actions/task';
import {useDispatch} from 'react-redux'

interface AddTodo{
    todo:Todo
    toggleTodo:toggleTodo
}
const initialtodo={
    text:"",
    complete:false,
    price:0,
    amt:0,
    qty:1
}

 export  const AddTodo:React.FC=props=>{
 const [todo,setTodo]=useState(initialtodo);
 let [error,setError]=useState({
     textError:false,
     priceError:false
 })
 const dispatch:any=useDispatch();
 const onChange:Change=(e)=>{
    if(e.target.name==="price"){
           let amount=(e.target.value)*(todo.qty)
           console.log("price",amount)

        setTodo({...todo,amt:amount,price:e.target.value});
        if(e.target.value<=0){
        setError({...error,priceError:!error.priceError});
        }
        else{
            setError({...error,priceError:false});
        }
    }
    if(e.target.name==="qty"){
        let amount=(e.target.value)*(todo.price)
           console.log("price",amount)
        setTodo({...todo,amt:amount,qty:e.target.value});
    }
    else if(e.target.name==="text"){
     setTodo({...todo,[e.target.name]:e.target.value});
     if(e.target.value.length<=0){
     setError({...error,textError:!error.textError});
     
     }
     else{
        setError({...error,textError:false});

     }
    
    }
    }

 const onSubmit=async (e:any)=>{
    e.preventDefault();
    if(todo.text===""){
        console.log("hisub")

        setError({...error,textError:!error.textError})
        return false;
    }
    if(todo.price<=0){
        setError({...error,priceError:!error.priceError});
        return false;
    }
    else{
    dispatch(ADD_TASK(todo));
    console.log('SUCCESS');
    }
 }
  
    return(
        <div className="Addtodo">  
            <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
            <label className="row" style={{margin:"0px"}}>
                <div className="col-sm-5 dv" >
                    <label style={{marginLeft:"5%"}}>Item</label>
                <input type="text" className="form-control " name="text" maxLength={15} placeholder="Enter Task" value={todo.text} onChange={(e)=>onChange(e)}/>
                {error.textError?<div style={{color:"red"}}>Enter Item</div>:""}
                </div>
                <div className="col-sm-2 dv">
                <label style={{marginLeft:"5%"}}>Price</label>

                <input type="number" className="form-control " name="price" maxLength={5} placeholder="Enter price" value={todo.price} onChange={(e)=>onChange(e)}/>
                {error.priceError?<div style={{color:"red"}}>Enter Price</div>:""}

                </div>
                <div className="col-sm-2 dv">
                <label style={{marginLeft:"5%"}}>Qty</label>

                <input type="number" className="form-control " name="qty" maxLength={5} placeholder="Enter price" value={todo.qty} onChange={(e)=>onChange(e)}/>
                </div>
                <div className="col-sm-2 dv">
                <label ></label>

                <button type="submit" style={{marginTop:"30%"}} className="btn btn-primary " onSubmit={(e)=>onSubmit(e)}>Add</button>
                </div>
            </label>
            </div>
            </form>
        </div>
    )

}

