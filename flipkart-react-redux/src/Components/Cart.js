import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navabar from './Navbar';
import { Link } from 'react-router-dom';

import fAssured from '../IMAGES/fAssured.png';

export class Cart extends Component {
    render() {
        // console.log(this.props.cartdata);
        let { cartdata } = this.props;
        // let mycartdata = cartdata.MobileData.map(mobile =>{
        //     return(
        //         <div>{mobile.Name}</div>
        //     )
        // })






        // console.log(cartdata.MobileData);
        // const cartMobiles = cartdata.MobileData ? (
        //     cartdata.MobileData.map(Eachcart => {
        //         return (
        //             <div>

        //                 {Eachcart.Price}
        //             </div>

                    // <li className="list-group-item" key={Eachcart.id}>
                    //     <div class="row g-0 my-3">
                    //         <div class="col-md-3 ">
                    //             <img src={Eachcart.img} alt="mobile img" height="150px" width="100px" className="img-fluid d-block mx-auto" />
                    //             <div class="form-check mt-4">
                    //                 <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    //                 <label className="form-check-label" htmlFor="flexCheckDefault">
                    //                     Add to Compare
                    // </label>
                    //             </div>
                    //         </div>
                    //         <div className="col-md-5">
                    //             <div class="card-body">
                    //                 <a  className="text-dark text-decoration-none">

                    //                     <h4 className="card-title ">
                    //                         {Eachcart.Name}</h4>
                    //                 </a>
                    //                 <h5 className="card-subtitle"><a>
                    //                     <span className="badge bg-success px-3 ">{Eachcart.Stars}</span>  {Eachcart.Ratings}
                    //                 </a></h5>
                    //                 <p className="card-text my-3">

                    //                     <ul className="lh-base">
                    //                         <li>{Eachcart.RAM}</li>
                    //                         <li>{Eachcart.Display}</li>
                    //                         <li>{Eachcart.Camera}</li>
                    //                         <li>{Eachcart.Battery}</li>
                    //                         <li>{Eachcart.Processors}</li>
                    //                         <li>{Eachcart.Yarenty}</li>

                    //                     </ul>

                    //                 </p>

                    //             </div>
                    //         </div>
                    //         <div className="col-md-4">
                    //             <div className="card-body">
                    //                 <h4 className="card-title">₹{Eachcart.Price}  <span> <img src={fAssured} alt="f-assured" width="80px" className="img-fluid" />
                    //                 </span></h4>

                    //                 <h5 className="card-subtitle lh-base"><span className="text-decoration-line-through text-secondary">{Eachcart.DiscountPrice}</span>
                    //                     {Eachcart.DiscountPercentage}                            </h5>

                    //                 <p className="card-subtitle lh-base"> {Eachcart.EMI}</p>
                    //                 <p className="card-subtitle lh-base">{Eachcart.Offer}</p>

                    //             </div>
                    //         </div>

                    //     </div>
                    // </li>

        //         )


        //     })
        // ) :

        //     (
        //         <div>
        //             <h1 className="text-center my-5">Your Cart is empty</h1>
        //         </div>
        //     )
        return (
            <div className="cart">
                <Navabar />
                <div className="container my-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <ul class="list-group list-group-flush">
                                    <li className="list-group-item fw-bold">My Cart ({cartdata.count})</li>
                                    <li className="list-group-item">
                                {/* { mycartdata}  */}
                                   hi
                                    </li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <ul class="list-group list-group-flush">
                                    <li className="list-group-item text-secondary ">PRICE DETAILS</li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5 className="fw-normal fs-5 lh-lg"> Price( {cartdata.count} Items)</h5>
                                                <h5 className="fs-5 lh-lg">Discount</h5>
                                                <h5 className="fs-5 lh-lg">Delivery Charges</h5>
                                            </div>
                                            <div>
                                                <h5 className="fw-normal fs-5 lh-lg"> {cartdata.MobileData.DiscountPrice}</h5>
                                                <h5 className="text-success fs-5 lh-lg"> − ₹{cartdata.MobileData.TotalPrice - cartdata.MobileData.Price}</h5>
                                                <h5 className="text-success fs-5 lh-lg">Free</h5>
                                            </div>

                                        </div>


                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5 className="fw-normal fs-5 lh-lg">Total Amount</h5>

                                            </div>
                                            <div>
                                                <h5 className="text-success fs-3 lh-lg"> ₹{cartdata.MobileData.Price}</h5>
                                            </div>

                                        </div>
                                    </li>
                                    <li className="list-group-item text-success lh-lg">
                                        You will save ₹{cartdata.MobileData.TotalPrice - cartdata.MobileData.Price} on this order
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
        cartdata: state
    }
}
export default connect(mapStateToProps)(Cart)
