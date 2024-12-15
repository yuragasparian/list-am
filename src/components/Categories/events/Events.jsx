import "../../../styles/Categories/Events.css"
import {EventItem} from "../index"

let events = ["Christmas Gifts", "Games and Consoles", "Holiday shop", "For Your Home", "Cashback deals", "Headphones", "Safety on List.am", "Promote your Business"]

export default () => (
    <div className="events-container">
        {events.map((event, index) => (
            <EventItem key={`event-${index}`} index={index} event={event} />
        ))}

    </div>
)