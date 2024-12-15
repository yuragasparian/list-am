import LogoItems from "./LogoItems"

const businessPages = ["411HomeNet", "A&M", "AstroBotGame", "Atomz", "BatmanBeginsIcon", "ClubAtletico", "DietDrPepper", "ModaCarpet", "NASA", "PeyoCompany"];

export default () => (
    <div className="logos-container">
    {businessPages.map((page, index) => <LogoItems key = {"business-"+index} logoUrl={page} />)}
    </div>
)