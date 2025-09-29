// src/components/ProductCard.jsx
import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="col-sm-12 col-md-12 col-lg-4  d-flex">
      <div className="product d-flex flex-column w-100">
        <Link href={`/shop/${product.slug}`} className="img-prod">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            style={{ maxWidth: "100%", display: "block" }}
          />
          {product.oldPrice && <span className="status">Sale</span>}
          <div className="overlay" />
        </Link>

        <div className="text py-3 pb-4 px-3 d-flex flex-column">
          <div className="d-flex">
            <div className="cat">
              <span>{(product.categories && product.categories[0]) || "Uncategorized"}</span>
            </div>
            <div className="rating" style={{ marginLeft: "auto" }}>
              <p className="text-right mb-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`ion-ios-star${i < (product.rating || 0) ? "" : "-outline"}`} />
                ))}
              </p>
            </div>
          </div>

          <h3 style={{ marginTop: 8 }}>
            <Link href={`/shop/${product.slug}`}>{product.title}</Link>
          </h3>

          <div className="pricing" style={{ marginTop: "auto" }}>
            <p className="price">
              {product.oldPrice ? (
                <>
                  <span className="mr-2 price-dc">${product.oldPrice.toFixed(2)}</span>
                  <span className="price-sale">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span>${product.price.toFixed(2)}</span>
              )}
            </p>
          </div>

          <p className="bottom-area d-flex px-3" style={{ marginTop: 8 }}>
            <Link href="#" className="add-to-cart text-center py-2 mr-1">
              <span>
                Add to cart <i className="ion-ios-add ml-1" />
              </span>
            </Link>
            <Link href={`/shop/${product.slug}`} className="buy-now text-center py-2">
              <span>
                View
                <i className="ion-ios-cart ml-1" />
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
