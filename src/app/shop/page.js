// app/shop/page.jsx
import fs from "fs";
import path from "path";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function Page() {
  // read data synchronously — this runs at build time (SSG)
  const filePath = path.join(process.cwd(), "data", "products.json");
  const json = fs.readFileSync(filePath, "utf8");
  const products = JSON.parse(json);

  return (
    <>
      <Nav />

      <div
        className="hero-wrap hero-bread"
        style={{ backgroundImage: 'url("/images/bg_6.jpg")' }}
      >
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">Home</a>
                </span>{" "}
                <span>Shop</span>
              </p>
              <h1 className="mb-0 bread">Shop</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-10 order-md-last">
              <div className="row">
                {/* render product cards */}
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>

              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li><a href="#">&lt;</a></li>
                      <li className="active"><span>1</span></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* sidebar (kept as in your template) */}
            <div className="col-md-4 col-lg-2">
              <div className="sidebar">
                {/* categories & price filters: keep your existing static HTML */}
                <div className="sidebar-box-2">
                  <h2 className="heading">Categories</h2>
                  {/* ... you can keep the rest of your sidebar markup unchanged */}
                </div>
                <div className="sidebar-box-2 mt-3">
                  <h2 className="heading">Price Range</h2>
                  <form method="post" className="colorlib-form-2">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Price from:</label>
                          <div className="form-field">
                            <select name="price_from" className="form-control">
                              <option>1</option>
                              <option>200</option>
                              <option>300</option>
                              <option>400</option>
                              <option>1000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Price to:</label>
                          <div className="form-field">
                            <select name="price_to" className="form-control">
                              <option>2000</option>
                              <option>4000</option>
                              <option>6000</option>
                              <option>8000</option>
                              <option>10000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
