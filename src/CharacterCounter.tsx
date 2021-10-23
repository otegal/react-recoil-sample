import {TextInput} from "./TextInput";
import {CharacterCount} from "./CharacterCount";

export const CharacterCounter = (): JSX.Element => {
  return (
    <>
      <TextInput />
      <br />
      <CharacterCount />
    </>
  )
}