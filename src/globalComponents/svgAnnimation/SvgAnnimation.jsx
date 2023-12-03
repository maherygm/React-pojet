import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import React, { useLayoutEffect, useRef } from "react";

import "./Svg.css";
const SvgAnnimation = () => {
  const elementRef = useRef(null);
  gsap.registerPlugin(MotionPathPlugin);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to(elementRef.current, {
        motionPath: {
          path: [
            {
              x: 10,
              y: 20,
            },
            {
              x: 100,
              y: 0,
            },
            {
              x: 200,
              y: 100,
            },
            {
              x: 200,
              y: 150,
            },
            {
              x: 300,
              y: 200,
            },
          ],
          align: [
            {
              x: 10,
              y: 20,
            },
            {
              x: 100,
              y: 0,
            },
            {
              x: 200,
              y: 100,
            },
            {
              x: 200,
              y: 150,
            },
            {
              x: 300,
              y: 200,
            },
          ],
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        transformOrigin: "50% 50%",
        duration: 5,
        ease: "power1.inOut",
      });
    }, elementRef);
  });
  return <div className="svg" ref={elementRef}></div>;
};

export default SvgAnnimation;
