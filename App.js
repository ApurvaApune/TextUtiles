
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//the think inside curly bracket consider as js

function App() {
  return (
<>
   <Navbar title="TextUtils" aboutText="About TextUtils" /> 
   <div className="container my-3">
    <TextForm heading="Enter text to analyze"/> 
    

    </div>
   

</>
  );
}

export default App;
