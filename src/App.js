import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';

import Student from "./Components/Student";

function App() {
  // let name = "Web3mantra"
  return (
    <div className="App">
      {/* <Header />
      <h1>{name}</h1>
      <Footer /> */}

      <Student
        name="Shahid"
        age={24} />
    </div>
  );
}

export default App;
