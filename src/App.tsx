import { useState } from 'react';
import './App.css';
import Button from './components/Button';

interface Tasks {
  id: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>();
  const [count, setCount] = useState<number | null>(null);

  setTasks([
    {
      id: '1',
      isCompleted: true
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <Button theme="dark" onClick={() => console.log('Clicked')}>
          Texto qualquer
        </Button>
      </header>
    </div>
  );
};

export default App;
