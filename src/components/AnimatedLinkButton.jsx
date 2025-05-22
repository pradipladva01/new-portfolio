import React, { useRef } from "react";
import "../styles/Home.css";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const AnimatedLinkButton = ({
  to = "/",
  text = "Let's-connect",
  emoji = "🤝",
  className = "",
  type = "",
  disabled = "",
  onClick = () => {},
  asButton = false,
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
            y: -20,
            rotation: gsap.utils.random(-15, 15),
            scale: 1.2,
            duration: 0.2,
            ease: "back.out(3)",
          },
          index * 0.04
        )
        .to(
          el,
          {
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.2,
            ease: "elastic.out(1, 0.4)",
          },
          index * 0.04 + 0.15
        );
    });
    lettersTimelineRef.current = lettersTL;

    const emojiTL = gsap.timeline();
    emojiTL
      .to(emojiRef.current, {
        y: 20,
        opacity: 0,
        scale: 0.5,
        rotate: 90,
        duration: 0.2,
        ease: "power1.in",
      })
      .set(emojiRef.current, { y: -20, scale: 0.5, rotate: -90 })
      .to(emojiRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)",
      });

    emojiTimelineRef.current = emojiTL;
  };

  const handleMouseLeave = () => {
    if (lettersTimelineRef.current) lettersTimelineRef.current.reverse();
    if (emojiTimelineRef.current) emojiTimelineRef.current.reverse();
  };

  const commonProps = {
    className: `get_in_touch ${className}`,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  const content = (
    <>
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
    </>
  );

  return asButton ? (
    <button {...commonProps} onClick={onClick} type={type} disabled={disabled}>
      {content}
    </button>
  ) : (
    <Link to={to} {...commonProps}>
      {content}
    </Link>
  );
};

export default AnimatedLinkButton;
