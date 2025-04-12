import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Aniaml from "./Animal";

function App() {
  return (
    <div className="Page">
      <Header />
      <Main />
      <Aniaml selectedAnimal={""} />
    </div>
  );
}

export default App;
