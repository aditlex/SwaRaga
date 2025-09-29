// app/about/page.js
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import Testimony from "@/components/Testimony";

export default function About() {
  return (
    <>
      <Nav />

      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: 'url("images/bg_6.jpg")' }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home</a>
                </span>{" "}
                <span>About</span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-bag" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <p>
                    Fast delivery for orders across Indonesia — careful packaging
                    so your SWARAGA arrives safe and ready for adventure.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-customer-service" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Customer Support</h3>
                  <p>
                    Friendly local support to help you choose the right poncho
                    and answer questions about fit, shipping, or returns.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-center d-flex align-self-stretch ">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-payment-security" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Secure Payments</h3>
                  <p>
                    Multiple secure payment options so you can checkout with
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
        <div className="container">
          <div className="row">
            <div
              className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(images/about.jpg)" }}
            >

              <a
                href="#"
                className="icon popup-vimeo d-flex justify-content-center align-items-center"
                aria-label="Play video"
              >
                <span className="icon-play" />
              </a>
            </div>

            <div className="col-md-7 py-md-5 wrap-about pb-md-5 ">
              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4">About SWARAGA</h2>
                </div>
              </div>

              <div className="pb-md-5 pb-4">
                <p>
                  Thank you for purchasing <strong>SWARAGA</strong>. Our product is carefully made with top quality. It is designed to be a long-lasting, multi-purpose piece built for everyday adventures.
                </p>

                <p>
                  SWARAGA proudly blends modern function with local heritage — the towel panel uses{" "}
                  <strong>Endek</strong>, a traditional handwoven fabric from Bali. That handcrafted touch makes each piece special.
                </p>

                <p>
                  You may use SWARAGA for many occasions: swim, surf, yoga, camp, travel, or any adventure. It's lightweight, easy to carry, and doubles as a reliable changing poncho or travel buddy.
                </p>

                <p>
                  Created with love,
                  <br />
                  <strong>SWARAGA</strong>
                </p>

                <p>
                  <a href="/shop" className="btn btn-primary">
                    Shop now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

 <Testimony />

      <Footer />
    </>
  );
}
