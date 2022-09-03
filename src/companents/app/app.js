import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


const  App = () => {
    const data = [
        {name: 'Ira M.', salary: 1920, increase: false, id:1},
        {name: 'Vani M.', salary: 1220, increase: false, id:2},
        {name: 'Roma K.', salary: 2020, increase: true, id:3}];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmploersList data={data}/>
            <EmployersAddForm/>
        </div>
    )
}

export default App;