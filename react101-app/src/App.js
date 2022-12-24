import Input from "./Components/input";
import Card from "./Components/card";
import { useState } from "react";
function App() {
  const [cardList, setCardList] = useState([]);
  const AddCard = () => {
    const cardInfo = {};
    return (
      <div className="space-y-4">
        <div className="m-auto row-span-1 items-center">
        <Input onName={(event) => {return cardInfo.fullName = event.target.value}} onTitle={(event) => {return cardInfo.title=event.target.value}} onAdded={() => { if (Object.keys(cardInfo).length) {return setCardList([...cardList, cardInfo])} else return alert('Please fill in required fields') }}/>
        </div>
        <div className="empty:bg-inherit bg-slate-50 rounded shadow-sm w-11/12 m-auto grid grid-cols-2 gap-2 pb-4 px-4">
        <Card cardList={cardList}/>
        </div>
      </div>
    );
  };
  return <>
  <AddCard />
  </>
}
export default App;
