import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { studentRegisterAPI } from "../actions/api";
import Header from './Header';
import { countryDropdown} from 'react-country-region-selector';
import DatePicker from "react-datepicker";
class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                fatherName: '',
                email: '',
                country: '',   
                address: '',
                mobileNo: '',
                gender: '',
                dob: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    selectcountry(val) {
        this.setState({ country: val });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.fatherName && user.email && user.address && user.mobileNo && user.gender && user.gender && user.gender && user.dob && user.country) {
            console.log("Console: RegisterPage -> handleSubmit -> user", user);
            this.props.studentRegisterAPI(user).then(() => {
                let res = this.props.api_data
                console.log(res);
                this.setState({
                    logedIn: true
                })
            })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted, country } = this.state;

        return (
            <div className="col-md-6 col-md-offset-3">
                <Header {...this.props} />
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.fatherName ? ' has-error' : '')}>
                        <label htmlFor="fatherName">fatherName</label>
                        <input type="text" className="form-control" name="fatherName" value={user.fatherName} onChange={this.handleChange} />
                        {submitted && !user.fatherName &&
                            <div className="help-block">fatherName is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label htmlFor="email">email</label>
                        <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                        {submitted && !user.email &&
                            <div className="help-block">email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.address ? ' has-error' : '')}>
                        <label htmlFor="address">address</label>
                        <input type="text" className="form-control" name="address" value={user.address} onChange={this.handleChange} />
                        {submitted && !user.address &&
                            <div className="help-block">address is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.mobileNo ? ' has-error' : '')}>
                        <label htmlFor="email">mobileNo</label>
                        <input type="text" className="form-control" name="mobileNo" value={user.mobileNo} onChange={this.handleChange} />
                        {submitted && !user.email &&
                            <div className="help-block">mobileNo is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.gender ? ' has-error' : '')}>
                        <label htmlFor="email">gender</label>
                        <input type="text" className="form-control" name="gender" value={user.gender} onChange={this.handleChange} />
                        {submitted && !user.gender &&
                            <div className="help-block">gender is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.dob ? ' has-error' : '')}>
                        <label htmlFor="dob">dob</label>
                        <input type="text" className="form-control" name="dob" value={user.dob} onChange={this.handleChange} />
                        {submitted && !user.dob &&
                            <div className="help-block">dob is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.country ? ' has-error' : '')}>
                        <label htmlFor="email">country</label>
                        <input type="text" className="form-control" name="country" value={user.country} onChange={this.handleChange} />
                        {submitted && !user.country &&
                            <div className="help-block">country is required</div>
                        }
                    </div>
                    <countryDropdown
                        value={country}
                        onChange={(val) => this.selectcountry(val)} />

                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        api_data: state.data.api_data,
    };
}
export default connect(mapStateToProps, { studentRegisterAPI })(RegisterPage);
