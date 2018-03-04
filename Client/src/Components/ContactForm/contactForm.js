import React,{Component} from 'react';
import classes from './contactForm.css';
import Aux from '../../hoc/Aux/aux';
import Input from '../Ui/Input/Input';
import Button from '../Ui/Button/Button';
import Spinner from '../Ui/Spinner/Spinner';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class contactForm extends Component {
    state = {
        controls : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type :'text',
                    placeholder : 'Name'
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            },
            reasonToContact : {
                elementType : 'textArea',
                elementConfig : {
                    type : 'text',
                    placeholder: 'Reason To Contact'
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            },
            contactDetails : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder: 'Contact Details'
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            }
        },
        formIsValid : false,
        loading: false
    }

    checkValidity(value , rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }

    InputChangeHandler = (event,id) => {
        const updatedFormElement = {
            ...this.state.controls[id],
            value : event.target.value,
            valid : this.checkValidity(event.target.value,this.state.controls[id].validation),
            touched : true
        }

        const updatedOrderForm = {
            ...this.state.controls,
            [id] : updatedFormElement
        }

        let isFormValid = true;
        for(let inputIdentifier in updatedOrderForm) {
            isFormValid = updatedOrderForm[inputIdentifier].valid && isFormValid;
        }

        this.setState({controls: updatedOrderForm,formIsValid: isFormValid});
    }

    contactHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let id in this.state.controls) {
            formData[id] = this.state.controls[id].value;
        }

        this.sendData(formData);
    }

    sendData = (data) => {
        console.log(data);
        axios.post('/contactdata',data).then(res => {
            this.setState({loading: false});
            this.props.history.push('/');
        })
    }
    render() {
        console.log(this.props.history);

        const formElementsArray = [];
        for(let key in this.state.controls) {
            formElementsArray.push({
                id : key,
                config: this.state.controls[key]
            })
        }

        let form = (
            <form onSubmit={this.contactHandler}>
                {formElementsArray.map(formElement => (
                    <Input key={formElement.id}
                           elementType={formElement.config.elementType}
                           elementConfig={formElement.config.elementConfig}
                           value={formElement.config.value}
                           invalid={!formElement.config.valid}
                           shouldValidate={formElement.config.validation}
                           touched={formElement.config.touched}
                           changed={(event) => this.InputChangeHandler(event,formElement.id)}/>
                ))}

                <Button btnType="Success" disabled={!this.state.formIsValid}>CONTACT</Button>
            </form>
        );

        if ( this.state.loading ) {
            form = <Spinner />;
        }

        return (
            <Aux>
                <div className={classes.Tile}>Contact Me</div>
                <div className={classes.form}>{form}</div>
            </Aux>
        );
    }
}

export default withErrorHandler(contactForm,axios);