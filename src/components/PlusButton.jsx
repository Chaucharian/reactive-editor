import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { getSecondaryColor } from "core/utils";

const Button = styled(motion.button)`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;

const Path = styled(motion.path)`
  stroke-width: 3;
  stroke: ${getSecondaryColor};
  stroke-linecap: round;
`;

const animater = {
  open: {
    rotate: 90,
    translateX: -2,
    translateY: -2,
  },
  closed: {
    rotate: 45,
    translateX: 0,
    translateY: 0,
  },
};

const PlusButton = ({ onClick }) => (
  <Button variants={animater} onClick={onClick}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path d="M 3 16.5 L 17 2.5" />
      <Path d="M 3 2.5 L 17 16.346" />
    </svg>
  </Button>
);

export default PlusButton;
