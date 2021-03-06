import React, { Component } from 'react';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import img1 from '../IMAGES/img1.jpg';
import img2 from '../IMAGES/img2.jpg';
import img3 from '../IMAGES/img3.jpg';
import img4 from '../IMAGES/img4.jpg';
import img5 from '../IMAGES/img5.jpg';
import img6 from '../IMAGES/img6.jpg';
import crousel1img1 from '../IMAGES/crousel1img1.jpeg';
import crousel1img2 from '../IMAGES/crousel1img2.jpeg';
import crousel1img3 from '../IMAGES/crousel1img3.jpeg';
import crousel1img4 from '../IMAGES/crousel1img4.jpeg';
import crousel1img5 from '../IMAGES/crousel1img5.jpeg';
import crousel1img6 from '../IMAGES/crousel1img6.jpeg';
import crousel1img7 from '../IMAGES/crousel1img7.jpeg';
import crousel1img8 from '../IMAGES/crousel1img8.jpeg';
import crousel1img9 from '../IMAGES/crousel1img9.jpeg';
import crousel1img10 from '../IMAGES/crousel1img10.jfif';
import crousel1img11 from '../IMAGES/crousel1img11.jpg';
import crousel1img12 from '../IMAGES/crousel1img12.jfif';
import card1 from '../IMAGES/card1.jpg';
import card2 from '../IMAGES/card2.jpg';
import card3 from '../IMAGES/card3.jpg';
import crousel2img1 from '../IMAGES/crousel2img1.jpeg';
import crousel2img2 from '../IMAGES/crousel2img2.jpeg';
import crousel2img3 from '../IMAGES/crousel2img3.jpeg';
import crousel2img4 from '../IMAGES/crousel2img4.jpeg';
import crousel2img5 from '../IMAGES/crousel2img5.jpeg';
import crousel2img6 from '../IMAGES/crousel2img6.jpeg';
import crousel2img7 from '../IMAGES/crousel2img7.jpeg';
import crousel2img8 from '../IMAGES/crousel2img8.jpeg';
import crousel2img9 from '../IMAGES/crousel2img9.webp';
import crousel2img10 from '../IMAGES/crousel2img10.jfif';
import crousel2img11 from '../IMAGES/crousel2img11.jfif';
import crousel2img12 from '../IMAGES/crousel2img12.webp';
import card4 from '../IMAGES/card4.jpg';
import card5 from '../IMAGES/card5.jpg';
import card6 from '../IMAGES/card6.jpg';
import crousel3img1 from '../IMAGES/crousel3img1.jpeg';
import crousel3img2 from '../IMAGES/crousel3img2.jpeg';
import crousel3img3 from '../IMAGES/crousel3img3.jpeg';
import crousel3img4 from '../IMAGES/crousel3img4.jpeg';
import crousel3img5 from '../IMAGES/crousel3img5.jpeg';
import crousel3img6 from '../IMAGES/crousel3img6.jpeg';
import crousel3img7 from '../IMAGES/crousel3img7.jpeg';
import crousel3img8 from '../IMAGES/crousel3img8.jpeg';
import crousel3img9 from '../IMAGES/crousel3img9.jpeg';
import crousel3img10 from '../IMAGES/crousel3img10.jpeg';
import crousel3img11 from '../IMAGES/crousel3img11.jpeg';
import crousel3img12 from '../IMAGES/crousel3img12.jpeg';
import crousel4img1 from '../IMAGES/crousel4img1.jpeg';
import crousel4img2 from '../IMAGES/crousel4img2.jpeg';
import crousel4img3 from '../IMAGES/crousel4img3.jpeg';
import crousel4img4 from '../IMAGES/crousel4img4.jpeg';
import crousel4img5 from '../IMAGES/crousel4img5.jpeg';
import crousel4img6 from '../IMAGES/crousel4img6.jpeg';
import crousel4img7 from '../IMAGES/crousel4img7.jpeg';
import crousel4img8 from '../IMAGES/crousel4img8.jpeg';
import crousel5img1 from '../IMAGES/crousel5img1.jpeg';
import crousel5img2 from '../IMAGES/crousel5img2.jpeg';
import crousel5img3 from '../IMAGES/crousel5img3.jpeg';
import crousel5img4 from '../IMAGES/crousel5img4.jpeg';
import crousel5img5 from '../IMAGES/crousel5img5.jpeg';
import crousel5img6 from '../IMAGES/crousel5img6.jpeg';
import crousel5img7 from '../IMAGES/crousel5img7.jpeg';
import crousel5img8 from '../IMAGES/crousel5img8.jpeg';
import crousel5img9 from '../IMAGES/crousel5img9.jpeg';
import crousel5img10 from '../IMAGES/crousel5img10.jpeg';
import crousel5img11 from '../IMAGES/crousel5img11.jpeg';
import crousel5img12 from '../IMAGES/crousel5img12.jpeg';
import sideimg1 from '../IMAGES/sideimg1.jpeg';
// import pococ3 from '../IMAGES/pococ3.jpeg';
// import pocom2 from '../IMAGES/pocom2.jpeg';
// import pocox3 from '../IMAGES/pocox3.jpeg';
// import opporeno5 from '../IMAGES/opporeno5.jpeg';
// import realmenarzo20 from '../IMAGES/realmenarzo20.jpeg';
import { connect } from 'react-redux';





export class Home extends Component {
    // state = {
    //     storemobilesData: [],
    //     Clickcount: 0,
    //     //  clicked: false
    // }

    handleClick = (id) => {
        const mystoredata = this.props.MyMobilesdata.find(data => data.id == id)

        // this.setState({
        //     storemobilesData: mystoredata,
        //     Clickcount: this.state.Clickcount + 1,
        //     clicked:true

        // });
    
       this.props.addpost(mystoredata)

    }

    render() {
       
        // console.log(this.props);
        const {  MyMobilesdata } = this.props;
        const Showmobiles = MyMobilesdata.slice(0, 6);
        const displaymobiles = Showmobiles.map(homeMobiles => {
            return (

                <div className="col-sm-2" key={homeMobiles.id}>
                    <div className="card">
                        <a>
                            <img className="card-img-top" id="Cardimg" src={homeMobiles.img} alt="My Img" srcSet="" />
                        </a>
                        <div className="card-body lh-1">
                            <h5 className="card-title"><a> {homeMobiles.Name}</a> </h5>
                            <p className=""><span className="badge bg-success">{homeMobiles.Stars}*</span>
                                {homeMobiles.Ratings}        </p>
                            <p>₹{homeMobiles.Price} <span className="text-decoration-line-through text-secondary">{homeMobiles.DiscountPrice}</span> {homeMobiles.DiscountPercentage}</p>
                            <a className="btn btn-success" onClick={() => { this.handleClick(homeMobiles.id) }}>Add to Cart</a>
                        </div>
                    </div>
                </div>
            )
        })

        // const { MobileData, count } = this.state
        return (
            <div className="flipkart">

                <Navbar 
                // propsdata={this.state} 

                />
                
                
                {/* End of Navbar */}

                <SubNavbar />

                {/* end of second navbar */}

                <div className="container-fluid" style={{ marginTop: "10px" }}>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img1} style={{ height: "300px" }} className="d-block w-100" alt="My Img" />
                            </div>
                            <div className="carousel-item">
                                <img src={img2} style={{ height: "300px" }} className="d-block w-100" alt="My Img" />
                            </div>
                            <div className="carousel-item">
                                <img src={img3} style={{ height: "300px" }} className="d-block w-100" alt="My Img" />
                            </div>
                            <div className="carousel-item">
                                <img src={img4} style={{ height: "300px" }} className="d-block w-100" alt="My Img" />
                            </div>
                            <div className="carousel-item">
                                <img src={img5} style={{ height: "300px" }} className="d-block w-100" alt="My Img" />
                            </div>
                            <div className="carousel-item">
                                <img src={img6} style={{ height: "300px" }} className="d-block w-100" alt="My Img" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" id="slide" href="#carouselExampleControls" role="button"
                            data-bs-slide="prev">
                            <span aria-hidden="true">
                                <i style={{ fontSize: '35px', color: 'black' }} className='fas'>&#xf104;</i>
                            </span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" id="slide" href="#carouselExampleControls" role="button"
                            data-bs-slide="next">
                            <span aria-hidden="true">
                                <i style={{ fontSize: '35px', color: 'black' }} className='fas'>&#xf105;</i>
                            </span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>

                </div>

                {/* end of 1st carousel*/}

                <div className="container-fluid" style={{ marginTop: "15px", backgroundColor: "rgb(255,255,255)" }} >
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header fs-4 fw-bold">
                                    Mobiles
                          </div>
                            </div>
                            <div id="slidebuttom" className="carousel slide" data-bs-ride="carousel" data-bs-animation="dragX">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">

                                        <div className="row text-center">

                                            {displaymobiles}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* end of Mobiles */}

                <div className="container-fluid" style={{ marginTop: "15px", backgroundColor: "rgb(255,255,255)" }}>
                    <div className="row">
                        <div className="col-md-9 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="d-flex justify-content-between flex-wrap">
                                        <div className="fs-5 fw-bold  ">Deals of the Day</div>
                                        <div className="text-danger ">Offer Expired</div>
                                        <div className="text-primary ">Show New Deals</div>
                                        <div className="btn btn-primary  "> View ALL</div>
                                    </div>
                                </div>
                            </div>
                            <div id="slideone" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">

                                        <div className="row text-center">
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" src={crousel1img1} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Kitchen and Dining Range</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $99</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Container,Lunch </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top  " src={crousel1img2} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Plain Case Covers & Screw</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Extra 10%
                                                    Off</a></p>
                                                        <p><a href="homepage" className="card-link text-secondary">For All Top Models</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" src={crousel1img3} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Christmas Essentials</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $99</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Christmas Tree </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="card-img-top" src={crousel1img4} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Home Furnishing Range</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $129</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Bedsheets</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="card-img-top" src={crousel1img5} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Pendrives & Memory Card</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $499</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Samsung,SanDisk </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="card-img-top" src={crousel1img6} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">LED Bulbs & more</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $99</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Eveready.phillips</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row text-center">
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="card-img-top" src={crousel1img7} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">LED Bulbs & more</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Starting
                                                    $99</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Best Selling</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="card-img-top" src={crousel1img8} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">LED Bulbs & more</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">50-80% Off</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Pepe Jeans,Miss</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="card-img-top" src={crousel1img9} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Pendrives & Memory Card</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $499</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Samsung,SanDisk </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="card-img-top" src={crousel1img10} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Pendrives & Memory Card</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $499</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Samsung,SanDisk </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top  " src={crousel1img11} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Pendrives & Memory Card</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $499</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Samsung,SanDisk </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top  " src={crousel1img12} alt="My Img" srcSet=""
                                                        style={{ height: "150px", width: "150px", marginTop: "20px", marginLeft: "10px" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Pendrives & Memory Card</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $499</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary">Samsung,SanDisk </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <a className="carousel-control-prev" id="slide" href="slideone" role="button" data-bs-slide="prev">
                                    <span aria-hidden="true">
                                        <i className="material-icons" style={{ fontSize: '46px', color: "black" }}>keyboard_arrow_left</i>
                                    </span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" id="slide" href="slideone" role="button" data-bs-slide="next">
                                    <span aria-hidden="true">
                                        <i className="material-icons" style={{ fontSize: '46px', color: "black" }}>keyboard_arrow_right</i>
                                    </span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 ">
                            <div className="card">
                                <img className="card-img" src={sideimg1} alt="My Img" srcSet=""
                                    style={{ width: "350px", height: "380px" }} />
                            </div>





                        </div>
                    </div>
                </div>

                {/* end of 2nd carousel */}

                <div className="container-fluid" style={{ marginTop: "10px" }}>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img" style={{ height: "260px" }} src={card1} alt="My Img" srcSet="" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img" style={{ height: "260px" }} src={card2} alt="My Img" srcSet="" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img" style={{ height: "260px" }} src={card3} alt="My Img" srcSet="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* end of Cards */}

                <div className="container-fluid" style={{ marginTop: "15px", backgroundColor: "rgb(255,255,255)" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header fs-4 fw-bold">
                                    Top Deals on Accessories
                                  </div>
                            </div>
                            <div id="slidebuttom" className="carousel slide" data-bs-ride="carousel" data-bs-animation="dragX">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">

                                        <div className="row text-center">
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="card-img-top" id="Cardimg" src={crousel2img1} alt="My Img" srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Mobile Holders</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From
                                                    $99</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Relax your hand</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel2img2} alt="My Img" srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Data Cards</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Extra 60%
                                                    Off</a></p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">JioFi,Huawei &
                                                    more</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel2img3} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Webcams</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From
                                                    $490</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Logitech,Quantum &
                                                    more</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="card-img-top" id="Cardimg" src={crousel2img4} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Wired Earphones</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From
                                                    $399</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Mi,realme &
                                                    more</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel2img5} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Best Brands</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Shop
                                                    Now</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">For All Phone
                                                    Models</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel2img6} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Bluetooth Headphones</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From
                                                    $899</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">JBL.boAt &
                                                    more</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row text-center">
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className=" card-img-top" id="Cardimg" src={crousel2img7} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Magnetic mobile Covers</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Shop
                                                    Now</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">For Your Phone</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel2img8} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Cooling Pads</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Upto 80%
                                                    Off !</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Tarkan,Flipkart
                                                    SmartBuy</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel2img9} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Cooling Pads</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Upto 80%
                                                    Off !</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Tarkan,Flipkart
                                                    SmartBuy</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel2img10} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Cooling Pads</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Upto 80%
                                                    Off !</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Tarkan,Flipkart
                                                    SmartBuy</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel2img11} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Cooling Pads</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Upto 80%
                                                    Off !</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Tarkan,Flipkart
                                                    SmartBuy</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel2img12} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Cooling Pads</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Upto 80%
                                                    Off !</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Tarkan,Flipkart
                                                    SmartBuy</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <a className="carousel-control-prev" id="slide" href="#slidebuttom" role="button" data-bs-slide="prev">
                                    <span aria-hidden="true">
                                        <i className="material-icons" style={{ fontSize: '46px', color: "black" }}>keyboard_arrow_left</i>
                                    </span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" id="slide" href="#slidebuttom" role="button" data-bs-slide="next">
                                    <span aria-hidden="true">
                                        <i className="material-icons" style={{ fontSize: '46px', color: "black" }}>keyboard_arrow_right</i>
                                    </span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* end of 3rd carousel */}

                <div className="container-fluid" style={{ marginTop: "10px" }}>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img" style={{ height: "260px" }} src={card4} alt="My Img" srcSet="" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img" style={{ height: "260px" }} src={card5} alt="My Img" srcSet="" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img" style={{ height: "260px" }} src={card6} alt="My Img" srcSet="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* end of  2nd Cards  */}

                <div className="container-fluid" style={{ marginTop: "15px", backgroundColor: "rgb(255,255,255)" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header fs-4 fw-bold">
                                    Discounts for You
                    </div>
                            </div>
                            <div id="crousel4" className="carousel slide" data-bs-ride="carousel" data-bs-animation="dragX">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">

                                        <div className="row text-center">
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img1} alt="My Img" srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Headphone</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min
                                                    50% Off</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Explore Now!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img2} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Men's Footwear</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 50%
                                                    Off</a></p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Discover now!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img3} alt="My Img" srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Mobile Cables</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 50%
                                                    Off</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Shop Now!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img4} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Office Study Table</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 30%
                                                    Off</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Grab Now!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img5} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Men's T-shirts</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 70%
                                                    Off</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Great Savings!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img6} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Suitcases</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 60%
                                                    Off</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Grab Now!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row text-center">
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img7} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Electric Jug(heater)</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 40%
                                                    Off</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Hurry,Don't Miss
                                                    Out!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img8} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Cycles</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 20%
                                                    Off </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Explore Now!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img9} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Toys</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 40%
                                                    Off </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Shop Now!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img10} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Kitchen Knives</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 40%
                                                    Off </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Buy Now!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img11} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Pollution Masks</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 80%
                                                    Off </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Great Savings!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel3img12} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Key Chains</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 60%
                                                    Off </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Hurry,Don'</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <a className="carousel-control-prev" id="slide" href="#crousel4" role="button" data-bs-slide="prev">
                                    <span aria-hidden="true">
                                        <i className="material-icons" style={{ fontSize: '46px', color: 'black' }}>keyboard_arrow_left</i>
                                    </span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" id="slide" href="#crousel4" role="button" data-bs-slide="next">
                                    <span aria-hidden="true">
                                        <i className="material-icons" style={{ fontSize: '46px', color: 'black' }}>keyboard_arrow_right</i>
                                    </span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* end of 4th carousel */}

                <div className="container-fluid" style={{ marginTop: "15px", backgroundColor: "rgb(255,255,255)" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="card ">
                                <div className="card-header ">
                                    <h5 className="card-title fs-4 fw-bold ">Furniture Bestsellers</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">From $199</h6>
                                    <span className="btn btn-primary float-end " style={{ marginTop: '-50px' }}> View ALL</span>
                                </div>
                            </div>
                            <div id="crousel5" className="carousel slide" data-bs-ride="carousel" data-bs-animation="dragX">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">

                                        <div className="row text-center">
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="card-img-top" id="Cardimg" src={crousel4img1} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Aquarium Tank</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From
                                                    $299</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Flat,Round,Cube &
                                                    more</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel4img2} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Hammock And Swings</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From
                                                    $199</a></p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Trendy
                                                    Collection</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel4img3} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Stools</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From
                                                    $199</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Multi Purpose</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel4img4} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Inflatable Sofas</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 50%
                                                    Off</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Furn Central &
                                                    more</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel4img5} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Recliner</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From
                                                    $4999</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Bantia,RoyalOak &
                                                    more</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel4img6} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Swings</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min $3000
                                                    Off</a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Nylon,Cotton &
                                                    More</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row text-center">
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel4img7} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Cabinet And Drawer</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $199
                                                </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">New Collection</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel4img8} alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Shoe Racks</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">From $149
                                                </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Nilkamal,Ebee &
                                                    more</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src="IMAGES/3rd C & C-C9.jpeg" alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Toys</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 40%
                                                    Off </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Shop Now!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src="IMAGES/3rd C & C-C10.jpeg" alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Kitchen Knives</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 40%
                                                    Off </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Buy Now!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src="IMAGES/3rd C & C-C11.jpeg" alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Pollution Masks</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 80%
                                                    Off </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Great Savings!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src="IMAGES/3rd C & C-C12.jpeg" alt="My Img" srcSet=""
                                                    />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Key Chains</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 60%
                                                    Off </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Hurry,Don'</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <a className="carousel-control-prev" id="slide" href="#crousel5" role="button" data-bs-slide="prev">
                                    <span aria-hidden="true">
                                        <i className="material-icons" style={{ fontSize: '46px', color: 'black' }}>keyboard_arrow_left</i>
                                    </span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" id="slide" href="#crousel5" role="button" data-bs-slide="next">
                                    <span aria-hidden="true">
                                        <i className="material-icons" style={{ fontSize: '46px', color: 'black' }}>keyboard_arrow_right</i>
                                    </span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* end of 5th carousel */}

                <div className="container-fluid" style={{ marginTop: "15px", backgroundColor: "rgb(255,255,255)" }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="card ">
                                <div className="card-header ">
                                    <h5 className="card-title fs-4 fw-bold ">Suggested for You</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Similar to Items You Viewed</h6>
                                    <span className="btn btn-primary float-end " style={{ marginTop: "50px" }}> View ALL</span>
                                </div>
                            </div>
                            <div id="crousel6" className="carousel slide" data-bs-ride="carousel" data-bs-animation="dragX">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">

                                        <div className="row text-center">
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top " id="Cardimg" src={crousel5img1} alt="My Img"
                                                        srcSet="" />

                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Gataih Plastic Knife Set of 6 <br />pics Steel
                                                Knife Set</h5>
                                                        <p className="card-text badge alert-success">4.1 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$1100</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top  " id="Cardimg" src={crousel5img2} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Hammock And Swings</h5>
                                                        <p className="card-text badge alert-success">4.2 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$1000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top " id="Cardimg" src={crousel5img3} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Stools</h5>
                                                        <p className="card-text badge alert-success">4.5 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$100</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top " id="Cardimg" src={crousel5img4} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Inflatable Sofas</h5>
                                                        <p className="card-text badge alert-success">4 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$110</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel5img5} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Recliner</h5>
                                                        <p className="card-text badge alert-success">3.9 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$90</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel5img6} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Swings</h5>
                                                        <p className="card-text badge alert-success">4.3 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$1100</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row text-center">
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel5img7} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Cabinet And Drawer</h5>
                                                        <p className="card-text badge alert-success">4.1 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel5img8} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Shoe Racks</h5>
                                                        <p className="card-text badge alert-success">4.1 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$100</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel5img9} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Toys</h5>
                                                        <p className="card-text badge alert-success">4.1 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$110</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel5img10} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Kitchen Knives</h5>
                                                        <p className="card-text badge alert-success">4.4 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$110</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel5img11} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Pollution Masks</h5>
                                                        <p className=""><a className="card-link text-success" href="HOMEPAGELINK">Min 80%
                                                    Off </a>
                                                        </p>
                                                        <p><a href="homepage" className="card-link text-secondary lh-1">Great Savings!</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="card">
                                                    <img className="  card-img-top" id="Cardimg" src={crousel5img12} alt="My Img"
                                                        srcSet="" />
                                                    <div className="card-body lh-1">
                                                        <h5 className="card-title">Key Chains</h5>
                                                        <p className="card-text badge alert-success">4.6 * <span></span></p>

                                                        <p className="card-text text-secondary lh-1">$150</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <a className="carousel-control-prev" id="slide" href="crousel6" role="button" data-bs-slide="prev">
                                    <span aria-hidden="true">
                                        <i className="material-icons" style={{ fontSize: '46px', color: 'black' }}>keyboard_arrow_left</i>
                                    </span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" id="slide" href="crousel6" role="button" data-bs-slide="next">
                                    <span aria-hidden="true">
                                        <i className="material-icons" style={{ fontSize: '46px', color: 'black' }}>keyboard_arrow_right</i>
                                    </span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* end of 6th carousel  */}

                <div className="container-fluid" style={{ marginTop: "45px" }}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><span className="text-muted">Top Stories:</span> Brand Directory</h5>
                            <p className="card-text text-muted">MOST SEARCHED FOR ON FLIPKART: <a className="text-secondary" href="HOMEPAGELINK"
                                style={{ textDecoration: 'none', fontSize: "14px" }}>Flipkart Plus | Flipkart Super Coin | Flipkart
                                COVID-19 Insurance | Flipkart Help Centre | Flipkart Track Orders | Flipkart Manage Orders |
                                Flipkart Return Orders | Flipkart Gift Cards Store | MAX Fashion Store | Super Fan Show | Fake
                                or Not Show | Snapchat Spectacles | Sarees | Flipkart Axis Bank Credit Card | Hand Sanitizer |
                                Realme Band | Huawei gt 2e Smart Watch | 5G Mobiles | Flipkart Videos | Flipkart Pay Later |
                                iQOOO 3 | Vaporizer | Nebulizers | Hand Wash | Pollution Masks | Huawei Band 4 | Realme 5i |
                                Realme Buds Air | Nokia 55 Inch TV | Realme X2 PRO | Noise Colorfit Pro 2 Smartwatch | Unicorn
                                Toys | Nokia Pure Book | Redmi 8Honor 20i | OPPO K1 | Realme 5 | Realme 5 Pro | Nokia Pure Book
                                Laptop Store | Flipkart Axis Bank Credit Card | Redmi K20Pro | Realme Watch S | Realme Watch S
                                Pro | Realme 3i | Realme X | Phantom 9 | Redmi 7A | Redmi Note 7S | BOSS SaleEarrings | Mens
                                Watches | Silver Coins3m
                                Masks | Jewellery | Watches | Gold Coin | Mangalsutra | n95 masks | Sunglasses | Mi Sunglasses |
                                Backpacks | Boat
                        Trimmer | Revlon Hair Dryer | Decathlon Fashion Store <br />
                                <span className="card-text text-muted">MOBILES:</span> iPhone 12 64GB | iPhone 12 Pro 512GB | iPhone
                        12 128GB | Vivo Y91i | Vivo Y11 | Vivo Y15 | Vivo Y50 | Vivo
                        Y12 | Reno2 F | Oppo A12 | Oppo F15 | Oppo A31 | Samsung A71 | Samsung A51 | Samsung A31 |
                        Realme X2 | Realme 5 | Infinix Hot
                        8 | iPhone 11 | iPhone 11 Pro | iPhone 11 Pro Max | Mobile Offers | iphone x | iphone 8 | iphone
                        7 | iphone 6 | Redmi 5A | 4G
                        Mobile | Nokia Mobile | Samsung Mobile | iphone | Oppo Mobile | Vivo Mobile <br />
                                <span className="card-text text-muted">CAMERA:</span> GoPro Action Camera | Nikon Camera | Canon
                        Camera | Sony Camera | Canon DSLR | Nikon DSLR <br />
                                <span className="card-text text-muted"> LAPTOPS:</span> Microsoft Surface Go Pentium Gold
                        64GB | Microsoft Surface Go Pentium 128GB | Branded
                        Laptops | Apple Laptops | Acer Laptops | Lenovo Laptops | Dell Laptops | Asus Laptops | HP
                        Laptops | Gaming Laptops2
                        in 1 Laptops | Business Laptops <br />
                                <span className="card-text text-muted">TVS:</span> OnePlus TVs | Realme SLED 4K Smart TVs | MI 43
                        Inch 4K TV | MI 40 Inch TV | Mi 65 Inch TV | Samsung 32
                        Smart TV | LG TVTV | Sony TV | Samsung TV | Mi 49 Inch Smart TV | Android Television | Iffalcon
                        Tv | Mi TV <br />
                                <span className="card-text text-muted">LARGE APPLIANCES:</span> Voltas ACH | itachi AC | Lloyd AC |
                        Blue
                        Star AC | Daikin AC | LG AC | Samsung Refrigerators | Haier
                        Refrigerator | Whirlpool Refrigerator <br />
                                <span className="card-text text-muted">CLOTHING:</span> Men Shirts | Men T-Shirts | Jeans | Raincoat
                        | Men
                        Suits | Men Trousers | Mens
                        Blazers | Saree | Dresses | Skirts | Designer Salwar Suits | Bra | Designer Kurtis | Men Kurta |
                        Gym Wear | Party
                        Dresses | Palazzo Suits | Gloves | Nighty | Maxi Dresses | AnarkaliIndo Western Dress | Gowns |
                        Culottes | Sherwani | Girls
                        Clothes | Salwar Suits | Tops | Lehenga | Dress Materials | Kurtis | Designer Sarees | Summer
                        Dresses | Leggings | Designer
                        Blouses | Kids Clothing | Blouse Designs | Banarasi Sarees | Silk Sarees | Cotton Sarees |
                        Shorts | Blouse | Long
                        Skirts | Palazzo | Winter Jackets | Joggers | Mini Dresses | Night Suits | Banarsi Suit |
                        Innerwear | Sports
                        WearCap | Chanderi Sarees | Linen Sarees | Paithani Sarees | Panties | Sharara Suits | Shrugs |
                        Salwar | Ruffle
                        Sarees | Bikini | Pajamas | Dhoti Kurta | Manyavar Kurtas | Jackets | Western Wear | Levis
                        Jackets | Sleepwear | Shawls | Cardigans | Pullover | Stoles | Denim Jackets | Leather Jackets |
                        Clothing | Kids
                        Clothing | Winter Wear | Scarves | Sports Jackets | Georgette Sarees | Ethnic WearBriefs &
                        Trunks | Sweatshirts | Home Wear Dress | Sweaters | Kids Jackets | Kids Sweaters | Kids
                        Sweatshirts | Kids
                        Thermals | Infant Winter Wear | Kids Winter Wear <br />
                                <span className="card-text text-muted">FOOTWEAR:</span> Shoes | Adidas Shoes | Reebok Shoes | Nike
                        Shoes | Puma
                        ShoesBootsBata ShoesWoodland ShoesSkechers
                        Shoes | Sneakers | Womens Boots | Sports Shoes | Loafers | Sandals | Lotto Sports Shoes | Casual
                        Shoes| Womens Skechers
                        Shoes | Asics Sports Shoes | Formal Shoes | School Shoes <br />
                                <span className="card-text text-muted">GROCERIES:</span> PhonePe Grocery Voucher | Hand Wash | Sugar
                        |
                        Jaggery Salts | Rice | Masala & Spices | Dal |
                        Pulses | AttaCookies | Noodles | Ghee | Dry Fruits | Toor Dal | Olive Oil | Soap | Cashew Nuts |
                        Sunflower Oil | EggsToilet
                        Cleaner | Harpic Toilet Cleaner | Dettol Soap | Mustard Oil | Biscuits | Cheese | Patanjali Atta
                        | Fortune
                        Oil | Aashirvaad Atta | Butter | Amul Milk | Juices | Tata Tea | Grocery Store | Grocery
                        Essential
                        Store | Muesli | Breakfast Cereal | Hand Wash | Hand Sanitizer | Lizol Floor
                        Cleaner | Detergents | Chips | Tea | Milk | Chocolates | Soft Drinks | Rava | Coffee | Sona
                        Masoori Rice | Sugar | Colgate
                        Toothpaste | Shampoo | Almonds | Moong Dal | Instant Coffee | Parle Namkeen <br />
                                <span className="card-text text-muted">BEST SELLING ON FLIPKART:</span> Samsung Galaxy Tab
                        | S7+Books | Toy Store | Candles | Helmets | Wall Clocks | Baby
                        Food | Chocolates | Cycles | Calculators | Lipsticks | Fastrack Watches | Wallets | Earrings |
                        Gold Coins | Handbags <br />
                                <span className="card-text text-muted">FURNITURE:</span> Furniture | Sofas | Beds | Dining
                        sets | Wardrobes | Mattresses | TV Units | Tables | Chairs | Shelves | Bean
                        Bags | Red Sofa | White Sofa | Green Sofa | Black Sofa | Brown Sofa</a> </p>

                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Flipkart: The One-stop
                    Shopping Destination</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>E-commerce is revolutionizing the way we
                            all shop in India. Why do you want to hop
                            from one store to another in search of the latest phone when you can find it on the Internet in a
                            single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending
                            electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples
                            like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables,
                            and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder
                            juicers and other time-saving kitchen and small appliances; from home furnishings like cushion
                            covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name
                            it, and you can stay assured about finding them all here. For those of you with erratic working
                            hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning.
                    This e-commerce never shuts down. <br /><br />

                                                                                                                                                                                                                                                                                                                                                                                        What's more, with our year-round shopping festivals and events, our prices are irresistible. We're
                                                                                                                                                                                                                                                                                                                                                                                        sure you'll find yourself picking up more than what you had in mind. If you are wondering why you
                                                                                                                                                                                                                                                                                                                                                                                        should shop from Flipkart when there are multiple options available to you, well, the below will
                    answer your question.</p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: 'medium' }}>
                                Flipkart Plus</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>A world of limitless possibilities awaits
                            you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at
                            zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100
                            rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2
                            supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and
                            priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when
                    you shop more! <br /><br />
                                                                                                                                                                                                                                                                                                                                                                                                What's more, you can even use the Flipkart supercoins for a number of exciting services, like: <br />
                                                                                                                                                                                                                                                                                                                                                                                                    An annual Zomato Gold membership <br />
                                                                                                                                                                                                                                                                                                                                                                                                        An annual Hotstar Premium membership <br />
                                                                                                                                                                                                                                                                                                                                                                                                            6 months Gaana plus subscription <br />
                                                                                                                                                                                                                                                                                                                                                                                                                Rupees 550 instant discount on flights on ixigo <br />
                                                                                                                                                                                                                                                                                                                                                                                                                    Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>EMI on Debit Cards</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>Did you know debit card holders account
                            for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling
                            EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart
                            introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry
                            about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State
                            Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions
                            apply.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>No Cost EMI</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>In an attempt to make high-end products
                            accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out
                            any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture,
                            electronics and watches, you can now shop without burning a hole in your pocket. If you've been
                            eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP!
                            Terms and conditions apply.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Mobile Exchange Offers</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>Get an instant discount on the phone that
                            you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate
                            the value of your old phone, provided it is in a working condition without damage to the screen. If
                            a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the
                            product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms
                            and conditions apply.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>What Can You Buy From
                    Flipkart?</h5>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Mobile Phones</h5>

                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>From budget phones to state-of-the-art
                            smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller
                            screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie
                            cameras or just large internal space, we take care of all the essentials. Shop from top brands in
                            the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured,
                            you're buying from only the most reliable names in the market. What's more, with Flipkart's Complete
                            Mobile Protection Plan, you will never again find the need to run around service centres. This plan
                            entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken
                            screens, liquid damage to phone, hardware and software glitches, and replacements - the Flipkart
                            Complete Mobile Protection covers a comprehensive range of post-purchase problems, with door-to-door
                            services.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Electronic Devices and
                    Accessories</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>When it comes to laptops, we are not far
                            behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle,
                            screen size and many other criterias for personalized results in a flash. All you students out
                            there, confused about what laptop to get? Our Back To College Store segregates laptops purpose wise
                            (gaming, browsing and research, project work, entertainment, design, multitasking) with
                            recommendations from top brands and industry experts, facilitating a shopping experience that is
                    quicker and simpler. <br /> <br />
                    Photography lovers, you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever
                    reliable point-and-shoot cameras, millennial favourite instant cameras or action cameras for
                    adventure junkies: our range of cameras is as much for beginners as it is for professionals. Canon,
                    Nikon, GoPro, Sony, and Fujifilm are some big names you'll find in our store. Photography lovers,
                    you couldn't land at a better page than ours. Cutting-edge DSLR cameras, ever reliable
                    point-and-shoot cameras, millennial favourite instant cameras or action cameras for adventure
                    junkies: our range of cameras is as much for beginners as it is for professionals. Canon, Nikon,
                    GoPro, Sony, and Fujifilm are some big names you'll find in our store. <br /> <br />
                        Turn your home into a theatre with a stunning surround sound system. Choose from our elaborate range
                        of Sony home theatres, JBL soundbars and Philips tower speakers for an experience to remember.
                    <br /><br />
                            How about jazzing up your phone with our quirky designer cases and covers? Our wide-ranging mobile
                            accessories starting from headphones, power banks, memory cards, mobile chargers, to selfie sticks
                            can prove to be ideal travel companions for you and your phone; never again worry about running out
                            of charge or memory on your next vacation.
                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Large Appliances</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>Sleek TVs, power-saving refrigerators,
                            rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under
                            one roof. Our Dependable TV and Appliance Store ensures zero transit damage, with a replacement
                            guarantee if anything goes wrong; delivery and installation as per your convenience and a double
                            warranty (Official Brand Warranty along with an extended Flipkart Warranty) - rest assured, value
                            for money is what is promised and delivered. Shop from market leaders in the country like Samsung,
                            LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and Hitachi among many others.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Small Home Appliances</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>Find handy and practical home appliances
                            designed to make your life simpler: electric kettles, OTGs, microwave ovens, sandwich makers, hand
                            blenders, coffee makers, and many more other time-saving appliances that are truly crafted for a
                            quicker lifestyle. Live life king size with these appliances at home.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Lifestyle</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>Flipkart, 'India ka Fashion Capital', is
                            your one-stop fashion destination for anything and everything you need to look good. Our exhaustive
                            range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and
                            artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off
                            your feet. Shop from crowd favourites like Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma,
                            Revlon, Mac, and Sephora among dozens of other top-of-the-ladder names. From summer staple maxi
                            dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you
                            can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi,
                            and Denizen, to name a few, for carefully curated designs that are the talk of the town. Get ready
                            to be spoiled for choice.Festivals, office get-togethers, weddings, brunches, or nightwear -
                            Flipkart will have your back each time.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Home and Furniture</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>Moving to a new place is never easy,
                            especially if you're buying new furniture. Beds, sofa sets, dining tables, wardrobes, and TV units -
                            it's not easy to set up everything again. With the hundreds of options thrown at you, the ride could
                            be overwhelming. What place is reliable, what furniture will stand the test of time? These are
                            questions you must ask before you choose a store. Well, our Durability Certified Furniture Store has
                            not only curated a range of furniture keeping in mind the modern Indian consumer but furniture that
                            comes with a lab certification, ensuring they last you for up to 10 years. Yes, all our furniture
                            has gone through 35 stability and load tests so that you receive only the best-quality furniture. Be
                            FurniSure, always. Names to look out for are Nilkamal, Godrej Interio, Urban Ladder, HomeTown,
                    Durian and Perfect Homes. <br /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                        You may have your furniture all set up, but they could end up looking flat and incomplete without
                                                                                                                                                                                                                                                                                                                                                                                                                                        complementary decor. Curtains, cushion covers, bed sheets, wall shelves, paintings, floor lamps -
                                                                                                                                                                                                                                                                                                                                                                                                                                        find everything that turns a house to an inviting home under one roof at Flipkart.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Baby and Kids</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>Your kids deserve only the best. From
                            bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will
                            find everything you need to set sail on a smooth parenting journey with the help of our baby care
                            collection. When it comes to safety, hygiene and comfort, you can rely on us without a second
                            thought. Huggies, Pampers, MamyPoko, and Johnson & Johnson: we host only the most-trusted names in
                            the business for your baby.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Books, Sports and Games</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>Work hard and no play? We don't believe in
                            that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling
                            English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and
                            sports gadgets and equipment bound to inspire you to get moving.

                </p>
                            <h5 className="card-title " style={{ color: 'rgb(135,135,135)', fontSize: "medium" }}>Grocery/Supermart</h5>
                            <p className="card-text font-weight-light" style={{ fontSize: "13px" }}>Launching into the grocery vertical,
                            Flipkart introduces Supermart that is out to bring everyday essentials close to you. From pulses,
                            spices, dairy, personal and sanitary care, breakfast essentials, health drinks, spreads, ready to
                            cook, grooming to cleaning agents, we are happy to present everything you need to run a house. Now
                            buy Grocery products for as low as 1 Rupee only - our 1 Rupee Store presents new products every day
                            for a nominal price of 1 Rupee only. Terms and conditions apply.

                </p>




                        </div>
                    </div>
                </div>

                {/* end of footer sub-footer  */}
                <div className="container-fluid" >

                    <div className="card-body bg-dark text-white d-flex justify-content-around flex-wrap">
                        <div>
                            <h5 className="card-title" id="title">About</h5>
                            <ul className="card-body">
                                <li><a href="homepage" className="card-link ">Contact Us</a></li>
                                <li> <a href="homepage" className="card-link ">About Us</a></li>
                                <li> <a href="homepage" className="card-link ">Careers</a></li>
                                <li><a href="homepage" className="card-link ">Flipkart Stories</a></li>
                                <li> <a href="homepage" className="card-link ">Press</a></li>
                                <li> <a href="homepage" className="card-link ">Flipkart Wholesale</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="card-title" id="title">Help</h5>
                            <ul className="card-body">
                                <li><a href="homepage" className="card-link ">Payment</a></li>
                                <li> <a href="homepage" className="card-link ">Shipping</a></li>
                                <li> <a href="homepage" className="card-link ">Cancellation & Return</a></li>
                                <li> <a href="homepage" className="card-link ">FAQ</a></li>
                                <li> <a href="homepage" className="card-link ">Report Infringement</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="card-title" id="title">Policy</h5>
                            <ul className="card-body">
                                <li><a href="homepage" className="card-link ">Return Policy</a></li>
                                <li> <a href="homepage" className="card-link ">Term Of Use</a></li>
                                <li> <a href="homepage" className="card-link ">Security</a></li>
                                <li><a href="homepage" className="card-link ">Privacy</a></li>
                                <li> <a href="homepage" className="card-link ">Sitemap</a></li>
                                <li> <a href="homepage" className="card-link ">EPR Compliance</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="card-title" id="title">Social</h5>
                            <ul className="card-body">
                                <li><a href="homepage" className="card-link ">Facebook</a></li>
                                <li> <a href="homepage" className="card-link ">Twitter</a></li>
                                <li> <a href="homepage" className="card-link ">Youtube</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="card-title" id="title">Mail Us:</h5>
                            <ul className="card-body">
                                <li className="card-text" style={{ fontSize: "12px" }}>Flipkart Internet Private Limited,<br />Buildings
                        Alyssa, Begonia & <br />Clove
                        Embassy Tech Village, <br />Outer Ring Road, Devarabeesanahalli Village, <br />Bengaluru,
                        560103,<br />
                     Karnataka, India</li>

                            </ul>
                        </div>
                        <div>
                            <h5 className="card-title" id="title">Registered Office Address:</h5>
                            <ul className="card-body">
                                <li className="card-text" style={{ fontSize: "12px" }}>Flipkart Internet Private Limited,<br />Buildings
                        Alyssa, Begonia & <br />Clove
                        Embassy Tech Village, <br />Outer Ring Road, Devarabeesanahalli Village, <br />Bengaluru,
                        560103,<br />
                    Karnataka, India <br />CIN : U51109KA2012PTC066107 <br />Telephone: <a className="card-link" href="HOME[AGELINK"
                                        style={{ color: "royalblue" }}>1800 202 9898</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-around flex-wrap" style={{ backgroundColor: 'Black' }}>
                        <div style={{ color: "white", listStyleType: 'none', fontSize: "14px" }}>

                            <i style={{ fontSize: '20px', color: 'sandybrown' }} className='fas'>&#xf290;</i>
                Sell on Flipkart
            </div>
                        <div style={{ color: "white", listStyleType: 'none', fontSize: "14px" }}>

                            <i style={{ fontSize: '20px', color: 'sandybrown' }} className='fas'>&#xf005;</i>
                Advertise
            </div>
                        <div style={{ color: "white", listStyleType: 'none', fontSize: "14px" }}>

                            <i style={{ fontSize: '20px', color: 'sandybrown' }} className='far'>&#xf2c2;</i>
                Gift Cards
            </div>
                        <div style={{ color: "white", listStyleType: 'none', fontSize: "14px" }}>

                            <i style={{ fontSize: '20px', color: 'sandybrown' }} className='fas'>&#xf059;</i>
                Help Center
            </div>
                        <div style={{ color: "white", listStyleType: 'none', fontSize: "14px" }}>


                            © 2007-2020 Flipkart.com

            </div>
                        <div style={{ color: 'white', listStyleType: "none" }}>

                            <i style={{ fontSize: '25px' }} className='fab'>&#xf1f0;</i>
                            <i style={{ fontSize: '25px' }} className='fab'>&#xf1f1;</i>
                            <i style={{ fontSize: '25px' }} className='far'>&#xf09d;</i>
                            <i style={{ fontSize: '25px' }} className='fab'>&#xf1f0;</i>
                            <i style={{ fontSize: '25px' }} className='fab'>&#xf1f1;</i>
                            <i style={{ fontSize: '25px' }} className='far'>&#xf09d;</i>
                            <i style={{ fontSize: '25px' }} className='fab'>&#xf1f0;</i>
                            <i style={{ fontSize: '25px' }} className='fab'>&#xf1f1;</i>
                            <i style={{ fontSize: '25px' }} className='far'>&#xf09d;</i>

                        </div>
                    </div>
                </div>

            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        MyMobilesdata: state.Mobiles
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       addpost:(id) =>{
           dispatch({
               type:'ADD_POST',id:id
           })
       }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
