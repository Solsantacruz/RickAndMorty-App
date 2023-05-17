import { useState } from "react";
import style from "./Forms.module.css";
import validate from "./validate";
// import NavSuplente from "./nav/NavSuplente";

const Forms = (props) => {

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    

    const handleChange =  (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]: value})
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        // alert("LOGIN CON EXITO");
        const errors = validate(form.username, form.password);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // submit the form data
        props.login(form);
      
    }
    }


    return(
  <div className={style.contenedor}>
     
    <form onSubmit={handlerSubmit}>  
        <div>
        <label htmlFor="username">username:</label>
            <input 
            type="text"           
            name="username"
            value={form.username}
            onChange={handleChange}
            />
            {errors.username && <span>{errors.username}</span>}

        </div>

        <div>
        <label htmlFor="password">password: </label>
            <input 
            type="text"            
            name="password"
            value={form.password}
            onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}

        </div>    
        
        <div>
        <button type="submit" >
            Login
        </button>

        </div>

    </form>  
    </div> 
       


    )
};

export default Forms;