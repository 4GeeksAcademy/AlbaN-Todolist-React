import React, { useState } from "react";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState([]); //usestate es el hook
	const [taskEntry, setTaskEntry] = useState("");
	const taskDelete = (index) => {
		const updatedTodos = todo.filter((_, i) => i !== index);
		setTodo(updatedTodos);
	};

	return (

		<div className="text-center container mt-5">
			<form>
				<div className="mb-3">
					<label for="Pendientes" className="form-label h1" style={{color:"#28ADB5"}}>MIS TAREAS PENDIENTES</label>
					<input type="text" className="form-control" id="Pendiente" aria-describedby="emailHelp" placeholder="¿Qué tengo pendiente?"
						value={taskEntry}
						onChange={(e) => {
							setTaskEntry(e.target.value)
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter" && taskEntry.trim()) {
								e.preventDefault();
								setTodo([...todo, taskEntry]);
								setTaskEntry("");
							}
						}}
					/>
					<div id="emailHelp" className="form-text">Lista de cosas por hacer:</div>
					
				<div className="text-start d-md-flex justify-content-md-start">
					<ul>
						{todo.map((tarea, index) => (
							<li key={index} className="d-flex justify-content-between align-items-center list-group-item shadow rounded p-3 mt-4">
								{tarea}
								<button type="button"
									className="btn btn-sm ms-2"
									onClick={() => taskDelete(index)}>
									<i class="fa-regular fa-rectangle-xmark" style={{ color: "#28ADB5" , fontSize: "2rem"}}></i>
								</button>
							</li>
							
						))}
					</ul>
					<div className="d-flex justify-content-center mt-4">
						<button className="btn mt-2"  style={{ backgroundColor: "#28ADB5", color: "white" }} onClick={() => {
							setTodo([])
						}}>Eliminar tareas</button></div>
					</div>
				</div>
			</form>
		</div>
	)

};

export default Home;