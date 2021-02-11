import React, { Component } from 'react';
import { connect } from 'react-redux';
import fAssured from '../IMAGES/fAssured.png';

export class Mobile extends Component {
    render() {
        // console.log(this.props);
        const { Mobile } = this.props;
        let MyMobile = Mobile ? (
            <div class="row g-0">
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


                            <h4 className="card-title">
                                {Mobile.Name}</h4>

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
                        <h4 className="card-title">{Mobile.Price}  <span> <img src={fAssured} alt="f-assured" width="80px" className="img-fluid" />
                        </span></h4>

                        <h5 className="card-subtitle lh-base"><span className="text-decoration-line-through text-secondary">{Mobile.DiscountPrice}</span>
                            {Mobile.DiscountPercentage}                            </h5>

                        <p className="card-subtitle lh-base"> {Mobile.EMI}</p>
                        <p className="card-subtitle lh-base">{Mobile.Offer}</p>

                    </div>
                </div>

            </div>

        ) : (

                <div>Fetch the Mobiles </div>
            )

        return (
            <div className="container-fluid my-5">
               
                {MyMobile}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
   let id = ownProps.match.params.Mobile_id ;

    return {
        Mobile: state.Mobiles.find(data =>
            
            data.id == id)


      
    }
}


export default connect(mapStateToProps)(Mobile);
