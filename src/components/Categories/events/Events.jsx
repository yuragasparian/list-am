import "../../../styles/Categories/Events.css"

let events = ["Christmas Gifts", "Games and Consoles", "Holiday shop", "For Your Home", "Cashback deals", "Headphones", "Safety on List.am", "Promote your Business"]

export default () => (
    <div className="events-container">
        {events.map((event, index) => (
            <div
                style={{ backgroundImage: `url(events/1.webp)` }}
                key={`event-${index}`}
            >
                {event}
            </div>
        ))}

    </div>
)