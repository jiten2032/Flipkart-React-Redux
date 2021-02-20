import React, { Component } from 'react';
import logo from '../IMAGES/logo.JPG';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Navbar extends Component {

    render() {

        const { MyMobilesdata } = this.props

        return (
            <div className="">
                <div className="navbar navbar-expand-md navbar-dark bg-primary sticky-top" >
                    <div className="container">
                        <div className="container d-flex">

                            <Link to="/" className="navbar-brand">
                                <img src={logo} alt="My Img" srcSet="" style={{ width: '100px' }} className="d-inline-block align-top" />
                            </Link>
                            <input className="form-control  " list="datalistOptions"
                                placeholder="Search for products,brands and more" />
                            <button className="btn bg-light btn-outline-light" type="submit" id="button-addon2"
                            >
                                <i className="material-icons text-primary">search</i>
                            </button>
                            <datalist id="datalistOptions">
                                <option value="home" />
                                <option value="acer aspire 7" />
                                <option value="Mobiles" />
                                <option value="Laptop bags" />
                                <option value="laptop Tables" />
                            </datalist>

                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mymenu"
                            aria-controls="mymenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="mymenu">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                                <li class="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="LINKS" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Jiten
                                     </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="HOMEPAGELINK" style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className='fas'>&#xf183;</i>My
                                        Profile</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }}
                                                    className='fab'>&#xf379;</i>SuperCoin Zone</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className='fab'>&#xf42e;</i>
                                        Flipkart Plus Zone</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className="fab">&#xf2b0;</i>
                                        Orders</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className='fas'>&#xf004;</i>
                                        Wishlist</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className="fa">&#xf1fe;</i>
                                        My Chats</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className='fas'>&#xf187;</i>
                                        Coupons</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className='fas'>&#xf06b;</i>
                                        Gift Cards</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }}
                                                    className="material-icons">&#xe7f4;</i>
                                        Notification</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className='fab'>&#xf91a;</i>
                                        Logout</a>
                                        </li>
                                    </ul>

                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="LINKS" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                      </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }}
                                                    className="material-icons">&#xe7f4;</i>
                                              Notification & Preferences</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className='fas'>&#xf06b;</i>
                                        Sell on Flipkart</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className='fas'>&#xf87b;</i>
                                        24x7 Customer Care</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }} className='fab'>&#xf36a;</i>
                                        Advertise</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="homepage"
                                                style={{ textDecoration: 'none', color: "dimgrey" }}>
                                                <i style={{ fontSize: '14px', color: 'blue', padding: '7px' }}
                                                    className="material-icons">&#xe2c4;</i>
                                          Download</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Addproduct" className="nav-link" >Add Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Orders" className="nav-link">Orders</Link>
                                </li>
                                {
                                    MyMobilesdata.clicked ?
                                        (<li className="nav-item" style={{ position: 'relative' }}>
                                            <Link to="/Cart" className="nav-link">
                                                <i className="material-icons">add_shopping_cart </i>
                                                <span className="badge rounded-pill bg-danger" style={{ position: 'absolute', bottom: '35px', left: '10px' }}>
                                                    {MyMobilesdata.count}
                                                </span>
                                                Cart</Link>
                                        </li>)
                                        :
                                        null

                                }



                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        MyMobilesdata: state
    }
}
export default connect(mapStateToProps)(Navbar)
