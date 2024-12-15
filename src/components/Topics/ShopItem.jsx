import "../../styles/Topics/ShopItem.css"

export default ({cost, itemName}) => (
    <div className="shop-item">
        <img src={`https://picsum.photos/300?random=${itemName}`} alt="" />
        <h4>{cost}</h4>
        <p>{itemName}</p>
    </div>
)