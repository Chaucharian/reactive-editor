import React from "react";
import { Rnd } from "react-rnd";
import { Frame } from "./Frame";

// ROTATE FUNCTION
// var arrow = document.querySelector("#arrow");
// var arrowRects = arrow.getBoundingClientRect();
// var arrowX = arrowRects.left + arrowRects.width / 2;
// var arrowY = arrowRects.top + arrowRects.height / 2;

// addEventListener("mousemove", function(event) {
//     arrow.style.transform = "rotate(" + Math.atan2(event.clientY - arrowY, event.clientX - arrowX) + "rad)";
// });

const Interactable = ({
  width = 100,
  height = 100,
  x = 0,
  y = 0,
  options,
  children,
  ...props
}) => {
  return (
    <Rnd
      default={{ x, y, width, height, ...options }}
      enableResizing
      {...props}
    >
      {/* <Element ref={containerRef}>{children}</Element> */}
      <Frame />
    </Rnd>
  );
};

export { Interactable };
