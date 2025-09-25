export default function ProductDetail({ product, imageSrc }) {
  return (
    <div className="row">
      <div className="col-lg-6 mb-5 ftco-animate">
        <img src={imageSrc} className="img-fluid" alt={product.title} />
      </div>

      <div className="col-lg-6 product-details pl-md-5 ftco-animate">
        <h3>{product.title}</h3>

        <div className="rating d-flex">
          <p className="text-left mr-4">
            <a href="#" className="mr-2">Rating</a>
            {Array.from({ length: 5 }).map((_, i) => (
              <a href="#" key={i}>
                <span
                  className={`ion-ios-star${i < (product.rating ?? 0) ? "" : "-outline"}`}
                />
              </a>
            ))}
          </p>

          <p className="text-left mr-4">
            <a href="#" className="mr-2" style={{ color: "#000" }}>
              {product.reviews ?? 0} <span style={{ color: "#bbb" }}>Reviews</span>
            </a>
          </p>

          <p className="text-left">
            <a href="#" className="mr-2" style={{ color: "#000" }}>
              {product.sold ?? 0} <span style={{ color: "#bbb" }}>Sold</span>
            </a>
          </p>
        </div>

        <p className="price">
          <span>${(product.price ?? 0).toFixed(2)}</span>
        </p>

        <p>{product.description}</p>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="form-group d-flex">
              <div className="select-wrap">
                <div className="icon">
                  <span className="ion-ios-arrow-down" />
                </div>
                <select className="form-control" defaultValue={product.sizes?.[0] ?? ""}>
                  {(product.sizes ?? []).map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="w-100" />
          <div className="col-md-12">
            <p style={{ color: "#000" }}>{product.stock ?? 0} piece available</p>
          </div>
        </div>

        <p>
          <a href="#" className="btn btn-black py-3 px-5 mr-2">
            Add to Cart
          </a>
          <a href="#" className="btn btn-primary py-3 px-5">
            Buy now
          </a>
        </p>
      </div>
    </div>
  );
}
