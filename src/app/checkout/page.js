import Nav from "@/components/nav";
export default function Page() {
    return (
        <>
<Nav />
  <div
    className="hero-wrap hero-bread"
    style={{ backgroundImage: 'url("images/bg_6.jpg")' }}
  >
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-9 ftco-animate text-center">
          <p className="breadcrumbs">
            <span className="mr-2">
              <a href="index.html">Home</a>
            </span>{" "}
            <span>Checkout</span>
          </p>
          <h1 className="mb-0 bread">Checkout</h1>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 ftco-animate">
          <form action="#" className="billing-form">
            <h3 className="mb-4 billing-heading">Billing Details</h3>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstname">Firt Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="country">State / Country</label>
                  <div className="select-wrap">
                    <div className="icon">
                      <span className="ion-ios-arrow-down" />
                    </div>
                    <select name="" id="" className="form-control">
                      <option value="">France</option>
                      <option value="">Italy</option>
                      <option value="">Philippines</option>
                      <option value="">South Korea</option>
                      <option value="">Hongkong</option>
                      <option value="">Japan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="streetaddress">Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House number and street name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Appartment, suite, unit etc: (optional)"
                  />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="towncity">Town / City</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="postcodezip">Postcode / ZIP *</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="emailaddress">Email Address</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-md-12">
                <div className="form-group mt-4">
                  <div className="radio">
                    <label className="mr-3">
                      <input type="radio" name="optradio" /> Create an Account?{" "}
                    </label>
                    <label>
                      <input type="radio" name="optradio" /> Ship to different
                      address
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* END */}
          <div className="row mt-5 pt-3 d-flex">
            <div className="col-md-6 d-flex">
              <div className="cart-detail cart-total bg-light p-3 p-md-4">
                <h3 className="billing-heading mb-4">Cart Total</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>$20.60</span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>$0.00</span>
                </p>
                <p className="d-flex">
                  <span>Discount</span>
                  <span>$3.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>$17.60</span>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cart-detail bg-light p-3 p-md-4">
                <h3 className="billing-heading mb-4">Payment Method</h3>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label>
                        <input type="radio" name="optradio" className="mr-2" />{" "}
                        Direct Bank Tranfer
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label>
                        <input type="radio" name="optradio" className="mr-2" />{" "}
                        Check Payment
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="radio">
                      <label>
                        <input type="radio" name="optradio" className="mr-2" />{" "}
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          defaultValue=""
                          className="mr-2"
                        />{" "}
                        I have read and accept the terms and conditions
                      </label>
                    </div>
                  </div>
                </div>
                <p>
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Place an order
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* .col-md-8 */}
      </div>
    </div>
  </section>{" "}
  {/* .section */}
  <footer className="ftco-footer ftco-section">
    <div className="container">
      <div className="row">
        <div className="mouse">
          <a href="#" className="mouse-icon">
            <div className="mouse-wheel">
              <span className="ion-ios-arrow-up" />
            </div>
          </a>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Minishop</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-twitter" />
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li className="ftco-animate">
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Menu</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="py-2 d-block">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="py-2 d-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Help</h2>
            <div className="d-flex">
              <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                <li>
                  <a href="#" className="py-2 d-block">
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Returns &amp; Exchange
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="py-2 d-block">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="py-2 d-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon icon-map-marker" />
                  <span className="text">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-phone" />
                    <span className="text">+2 392 3929 210</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-envelope" />
                    <span className="text">info@yourdomain.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="icon-heart color-danger" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
</>

    )
}