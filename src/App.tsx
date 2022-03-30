import "./styles.css";

export default function App() {
  console.log('hola')
  const a= [{a:'uno', 
  b: 'doce'},
   {a:'dos'}, 
   {a:'tres'}]
    console.log(a);
    const things = {
      car: 'Honda',
      shoes: 'Nike',
      shirt: 'Tom Ford',
      watch: 'Timex'
    };
    console.log(things);
    const tasks=  [
      'task1', 'task2', 'task3', 'task4', 'task5', 'task6'
    ]
    console.log(tasks)
    return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
     
    
        <ul>
          {tasks.map(task => <li>{task}</li>)}
        </ul>
    
    </div>
  );
}