import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Homepage() {
  return (
    <>
      <Header />
      <div
        class="p-5 bg-image"
        style={{
          backgroundImage:
            "url('https://s3.envato.com/files/280545451/Preview.jpg')",
          height: '350px',
        }}
      ></div>

      {/* <!-- Section: Design Block --> */}
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: '10' }}>
              <div className="ms-8">
                <img
                  src="https://img.myloview.com/posters/weather-app-logo-700-270851892.jpg"
                  height="150"
                  alt="logo"
                  loading="lazy"
                />
              </div>
              <h1
                className="my-2 display-5 fw-bold ls-tight"
                style={{ color: 'blue' }}
              >
                Weather
                <br />
                <span className="ms-5" style={{ color: 'hsl(218, 81%, 75%)' }}>
                  Forecast
                </span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: 'black' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div className="ms-5">
                <img
                  src="https://img.freepik.com/free-vector/weather-concept-illustration_114360-1234.jpg?w=360"
                  height="500"
                  alt="logo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
      <Footer />
    </>
  );
}
