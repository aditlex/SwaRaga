export default function Nav() {
  return (
    <>
      <div className="py-1 bg-black">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span>@</span>
                  </div>
                  <a
                    href="https://www.threads.com/@swaraga.bali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text">swarga threads</span>
                  </a>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-instagram" />
                  </div>
                  <a
                    href="https://www.instagram.com/swaraga.bali/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text">swaraga.bali</span>
                  </a>
                </div>
                <div className="col-md-7 pr-4 d-flex topper align-items-center text-lg-right">
                  <span className="text">
                    One for All, ♻️ Proudly Bali Local Brand With Traditional Touch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light"
        id="ftco-navbar"
        style={{
          backdropFilter: "blur(2px)", 
           height: "60px",      
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{ height: 50 }}
              className="mt-2"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Catalog
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="/shop">
                    Shop
                  </a>
                  <a className="dropdown-item" href="/detailproduct">
                    Single Product
                  </a>
                  <a className="dropdown-item" href="/cart">
                    Cart
                  </a>
                  <a className="dropdown-item" href="/checkout">
                    Checkout
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item cta cta-colored">
                <a href="/cart" className="nav-link">
                  <span className="icon-shopping_cart" /> [0]
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* END nav */}
    </>
  );
}
