import React, { useEffect, useRef } from "react";
import "./Title.css";

const Title = ({ title, title2, subTitle }) => {
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
      <p className="anim">{subTitle}</p>
    </div>
  );
};

export default Title;
