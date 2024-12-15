import { products } from './../../../public/products/products';
import ShopItem from './ShopItem';
import "../../styles/Topics/Topics.css"


export default ({topicTitle}) => (
    <div className='main'>
        <h2>{topicTitle}</h2>
        <div className="topic-container">
        {products[topicTitle].map((item, i) => <ShopItem key={`item-${i}`} cost={item.price} itemName={item.title}/>)}
        </div>
    </div>
)