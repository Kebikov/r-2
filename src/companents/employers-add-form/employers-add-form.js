import './employers-add-form.css';
import { Component } from 'react';

class EmployersAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            placeholderName:'Как его зовут?',
            placeholderNum:'З/П в $?'
        }
    }

    onValueChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    };

    submitButton = (e) => {
        e.preventDefault();
        const {onAddElem} = this.props;
        if(this.state.name.length < 3  ||  this.state.salary.length === 0) {
            console.log('меньше трех', this.state.salary.length);
            if(this.state.name.length < 3) this.setState(() => ({placeholderName: 'не меньше трех букв'}));
            if(this.state.salary.length === 0) this.setState(() => ({placeholderNum: 'введите зарплату работника'}));
        }else{
            onAddElem(this.state.name, this.state.salary);
            this.setState(() => {
                return {name: '', salary: '', placeholderName:'Как его зовут?', placeholderNum:'З/П в $?'}
            })
        }
    }


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
                            placeholder={this.state.placeholderName}
                            value={name}/>
                        <input type="number" 
                            onChange={this.onValueChange} 
                            name='salary'
                            className="form-control new-post-label"
                            placeholder={this.state.placeholderNum}
                            value={salary}/>
                        <button type="submit"
                                className="btn btn-outline-light"
                                onClick={this.submitButton}>Добавить</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EmployersAddForm;