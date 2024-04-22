import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Input label="Your name" id="name" type="text"/>
      <Input label="Your age" id="age" type="number"/>
    </div>
  );
}

export default App;
