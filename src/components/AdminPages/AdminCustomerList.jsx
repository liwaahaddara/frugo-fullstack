// UI Components for HomePage
import AdminNavBar from "../NavBar/AdminNavBar"

import Title from "../styled/Title"

export default function AdminCustomerList() {
    return (
        <>
            <AdminNavBar />
            <div className="user-info">
                <span> Welcome (Admin)!</span>
            </div>
            <section>
                <Title>List of Customers</Title>
                <div className="confirmation-details">
                    <div
                        className="admin-customer-list">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <button className="customer-delete-button">Delete</button>
                        <br />
                    </div>
                    <div
                        className="admin-customer-list">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <button className="customer-delete-button">Delete</button>
                        <br />
                    </div>
                    <div
                        className="admin-customer-list">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <button className="customer-delete-button">Delete</button>
                        <br />
                    </div>
                    <div
                        className="admin-customer-list">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                        <button className="customer-delete-button">Delete</button>
                        <br />
                    </div>
                </div>
            </section>
        </>
    )
}


