import "../../../styles/Categories/Events.css"

let events = ["Christmas Gifts", "Games and Consoles", "Holiday shop", "For Your Home", "Cashback deals", "Headphones", "Safety on List.am", "Promote your Business"]

export default () => (
    <div className="events-container">
        {events.map((event, index) => (
            <div
                key={`event-${index}`}
                style={{backgroundImage : `events/${index+1}.webp`}}
            >
                {event}
            </div>
        ))}


    </div>
)