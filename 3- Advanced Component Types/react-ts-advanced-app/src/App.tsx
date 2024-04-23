import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input label="Your name" id="name" type="text" />
      <Input label="Your age" id="age" type="number" />
      <p><Button el="button">Button</Button></p>
      <p><Button el="anchor" href="https://google.com">A Link</Button></p>
      <Container as="hr" />

      {/* Using Container with different HTML elements */}
      <Container as="div" style={{ border: '1px solid black' }}>
        <p>This is a paragraph inside a div Container</p>
      </Container>

      <Container as="section">
        <h1>Hello, World!</h1>
      </Container>

      <Input label="Test" id="test" ref={input} />
    </main>

  );
}

export default App;
