import EmployrsListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmploersList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemBalance} = item;
        return <EmployrsListItem 
                key={id}
                {...itemBalance}
                onDelete ={() => onDelete(id)}/>
    });

    return (
        <div>
            <ul className="app-list list-group">
                {elements}
            </ul>
        </div>
    )
}

export default EmploersList;