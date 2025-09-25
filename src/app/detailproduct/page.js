
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import Tabs from "@/components/TabsDetailProduct";

export default function Single() {
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
            <span>Shop</span>
          </p>
          <h1 className="mb-0 bread">Shop</h1>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-5 ftco-animate">
          <a href="images/product-1.png" className="image-popup prod-img-bg">
            <img
              src="images/product-1.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
        <div className="col-lg-6 product-details pl-md-5 ftco-animate">
          <h3>Nike Free RN 2019 iD</h3>
          <div className="rating d-flex">
            <p className="text-left mr-4">
              <a href="#" className="mr-2">
                5.0
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
              <a href="#">
                <span className="ion-ios-star-outline" />
              </a>
            </p>
            <p className="text-left mr-4">
              <a href="#" className="mr-2" style={{ color: "#000" }}>
                100 <span style={{ color: "#bbb" }}>Rating</span>
              </a>
            </p>
            <p className="text-left">
              <a href="#" className="mr-2" style={{ color: "#000" }}>
                500 <span style={{ color: "#bbb" }}>Sold</span>
              </a>
            </p>
          </div>
          <p className="price">
            <span>$120.00</span>
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="form-group d-flex">
                <div className="select-wrap">
                  <div className="icon">
                    <span className="ion-ios-arrow-down" />
                  </div>
                  <select name="" id="" className="form-control">
                    <option value="">Small</option>
                    <option value="">Medium</option>
                    <option value="">Large</option>
                    <option value="">Extra Large</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-100" />
            <div className="input-group col-md-6 d-flex mb-3">
              <span className="input-group-btn mr-2">
                <button
                  type="button"
                  className="quantity-left-minus btn"
                  data-type="minus"
                  data-field=""
                >
                  <i className="ion-ios-remove" />
                </button>
              </span>
              <input
                type="text"
                id="quantity"
                name="quantity"
                className="quantity form-control input-number"
                defaultValue={1}
                min={1}
                max={100}
              />
              <span className="input-group-btn ml-2">
                <button
                  type="button"
                  className="quantity-right-plus btn"
                  data-type="plus"
                  data-field=""
                >
                  <i className="ion-ios-add" />
                </button>
              </span>
            </div>
            <div className="w-100" />
            <div className="col-md-12">
              <p style={{ color: "#000" }}>80 piece available</p>
            </div>
          </div>
          <p>
            <a href="cart.html" className="btn btn-black py-3 px-5 mr-2">
              Add to Cart
            </a>
            <a href="cart.html" className="btn btn-primary py-3 px-5">
              Buy now
            </a>
          </p>
        </div>
      </div>
<Tabs />
    </div>
  </section>
 <Footer />
</>


  );
}