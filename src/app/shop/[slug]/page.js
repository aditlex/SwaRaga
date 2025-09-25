// app/shop/[slug]/page.js
import fs from "fs";
import path from "path";
import Nav from "@/components/nav";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import Tabs from "@/components/TabsDetailProduct";

export const dynamic = "force-dynamic";
export const revalidate = 0; // jangan cache, selalu server-render per request

export default async function ProductPage({ params }) {
  const slug = params.slug;

  const filePath = path.join(process.cwd(), "data", "products.json");
  const json = fs.readFileSync(filePath, "utf8");
  const products = JSON.parse(json);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1>Product not found</h1>
      </div>
    );
  }

  const imageSrc = product.image?.startsWith("/") ? product.image : `/${product.image}`;

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
              <h1 className="mb-0 bread">{product.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <ProductDetail product={product} imageSrc={imageSrc} />

          <Tabs />
        </div>
      </section>

      <Footer />
    </>
  );
}
