import Link from "next/link";
export default function Nav() {
  return (
    <>
      <div className="py-1 bg-black ">
        <div className="container ">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span>@</span>
                  </div>
                  <Link
                    href="https://www.threads.com/@swaraga.bali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text">swarga threads</span>
                  </Link>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-instagram" />
                  </div>
                  <Link
                    href="https://www.instagram.com/swaraga.bali/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text">swaraga.bali</span>
                  </Link>
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
          <Link className="navbar-brand" href="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{ height: 40 }}
              className="mt-"
            />
          </Link>
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
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Catalog
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <Link className="dropdown-item" href="/shop">
                    Shop
                  </Link>
                  <Link className="dropdown-item" href="/detailproduct">
                    Single Product
                  </Link>
                  <Link className="dropdown-item" href="/cart">
                    Cart
                  </Link>
                  <Link className="dropdown-item" href="/checkout">
                    Checkout
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item cta cta-colored">
                <Link href="/cart" className="nav-link">
                  <span className="icon-shopping_cart" /> [0]
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* END nav */}
    </>
  );
}
