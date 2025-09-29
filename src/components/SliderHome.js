"use client";
import React, { useEffect, useRef, useState } from "react";

/**
 * HeroSlider (fixed height)
 * - Mengukur tinggi semua slide setelah gambar load & pada resize
 * - Menetapkan height container ke max height (px) supaya tidak berubah-ubah saat slide berganti
 */
export default function HeroSliderFixedHeight({
  slidesData = null,
  autoplay = true,
  interval = 4000,
}) {
  const defaultSlides = [
    {
      id: 1,
      title: "PONCHO TOWEL WITH TRADITIONAL TOUCH",
      subtitle: "#NEW ARRIVAL",
      description:
        "Must Have those Beautiful Adventure Poncho Towel with Traditional Touch . #swaragaponcho available for baby, kids, teen & adult size . DM Us for more info and order",
      image: "/images/bg_2.png",
      url: "/shop/BeautifulAdventurePonchoTowel",
      bg: "#d9c97a",
    },
    {
      id: 2,
      title: "GREEN FOREST- Sleeve Poncho Adventure Poncho Towel",
      subtitle: "#NEW ARRIVAL",
      description:
        "SwaRaga -GREEN FOREST- Sleeve Poncho Adventure Poncho Towel with Traditional Touch . Available Size M, L, XL . DM Us for more info and order",
      image: "/images/bg_1.png",
      url: "/shop/GREENFOREST-SleevePoncho",
      bg: "#d9c97a",
    },
  ];

  const slides = slidesData && slidesData.length ? slidesData : defaultSlides;

  const [current, setCurrent] = useState(0);
  const len = slides.length;
  const timerRef = useRef(null);

  // refs to slide elements so we can measure their heights
  const slidesRef = useRef([]);
  slidesRef.current = [];

  const addSlideRef = (el) => {
    if (el && !slidesRef.current.includes(el)) slidesRef.current.push(el);
  };

  const [containerHeight, setContainerHeight] = useState(null);

  // measure all slides and set container height to max
  const measureSlides = () => {
    if (!slidesRef.current || slidesRef.current.length === 0) return;
    let max = 0;
    slidesRef.current.forEach((el) => {
      if (!el) return;
      // measure the slide inner content height (use getBoundingClientRect for consistent pixels)
      const rect = el.getBoundingClientRect();
      if (rect.height > max) max = rect.height;
    });
    if (max > 0) setContainerHeight(Math.ceil(max));
  };

  // measure after images load & on resize
  useEffect(() => {
    // measure once after mount (some images may still be loading)
    measureSlides();

    // measure on resize
    const onResize = () => {
      // small timeout to let layout settle
      window.requestAnimationFrame(() => measureSlides());
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  // Also measure whenever an image inside slides loads (attach onLoad on img)
  // Autoplay logic (timeout so manual interactions reset it)
  useEffect(() => {
    if (!autoplay || len <= 1) return;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % len);
    }, interval);
    return () => clearTimeout(timerRef.current);
  }, [current, len, autoplay, interval]);

  
  function goTo(i) {
    clearTimeout(timerRef.current);
    setCurrent(i);
  }

  // helper: when an image loads, re-measure
  const onImgLoad = () => {
    // let browser lay out the image then measure
    window.requestAnimationFrame(() => measureSlides());
  };

  return (
    <section
      className="hero-slider-root"
      aria-roledescription="carousel"
      style={{
        // if containerHeight is known, fix the height; otherwise let CSS min-height apply
        height: containerHeight ? `${containerHeight}px` : undefined,
      }}
    >
      {slides.map((s, i) => (
        <div
          key={s.id ?? i}
          className={`slide ${i === current ? "active" : ""}`}
          style={{
            background: s.bg || slides[0].bg || "#d9c97a",
          }}
          aria-hidden={i === current ? "false" : "true"}
          // store ref to measure
          ref={addSlideRef}
        >
          <div className="overlay" />
          <div className="container">
            <div className="content-row">
              <div className="left-col">
                <span className="subheading">{s.subtitle}</span>
                <h1 className="hero-title">{s.title}</h1>
                <p className="hero-desc">{s.description}</p>
                <a className="btn-discover" href={s.url || "#"}>
                  Discover Now
                </a>
              </div>

              <div className="right-col" aria-hidden>
                {/* attach onLoad to trigger measurement once image loaded */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="hero-image"
                  loading="eager"
                  draggable="false"
                  onLoad={onImgLoad}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      {len > 1 && (
        <>
         
          <div className="dots" role="tablist">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === current}
                role="tab"
                type="button"
              />
            ))}
          </div>
        </>
      )}

      {/* Styles (kept similar dengan sebelumnya) */}
      <style jsx>{`
        .hero-slider-root {
          position: relative;
          overflow: hidden;
          min-height: 72vh; /* fallback kalau belum ter-measure */
          transition: height 300ms ease; /* smooth adjustment saat re-measure */
        }

        .slide {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 700ms ease, visibility 700ms ease;
        }
        .slide.active {
          opacity: 1;
          visibility: visible;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 12vh 24px;
        }

        .content-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .left-col {
          flex: 0 0 55%;
          max-width: 55%;
          color: #111;
        }

        .subheading {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 8px 12px;
          letter-spacing: 2px;
          font-size: 13px;
          margin-bottom: 18px;
          font-weight: 600;
        }

        .hero-title {
          font-family: "Helvetica Neue", Arial, sans-serif;
          margin: 0 0 18px 0;
          font-weight: 300;
          line-height: 1.02;
          font-size: clamp(28px, 6vw, 64px);
          letter-spacing: 1px;
          color: #111;
        }

        .hero-desc {
          color: rgba(0, 0, 0, 0.6);
          max-width: 60%;
          font-size: 16px;
          line-height: 1.9;
          margin-bottom: 28px;
        }

        .btn-discover {
          display: inline-block;
          background: rgba(120, 94, 32, 0.9);
          color: #fff;
          padding: 12px 22px;
          text-decoration: none;
          font-weight: 600;
          border-radius: 2px;
        }

        .right-col {
          flex: 0 0 45%;
          max-width: 45%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          position: relative;
        }

        .hero-image {
          width: 110%;
          max-width: 720px;
          transform: rotate(-18deg) translateX(6%);
          object-fit: contain;
          filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.25));
          user-select: none;
        }

        .control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 40;
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          border: none;
          background: rgba(255, 255, 255, 0.85);
          color: #111;
          font-size: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .control.prev {
          left: 18px;
        }
        .control.next {
          right: 18px;
        }

        .dots {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 40;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 0;
          background: rgba(255, 255, 255, 0.6);
          cursor: pointer;
        }
        .dot.is-active {
          background: rgba(0, 0, 0, 0.85);
        }

        @media (max-width: 1000px) {
          .left-col {
            flex-basis: 60%;
            max-width: 60%;
          }
          .right-col {
            display: none;
          }
          .hero-desc {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 8vh 18px;
          }
          .hero-title {
            font-size: 28px;
          }
          .subheading {
            font-size: 12px;
            padding: 6px 10px;
          }
        }
      `}</style>
    </section>
  );
}
