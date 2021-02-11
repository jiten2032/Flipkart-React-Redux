import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SubNavbar extends Component {
    render() {
        return (
            <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: "rgb(255,255,255)" }}>
                    <div className="container-fluid">
                        <div id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/Mobiles"  id="hover" className="nav-link" >Mobiles</Link>
                                </li>
                                <li className="nav-item">
                                    <a id="hover" className="nav-link" href="homepage">Groceryes</a>
                                </li>

                                <li className="nav-item dropdown menu-area">
                                    <a className="nav-link dropdown-toggle " href="homepage" id="hover" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Electronics
                                        </a>

                                    <div className="dropdown-menu mega-area" aria-labelledby="navbarDropdownMenuLink">

                                        <div className="row justify-content-center">

                                            <div className="col-sm-6 col-lg-2">
                                                <h5 className="">Mobiles</h5>
                                                <a href="homepage" className="dropdown-item">MI</a>
                                                <a href="homepage" className="dropdown-item">Real Me</a>
                                                <a href="homepage" className="dropdown-item">Samsung</a>
                                                <a href="homepage" className="dropdown-item">Infinix</a>
                                                <a href="homepage" className="dropdown-item">Oppo</a>
                                                <a href="homepage" className="dropdown-item">Apple</a>
                                                <a href="homepage" className="dropdown-item">Vivo</a>
                                                <a href="homepage" className="dropdown-item">Honour</a>
                                                <a href="homepage" className="dropdown-item">Asus</a>
                                                <a href="homepage" className="dropdown-item">Poco X2</a>
                                                <a href="homepage" className="dropdown-item">Real Me Narzo 10</a>
                                                <a href="homepage" className="dropdown-item">Infinity hot 9</a>
                                                <a href="homepage" className="dropdown-item">IQOO</a>
                                                <a href="homepage" className="dropdown-item">Iphone SE</a>
                                                <a href="homepage" className="dropdown-item">Motorola razr</a>
                                                <a href="homepage" className="dropdown-item">Real Me Narzo 10a</a>
                                                <a href="homepage" className="dropdown-item">motorola g8 power lite</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Mobile Accessories</h5>
                                                <a href="homepage" className="dropdown-item">Mobile Case</a>
                                                <a href="homepage" className="dropdown-item">Headphone & Headsets</a>
                                                <a href="homepage" className="dropdown-item">Power Banks</a>
                                                <a href="homepage" className="dropdown-item">Screenguards</a>
                                                <a href="homepage" className="dropdown-item">Memory Cards</a>
                                                <a href="homepage" className="dropdown-item">Smart Headphones</a>
                                                <a href="homepage" className="dropdown-item">Mobile Cables</a>
                                                <a href="homepage" className="dropdown-item">Mobile Chargers</a>
                                                <a href="homepage" className="dropdown-item">Memory Holders</a>
                                                <h5>Smart Wearable Tech</h5>
                                                <a href="homepage" className="dropdown-item">Smart Watches</a>
                                                <a href="homepage" className="dropdown-item">Smart Glasses(VR)</a>
                                                <a href="homepage" className="dropdown-item">Smart Bands</a>
                                                <h5>Health Care Appliances</h5>
                                                <a href="homepage" className="dropdown-item">BP Monitors</a>
                                                <a href="homepage" className="dropdown-item">Weiaghing Scales</a>

                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Laptops</h5>
                                                <a href="homepage" className="dropdown-item">Gaming Laptops</a>
                                                <h5>Desktop PCs</h5>
                                                <h5>Gaming & Accessories</h5>
                                                <h5>Computer Accessories</h5>
                                                <a href="homepage" className="dropdown-item">External Hardisks</a>
                                                <a href="homepage" className="dropdown-item">Pendrives</a>
                                                <a href="homepage" className="dropdown-item">Laptop Screens & Decals</a>
                                                <a href="homepage" className="dropdown-item">Laptop Bags </a>
                                                <a href="homepage" className="dropdown-item">Mouse</a>
                                                <h5>Computer Peripherals</h5>
                                                <a href="homepage" className="dropdown-item">Printers & Ink Catridges</a>
                                                <a href="homepage" className="dropdown-item">Monitors</a>
                                                <h5>Tablets</h5>
                                                <a href="homepage" className="dropdown-item">Apple Ipads</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <a href="homepage" className="dropdown-item">Televisions</a>
                                                <h5>Speakers</h5>
                                                <a href="homepage" className="dropdown-item">Home Audio Speakers</a>
                                                <a href="homepage" className="dropdown-item">Home Theaters</a>
                                                <a href="homepage" className="dropdown-item">Soundbars</a>
                                                <a href="homepage" className="dropdown-item">Blutooth Speakers</a>
                                                <a href="homepage" className="dropdown-item">DTH Setop Box</a>
                                                <h5>Smart Home Automation</h5>
                                                <a href="homepage" className="dropdown-item">Google Nest</a>
                                                <h5>Camera</h5>
                                                <a href="homepage" className="dropdown-item">DSLR & Mirrorless</a>
                                                <a href="homepage" className="dropdown-item">Compact & Bridge Cameras</a>
                                                <a href="homepage" className="dropdown-item">Sports & Action</a>
                                                <h5>Camera Accessories</h5>
                                                <a href="homepage" className="dropdown-item">Lens</a>
                                                <a href="homepage" className="dropdown-item">Tripods</a>
                                                <h5>Network Components</h5>
                                                <a href="homepage" className="dropdown-item">Routors</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Featured</h5>
                                                <a href="homepage" className="dropdown-item">Google Accessories Store</a>
                                                <a href="homepage" className="dropdown-item">Laptops on Buyback Guarentees</a>
                                                <a href="homepage" className="dropdown-item">Flipkart SmartBuy</a>
                                                <a href="homepage" className="dropdown-item">Li-Polymer Poer Banks</a>
                                                <a href="homepage" className="dropdown-item">Sony PS4 Pro & Slim</a>
                                                <a href="homepage" className="dropdown-item">Apple Products</a>
                                                <a href="homepage" className="dropdown-item">Microsoft Store</a>
                                                <a href="homepage" className="dropdown-item">Lenove Phab Series</a>
                                                <a href="homepage" className="dropdown-item">JBL Speakers</a>
                                                <a href="homepage" className="dropdown-item">Smartphones on Buyback <br /> Guarentee</a>
                                                <a href="homepage" className="dropdown-item">Phillips</a>
                                                <a href="homepage" className="dropdown-item">Dr. Morepen</a>
                                                <a href="homepage" className="dropdown-item">Complete Mobile Protection</a>
                                                <a href="homepage" className="dropdown-item">Mobile No Cost EMI</a>
                                                <a href="homepage" className="dropdown-item">Huawei Watch Gt 2e Smart Watch</a>
                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="nav-item dropdown menu-area">
                                    <a className="nav-link dropdown-toggle " href="homepage" id="hover" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        TV & Appliances
                        </a>

                                    <div className="dropdown-menu mega-area" aria-labelledby="navbarDropdownMenuLink">

                                        <div className="row  ">

                                            <div className="col-sm-6 col-lg-2">
                                                <h5 className="">Televesion</h5>
                                                <h5 className="">New Lunches</h5>
                                                <h5 className="">Smart & Ultra HD</h5>
                                                <h5 className="">Top Brands</h5>
                                                <a href="homepage" className="dropdown-item">MI</a>
                                                <a href="homepage" className="dropdown-item">Vu</a>
                                                <a href="homepage" className="dropdown-item">Thompson</a>
                                                <a href="homepage" className="dropdown-item">iFFALCON by TCL</a>
                                                <a href="homepage" className="dropdown-item">Nokia</a>
                                                <a href="homepage" className="dropdown-item">LG</a>
                                                <a href="homepage" className="dropdown-item">Realme</a>
                                                <a href="homepage" className="dropdown-item">Motorola</a>
                                                <h5 className="">Shop by Screen Size</h5>
                                                <a href="homepage" className="dropdown-item">24 & below</a>
                                                <a href="homepage" className="dropdown-item">28 - 32</a>
                                                <a href="homepage" className="dropdown-item">39 - 43</a>
                                                <a href="homepage" className="dropdown-item">48 - 55</a>
                                                <a href="homepage" className="dropdown-item">60 & Above</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Washing Machines</h5>
                                                <a href="homepage" className="dropdown-item">Fully Automated Front Load</a>
                                                <a href="homepage" className="dropdown-item">Semi Automatic Top Load</a>
                                                <a href="homepage" className="dropdown-item">Fully Automated Top Load</a>
                                                <h5>Air Conditioners</h5>
                                                <a href="homepage" className="dropdown-item">Inveter AC</a>
                                                <a href="homepage" className="dropdown-item">Split ACs</a>
                                                <a href="homepage" className="dropdown-item">Window ACs</a>
                                                <h5>Shop by Brands</h5>
                                                <a href="homepage" className="dropdown-item">LG</a>
                                                <a href="homepage" className="dropdown-item">Hitachi</a>
                                                <a href="homepage" className="dropdown-item">Carrier</a>
                                                <h5>Refrigerators</h5>
                                                <a href="homepage" className="dropdown-item">Single Door</a>
                                                <a href="homepage" className="dropdown-item">Double Door</a>
                                                <a href="homepage" className="dropdown-item">Triple Door</a>
                                                <a href="homepage" className="dropdown-item">Side by Side</a>
                                                <a href="homepage" className="dropdown-item">Convertible</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Kitchen Appliances</h5>
                                                <a href="homepage" className="dropdown-item">Microwave Ovens</a>
                                                <a href="homepage" className="dropdown-item">Oven Toaster Grills(OTG)</a>
                                                <a href="homepage" className="dropdown-item">Juicer/Mixer Grinder</a>
                                                <a href="homepage" className="dropdown-item">Ellectric Kettle</a>
                                                <a href="homepage" className="dropdown-item">Induction Cooktops</a>
                                                <a href="homepage" className="dropdown-item">Chimneys</a>
                                                <a href="homepage" className="dropdown-item">Hand Blenders</a>
                                                <a href="homepage" className="dropdown-item">Sandwitch Makers</a>
                                                <a href="homepage" className="dropdown-item">Pop Up Toaster</a>
                                                <a href="homepage" className="dropdown-item">Electric cooker</a>
                                                <a href="homepage" className="dropdown-item">West Grinders</a>
                                                <a href="homepage" className="dropdown-item">Food Processors</a>
                                                <a href="homepage" className="dropdown-item">Cofee Makers</a>
                                                <a href="homepage" className="dropdown-item">Dish Washer</a>
                                                <h5>Healthy Living Appliances</h5>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Small Home Appliances</h5>
                                                <a href="homepage" className="dropdown-item">Irons</a>
                                                <a href="homepage" className="dropdown-item">Water Purifiers</a>
                                                <a href="homepage" className="dropdown-item">Fans</a>
                                                <a href="homepage" className="dropdown-item">Air Coolers</a>
                                                <a href="homepage" className="dropdown-item">Inveter</a>
                                                <a href="homepage" className="dropdown-item">Vacume Cleaner</a>
                                                <a href="homepage" className="dropdown-item">Sewing Machines</a>
                                                <a href="homepage" className="dropdown-item">Voltage Stabilizers</a>
                                                <a href="homepage" className="dropdown-item">Water Geysers</a>
                                                <a href="homepage" className="dropdown-item">Immersion Rods</a>
                                                <h5>Top Brands</h5>
                                                <a href="homepage" className="dropdown-item">Livpure</a>
                                                <a href="homepage" className="dropdown-item">Philips</a>
                                                <a href="homepage" className="dropdown-item">Bajaj</a>
                                                <a href="homepage" className="dropdown-item">IFB</a>
                                                <a href="homepage" className="dropdown-item">Eureka Forbes</a>
                                                <a href="homepage" className="dropdown-item">Kaff</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Buying Guides</h5>
                                                <a href="homepage" className="dropdown-item">Televisions</a>
                                                <a href="homepage" className="dropdown-item">Washing Machines</a>
                                                <a href="homepage" className="dropdown-item">Refrigerators</a>
                                                <a href="homepage" className="dropdown-item">Air Conditioners</a>
                                                <a href="homepage" className="dropdown-item">Water Purifiers</a>
                                                <a href="homepage" className="dropdown-item">Air Purifiers</a>
                                                <a href="homepage" className="dropdown-item">Chimneys</a>
                                                <a href="homepage" className="dropdown-item">Water Geysers</a>
                                                <h5>New Lunches</h5>
                                                <a href="homepage" className="dropdown-item">Coocaa Smart TVs</a>
                                                <a href="homepage" className="dropdown-item">Nokia (55) 4K Android TV</a>
                                                <a href="homepage" className="dropdown-item">MI (32) 4a Pro Android TV</a>
                                                <a href="homepage" className="dropdown-item">MarQ (43) FHD Smart TV</a>
                                                <a href="homepage" className="dropdown-item">LG Refrigerators</a>
                                                <a href="homepage" className="dropdown-item">Thomson (40) 4K Smart TV</a>
                                                <a href="homepage" className="dropdown-item">Whirlpool Refrigerators</a>
                                                <a href="homepage" className="dropdown-item">Kodak (22) (32) LED TVs</a>
                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="nav-item dropdown menu-area">
                                    <a className="nav-link dropdown-toggle " href="homepage" id="hover" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Mens
                        </a>

                                    <div className="dropdown-menu mega-area" aria-labelledby="navbarDropdownMenuLink">

                                        <div className="row justify-content-center">

                                            <div className="col-sm-6 col-lg-2">
                                                <h5 className="">Footwear</h5>

                                                <a href="homepage" className="dropdown-item">Sports Shoes</a>
                                                <a href="homepage" className="dropdown-item">Casual Shoes</a>
                                                <a href="homepage" className="dropdown-item">Formal Shoes</a>
                                                <a href="homepage" className="dropdown-item">iFFALCON by TCL</a>
                                                <a href="homepage" className="dropdown-item">Sandals & Floaters</a>
                                                <a href="homepage" className="dropdown-item">Flip- Flops</a>
                                                <a href="homepage" className="dropdown-item">Loafers</a>
                                                <a href="homepage" className="dropdown-item">Boots</a>
                                                <a href="homepage" className="dropdown-item">Running Shoes</a>
                                                <a href="homepage" className="dropdown-item">Sneakers</a>
                                                <h5 className="">Mens Grooming</h5>
                                                <a href="homepage" className="dropdown-item">Deodrants</a>
                                                <a href="homepage" className="dropdown-item">Perfumes</a>
                                                <a href="homepage" className="dropdown-item">Beard Cares & Grooming</a>
                                                <a href="homepage" className="dropdown-item">Shaving & Aftershave</a>
                                                <a href="homepage" className="dropdown-item">Sexual Wellness</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Clothing</h5>
                                                <h5>Top Wear</h5>
                                                <a href="homepage" className="dropdown-item">T-Shirts</a>
                                                <a href="homepage" className="dropdown-item">Formal Shirts</a>
                                                <a href="homepage" className="dropdown-item">Casual Shirts</a>
                                                <h5>Bottom wear</h5>
                                                <a href="homepage" className="dropdown-item">Jeans</a>
                                                <a href="homepage" className="dropdown-item">Casual Trausers</a>
                                                <a href="homepage" className="dropdown-item">Formal Trousers</a>
                                                <a href="homepage" className="dropdown-item">Track Pants</a>
                                                <a href="homepage" className="dropdown-item">Shorts</a>
                                                <a href="homepage" className="dropdown-item">Cargos</a>
                                                <a href="homepage" className="dropdown-item">Three Fourths</a>
                                                <h5>Suits,Blazzers & Waistcoats</h5>
                                                <h5>Ties,Socks,Caps & More</h5>
                                                <h5>Fabrics</h5>

                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Winter Wear</h5>
                                                <a href="homepage" className="dropdown-item">Sweetshirts</a>
                                                <a href="homepage" className="dropdown-item">Jackets</a>
                                                <a href="homepage" className="dropdown-item">Sweater</a>
                                                <a href="homepage" className="dropdown-item">Tracksuits</a>
                                                <h5>Ethinic Wear</h5>
                                                <a href="homepage" className="dropdown-item">Kurta</a>
                                                <a href="homepage" className="dropdown-item">Ethinic Sets</a>
                                                <a href="homepage" className="dropdown-item">Dhoti</a>
                                                <a href="homepage" className="dropdown-item">Lungi</a>
                                                <h5>Innerwear & Loungewear</h5>
                                                <a href="homepage" className="dropdown-item">Brief & Trunks</a>
                                                <a href="homepage" className="dropdown-item">Vests</a>
                                                <a href="homepage" className="dropdown-item">Boxers</a>
                                                <a href="homepage" className="dropdown-item">Pyjamas and Lounge Pants</a>
                                                <a href="homepage" className="dropdown-item">Thermals</a>
                                                <a href="homepage" className="dropdown-item">Night Suits</a>
                                                <h5>Raincoats & Windcheaters</h5>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Watches</h5>
                                                <a href="homepage" className="dropdown-item">Fastrack</a>
                                                <a href="homepage" className="dropdown-item">Casio</a>
                                                <a href="homepage" className="dropdown-item">Titan</a>
                                                <a href="homepage" className="dropdown-item">Fossil</a>
                                                <a href="homepage" className="dropdown-item">Sonata</a>
                                                <h5>Accessories</h5>
                                                <a href="homepage" className="dropdown-item">Backpacks</a>
                                                <a href="homepage" className="dropdown-item">Wallets</a>
                                                <a href="homepage" className="dropdown-item">Belts</a>
                                                <a href="homepage" className="dropdown-item">Sunglases</a>
                                                <a href="homepage" className="dropdown-item">Luggage & Travel</a>
                                                <a href="homepage" className="dropdown-item">Frames</a>
                                                <a href="homepage" className="dropdown-item">Jewellery</a>
                                                <h5>Sports & Fitness Store</h5>


                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Smart Watches</h5>
                                                <h5>Smart Bands</h5>
                                                <h5>Personal Care Appliances</h5>
                                                <a href="homepage" className="dropdown-item">Trimmers</a>
                                                <a href="homepage" className="dropdown-item">Shavers</a>
                                                <a href="homepage" className="dropdown-item">Grooming Kits</a>
                                                <h5>Featured</h5>
                                                <a href="homepage" className="dropdown-item">Watches Store</a>
                                                <a href="homepage" className="dropdown-item">Footwear Club</a>
                                                <a href="homepage" className="dropdown-item">Bags & Wallet</a>
                                                <a href="homepage" className="dropdown-item">T-Shirt Store</a>
                                                <a href="homepage" className="dropdown-item">Adidas</a>
                                                <a href="homepage" className="dropdown-item">Beardo</a>
                                                <a href="homepage" className="dropdown-item">Reebok</a>
                                                <a href="homepage" className="dropdown-item">Skechers</a>
                                                <a href="homepage" className="dropdown-item">Nike</a>
                                                <a href="homepage" className="dropdown-item">LG Refrigerators</a>

                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="nav-item dropdown menu-area">
                                    <a className="nav-link dropdown-toggle " href="homepage" id="hover" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Women
                        </a>

                                    <div className="dropdown-menu mega-area" aria-labelledby="navbarDropdownMenuLink">

                                        <div className="row justify-content-center">

                                            <div className="col-sm-6 col-lg-2">
                                                <h5 className="">Footwear</h5>

                                                <a href="homepage" className="dropdown-item">Sports Shoes</a>
                                                <a href="homepage" className="dropdown-item">Casual Shoes</a>
                                                <a href="homepage" className="dropdown-item">Formal Shoes</a>
                                                <a href="homepage" className="dropdown-item">iFFALCON by TCL</a>
                                                <a href="homepage" className="dropdown-item">Sandals & Floaters</a>
                                                <a href="homepage" className="dropdown-item">Flip- Flops</a>
                                                <a href="homepage" className="dropdown-item">Loafers</a>
                                                <a href="homepage" className="dropdown-item">Boots</a>
                                                <a href="homepage" className="dropdown-item">Running Shoes</a>
                                                <a href="homepage" className="dropdown-item">Sneakers</a>
                                                <h5 className="">Mens Grooming</h5>
                                                <a href="homepage" className="dropdown-item">Deodrants</a>
                                                <a href="homepage" className="dropdown-item">Perfumes</a>
                                                <a href="homepage" className="dropdown-item">Beard Cares & Grooming</a>
                                                <a href="homepage" className="dropdown-item">Shaving & Aftershave</a>
                                                <a href="homepage" className="dropdown-item">Sexual Wellness</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Clothing</h5>
                                                <h5>Top Wear</h5>
                                                <a href="homepage" className="dropdown-item">T-Shirts</a>
                                                <a href="homepage" className="dropdown-item">Formal Shirts</a>
                                                <a href="homepage" className="dropdown-item">Casual Shirts</a>
                                                <h5>Bottom wear</h5>
                                                <a href="homepage" className="dropdown-item">Jeans</a>
                                                <a href="homepage" className="dropdown-item">Casual Trausers</a>
                                                <a href="homepage" className="dropdown-item">Formal Trousers</a>
                                                <a href="homepage" className="dropdown-item">Track Pants</a>
                                                <a href="homepage" className="dropdown-item">Shorts</a>
                                                <a href="homepage" className="dropdown-item">Cargos</a>
                                                <a href="homepage" className="dropdown-item">Three Fourths</a>
                                                <h5>Suits,Blazzers & Waistcoats</h5>
                                                <h5>Ties,Socks,Caps & More</h5>
                                                <h5>Fabrics</h5>

                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Winter Wear</h5>
                                                <a href="homepage" className="dropdown-item">Sweetshirts</a>
                                                <a href="homepage" className="dropdown-item">Jackets</a>
                                                <a href="homepage" className="dropdown-item">Sweater</a>
                                                <a href="homepage" className="dropdown-item">Tracksuits</a>
                                                <h5>Ethinic Wear</h5>
                                                <a href="homepage" className="dropdown-item">Kurta</a>
                                                <a href="homepage" className="dropdown-item">Ethinic Sets</a>
                                                <a href="homepage" className="dropdown-item">Dhoti</a>
                                                <a href="homepage" className="dropdown-item">Lungi</a>
                                                <h5>Innerwear & Loungewear</h5>
                                                <a href="homepage" className="dropdown-item">Brief & Trunks</a>
                                                <a href="homepage" className="dropdown-item">Vests</a>
                                                <a href="homepage" className="dropdown-item">Boxers</a>
                                                <a href="homepage" className="dropdown-item">Pyjamas and Lounge Pants</a>
                                                <a href="homepage" className="dropdown-item">Thermals</a>
                                                <a href="homepage" className="dropdown-item">Night Suits</a>
                                                <h5>Raincoats & Windcheaters</h5>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Watches</h5>
                                                <a href="homepage" className="dropdown-item">Fastrack</a>
                                                <a href="homepage" className="dropdown-item">Casio</a>
                                                <a href="homepage" className="dropdown-item">Titan</a>
                                                <a href="homepage" className="dropdown-item">Fossil</a>
                                                <a href="homepage" className="dropdown-item">Sonata</a>
                                                <h5>Accessories</h5>
                                                <a href="homepage" className="dropdown-item">Backpacks</a>
                                                <a href="homepage" className="dropdown-item">Wallets</a>
                                                <a href="homepage" className="dropdown-item">Belts</a>
                                                <a href="homepage" className="dropdown-item">Sunglases</a>
                                                <a href="homepage" className="dropdown-item">Luggage & Travel</a>
                                                <a href="homepage" className="dropdown-item">Frames</a>
                                                <a href="homepage" className="dropdown-item">Jewellery</a>
                                                <h5>Sports & Fitness Store</h5>


                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Smart Watches</h5>
                                                <h5>Smart Bands</h5>
                                                <h5>Personal Care Appliances</h5>
                                                <a href="homepage" className="dropdown-item">Trimmers</a>
                                                <a href="homepage" className="dropdown-item">Shavers</a>
                                                <a href="homepage" className="dropdown-item">Grooming Kits</a>
                                                <h5>Featured</h5>
                                                <a href="homepage" className="dropdown-item">Watches Store</a>
                                                <a href="homepage" className="dropdown-item">Footwear Club</a>
                                                <a href="homepage" className="dropdown-item">Bags & Wallet</a>
                                                <a href="homepage" className="dropdown-item">T-Shirt Store</a>
                                                <a href="homepage" className="dropdown-item">Adidas</a>
                                                <a href="homepage" className="dropdown-item">Beardo</a>
                                                <a href="homepage" className="dropdown-item">Reebok</a>
                                                <a href="homepage" className="dropdown-item">Skechers</a>
                                                <a href="homepage" className="dropdown-item">Nike</a>
                                                <a href="homepage" className="dropdown-item">LG Refrigerators</a>

                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="nav-item dropdown menu-area">
                                    <a className="nav-link dropdown-toggle " href="homepage" id="hover" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Baby & Kids
                        </a>

                                    <div className="dropdown-menu mega-area" aria-labelledby="navbarDropdownMenuLink">

                                        <div className="row justify-content-center">

                                            <div className="col-sm-6 col-lg-2">
                                                <h5 className="">Footwear</h5>

                                                <a href="homepage" className="dropdown-item">Sports Shoes</a>
                                                <a href="homepage" className="dropdown-item">Casual Shoes</a>
                                                <a href="homepage" className="dropdown-item">Formal Shoes</a>
                                                <a href="homepage" className="dropdown-item">iFFALCON by TCL</a>
                                                <a href="homepage" className="dropdown-item">Sandals & Floaters</a>
                                                <a href="homepage" className="dropdown-item">Flip- Flops</a>
                                                <a href="homepage" className="dropdown-item">Loafers</a>
                                                <a href="homepage" className="dropdown-item">Boots</a>
                                                <a href="homepage" className="dropdown-item">Running Shoes</a>
                                                <a href="homepage" className="dropdown-item">Sneakers</a>
                                                <h5 className="">Mens Grooming</h5>
                                                <a href="homepage" className="dropdown-item">Deodrants</a>
                                                <a href="homepage" className="dropdown-item">Perfumes</a>
                                                <a href="homepage" className="dropdown-item">Beard Cares & Grooming</a>
                                                <a href="homepage" className="dropdown-item">Shaving & Aftershave</a>
                                                <a href="homepage" className="dropdown-item">Sexual Wellness</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Clothing</h5>
                                                <h5>Top Wear</h5>
                                                <a href="homepage" className="dropdown-item">T-Shirts</a>
                                                <a href="homepage" className="dropdown-item">Formal Shirts</a>
                                                <a href="homepage" className="dropdown-item">Casual Shirts</a>
                                                <h5>Bottom wear</h5>
                                                <a href="homepage" className="dropdown-item">Jeans</a>
                                                <a href="homepage" className="dropdown-item">Casual Trausers</a>
                                                <a href="homepage" className="dropdown-item">Formal Trousers</a>
                                                <a href="homepage" className="dropdown-item">Track Pants</a>
                                                <a href="homepage" className="dropdown-item">Shorts</a>
                                                <a href="homepage" className="dropdown-item">Cargos</a>
                                                <a href="homepage" className="dropdown-item">Three Fourths</a>
                                                <h5>Suits,Blazzers & Waistcoats</h5>
                                                <h5>Ties,Socks,Caps & More</h5>
                                                <h5>Fabrics</h5>

                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Winter Wear</h5>
                                                <a href="homepage" className="dropdown-item">Sweetshirts</a>
                                                <a href="homepage" className="dropdown-item">Jackets</a>
                                                <a href="homepage" className="dropdown-item">Sweater</a>
                                                <a href="homepage" className="dropdown-item">Tracksuits</a>
                                                <h5>Ethinic Wear</h5>
                                                <a href="homepage" className="dropdown-item">Kurta</a>
                                                <a href="homepage" className="dropdown-item">Ethinic Sets</a>
                                                <a href="homepage" className="dropdown-item">Dhoti</a>
                                                <a href="homepage" className="dropdown-item">Lungi</a>
                                                <h5>Innerwear & Loungewear</h5>
                                                <a href="homepage" className="dropdown-item">Brief & Trunks</a>
                                                <a href="homepage" className="dropdown-item">Vests</a>
                                                <a href="homepage" className="dropdown-item">Boxers</a>
                                                <a href="homepage" className="dropdown-item">Pyjamas and Lounge Pants</a>
                                                <a href="homepage" className="dropdown-item">Thermals</a>
                                                <a href="homepage" className="dropdown-item">Night Suits</a>
                                                <h5>Raincoats & Windcheaters</h5>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Watches</h5>
                                                <a href="homepage" className="dropdown-item">Fastrack</a>
                                                <a href="homepage" className="dropdown-item">Casio</a>
                                                <a href="homepage" className="dropdown-item">Titan</a>
                                                <a href="homepage" className="dropdown-item">Fossil</a>
                                                <a href="homepage" className="dropdown-item">Sonata</a>
                                                <h5>Accessories</h5>
                                                <a href="homepage" className="dropdown-item">Backpacks</a>
                                                <a href="homepage" className="dropdown-item">Wallets</a>
                                                <a href="homepage" className="dropdown-item">Belts</a>
                                                <a href="homepage" className="dropdown-item">Sunglases</a>
                                                <a href="homepage" className="dropdown-item">Luggage & Travel</a>
                                                <a href="homepage" className="dropdown-item">Frames</a>
                                                <a href="homepage" className="dropdown-item">Jewellery</a>
                                                <h5>Sports & Fitness Store</h5>


                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Smart Watches</h5>
                                                <h5>Smart Bands</h5>
                                                <h5>Personal Care Appliances</h5>
                                                <a href="homepage" className="dropdown-item">Trimmers</a>
                                                <a href="homepage" className="dropdown-item">Shavers</a>
                                                <a href="homepage" className="dropdown-item">Grooming Kits</a>
                                                <h5>Featured</h5>
                                                <a href="homepage" className="dropdown-item">Watches Store</a>
                                                <a href="homepage" className="dropdown-item">Footwear Club</a>
                                                <a href="homepage" className="dropdown-item">Bags & Wallet</a>
                                                <a href="homepage" className="dropdown-item">T-Shirt Store</a>
                                                <a href="homepage" className="dropdown-item">Adidas</a>
                                                <a href="homepage" className="dropdown-item">Beardo</a>
                                                <a href="homepage" className="dropdown-item">Reebok</a>
                                                <a href="homepage" className="dropdown-item">Skechers</a>
                                                <a href="homepage" className="dropdown-item">Nike</a>
                                                <a href="homepage" className="dropdown-item">LG Refrigerators</a>

                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="nav-item dropdown menu-area">
                                    <a className="nav-link dropdown-toggle " href="homepage" id="hover" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Home & Furniture
                        </a>

                                    <div className="dropdown-menu mega-area" aria-labelledby="navbarDropdownMenuLink">

                                        <div className="row justify-content-center">

                                            <div className="col-sm-6 col-lg-2">
                                                <h5 className="">Footwear</h5>

                                                <a href="homepage" className="dropdown-item">Sports Shoes</a>
                                                <a href="homepage" className="dropdown-item">Casual Shoes</a>
                                                <a href="homepage" className="dropdown-item">Formal Shoes</a>
                                                <a href="homepage" className="dropdown-item">iFFALCON by TCL</a>
                                                <a href="homepage" className="dropdown-item">Sandals & Floaters</a>
                                                <a href="homepage" className="dropdown-item">Flip- Flops</a>
                                                <a href="homepage" className="dropdown-item">Loafers</a>
                                                <a href="homepage" className="dropdown-item">Boots</a>
                                                <a href="homepage" className="dropdown-item">Running Shoes</a>
                                                <a href="homepage" className="dropdown-item">Sneakers</a>
                                                <h5 className="">Mens Grooming</h5>
                                                <a href="homepage" className="dropdown-item">Deodrants</a>
                                                <a href="homepage" className="dropdown-item">Perfumes</a>
                                                <a href="homepage" className="dropdown-item">Beard Cares & Grooming</a>
                                                <a href="homepage" className="dropdown-item">Shaving & Aftershave</a>
                                                <a href="homepage" className="dropdown-item">Sexual Wellness</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Clothing</h5>
                                                <h5>Top Wear</h5>
                                                <a href="homepage" className="dropdown-item">T-Shirts</a>
                                                <a href="homepage" className="dropdown-item">Formal Shirts</a>
                                                <a href="homepage" className="dropdown-item">Casual Shirts</a>
                                                <h5>Bottom wear</h5>
                                                <a href="homepage" className="dropdown-item">Jeans</a>
                                                <a href="homepage" className="dropdown-item">Casual Trausers</a>
                                                <a href="homepage" className="dropdown-item">Formal Trousers</a>
                                                <a href="homepage" className="dropdown-item">Track Pants</a>
                                                <a href="homepage" className="dropdown-item">Shorts</a>
                                                <a href="homepage" className="dropdown-item">Cargos</a>
                                                <a href="homepage" className="dropdown-item">Three Fourths</a>
                                                <h5>Suits,Blazzers & Waistcoats</h5>
                                                <h5>Ties,Socks,Caps & More</h5>
                                                <h5>Fabrics</h5>

                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Winter Wear</h5>
                                                <a href="homepage" className="dropdown-item">Sweetshirts</a>
                                                <a href="homepage" className="dropdown-item">Jackets</a>
                                                <a href="homepage" className="dropdown-item">Sweater</a>
                                                <a href="homepage" className="dropdown-item">Tracksuits</a>
                                                <h5>Ethinic Wear</h5>
                                                <a href="homepage" className="dropdown-item">Kurta</a>
                                                <a href="homepage" className="dropdown-item">Ethinic Sets</a>
                                                <a href="homepage" className="dropdown-item">Dhoti</a>
                                                <a href="homepage" className="dropdown-item">Lungi</a>
                                                <h5>Innerwear & Loungewear</h5>
                                                <a href="homepage" className="dropdown-item">Brief & Trunks</a>
                                                <a href="homepage" className="dropdown-item">Vests</a>
                                                <a href="homepage" className="dropdown-item">Boxers</a>
                                                <a href="homepage" className="dropdown-item">Pyjamas and Lounge Pants</a>
                                                <a href="homepage" className="dropdown-item">Thermals</a>
                                                <a href="homepage" className="dropdown-item">Night Suits</a>
                                                <h5>Raincoats & Windcheaters</h5>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Watches</h5>
                                                <a href="homepage" className="dropdown-item">Fastrack</a>
                                                <a href="homepage" className="dropdown-item">Casio</a>
                                                <a href="homepage" className="dropdown-item">Titan</a>
                                                <a href="homepage" className="dropdown-item">Fossil</a>
                                                <a href="homepage" className="dropdown-item">Sonata</a>
                                                <h5>Accessories</h5>
                                                <a href="homepage" className="dropdown-item">Backpacks</a>
                                                <a href="homepage" className="dropdown-item">Wallets</a>
                                                <a href="homepage" className="dropdown-item">Belts</a>
                                                <a href="homepage" className="dropdown-item">Sunglases</a>
                                                <a href="homepage" className="dropdown-item">Luggage & Travel</a>
                                                <a href="homepage" className="dropdown-item">Frames</a>
                                                <a href="homepage" className="dropdown-item">Jewellery</a>
                                                <h5>Sports & Fitness Store</h5>


                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Smart Watches</h5>
                                                <h5>Smart Bands</h5>
                                                <h5>Personal Care Appliances</h5>
                                                <a href="homepage" className="dropdown-item">Trimmers</a>
                                                <a href="homepage" className="dropdown-item">Shavers</a>
                                                <a href="homepage" className="dropdown-item">Grooming Kits</a>
                                                <h5>Featured</h5>
                                                <a href="homepage" className="dropdown-item">Watches Store</a>
                                                <a href="homepage" className="dropdown-item">Footwear Club</a>
                                                <a href="homepage" className="dropdown-item">Bags & Wallet</a>
                                                <a href="homepage" className="dropdown-item">T-Shirt Store</a>
                                                <a href="homepage" className="dropdown-item">Adidas</a>
                                                <a href="homepage" className="dropdown-item">Beardo</a>
                                                <a href="homepage" className="dropdown-item">Reebok</a>
                                                <a href="homepage" className="dropdown-item">Skechers</a>
                                                <a href="homepage" className="dropdown-item">Nike</a>
                                                <a href="homepage" className="dropdown-item">LG Refrigerators</a>

                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="nav-item dropdown menu-area">
                                    <a className="nav-link dropdown-toggle " href="homepage" id="hover" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Sports,Books & More
                        </a>

                                    <div className="dropdown-menu mega-area" aria-labelledby="navbarDropdownMenuLink">

                                        <div className="row justify-content-center">

                                            <div className="col-sm-6 col-lg-2">
                                                <h5 className="">Footwear</h5>

                                                <a href="homepage" className="dropdown-item">Sports Shoes</a>
                                                <a href="homepage" className="dropdown-item">Casual Shoes</a>
                                                <a href="homepage" className="dropdown-item">Formal Shoes</a>
                                                <a href="homepage" className="dropdown-item">iFFALCON by TCL</a>
                                                <a href="homepage" className="dropdown-item">Sandals & Floaters</a>
                                                <a href="homepage" className="dropdown-item">Flip- Flops</a>
                                                <a href="homepage" className="dropdown-item">Loafers</a>
                                                <a href="homepage" className="dropdown-item">Boots</a>
                                                <a href="homepage" className="dropdown-item">Running Shoes</a>
                                                <a href="homepage" className="dropdown-item">Sneakers</a>
                                                <h5 className="">Mens Grooming</h5>
                                                <a href="homepage" className="dropdown-item">Deodrants</a>
                                                <a href="homepage" className="dropdown-item">Perfumes</a>
                                                <a href="homepage" className="dropdown-item">Beard Cares & Grooming</a>
                                                <a href="homepage" className="dropdown-item">Shaving & Aftershave</a>
                                                <a href="homepage" className="dropdown-item">Sexual Wellness</a>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Clothing</h5>
                                                <h5>Top Wear</h5>
                                                <a href="homepage" className="dropdown-item">T-Shirts</a>
                                                <a href="homepage" className="dropdown-item">Formal Shirts</a>
                                                <a href="homepage" className="dropdown-item">Casual Shirts</a>
                                                <h5>Bottom wear</h5>
                                                <a href="homepage" className="dropdown-item">Jeans</a>
                                                <a href="homepage" className="dropdown-item">Casual Trausers</a>
                                                <a href="homepage" className="dropdown-item">Formal Trousers</a>
                                                <a href="homepage" className="dropdown-item">Track Pants</a>
                                                <a href="homepage" className="dropdown-item">Shorts</a>
                                                <a href="homepage" className="dropdown-item">Cargos</a>
                                                <a href="homepage" className="dropdown-item">Three Fourths</a>
                                                <h5>Suits,Blazzers & Waistcoats</h5>
                                                <h5>Ties,Socks,Caps & More</h5>
                                                <h5>Fabrics</h5>

                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Winter Wear</h5>
                                                <a href="homepage" className="dropdown-item">Sweetshirts</a>
                                                <a href="homepage" className="dropdown-item">Jackets</a>
                                                <a href="homepage" className="dropdown-item">Sweater</a>
                                                <a href="homepage" className="dropdown-item">Tracksuits</a>
                                                <h5>Ethinic Wear</h5>
                                                <a href="homepage" className="dropdown-item">Kurta</a>
                                                <a href="homepage" className="dropdown-item">Ethinic Sets</a>
                                                <a href="homepage" className="dropdown-item">Dhoti</a>
                                                <a href="homepage" className="dropdown-item">Lungi</a>
                                                <h5>Innerwear & Loungewear</h5>
                                                <a href="homepage" className="dropdown-item">Brief & Trunks</a>
                                                <a href="homepage" className="dropdown-item">Vests</a>
                                                <a href="homepage" className="dropdown-item">Boxers</a>
                                                <a href="homepage" className="dropdown-item">Pyjamas and Lounge Pants</a>
                                                <a href="homepage" className="dropdown-item">Thermals</a>
                                                <a href="homepage" className="dropdown-item">Night Suits</a>
                                                <h5>Raincoats & Windcheaters</h5>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Watches</h5>
                                                <a href="homepage" className="dropdown-item">Fastrack</a>
                                                <a href="homepage" className="dropdown-item">Casio</a>
                                                <a href="homepage" className="dropdown-item">Titan</a>
                                                <a href="homepage" className="dropdown-item">Fossil</a>
                                                <a href="homepage" className="dropdown-item">Sonata</a>
                                                <h5>Accessories</h5>
                                                <a href="homepage" className="dropdown-item">Backpacks</a>
                                                <a href="homepage" className="dropdown-item">Wallets</a>
                                                <a href="homepage" className="dropdown-item">Belts</a>
                                                <a href="homepage" className="dropdown-item">Sunglases</a>
                                                <a href="homepage" className="dropdown-item">Luggage & Travel</a>
                                                <a href="homepage" className="dropdown-item">Frames</a>
                                                <a href="homepage" className="dropdown-item">Jewellery</a>
                                                <h5>Sports & Fitness Store</h5>
                                            </div>
                                            <div className="col-sm-6 col-lg-2">
                                                <h5>Smart Watches</h5>
                                                <h5>Smart Bands</h5>
                                                <h5>Personal Care Appliances</h5>
                                                <a href="homepage" className="dropdown-item">Trimmers</a>
                                                <a href="homepage" className="dropdown-item">Shavers</a>
                                                <a href="homepage" className="dropdown-item">Grooming Kits</a>
                                                <h5>Featured</h5>
                                                <a href="homepage" className="dropdown-item">Watches Store</a>
                                                <a href="homepage" className="dropdown-item">Footwear Club</a>
                                                <a href="homepage" className="dropdown-item">Bags & Wallet</a>
                                                <a href="homepage" className="dropdown-item">T-Shirt Store</a>
                                                <a href="homepage" className="dropdown-item">Adidas</a>
                                                <a href="homepage" className="dropdown-item">Beardo</a>
                                                <a href="homepage" className="dropdown-item">Reebok</a>
                                                <a href="homepage" className="dropdown-item">Skechers</a>
                                                <a href="homepage" className="dropdown-item">Nike</a>
                                                <a href="homepage" className="dropdown-item">LG Refrigerators</a>

                                            </div>
                                        </div>


                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a id="hover" className="nav-link" href="homepage">Flights</a>
                                </li>
                                <li className="nav-item">
                                    <a id="hover" className="nav-link" href="homepage">Offer Zone</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
        )
    }
}

export default SubNavbar
