import './employers-add-form.css';
import { Component } from 'react';

class EmployersAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    };


    render() {
        const {name, salary} = this.state;

        return (
            <div>
                <div className="app-add-form">
                    <h3>Добавьте нового сотрудника</h3>
                    <form
                        className="add-form d-flex">
                        <input type="text" 
                            onChange={this.onValueChange} 
                            name='name'
                            className="form-control new-post-label"
                            placeholder="Как его зовут?"
                            value={name}/>
                        <input type="number" 
                            onChange={this.onValueChange} 
                            name='salary'
                            className="form-control new-post-label"
                            placeholder="З/П в $?"
                            value={salary}/>
                        <button type="submit"
                                className="btn btn-outline-light">Добавить</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EmployersAddForm;