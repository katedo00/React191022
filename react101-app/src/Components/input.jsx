import Button from "./buttons"
const Input = ({onName, onTitle, onAdded}) => {
function handler({ key }) {
  const ENTER_KEYS = ['13', 'Enter'];
  if (ENTER_KEYS.includes(String(key))) {onAdded(); return}
  return;
};
const NameInput = () => {
  return (
  <div className="flex w-96 p-2 rounded shadow-sm items-center justify-center">
    <input
      onKeyDown={(e) => handler(e)}
      onChange={onName}
      type="text"
      autoComplete="off"
      name="query"
      id="query"
      className=" w-full pl-2 rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300" placeholder="Enter Your Name" 
    />
  </div>
  )
}
const TitleInput = () => {
  return (
    <div className="flex w-96 p-2 rounded shadow-sm items-center justify-center">
      <input
        onKeyDown={(e) => handler(e)}
        onChange={onTitle}
        type="text"
        autoComplete="off"
        name="query"
        id="query"
        className=" w-full pl-2 rounded focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300" placeholder="Enter Your Title" 
      />
    </div>
    )
}
const InputRender = ({fieldType}) => {
  if (fieldType === 'name') return <NameInput/>
  else if (fieldType === 'title') return <TitleInput />
  else return alert('Please choose an input type');
}
return (
<div className="p-3 grid grid-flow-col auto-cols-max gap-2 content-center justify-center">
  <InputRender fieldType='name' />
  <InputRender fieldType='title'/>
  <Button type='icon' onClick={onAdded}/>
</div>
)
}
export default Input