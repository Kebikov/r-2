import './employers-list-item.css';
import { Component } from 'react';

class EmployrsListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: this.props.name,
            salary: this.props.salary,
            increase: false,
            rise: false,
        }
    }

    onIncrease = (e) => {
            this.setState(({increase}) => ({increase: !increase}));
    }

    onLike = () => {
        this.setState(({rise}) => ({rise: !rise}))
    }

    render () {
        const {name, salary, onDelete} = this.props;
        const {increase, rise} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';
        if(increase) {
            classNames += ' increase';
        }
        if(rise) {
            classNames += ' like';
        }


        return (
            <div> 
                <li className={classNames}>
                    <span className="list-group-item-label" onClick={this.onLike}>{name}</span> 
                    <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="button"className="btn-cookie btn-sm " onClick={this.onIncrease}>
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

}

export default EmployrsListItem;

