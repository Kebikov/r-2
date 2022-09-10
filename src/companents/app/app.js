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
                {name: 'Ira M.', salary: 1920, increase: false, rise: false, id:1},
                {name: 'Vani M.', salary: 220, increase: false, rise: false, id:2},
                {name: 'Roma K.', salary: 2020, increase: false, rise: false, id:3}],
                term:''
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
                rise: false,
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
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) return {...item, increase: !item.increase};
                return item;
            })
        }));
    }

    onToggleRise= (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) return {...item, rise: !item.rise};
                return item;
            })
        }));
    }

    searchEmp = (items, term) => {
        if(!term.length) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
        
    }

    onUpdataSearch = (term) => {
        this.setState({term: term});
    }


        render() {
            const score = this.state.data.filter(item => item.increase === true);
            const {data, term} = this.state;
            const visibleData = this.searchEmp(data, term);

            return (
                <div className="app">
                    <AppInfo
                    allWorks={data.length}
                    bonus={score.length}/>
                    <div className="search-panel">
                        <SearchPanel
                        onUpdataSearch={this.onUpdataSearch}/>
                        <AppFilter
                            onSort={this.sortFn}/>
                    </div>
                    <EmploersList
                        data={visibleData}
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