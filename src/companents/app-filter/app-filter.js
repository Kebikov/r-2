import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {onSort} = this.props;

        return (
            <div>
                <div className="btn-group">
                    <button 
                        className="btn btn-light"
                        type="button">
                            Все сотрудники
                    </button>
                    <button 
                        className="btn btn-outline-light"
                        type="button">
                            На повышение
                    </button>
                    <button 
                        className="btn btn-outline-light"
                        type="button"
                        onClick={onSort}>
                            З/П больше 1000$
                    </button>
                </div>
            </div>
        );
    }
}

export default AppFilter;