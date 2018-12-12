import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input, Row,
    Button,
} from 'reactstrap';
import "./user.component.css";
export const TUserProps = {};
export const TUserState = {
    userInformation: ''
};

// User component
export class UserComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            firstName: '',
            lastName: '',
            company: '',
            department: '',
            position: '',
            email: '',
            stateId: '',
            validFields: { firstName: false, lastName: false, company: false, department: false, position: false, email: false },
            savedUserInformation: { firstName: '', lastName: '', company: '', department: '', position: '', email: '' }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Function to handle changes to input text control
    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value,
        });
        let invalidFirstName = this.state.validFields.firstName;
        let invalidLastName = this.state.validFields.lastName;
        let invalidCompany = this.state.validFields.company;
        let invalidDepartment = this.state.validFields.department;
        let invalidPosition = this.state.validFields.position;
        let invalidEmail = this.state.validFields.email;
        switch (e.target.name) {
            case 'firstName':
                if (e.target.value.length > 0) {
                    invalidFirstName = new RegExp(/^[A-Za-z]+$/).test(e.target.value) === true ? false : true;
                } else {
                    invalidFirstName = false;
                }
                break;
            case 'lastName':
                if (e.target.value.length > 0) {
                    invalidLastName = new RegExp(/^[A-Za-z]+$/).test(e.target.value) === true ? false : true;
                } else {
                    invalidLastName = false;
                }
                break;
            case 'company':
                if (e.target.value.length > 0) {
                    invalidCompany = new RegExp(/^[A-Za-z]+$/).test(e.target.value) === true ? false : true;
                } else {
                    invalidCompany = false;
                }
                break;
            case 'department':
                if (e.target.value.length > 0) {
                    invalidDepartment = new RegExp(/^[A-Za-z]+$/).test(e.target.value) === true ? false : true;
                } else {
                    invalidDepartment = false;
                }
                break;
            case 'position':
                if (e.target.value.length > 0) {
                    invalidPosition = new RegExp(/^[A-Za-z]+$/).test(e.target.value) === true ? false : true;
                } else {
                    invalidPosition = false;
                }
                break;
            case 'email':
                if (e.target.value.length > 0) {
                    invalidEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(e.target.value) === true ? false : true;
                } else {
                    invalidEmail = false;
                }
                break;
            default:
                break;
        }
        this.setState({
            validFields: {
                firstName: invalidFirstName, lastName: invalidLastName, company: invalidCompany, department: invalidDepartment, position: invalidPosition, email: invalidEmail
            }
        });
    }

    // Handle save button click event
    handleSubmit(e) {
        e.preventDefault();
        const userInformation = {
            'firstName': this.state.firstName,
            'lastName': this.state.lastName,
            'company': this.state.company,
            'department': this.state.department,
            'position': this.state.position,
            'email': this.state.email
        }
        if (this.state.stateId !== null && this.state.stateId !== '') {
            this.props.actions.updateState(userInformation, this.state.stateId);
        } else {
            this.props.actions.saveState(userInformation);
        }
    }

    // On page load get data from firebase store
    componentWillMount() {
        this.props.actions.getState();
    }

    // on update map user information from updated state
    componentWillReceiveProps(newProps) {
        this.setState({
            firstName: newProps.userState.firstName,
            lastName: newProps.userState.lastName,
            company: newProps.userState.company,
            department: newProps.userState.department,
            position: newProps.userState.position,
            email: newProps.userState.email,
            stateId: newProps.userState.id,
            savedUserInformation: newProps.userState
        });
    }

    // Render method
    render() {
        return (
            <Container className="UserProfile">
                <Form className="form mt-4">
                    <Row>
                        <Col sm="3" xs="6"></Col>
                        <Col sm="6" xs="6">
                            <Col >
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        onChange={this.handleChange}
                                        value={this.state.firstName ? this.state.firstName : ''}
                                        placeholder="First Name"
                                    />
                                    <Label className="dynamic-firstname">{this.state.savedUserInformation.firstName}</Label>
                                    {this.state.validFields.firstName === true ?
                                        <Label className="text-danger">Invalid First Name</Label>
                                        : null
                                    }
                                </FormGroup>
                            </Col>
                            <Col >
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        onChange={this.handleChange}
                                        value={this.state.lastName ? this.state.lastName : ''}
                                        placeholder="Last Name"
                                    />
                                    <Label className="dynamic-firstname">{this.state.savedUserInformation.lastName}</Label>
                                    {this.state.validFields.lastName === true ?
                                        <Label className="text-danger">Invalid Last Name</Label>
                                        : null
                                    }
                                </FormGroup>
                            </Col >
                            <Col><hr className="hr-seperator"/></Col>
                            <Col >
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="company"
                                        onChange={this.handleChange}
                                        value={this.state.company ? this.state.company : ''}
                                        placeholder="Company"
                                    />
                                    <Label className="dynamic-firstname">{this.state.savedUserInformation.company}</Label>
                                    {this.state.validFields.company === true ?
                                        <Label className="text-danger">Invalid Company</Label>
                                        : null
                                    }
                                </FormGroup>
                            </Col>
                            <Col >
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="department"
                                        onChange={this.handleChange}
                                        value={this.state.department ? this.state.department : ''}
                                        placeholder="Department"
                                    />
                                    <Label className="dynamic-firstname">{this.state.savedUserInformation.department}</Label>
                                    {this.state.validFields.department === true ?
                                        <Label className="text-danger">Invalid Department</Label>
                                        : null
                                    }
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="position"
                                        onChange={this.handleChange}
                                        value={this.state.position ? this.state.position : ''}
                                        placeholder="Position"
                                    />
                                    <Label className="dynamic-firstname">{this.state.savedUserInformation.position}</Label>
                                    {this.state.validFields.position === true ?
                                        <Label className="text-danger">Invalid Position</Label>
                                        : null
                                    }
                                </FormGroup>
                            </Col>
                            <Col><hr className="hr-seperator"/></Col>
                            <Col>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="email"
                                        onChange={this.handleChange}
                                        value={this.state.email ? this.state.email : ''}
                                        placeholder="Email"
                                    />
                                    <Label className="dynamic-firstname">{this.state.savedUserInformation.email}</Label>
                                    {this.state.validFields.email === true ?
                                        <Label className="text-danger">Invalid Email</Label>
                                        : null
                                    }
                                </FormGroup>
                            </Col >
                            <Col><hr className="hr-seperator"/></Col>
                            <div className="text-center">
                                <Button color="primary" onClick={this.handleSubmit}>Save</Button>
                            </div>
                        </Col>
                        <Col sm="3" ></Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}
export default UserComponent;
