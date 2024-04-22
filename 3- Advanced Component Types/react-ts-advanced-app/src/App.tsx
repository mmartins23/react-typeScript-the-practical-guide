import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Input label="Your name" id="name" type="text" />
      <Input label="Your age" id="age" type="number" />
      <p><Button el="button">Button</Button></p>
      <p><Button el="anchor" href="https://google.com">A Link</Button></p>
    </div>
  );
}

export default App;
