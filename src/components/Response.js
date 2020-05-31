import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Response extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    render() {
        console.log(this.props.add.stored_data)
        let user = this.props.add.stored_data
        let show_user = user.reverse().map(e => {
            return (
                <div className="container col-6 p-3">
                    <div class="card mb-3 mt-5">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={e.img} class="card-img" class="d-block w-100" alt="Put Image Link" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h4 class="card-title text-danger">Congratulations! ...</h4>
                                    <p class="card-text">hey {e.name}</p>
                                    <p>Your {e.type} flat which is in {e.city} [{e.duration} year old house], now hoisted and saved in our Data_base.</p>
                                    <p class="card-text"><small class="text-muted">Thank You {e.name} !!</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/"><button class="btn btn-danger ml-5">Done</button></Link>
                </div>
            )
        })
        return (
            <div>
                {show_user}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        add: state.comments
    }
}
export default connect(mapStateToProps, null)(Response) 
