import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30PM',
        reminder: false,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Add Task
  const addTask =  (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    //console.log(id)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      { tasks.length > 0 ?
           <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : <p>No task to be shown</p>}
    </div>
  );
}

export default App;
