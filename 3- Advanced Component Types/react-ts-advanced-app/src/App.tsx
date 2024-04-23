import Input from "./components/Input";
import Form, { FormHandle } from "./components/Form";
import { useRef } from "react";

function App() {

  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string; };
    console.log(extractedData);
    customForm.current?.clear();

  }
  return (
    <main>

      <Form onSave={handleSave} ref={customForm}>
        <Input label="Name" id="name" type="text" />
        <Input label="Age" id="age" type="number" />
        <button>Save Data</button>
      </Form>
    </main>

  );
}

export default App;
