import React from "react";
import { useMachine } from "@xstate/react";
import GlobalStyleWrapper from "./style";
import Button from "./components/Button";
import modalMachine from "./machines/modalMachine";
import { Modal } from "./components/Modal";

export default function App() {
  const machine = useMachine(modalMachine);
  const [state, send] = machine;
  const { value } = state;

  return (
    <div className="App">
      <GlobalStyleWrapper />
      <h1 data-testid="title">Open Modal with XState</h1>
      <div>{value === "closed" ? "Modal is closed" : "Modal is open"}</div>
      <Button data-testid="button" onClick={() => send("OPEN")}>
        Open modal
      </Button>
      <Modal machine={machine} />
    </div>
  );
}
