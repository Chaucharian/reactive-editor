import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "utils/hooks";
import styled from "styled-components";
import { PlusButton } from "components";
import { getPrimaryColor } from "utils";
import Menu from "./Menu";

const Background = styled(motion.div)`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${getPrimaryColor};
`;

const Nav = styled(motion.nav)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 41px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <Background variants={sidebar}>
        <Menu />
      </Background>
      <PlusButton onClick={() => toggleOpen()} />
    </Nav>
  );
};

export default Navigation;
