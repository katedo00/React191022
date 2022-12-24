import { AiOutlineDoubleRight } from "react-icons/ai";
const Card = ({cardList}) => {
    const CardItem = ({fullName, title}) => {
        const cardItem = 
        <div className="bg-white p-3 rounded-xl shadow-xl flex items-center justify-between mt-4">
            <div className="flex space-x-6 items-center">
                <img src="https://i.pinimg.com/originals/25/0c/a0/250ca0295215879bd0d53e3a58fa1289.png" className="w-auto h-24 rounded-lg" alt="avatar"/>
                <div>
                    <p className="font-semibold text-base">{fullName}</p>
                    <p className="font-semibold text-sm text-gray-400">{title}</p>
                </div>              
            </div>
            <div className="flex space-x-2 items-center">
                <div className="bg-gray-300 rounded-md p-2 flex items-center">
                    <a href="google.com" className="hover:animate-bounce" > <AiOutlineDoubleRight/> </a>
                </div>
            </div>    
        </div>
        return cardItem;
    }
    return cardList.map((card, index) => <CardItem key={'card' + index} fullName= {card.fullName} title= {card.title} />);
}
export default Card