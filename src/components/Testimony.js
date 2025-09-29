"use client";

import React, { useEffect, useRef, useState } from "react";


export default function TestimonyCarousel({ items = null, autoplay = true, interval = 5000 }) {
  const sample = [
    {
      image: "/images/person_1.jpg",
      quote:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Garreth Smith",
      position: "Marketing Manager",
    },
    {
      image: "/images/person_2.jpg",
      quote:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Annette Doe",
      position: "Interface Designer",
    },
    {
      image: "/images/person_3.jpg",
      quote:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Robin Lee",
      position: "UI Designer",
    },
  ];

  const [slides, setSlides] = useState(items ?? sample);
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Sync if parent updates items
  useEffect(() => {
    if (items && Array.isArray(items)) setSlides(items);
  }, [items]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || length <= 1) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % length), interval);
    return () => clearInterval(id);
  }, [autoplay, interval, length]);

  // Keyboard
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [length]);

  // Touch (swipe)
  const ref = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }
  function onTouchEnd() {
    const dx = touchStartX.current - touchEndX.current;
    const thresh = 50;
    if (dx > thresh) next();
    else if (dx < -thresh) prev();
  }

  function prev() {
    setCurrent((c) => (c === 0 ? length - 1 : c - 1));
  }
  function next() {
    setCurrent((c) => (c === length - 1 ? 0 : c + 1));
  }
  function goTo(i) {
    setCurrent(i);
  }

  if (length === 0) return null;

  return (
    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="services-flow">
              <div className="services-2 p-4 d-flex align-items-start bg-white rounded mb-3">
                <div className="icon me-3">
                  <span className="flaticon-bag" />
                </div>
                <div className="text">
                  <h3 className="h5 mb-1">Free Shipping</h3>
                  <p className="mb-0 small">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>

              <div className="services-2 p-4 d-flex align-items-start bg-white rounded mb-3">
                <div className="icon me-3">
                  <span className="flaticon-heart-box" />
                </div>
                <div className="text">
                  <h3 className="h5 mb-1">Valuable Gifts</h3>
                  <p className="mb-0 small">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>

              <div className="services-2 p-4 d-flex align-items-start bg-white rounded mb-3">
                <div className="icon me-3">
                  <span className="flaticon-payment-security" />
                </div>
                <div className="text">
                  <h3 className="h5 mb-1">All Day Support</h3>
                  <p className="mb-0 small">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>

              <div className="services-2 p-4 d-flex align-items-start bg-white rounded mb-3">
                <div className="icon me-3">
                  <span className="flaticon-customer-service" />
                </div>
                <div className="text">
                  <h3 className="h5 mb-1">All Day Support</h3>
                  <p className="mb-0 small">Separated they live in. A small river named Duden flows</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="heading-section mb-5">
              <h2 className="mb-4">Our satisfied customer says</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>

            <div
              className="position-relative overflow-hidden"
              ref={ref}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              style={{ minHeight: "160px" }}
            >
              {/* slides wrapper: each slide is 100% width */}
              <div
                className="d-flex transition-transform"
                style={{ width: `${length * 100}%`, transform: `translateX(-${current * (100 / length)}%)`, transition: "transform .5s ease" }}
              >
                {slides.map((s, i) => (
                  <div key={i} className="flex-shrink-0" style={{ flex: `0 0 ${100 / length}%`, maxWidth: `${100 / length}%` }}>
                    <div className="testimony-wrap d-flex align-items-start p-4">
                      <div
                        className="user-img mb-3 me-3 rounded-circle"
                        style={{ width: 90, height: 50, backgroundImage: `url(${s.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                        aria-hidden
                      />

                      <div className="text">
                        <p className="mb-2">{s.quote}</p>
                        <p className="name mb-0 fw-semibold">{s.name}</p>
                        <span className="position small text-muted">{s.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            

              {/* dots */}
              <div className="d-flex justify-content-center mt-3">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} className={`btn btn-sm me-2 ${i === current ? "btn-dark" : "btn-outline-secondary"}`} aria-label={`${i + 1}`}>
                    <span className="visually-hidden">{i + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
