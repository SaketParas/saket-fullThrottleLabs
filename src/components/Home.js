import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div class="bd-example p-1">
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.prioritymortgage.com/wp-content/uploads/2016/12/bigstock-House-key-on-a-house-shaped-ke-118171202.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="text-white font-weight-bolder">RENTAL GRAB</h5>
                                    <p class="text-white">You can rent your house OR search for rent</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://sskavenues.com/images/about-banner.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="text-body font-weight-bolder">RENTAL GRAB</h5>
                                    <p class="text-body">You can rent your house OR search for rent</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://bluestar-realtygroup.com/userfiles/banner.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="font-weight-bolder">RENTAL GRAB</h5>
                                    <p>You can rent your house OR search for rent</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="container mt-5 text-center">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card">
                                        <div class="p-3 mb-2 bg-danger text-white text-center">Search New House</div>
                                        <img src="https://images.squarespace-cdn.com/content/v1/53ff083fe4b06d598893dcdf/1416059184915-NCDOYJZRT6WO5NMZ18N5/ke17ZwdGBToddI8pDm48kFwLpwhcqxzfNuBZPTq0g3kUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dnihgU9gKGLroRAsvpywHz61e7rLscY9kQ8yq3Ldx1LvP7cJNZlDXbgJNE9ef52e8w/Mirror+Houses+Slide+front.jpg?format=500w" class="card-img-top" class="d-block w-100" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">The Best Wood Flooring Type for your Home</p>
                                            <Link to="/Search" ><button type="button" class="btn btn-outline-danger ml-5 ">Click to Search For New House</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card">
                                        <div class="p-3 mb-2 bg-danger text-white text-center">Rent My House</div>
                                        <img src="https://www.y101fm.com/images/articleimages/082315/lifestyle_082315main3.jpg" class="card-img-top" class="d-block w-100" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">Upgrade Your Entrance With These Front Door Plants.</p>
                                            <Link to="/GiveRent"><button type="button" class="btn btn-outline-danger ml-5">Click to Give for house for rent</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">


                    </div>
                </div>

            </div>
        )
    }
}

export default Home
