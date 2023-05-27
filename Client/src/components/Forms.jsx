import { useState } from "react";
import style from "./Forms.module.css";
import validate from "./validate";
import Landing from "./landing/Landing";

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
        <>
        <Landing />
  
    
    <form className={style.contenedor} onSubmit={handlerSubmit}>  
    <h3> ¡ Bienvenid@ ! </h3> 
    <h4> Inicia sesión para comenzar  </h4>
    <div>
        <label htmlFor="username"></label>
            <input 
            placeholder=" E-mail "
            type="text"           
            name="username"
            value={form.username}
            onChange={handleChange}
            className={style.input}
            />
            {errors.username && <span className={style.span}>{errors.username}</span>}

        </div>

        <div>
        <label htmlFor="password" ></label>
            <input 
            placeholder=" Password "
            type="text"            
            name="password"
            value={form.password}
            onChange={handleChange}
            className={style.input}
            />
            {errors.password && <span className={style.span}>{errors.password}</span>}

        </div>    
        
        <div>
        <button type="submit" className={style.boton}>
            Login
        </button>

        </div>
    </form>  
 
    </>
       


    )
};

export default Forms;