// app/page.js
import fs from "fs";
import path from "path";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  // baca data products.json di server
  const filePath = path.join(process.cwd(), "data", "products.json");
  const raw = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "[]";
  const products = JSON.parse(raw || "[]");

  return (
    <>
      <Nav />
      <section id="home-section" className="hero">
        <div className="home-slider owl-carousel">
          <div className="slider-item js-fullheight">
            <div className="overlay" />
            <div className="container-fluid p-0">
              <div
                className="row d-md-flex no-gutters slider-text align-items-center justify-content-end"
                data-scrollax-parent="true"
              >
                <img
                  className="one-third order-md-last img-fluid"
                  src="images/bg_1.png"
                  alt=""
                />
                <div
                  className="one-forth d-flex align-items-center ftco-animate"
                  data-scrollax=" properties: { translateY: '70%' }"
                >
                  <div className="text">
                    <span className="subheading">#New Arrival</span>
                    <div className="horizontal">
                      <h1 className="mb-4 mt-3">GREEN FOREST- Sleeve Poncho
Adventure Poncho Towel
</h1>
                      <p className="mb-4">
                      SwaRaga -GREEN FOREST- Sleeve Poncho
Adventure Poncho Towel with Traditional Touch

.
Available Size M, L, XL
.
DM Us for more info and order 
                      </p>
                      <p>
                        <a href="shop/GREENFOREST-SleevePoncho" className="btn-custom">
                          Discover Now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item js-fullheight">
            <div className="overlay" />
            <div className="container-fluid p-0">
              <div
                className="row d-flex no-gutters slider-text align-items-center justify-content-end"
                data-scrollax-parent="true"
              >
                <img
                  className="one-third order-md-last img-fluid"
                  src="images/bg_2.png"
                  alt=""
                />
                <div
                  className="one-forth d-flex align-items-center ftco-animate"
                  data-scrollax=" properties: { translateY: '70%' }"
                >
                  <div className="text">
                    <span className="subheading">#New Arrival</span>
                    <div className="horizontal">
                      <h1 className="mb-4 mt-3">Poncho Towel with Traditional Touch</h1>
                      <p className="mb-4">
                     Must Have those Beautiful
Adventure Poncho Towel with Traditional Touch
.
#swaragaponcho available for baby, kids, teen & adult size
.
DM Us for more info and order
                      </p>
                      <p>
                        <a href="shop/BeautifulAdventurePonchoTowel" className="btn-custom">
                          Discover Now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters ftco-services">
            <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-bag" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Free Shipping</h3>
                  <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-customer-service" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Support Customer</h3>
                  <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-4 py-md-5">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-payment-security" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Secure Payments</h3>
                  <p>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product listing (mapped from products.json) */}
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h2 className="mb-4">New</h2>
              <p>
                Poncho Towel with Traditional Touch
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {products.length === 0 ? (
              <div className="col-12 text-center py-6">No products found</div>
            ) : (
              products.map((p) => <ProductCard key={p.slug} product={p} />)
            )}
          </div>
        </div>
      </section>

      {/* the rest of your page sections (choose, deal, testimony) */}
      <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <div
                className="choose-wrap divider-one img p-5 d-flex align-items-end"
                style={{ backgroundImage: "url(images/choose-1.jpg)" }}
              >
                <div className="text text-center text-white px-2">
                  <span className="subheading">Men's Shoes</span>
                  <h2>Men's Collection</h2>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of the
                    Semantics, a large language ocean.
                  </p>
                  <p>
                    <a href="#" className="btn btn-black px-3 py-2">
                      Shop now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row no-gutters choose-wrap divider-two align-items-stretch">
                <div className="col-md-12">
                  <div
                    className="choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end"
                    style={{ backgroundImage: "url(images/choose-2.jpg)" }}
                  >
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="text text-white px-5">
                        <span className="subheading">Women's Shoes</span>
                        <h2>Women's Collection</h2>
                        <p>
                          Separated they live in Bookmarksgrove right at the coast
                          of the Semantics, a large language ocean.
                        </p>
                        <p>
                          <a href="#" className="btn btn-black px-3 py-2">
                            Shop now
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
                        <div className="text text-center px-5">
                          <span className="subheading">Summer Sale</span>
                          <h2>Extra 50% Off</h2>
                          <p>
                            Separated they live in Bookmarksgrove right at the coast
                            of the Semantics, a large language ocean.
                          </p>
                          <p>
                            <a href="#" className="btn btn-black px-3 py-2">
                              Shop now
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="choose-wrap wrap img align-self-stretch d-flex align-items-center"
                        style={{ backgroundImage: "url(images/choose-3.jpg)" }}
                      >
                        <div className="text text-center text-white px-5">
                          <span className="subheading">Shoes</span>
                          <h2>Best Sellers</h2>
                          <p>
                            Separated they live in Bookmarksgrove right at the coast
                            of the Semantics, a large language ocean.
                          </p>
                          <p>
                            <a href="#" className="btn btn-black px-3 py-2">
                              Shop now
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* deal section, testimony, etc. — copy the rest of your original markup as needed */}
      <section className="ftco-section ftco-deal bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="images/prod-1.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="heading-section heading-section-white">
                <span className="subheading">Deal of the month</span>
                <h2 className="mb-3">Deal of the month</h2>
              </div>
              <div id="timer" className="d-flex mb-4">
                <div className="time" id="days" />
                <div className="time pl-4" id="hours" />
                <div className="time pl-4" id="minutes" />
                <div className="time pl-4" id="seconds" />
              </div>
              <div className="text-deal">
                <h2>
                  <a href="#">Nike Free RN 2019 iD</a>
                </h2>
                <p className="price">
                  <span className="mr-2 price-dc">$120.00</span>
                  <span className="price-sale">$80.00</span>
                </p>
                <ul className="thumb-deal d-flex mt-4">
                  <li className="img" style={{ backgroundImage: "url(images/product-6.png)" }} />
                  <li className="img" style={{ backgroundImage: "url(images/product-2.png)" }} />
                  <li className="img" style={{ backgroundImage: "url(images/product-4.png)" }} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="ftco-section testimony-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="services-flow">
            <div className="services-2 p-4 d-flex ftco-animate">
              <div className="icon">
                <span className="flaticon-bag" />
              </div>
              <div className="text">
                <h3>Free Shipping</h3>
                <p className="mb-0">
                  Separated they live in. A small river named Duden flows
                </p>
              </div>
            </div>
            <div className="services-2 p-4 d-flex ftco-animate">
              <div className="icon">
                <span className="flaticon-heart-box" />
              </div>
              <div className="text">
                <h3>Valuable Gifts</h3>
                <p className="mb-0">
                  Separated they live in. A small river named Duden flows
                </p>
              </div>
            </div>
            <div className="services-2 p-4 d-flex ftco-animate">
              <div className="icon">
                <span className="flaticon-payment-security" />
              </div>
              <div className="text">
                <h3>All Day Support</h3>
                <p className="mb-0">
                  Separated they live in. A small river named Duden flows
                </p>
              </div>
            </div>
            <div className="services-2 p-4 d-flex ftco-animate">
              <div className="icon">
                <span className="flaticon-customer-service" />
              </div>
              <div className="text">
                <h3>All Day Support</h3>
                <p className="mb-0">
                  Separated they live in. A small river named Duden flows
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="heading-section ftco-animate mb-5">
            <h2 className="mb-4">Our satisfied customer says</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </p>
          </div>
          <div className="carousel-testimony owl-carousel">
            <div className="item">
              <div className="testimony-wrap">
                <div
                  className="user-img mb-4"
                  style={{ backgroundImage: "url(images/person_1.jpg)" }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-4 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Garreth Smith</p>
                  <span className="position">Marketing Manager</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap">
                <div
                  className="user-img mb-4"
                  style={{ backgroundImage: "url(images/person_2.jpg)" }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-4 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Garreth Smith</p>
                  <span className="position">Interface Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap">
                <div
                  className="user-img mb-4"
                  style={{ backgroundImage: "url(images/person_3.jpg)" }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-4 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Garreth Smith</p>
                  <span className="position">UI Designer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap">
                <div
                  className="user-img mb-4"
                  style={{ backgroundImage: "url(images/person_1.jpg)" }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-4 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Garreth Smith</p>
                  <span className="position">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap">
                <div
                  className="user-img mb-4"
                  style={{ backgroundImage: "url(images/person_1.jpg)" }}
                >
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                </div>
                <div className="text">
                  <p className="mb-4 pl-4 line">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p className="name">Garreth Smith</p>
                  <span className="position">System Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      <Footer />
    </>
  );
}
