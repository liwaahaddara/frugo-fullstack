import { useNavigate } from "react-router-dom"

// UI Components for HomePage
import AdminNavBar from "../NavBar/AdminNavBar"

import Title from "../styled/Title"

export default function AdminMerchantList() {
    const navigate = useNavigate()
    return (
        <>
            <AdminNavBar />
            <div className="user-info">
                <span> Welcome (Admin)!</span>
            </div>
            <section>
                <Title><button className="merchant-add"
                    onClick={() => { navigate(`/admin/add-merchant`) }}
                >ADD MERCHANT</button></Title>
                <Title>List of Merchants</Title>
                <div className="confirmation-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <div
                        className="buttons-styled">
                        <button onClick={() => { navigate(`/admin/update-merchant`) }}
                            className="button-styled">Edit</button>
                        <button className="button-styled">Delete</button>
                        <br />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <div
                        className="buttons-styled">
                        <button onClick={() => { navigate(`/admin/update-merchant`) }}
                            className="button-styled">Edit</button>
                        <button className="button-styled">Delete</button>
                        <br />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <div
                        className="buttons-styled">
                        <button onClick={() => { navigate(`/admin/update-merchant`) }}
                            className="button-styled">Edit</button>
                        <button className="button-styled">Delete</button>
                        <br />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <div
                        className="buttons-styled">
                        <button onClick={() => { navigate(`/admin/update-merchant`) }}
                            className="button-styled">Edit</button>
                        <button className="button-styled">Delete</button>
                        <br />
                    </div>
                </div>
            </section>
        </>
    )
}


