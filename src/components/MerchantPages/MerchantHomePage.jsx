// UI Components for HomePage
import MerchantNavBar from "../NavBar/MerchantNavBar"
import DummyTextGroup from "../DummyText"



export default function MerchantHomePage() {
    return (
        <>
            <MerchantNavBar />
            <div className="user-info">
                <span>Based in: (Merchant City)</span><span> Welcome (Merchant)!</span>
            </div>
            <DummyTextGroup />
        </>
    )
}


