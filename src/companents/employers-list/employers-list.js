import EmployrsListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmploersList = ({data, onDelete, onToggleIncrease, onToggleRise, changeDataZp}) => {

    const elements = data.map(item => {
        const {id, ...itemBalance} = item;
        return <EmployrsListItem 
                key={id}
                dataId ={id}
                {...itemBalance}
                onDelete ={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}
                changeDataZp={changeDataZp}/>
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