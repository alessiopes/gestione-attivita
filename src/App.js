import React, { useState } from "react";
import "./App.css"; // Importa il file CSS

function App() {
  // Definizione dello stato per l'elenco delle attività
  const [tasks, setTasks] = useState([]);
  // Definizione dello stato per la nuova attività inserita dall'utente
  const [newTask, setNewTask] = useState("");

  // Funzione per aggiungere una nuova attività all'elenco
  function handleAddTask() {
    // Verifica che la nuova attività non sia vuota o composta solo da spazi vuoti
    if (newTask.trim() !== "") {
      // Aggiunge la nuova attività all'elenco delle attività
      setTasks([...tasks, newTask]);
      // Resetta il campo di input per la nuova attività
      setNewTask("");
    }
  }

  // Funzione per eliminare un'attività dall'elenco
  function handleDeleteTask(index) {
    // Filtra l'elenco delle attività, escludendo l'attività con l'indice specificato
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // Aggiorna l'elenco delle attività con il nuovo elenco filtrato
    setTasks(updatedTasks);
  }

  // Funzione per modificare un'attività nell'elenco
  function handleEditTask(index, updatedTask) {
    // Crea una copia dell'elenco delle attività
    const updatedTasks = [...tasks];
    // Aggiorna l'attività specifica con il nuovo valore
    updatedTasks[index] = updatedTask;
    // Aggiorna l'elenco delle attività con il nuovo elenco modificato
    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <h1>Gestione Attività</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          value={newTask}
          // Funzione che si attiva al cambio del valore
          onChange={(e) => setNewTask(e.target.value)}
          className="form-control"
          placeholder="Inserisci una nuova attività"
        />
        <button onClick={handleAddTask} className="btn btn-primary">
          Aggiungi
        </button>
      </div>

      {tasks.map((task, index) => (
        <div key={index} className="task input-group mb-3">
          <input
            type="text"
            value={task}
            onChange={(e) => handleEditTask(index, e.target.value)}
            className="form-control"
          />
          <div className="input-group-append">
            <button
              onClick={() => handleDeleteTask(index)}
              className="btn btn-danger"
            >
              Elimina
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
