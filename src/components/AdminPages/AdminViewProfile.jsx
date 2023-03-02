// UI Components for HomePage
import AdminNavBar from "../NavBar/AdminNavBar"

import Title from "../styled/Title"

export default function AdminViewProfile() {
    return (
        <>
            <AdminNavBar />
            <div className="user-info">
                <span> Welcome (Admin)!</span>
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
                        <Title>First Name</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                    <div>
                        <Title>Last Name</Title>
                        <p className="profile-details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <br />
                        <hr className="line-break" />
                    </div>
                </div>
            </section>
        </>
    )
}


