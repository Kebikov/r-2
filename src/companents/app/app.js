import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form'; 

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Ira M.', salary: 1920, increase: false, id:1},
                {name: 'Vani M.', salary: 220, increase: false, id:2},
                {name: 'Roma K.', salary: 2020, increase: false, id:3}]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(item => item.id !== id)}
        })
    }

    addElem = (name, salary) => {
        this.setState(({data}) => {
            const obj = {
                name: name,
                salary: salary,
                increase: false, 
                id: nextId()
            }

            return {data: [...data, obj]}
        });
    }

    sortFn = () => {
        this.setState(({data}) => {
            return {data: data.filter(item => item.salary > 1000)}
        })
    }

    onToggleIncrease= (id) => {
        console.log(`Increas this ${id}`);
    }

    onToggleRise= (id) => {
        console.log(`Rise this ${id}`);
    }

        render() {
            return (
                <div className="app">
                    <AppInfo/>
                    <div className="search-panel">
                        <SearchPanel/>
                        <AppFilter
                            onSort={this.sortFn}/>
                    </div>
                    <EmploersList
                        data={this.state.data}
                        onDelete={this.deleteItem}
                        onToggleIncrease={this.onToggleIncrease}
                        onToggleRise={this.onToggleRise}/>
                    <EmployersAddForm
                        onAddElem={this.addElem}/>
                </div>
            )
        }
}

export default App;