import './employers-list-item.css';

const EmployrsListItem = (props) => {


        const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise, changeDataZp, dataId} = props;

        let classNames = 'list-group-item d-flex justify-content-between';
        if(increase) {
            classNames += ' increase';
        }
        if(rise) {
            classNames += ' like';
        }

        const changeZp = (e) => {
            const newZp = e.target.value;
            const id = e.target.getAttribute('data-id');
            changeDataZp(id, newZp.slice(0, newZp.length - 2));
        }

        return (
            <div> 
                <li className={classNames}>
                    <span className="list-group-item-label" onClick={onToggleRise}>{name}</span> 
                    <input
                        type="text"
                        className="list-group-item-input"
                        defaultValue={'1000$'}
                        value={salary + ' $'}
                        onChange={changeZp}
                        data-id={dataId}/>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button
                            type="button"
                            className="btn-cookie btn-sm "
                            onClick={onToggleIncrease}>
                            <i className="fas fa-cookie"></i>
                        </button>
                        <button type="button"
                                className="btn-trash btn-sm "
                                onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                        </button>
                        <i className="fas fa-star"></i>
                    </div>
                </li>
            </div>
        )
}

export default EmployrsListItem;

