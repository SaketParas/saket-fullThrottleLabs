import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { company_data } from './../Redux/Action';
import { Button } from '@material-ui/core';

class GiveRent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            city: '',
            type: '',
            duration: '',
            img: '',
            note: '',
        }
    }

    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    input_submit = (e) => {
        e.preventDefault()
        //console.log(this.state);
        let random_number = Math.floor(Math.random(2000) * 1000);
        let data = {
            name: this.state.name,
            city: this.state.city,
            type: this.state.type,
            duration: this.state.duration,
            img: this.state.img,
            note: this.state.note,
            id: random_number,
        }
        console.log(data);
        this.props.form_data(data);
        this.reset()
        this.props.history.push('/Response')
    }
    reset = () => {
        this.setState({
            name: "",
        })
    }
    render() {
        return (
            <div className="container p-3">
                <div class="card col-8 mt-5">
                    <div class="card-body">
                        <h3 class="text-danger font-weight-bolder mt-5">Put my House on Rent</h3>
                        <form onSubmit={this.input_submit}>
                            <div class="row ml-3">
                                <div class="mt-2">
                                    Full Name:<input type="text" class="form-control" placeholder="Full name" name="name" value={this.state.name} onChange={this.input_change} required />
                                </div>
                            </div>
                            <div class="form-group col-6 mt-3">
                                <label for="exampleFormControlSelect1">Select City</label>
                                <select class="form-control" id="exampleFormControlSelect1" name="city" value={this.state.city} onChange={this.input_change} required>
                                    <option>Select City</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Pune">Pune</option>
                                </select>
                            </div><br />
                            <div class="form-group col-6">
                                <label for="exampleFormControlSelect1">House Type</label>
                                <select class="form-control" id="exampleFormControlSelect1" name="type" value={this.state.type} onChange={this.input_change} required>
                                    <option>Select house type</option>
                                    <option value="2 BHK">2 BHK</option>
                                    <option value="3 BHK">3 BHK</option>
                                </select>
                            </div><br />
                            <div class="col-6">
                                For how long you live in this house (in Years):<input type="text" class="form-control" placeholder="Enter time duration in house" name="duration" value={this.state.duration} onChange={this.input_change} required />
                            </div>
                            <div class="row ml-2 mt-3">
                                <div class="">
                                    House Image Link:<input type="text" class="form-control" placeholder="put your house image link" name="img" value={this.state.img} onChange={this.input_change} />
                                </div>
                            </div>
                            <textarea className="row ml-3 mt-3 col-6" type="text" placeholder="Short description &#128466;" name="note" value={this.state.note} onChange={this.input_change} /><br />
                            <Button type="submit" class="btn btn-outline-danger ml-3">Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        form_data: (data) => dispatch(company_data(data))
    }
}
export default connect(null, mapDispatchToProps)(GiveRent) 