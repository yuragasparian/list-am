const softColors = [
    '#F4D3D3', // Light blush pink
    '#D9EAD3', // Soft sage green
    '#E4D9F3', // Light lavender
    '#F1E8E9', // Light rose
    '#D4D7EA', // Soft periwinkle
    '#E7F0D1', // Pale mint green
    '#F8E8E3', // Soft peach
    '#D4E3F4'  // Light sky blue
];


export default ({ index, event }) => (
    <div
        style={{ backgroundImage: `url(events/${index + 1}.webp)`, backgroundSize: "cover",  backgroundColor: `${softColors[index]}` }}
    >
        {event}
    </div>
)