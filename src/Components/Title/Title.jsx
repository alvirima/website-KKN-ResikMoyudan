import React, { useEffect, useRef } from "react";
import "./Title.css";

const Title = ({ title, title2, title3, subTitle, quote }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".anim").forEach((el, i) => {
            el.classList.add("animate");
            el.style.animationDelay = `${i * 0.15}s`;
          });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="title" ref={ref}>
      <h1 className="anim">{title}</h1>
      <h2 className="title2 anim">{title2}</h2>

      {title3 && <h3 className="title3 anim">{title3}</h3>}

      <p className="anim">{subTitle}</p>

      {quote && (
        <div className="quote-container anim">
          <p className="quote-text">{quote}</p>
        </div>
      )}
    </div>
  );
};

export default Title;
