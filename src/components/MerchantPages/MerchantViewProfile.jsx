// UI Components for HomePage
import MerchantNavBar from "../NavBar/MerchantNavBar"

import Title from "../styled/Title"

export default function MerchantViewProfile() {
    return (
        <>
            <MerchantNavBar />
            <div className="user-info">
                <span>Based in: (Merchant City)</span><span> Welcome (Merchant)!</span>
            </div>
            <section>
                <div className="confirmation-details">
                    <div>
                        <Title>Email</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>Username</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>Password</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>Name</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>Description</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>City</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                </div>
            </section>
        </>
    )
}


