import fs from "fs";
import path from "path";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import BestSeller from "@/components/BestSeller";
import Deal from "@/components/Deal";
import Testimony from "@/components/Testimony";
import SliderHome from "@/components/SliderHome";

export default async function Home() {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const raw = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "[]";
  const products = JSON.parse(raw || "[]");

  return (
    <>
      <Nav />

<SliderHome />

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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
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
                  <h3 className="heading">Support Customer</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ">
              <h2 className="mb-4">New</h2>
              <p>Poncho Towel with Traditional Touch</p>
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

 <BestSeller />

<Deal />

<Testimony />

      <Footer />
    </>
  );
}
