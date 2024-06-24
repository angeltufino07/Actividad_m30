import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Button_buy from "../Button";

interface TodoItem {

    
    id:number;
    price:number; 
    image: string;
    description: string;
    
}



const UseAxios = () =>{
        const [todos, setTodos] = useState<TodoItem[]>([]);

        
        useEffect(() => {

            axios
            .get<TodoItem[]>("https://fakestoreapi.com/products")
            .then((response)=> setTodos(response.data.slice(0 , 10)))
           
     
        }, []);
    return <div>
<main className="Main_Products">
    {todos.map((todo) => (
      <div className="Product">
        <img key={todo.id} src={todo.image}/>
        <p>ID: {todo.id}</p>
        <p className="descrip">Description: {todo.description.slice(0, 120)}</p>
        <p>{todo.price}</p>
        <Button_buy/>
      </div>  
    ))}

</main>

</div>

}

export default UseAxios
