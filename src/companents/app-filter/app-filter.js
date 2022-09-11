import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    filterButton = (e) => {
        const filterName = e.target.getAttribute('data-filter');
        const {setNameFilter} = this.props;
        setNameFilter(filterName);
    } 

    render() {
        return (
            <div>
                <div className="btn-group">
                    <button 
                        className="btn btn-light"
                        type="button"
                        data-filter={''}
                        onClick={this.filterButton}>
                            Все сотрудники
                    </button>
                    <button 
                        className="btn btn-outline-light"
                        type="button"
                        data-filter={'up'}
                        onClick={this.filterButton}>
                            На повышение
                    </button>
                    <button 
                        className="btn btn-outline-light"
                        type="button"
                        data-filter={'zp'}
                        onClick={this.filterButton}>
                            З/П больше 1000$
                    </button>
                </div>
            </div>
        );
    }
}

export default AppFilter;