import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import { Link } from 'react-router-dom';

import fAssured from '../IMAGES/fAssured.png'

export class Mobiles extends Component {
    render() {
        console.log(this.props);
        const { Mobiles } = this.props;
        let DisplayMobiles = Mobiles.length ? (
            Mobiles.map(Mobile => {
                return (

                    <div class="row g-0" key={Mobile.id}>
                        <div class="col-md-3">
                            <img src={Mobile.img} alt="mobile img" />
                            <div class="form-check">
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
                )
            })
        ) : (

                <div className="text-center text-success"> Your data is fetching</div>

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
                                            <li class="list-inline-item">
                                                <button type="button" onClick={() => this.props.ShowPopularity()} className="btn btn-link text-decoration-none">Popularity</button>
                                            </li>
                                            <li class="list-inline-item">
                                                <button type="button" onClick={() => this.props.ShowPriceHightoLow()} className="btn btn-link text-decoration-none">Price - high to low</button>
                                            </li>
                                            <li class="list-inline-item">
                                                <button type="button" onClick={() => this.props.ShowPriceLowtoHigh()} className="btn btn-link text-decoration-none">Price - low to high</button>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        {DisplayMobiles}
                                    </li>

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
        Mobiles: state.Mobiles
    }
}
const mapDispatchToProps = (dispatch) => {
    // let data = ownProps
    return {
        ShowPopularity: () => {
            dispatch({
                type: 'SHOWPOPULARITY_MOBILES', 
            })
        },
        ShowPriceHightoLow: () => {
            dispatch({
                type: 'SHOWPRICEHIGHTOLOW_MOBILES', 
            })
        },
        ShowPriceLowtoHigh: () => {
            dispatch({
                type: 'SHOWPRICELOWTOHIGH_MOBILES', 
            })
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Mobiles);

