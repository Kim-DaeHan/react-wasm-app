import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import init, { greet2 } from "@kdh8281/wasm-lib";

function App() {
  const [wasm, setWasm] = useState<any>(null);
  const [greetResult, setGreetResult] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await init();
        console.log("aaa: ", greet2("aaa"));
        // const wasmModule = await import("@kdh8281/wasm-lib");
        // await wasmModule.default();
        // setWasm(wasmModule);
        // console.log("wasmModule: ", wasmModule);
        // console.log("wasmModule: ", wasmModule.fibonacci(1));
        // console.log("wasmModule: ", wasmModule.greet2("aaa"));
        // const result = wasmModule.greet2("aaa");
        // wasmModule.greet("bbb");
        // setGreetResult(result);
      } catch (error) {
        console.error("Error loading wasm module:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> {wasm ? wasm.greet2("aaa") : null}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
