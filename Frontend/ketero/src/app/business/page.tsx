import Customers from "../../components/Business/Customers"
import BusinessProfile from "../../components/Business/BusinessProfile"
import AddService from "../../components/Business/AddService"
import style from "./Business.module.css"

const Business: React.FC = () => {
    return (
        <div>
            <Customers />
            <BusinessProfile />
            <AddService />
            <div>

            </div>
        </div>
    )
}

export default Business