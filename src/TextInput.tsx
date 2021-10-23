import {atom, useRecoilState} from "recoil";

export const textState = atom<string>({
  key: 'textState',
  default: "",
})

export const TextInput = (): JSX.Element => {
  const [text, setText] = useRecoilState(textState)

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  return (
    <>
      <input type="text" value={text} onChange={onChangeHandler} />
      <br/>
      Echo: {text}
    </>
  )
}