import React from "react";

const Todolist = () => {
    return (
        <div className="container w-75">
            <form>
                <input type="text" placeholder="Tarea"/>
                <input type="text" placeholder="Descripción"/>
                <input type="submit" value="Agregar Tarea"/>
            </form>
        </div>
    )
};

export default Todolist;
