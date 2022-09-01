import EmployrsListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmploersList = () => {
    return (
        <div>
            <ul className="app-list list-group">
                <EmployrsListItem/>
                <EmployrsListItem/>
                <EmployrsListItem/>
            </ul>
        </div>
    )
}

export default EmploersList;