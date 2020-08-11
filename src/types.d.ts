type Todo={
    text:string,
    complete:boolean,
    price:number,
    amt:number,
    qty:number
}
type toggleTodo=(selectedTodo:Todo)=>void
type Change=(e:any)=>void
type submit=(e:any)=>void