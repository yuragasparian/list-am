import "../../../styles/Categories/ItemsList.css"
import {CategoryItem} from "../index"



let items = ["Real Estate", "Vehicles", "Services", "Jobs", "Electronics", "Appliances", "Home and Garden", "Clothing and Fashion", "Health and Beauty", "Baby and Kids", "Hobbies and Sports", "Pets and Animals", "Food and Beverages", "Renovation and Construction", "Business and Еquipment"]

export default () => (
    <div className="items-container">
    {items.map((item, index) => (<CategoryItem key={index+1} index={index} item={item}/>))}
    </div>
)