import React, { useRef } from "react";
import "../styles/Home.css";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const AnimatedLinkButton = ({
  to = "/",
  text = "Let's-connect",
  emoji = "🤝",
  className = "",
}) => {
  const lettersRef = useRef([]);
  const emojiRef = useRef();

  const emojiTimelineRef = useRef(null);
  const lettersTimelineRef = useRef(null);

  const handleMouseEnter = () => {
    if (emojiTimelineRef.current) emojiTimelineRef.current.kill();
    if (lettersTimelineRef.current) lettersTimelineRef.current.kill();

    const lettersTL = gsap.timeline();
    lettersRef.current.forEach((el, index) => {
      lettersTL
        .to(
          el,
          {
            y: -40,
            scale: 1.4,
            duration: 0.1,
            ease: "back.out(2)",
          },
          index * 0.04
        )
        .to(
          el,
          {
            y: 0,
            scale: 1,
            duration: 0.1,
            ease: "back.in(1.7)",
          },
          index * 0.04 + 0.1
        );
    });
    lettersTimelineRef.current = lettersTL;

    const emojiTL = gsap.timeline();
    emojiTL
      .to(emojiRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.2,
        ease: "power1.in",
      })
      .set(emojiRef.current, { x: -50 })
      .to(emojiRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    emojiTimelineRef.current = emojiTL;
  };

  const handleMouseLeave = () => {
    if (lettersTimelineRef.current) lettersTimelineRef.current.reverse();
    if (emojiTimelineRef.current) emojiTimelineRef.current.reverse();
  };

  return (
    <Link
      to={to}
      className={`get_in_touch ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>
        {text.split("").map((char, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            style={{ display: "inline-block" }}
          >
            {char}
          </span>
        ))}
      </span>
      <span
        className="emoji"
        ref={emojiRef}
        style={{ display: "inline-block", marginLeft: "5px" }}
      >
        {emoji}
      </span>
    </Link>
  );
};

export default AnimatedLinkButton;
