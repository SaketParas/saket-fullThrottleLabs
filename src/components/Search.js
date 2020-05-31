import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="p-3">
                <div className="mt-5">
                    <div className="container mt-5">
                        <div class="card col-8 mt-5">
                            <form action="/action_page.php">
                                <div class="card-body">
                                    <div class="form-group col-8 mt-3">
                                        <h3 class="text-danger font-weight-bolder">Search House</h3>
                                        <label for="exampleFormControlSelect1">Select City</label>
                                        <select class="form-control" required>
                                            <option>Select City</option>
                                            <option>Bangalore</option>
                                            <option>Mumbai</option>
                                            <option>Delhi</option>
                                            <option>Kolkata</option>
                                            <option>Pune</option>
                                        </select>
                                    </div><br />
                                    <div class="form-group col-8">
                                        <label for="exampleFormControlSelect1">House Type</label>
                                        <select class="form-control" id="exampleFormControlSelect1" required>
                                            <option value="">Select house type</option>
                                            <option value="2">2 BHK</option>
                                            <option value="3">3 BHK</option>
                                        </select>
                                    </div><br />
                                    <div class="form-group col-8">
                                        <label for="exampleFormControlSelect1">Are you student or earning</label>
                                        <select class="form-control" id="exampleFormControlSelect1" required>
                                            <option value="">Student or Earning</option>
                                            <option value="Student">Student</option>
                                            <option value="Earning">Earning</option>
                                        </select>
                                    </div><br />
                                    <Link to="/Card"><button type="submit" class="btn btn-outline-danger ml-3">Search</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default User
