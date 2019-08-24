import React from 'react';
import './Form.scss';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name);
        this.state = {
            email: '',
            account: '',
            country: '',
            description: ''
        }
    }

    onButton() {
        this.props.receive(this.refs.info.value);
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    setDataOnForm = () => {
        this.setState({
            email: 'dinhthuanvan@gmail.com',
            account: '123456',
            country: 'US',
            description: 'Descript update'
        })
    }
    resetDataForm = () => {
        this.setState({
            email: '',
            account: '',
            description: ''
        });
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="text" ref="info" />
                    <button onClick={this.onButton.bind(this)}>button</button>
                </div>
                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group row mt-5">
                        <label className="col-sm-2 col-form-label">Email address</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Account</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="account" placeholder="Account" onChange={this.handleChange} value={this.state.account} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Country</label>
                        <div className="col-sm-10">
                            <select className="form-control" name="country" onChange={this.handleChange} value={this.state.country}>
                                <option>Choose</option>
                                <option value="VN">VIET NAM</option>
                                <option value="US">UNITED STATES</option>
                                <option value="UK">UNITED KINGDOM</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Gender</label>
                        <div className="col-sm-10">
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="male" name="customRadioInline1" className="custom-control-input" />
                                <label className="custom-control-label">Male</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="female" name="customRadioInline1" className="custom-control-input" />
                                <label className="custom-control-label">female</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.description} />
                        </div>

                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2"></label>
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-info ml-1" onClick={this.resetDataForm.bind()}>reset</button>
                            <button type="button" className="btn btn-success ml-1" onClick={this.setDataOnForm.bind(this)}>set data</button>
                        </div>

                    </div>

                </form>
            </React.Fragment>
        );
    }
}

