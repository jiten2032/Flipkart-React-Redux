import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import { Link } from 'react-router-dom';

import fAssured from '../IMAGES/fAssured.png'

export class Pricelowtohigh extends Component {
    render() {
        const { DscMobiles } = this.props;
        let Pricelowtohigh = DscMobiles.sort((a, b) => (a.Price > b.Price) ? 1 : -1);
        let SortedMobiles = Pricelowtohigh ? (
            Pricelowtohigh.map(Mobile => {
                return (
                    <div className="" key={Mobile.id}>
                        <li className="list-group-item">
                            <div class="row g-0 my-3">
                                <div class="col-md-3 ">
                                    <img src={Mobile.img} alt="mobile img" height="150px" width="100px" className="img-fluid d-block mx-auto" />
                                    <div class="form-check mt-4">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Add to Compare
                                </label>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div class="card-body">
                                        <Link to={'/' + Mobile.id} className="text-dark text-decoration-none">

                                            <h4 className="card-title ">
                                                {Mobile.Name}</h4>
                                        </Link>
                                        <h5 className="card-subtitle"><a>
                                            <span className="badge bg-success px-3 ">{Mobile.Stars}</span>  {Mobile.Ratings}
                                        </a></h5>
                                        <p className="card-text my-3">

                                            <ul className="lh-base">
                                                <li>{Mobile.RAM}</li>
                                                <li>{Mobile.Display}</li>
                                                <li>{Mobile.Camera}</li>
                                                <li>{Mobile.Battery}</li>
                                                <li>{Mobile.Processors}</li>
                                                <li>{Mobile.Yarenty}</li>

                                            </ul>

                                        </p>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body">
                                        <h4 className="card-title">₹{Mobile.Price}  <span> <img src={fAssured} alt="f-assured" width="80px" className="img-fluid" />
                                        </span></h4>

                                        <h5 className="card-subtitle lh-base"><span className="text-decoration-line-through text-secondary">{Mobile.DiscountPrice}</span>
                                            {Mobile.DiscountPercentage}                            </h5>

                                        <p className="card-subtitle lh-base"> {Mobile.EMI}</p>
                                        <p className="card-subtitle lh-base">{Mobile.Offer}</p>

                                    </div>
                                </div>

                            </div>
                        </li>
                    </div>
                )


            })



        ) : (



                <div className="text-center text-success"> Fething your sorted items</div>
            )


        return (
            <div className="Mobiles">
                <Navbar />
                <SubNavbar />
                <div className="container-fluid my-2">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="card" >
                                <ul class="list-group list-group-flush">
                                    <li className="list-group-item">Filters</li>
                                    <li className="list-group-item">
                                        <p>Category</p>
                                        <p> <a>Mobile & Accessories</a>  </p>
                                        <p><a className="text-dark">Mobiles</a></p>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        RAM
                                            </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <div class="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault" >
                                                                6 GB & Above
                                                    </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label className="form-check-label" htmlFor="flexCheckChecked" >
                                                                4 GB
                                                     </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label className="form-check-label" htmlFor="flexCheckChecked" >
                                                                3 GB
                                                     </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label className="form-check-label" htmlFor="flexCheckChecked" >
                                                                2 GB
                                                     </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                Sort By :
                                    </li>
                                            <li className="list-inline-item">
                                                <Link to="/Popularity" className="btn btn-link text-decoration-none">Popularity</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="/AscOrder" className="btn btn-link text-decoration-none">Price - high to low</Link>
                                            </li>
                                            <li className="list-inline-item">
                                                <Link to="/DscOrder" className="btn btn-link text-decoration-none ">Price - low to high</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    {SortedMobiles}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {


    return {
        DscMobiles: state.Mobiles



    }
}


export default connect(mapStateToProps)(Pricelowtohigh);
