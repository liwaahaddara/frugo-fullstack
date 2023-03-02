// UI Components for HomePage
import AdminNavBar from "../NavBar/AdminNavBar"
import DummyTextGroup from "../DummyText"



export default function AdminHomePage() {
    return (
        <>
            <AdminNavBar />
            <div className="user-info">
                <span> Welcome (Admin)!</span>
            </div>
            <DummyTextGroup />
        </>
    )
}


