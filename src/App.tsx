import React from 'react';
import {RecoilRoot} from "recoil";
import {TodoList} from "./todo/components/TodoList";

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
