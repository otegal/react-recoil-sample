import React from 'react';
import {RecoilRoot} from "recoil";
import {CharacterCounter} from "./CharacterCounter";

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
