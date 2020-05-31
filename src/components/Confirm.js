import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Confirm extends Component {
    render() {
        return (
            <div className="container p-5">
                <div class="card col-6">
                    <div class="card-body">
                        <h4 className="mt-1">Congratulations on your confirmation! ...</h4><br />
                        <p class="card-text"><small class="text-muted">Thank You !!</small></p>
                        <Link to="/"><button type="button" class="btn btn-danger ml-5">Okay</button></Link>

                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm
