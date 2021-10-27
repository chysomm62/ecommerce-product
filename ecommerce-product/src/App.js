import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="body">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
