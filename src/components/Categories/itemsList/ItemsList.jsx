import "../../../styles/Categories/ItemsList.css"


let items = ["Real Estate", "Vehicles", "Services", "Jobs", "Electronics", "Appliances", "Home and Garden", "Clothing and Fashion", "Health and Beauty", "Baby and Kids", "Hobbies and Sports", "Pets and Animals", "Food and Beverages", "Renovation and Construction", "Business and Еquipment"]

export default () => (
    <div className="items-container">
    {items.map((item, index) => (<div key={index+1}><img src={`item-icons/(${index+1}).png`} alt="" />{item}</div>))}
    </div>
)