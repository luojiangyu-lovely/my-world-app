
import './App.css';
import { indexApi } from './request/apis/login';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    indexApi.then(res=>{
      console.log(res)
    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
      1
      </header>
    </div>
  );
}

export default App;
