import {Header, Categories, Topics} from './index'
import './styles/App.css'


export default () => (
    <div>
    <Header />
    <Categories />
    <Topics topicTitle={"Reccomended for You"}/>
    <Topics topicTitle={"Car Service and Repair"}/>
    <Topics topicTitle={"Short Term House Rentals"}/>
    </div>

)
