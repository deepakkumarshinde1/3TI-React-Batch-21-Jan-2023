function App() {
  return (
    <>
      <section id="main">
        <header id="header1">
          <div id="divlogo">
            <ul style={{ "list-style": "none" }}>
              <li>
                <img id="logo" src="/fliplogo.png" alt="image" />
              </li>
              <li style={{ "margin-top": "-8px" }}>
                <a
                  href=""
                  style={{
                    "text-decoration": "none",
                    color: "white",
                    "font-size": "small",
                  }}
                >
                  Explore<span style={{ color: "rgb(232, 195, 8)" }}>Plus</span>
                  <sup>
                    <img
                      src="/images/plus_aef861.png"
                      style={{ width: "10px" }}
                      alt=""
                    />
                  </sup>
                </a>
              </li>
            </ul>
          </div>
          <div id="box1">
            <input
              id="id1"
              type="search"
              placeholder="Search for products, brands and more"
            />
            <label for="id1">
              <i
                className="bi bi-search"
                style={{ "font-size": "larger", color: "rgb(3, 125, 219)" }}
              ></i>
            </label>
          </div>
          {/* <!-- <input id="login" type="button" value="Login"> --> */}
          <div className="dropdown login">
            <button
              className="btn dropdown login"
              style={{
                "font-weight": "500",
                "border-radius": "2px",
                color: "#2874f0",
                "background-color": "white",
                "margin-left": "20px",
                height: "40px",
                "margin-top": "-5px",
              }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Login
            </button>
            <ul
              className="dropdown-menu"
              style={{
                "box-shadow": "2px 2px 8px rgb(159, 159, 159)",
                border: "none",
                width: "220px",
                "line-height": "8px",
              }}
            >
              <li>
                <div className="dropdown-item" href="#">
                  <p style="float: left; margin-right: 20px; font-weight: 500">
                    Cutomer Name?
                  </p>
                  <a
                    href="/SignUp.html"
                    style={{ "text-decoration": "none", "font-weight": "500" }}
                  >
                    Sign Up
                  </a>
                </div>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-person-circle drop-down-item-a"></i>
                  My Profile
                </a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-plus-square-fill drop-down-item-a"></i>
                  Flipkart Plus Zone
                </a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-plus-square-fill drop-down-item-a"></i>
                  Orders
                </a>
              </li>

              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-plus-square-fill drop-down-item-a"></i>
                  Wishlist
                </a>
              </li>

              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-inboxes-fill drop-down-item-a"></i>
                  Rewards
                </a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-credit-card-2-back-fill drop-down-item-a"></i>
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          <ul id="ul">
            <li className="list1">
              <a className="a" href="">
                Become a Seller
              </a>
            </li>
            <li className="list1">
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </button>
                <ul
                  className="dropdown-menu"
                  style={{
                    "box-shadow": "2px 2px 8px rgb(159, 159, 159)",
                    border: "none",
                  }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-bell-fill drop-down-item-a"></i>
                      Notification Preferences
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-question-square-fill drop-down-item-a"></i>
                      24x7 Customer Care
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-graph-up-arrow drop-down-item-a"></i>
                      Advertise
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-download drop-down-item-a"></i>
                      Download App
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="list1">
              <a className="a" href="">
                <i className="bi bi-cart-fill"></i>
                Cart
              </a>
            </li>
          </ul>
        </header>
        {/* <!-- Header Complete --> */}
        <section>
          <div id="categories">
            <div className="cards">
              <img
                src="/images/Grocery.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a className="a2" href="#">
                  Grocery
                </a>
              </div>
            </div>
            <div className="cards">
              <img
                src="/images/Mobiles.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a className="a2" href="#">
                  Mobiles
                </a>
              </div>
            </div>
            <div className="cards">
              <img
                src="/images/Fashion.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a className="a2" href="#">
                  Fashion
                </a>
              </div>
            </div>
            <div className="cards">
              <img
                src="/images/Electronics.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a className="a2" href="#">
                  Electronics
                </a>
              </div>
            </div>
            <div className="cards">
              <img src="/images/Home.webp" className="card-img-top" alt="..." />
              <div className="card-body">
                <a className="a2" href="#">
                  Home
                </a>
              </div>
            </div>
            <div className="cards">
              <img
                src="/images/Appliances.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a className="a2" href="#">
                  Appliances
                </a>
              </div>
            </div>
            <div className="cards">
              <img
                src="/images/Travel.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a className="a2" href="#">
                  Travel
                </a>
              </div>
            </div>
            <div className="cards">
              <img
                src="/images/Top Offers.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a className="a2" href="#">
                  Top Offers
                </a>
              </div>
            </div>
            <div className="cards">
              <img
                src="/images/Beauty, Toys & More.webp"
                style={{ width: "80px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a className="a2" href="#">
                  Beauty, Toys & More
                </a>
              </div>
            </div>
            <div className="cards">
              <img
                src="/images/Two Wheelers.webp"
                style={{ width: "80px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a className="a2" href="#">
                  Two Wheelers
                </a>
              </div>
            </div>
          </div>
          {/* <!-- categories Complete --> */}

          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/09a4d20b8c2f5d10.jpg?q=50"
                  className="d-block w-150"
                  style={{ marginLeft: "-100px" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://rukminim1.flixcart.com/flap/1688/280/image/75a15c3e19c3f7de.jpg?q=50"
                  className="d-block w-150"
                  style={{ marginLeft: "-100px" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/62d1db714bbec85e.jpg?q=50"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/a37c7aa9669fcd4c.jpg?q=50"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9f40f4bff3e44a23.jpg?q=50"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/6363749479abe09a.jpg?q=50"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* <!-- Carousel Complete --> */}

          <div id="sections">
            <div className="card card-section">
              <div className="card-body">
                <h3 className="card-title card-title-h3-1">
                  Best Of <br />
                  Electronics
                </h3>
                <a href="#" className="btn btn-primary">
                  VIEW ALL
                </a>
              </div>
            </div>

            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style="
              width: 240px;
              height: 300px;
              text-align: center;
              border: none;
            "
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style="
                border-radius: 0px;
                height: 200px;
                width: 200px;
                margin-left: 30px;
              "
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    top mirrorless camera
                  </h6>
                  <h6
                    style="
                  text-transform: capitalize;
                  color: green;
                  margin-top: 0px;
                "
                  >
                    shop now!
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    canon,sony,fujifilm...
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style="
              width: 240px;
              height: 300px;
              text-align: center;
              border: none;
            "
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/xif0q/power-bank/j/i/v/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagn22tuac3hqnz.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style="
                border-radius: 0px;
                height: 200px;
                width: 200px;
                margin-left: 30px;
              "
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Premium PowerBanks
                  </h6>
                  <h6
                    style="
                  text-transform: capitalize;
                  color: green;
                  margin-top: 0px;
                "
                  >
                    Shop Now!
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    Mi, realme & more
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style="
              width: 240px;
              height: 300px;
              text-align: center;
              border: none;
            "
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/xif0q/cases-covers/back-cover/j/i/6/mycas-black-vv-y35-qcase-original-imagj87uwxzarrzk.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style="
                border-radius: 0px;
                height: 200px;
                width: 180px;
                margin-left: 30px;
              "
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Plain Cases & Covers
                  </h6>
                  <h6
                    style="
                  text-transform: capitalize;
                  color: green;
                  margin-top: 0px;
                "
                  >
                    Under ₹169
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    For All Top Models
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style="
              width: 240px;
              height: 300px;
              text-align: center;
              border: none;
            "
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/0/s/2/-original-imagkgj2hvxpsqpz.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style="
                border-radius: 0px;
                height: 200px;
                width: 200px;
                margin-left: 30px;
              "
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Monitors
                  </h6>
                  <h6
                    style="
                  text-transform: capitalize;
                  color: green;
                  margin-top: -4px;
                "
                  >
                    From ₹6599
                  </h6>
                  <p
                    style="
                  text-transform: capitalize;
                  color: gray;
                  margin-top: -3px;
                "
                  >
                    acer
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style="
              width: 240px;
              height: 300px;
              text-align: center;
              border: none;
            "
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/kawtvgw0/headphone/m/q/j/ath-m50x-professional-monitor-headphones-audio-technica-original-imafsdbhjbzxphf8.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style="
                border-radius: 0px;
                height: 180px;
                width: 110px;
                margin-left: 60px;
              "
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Studio Headphones
                  </h6>
                  <h6
                    style="
                  text-transform: capitalize;
                  color: green;
                  margin-top: 0px;
                "
                  >
                    Up to 80% off
                  </h6>
                  <p style={{"text-transform": "capitalize"; color: "gray", "margin-top": "0px"}}>
                    Explore Now!
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- 1st section Complete --> */}

          <div id="sections">
            <div className="card card-section">
              <div className="card-body">
                <h3 className="card-title card-title-h3-1">
                  Fashion Top <br />
                  Deals
                </h3>
                <a href="#" className="btn btn-primary">
                  VIEW ALL
                </a>
              </div>
            </div>

            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style={{
                  width: "240px",
                  height: "300px",
                  "text-align": "center",
                  border: "none",
                }}
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{
                    "border-radius": "0px",
                    height: "200px",
                    width: "200px",
                    "margin-left": "30px",
                  }}
                />
                <div className="card-body">
                  <h6
                    style={{ "text-transform": "capitalize", color: "black" }}
                  >
                    Roadster, HRX & more
                  </h6>
                  <h6
                    style={{
                      "text-transform": "capitalize",
                      color: "green",
                      "margin-top": "0px",
                    }}
                  >
                    From ₹249
                  </h6>
                  <p
                    style={{
                      "text-transform": "capitalize",
                      color: "gray",
                      "margin-top": "0px",
                    }}
                  >
                    T-Shirts, Shirts
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style={{
                  width: "240px",
                  height: "300px",
                  "text-align": "center",
                  border: "none",
                }}
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{
                    "border-radius": "0px",
                    height: "200px",
                    width: "200px",
                    "margin-left": "30px",
                  }}
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Roadster, HRX & more
                  </h6>
                  <h6
                    style={{
                      "text-transform": "capitalize",
                      color: "green",
                      "margin-top": "0px",
                    }}
                  >
                    From ₹249
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    T-Shirts, Shirts
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style={{
                  width: "240px",
                  height: "300px",
                  "text-align": "center",
                  border: "none",
                }}
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{
                    "border-radius": "0px",
                    height: "200px",
                    width: "200px",
                    "margin-left": "30px",
                  }}
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Roadster, HRX & more
                  </h6>
                  <h6
                    style={{
                      "text-transform": "capitalize",
                      color: "green",
                      "margin-top": "0px",
                    }}
                  >
                    From ₹249
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    T-Shirts, Shirts
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style={{
                  width: "240px",
                  height: "300px",
                  "text-align": "center",
                  border: "none",
                }}
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{
                    "border-radius": "0px",
                    height: "200px",
                    width: "200px",
                    "margin-left": "30px",
                  }}
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Roadster, HRX & more
                  </h6>
                  <h6
                    style={{
                      "text-transform": "capitalize",
                      color: "green",
                      "margin-top": "0px",
                    }}
                  >
                    From ₹249
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    T-Shirts, Shirts
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style={{
                  width: "240px",
                  height: "300px",
                  "text-align": "center",
                  border: "none",
                }}
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{
                    "border-radius": "0px",
                    height: "200px",
                    width: "200px",
                    "margin-left": "30px",
                  }}
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Roadster, HRX & more
                  </h6>
                  <h6
                    style={{
                      "text-transform": "capitalize",
                      color: "green",
                      "margin-top": "0px",
                    }}
                  >
                    From ₹249
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    T-Shirts, Shirts
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- 2nd section Complete --> */}

          <div id="sections">
            <div className="card card-section">
              <div className="card-body">
                <h3 className="card-title card-title-h3-1">
                  Fashion Top <br />
                  Deals
                </h3>
                <a href="#" className="btn btn-primary">
                  VIEW ALL
                </a>
              </div>
            </div>

            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style={{
                  width: "240px",
                  height: "300px",
                  "text-align": "center",
                  border: "none",
                }}
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{
                    "border-radius": "0px",
                    height: "200px",
                    width: "200px",
                    "margin-left": "30px",
                  }}
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Roadster, HRX & more
                  </h6>
                  <h6
                    style={{
                      "text-transform": "capitalize",
                      color: "green",
                      "margin-top": "0px",
                    }}
                  >
                    From ₹249
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    T-Shirts, Shirts
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style={{
                  width: "240px",
                  height: "300px",
                  "text-align": "center",
                  border: "none",
                }}
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{
                    "border-radius": "0px",
                    height: "200px",
                    width: "200px",
                    "margin-left": "30px",
                  }}
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Roadster, HRX & more
                  </h6>
                  <h6
                    style={{
                      "text-transform": "capitalize",
                      color: "green",
                      "margin-top": "0px",
                    }}
                  >
                    From ₹249
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    T-Shirts, Shirts
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style={{
                  width: "240px",
                  height: "300px",
                  "text-align": "center",
                  border: "none",
                }}
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{
                    "border-radius": "0px",
                    height: "200px",
                    width: "200px",
                    "margin-left": "30px",
                  }}
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Roadster, HRX & more
                  </h6>
                  <h6
                    style={{
                      "text-transform": "capitalize",
                      color: "green",
                      "margin-top": "0px",
                    }}
                  >
                    From ₹249
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    T-Shirts, Shirts
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style={{
                  width: "240px",
                  height: "300px",
                  "text-align": "center",
                  border: "none",
                }}
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{
                    "border-radius": "0px",
                    height: "200px",
                    width: "200px",
                    "margin-left": "30px",
                  }}
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Roadster, HRX & more
                  </h6>
                  <h6
                    style={{
                      "text-transform": "capitalize",
                      color: "green",
                      "margin-top": "0px",
                    }}
                  >
                    From ₹249
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    T-Shirts, Shirts
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              style={{ "text-decoration": "none", display: "inline-block" }}
            >
              <div
                className="card"
                style={{
                  width: "240px",
                  height: "300px",
                  "text-align": "center",
                  border: "none",
                }}
              >
                <img
                  src="https://rukminim1.flixcart.com/image/200/200/l48s9zk0/shirt/w/s/r/m-st-pv-purple-majestic-man-original-imagf6g9knyyrxvp.jpeg?q=70"
                  className="card-img-top"
                  alt="..."
                  style={{
                    "border-radius": "0px",
                    height: "200px",
                    width: "200px",
                    "margin-left": "30px",
                  }}
                />
                <div className="card-body">
                  <h6 style="text-transform: capitalize; color: black">
                    Roadster, HRX & more
                  </h6>
                  <h6
                    style={{
                      "text-transform": "capitalize",
                      color: "green",
                      "margin-top": "0px",
                    }}
                  >
                    From ₹249
                  </h6>
                  <p style="text-transform: capitalize; color: gray; margin-top: 0px">
                    T-Shirts, Shirts
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div id="sections"></div>
        </section>

        <footer></footer>
      </section>
    </>
  );
}

export default App;
