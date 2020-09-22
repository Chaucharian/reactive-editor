import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 100px;
`;

const List = styled(motion.ul)`
  margin 0px;
  padding-top: 20px;
    padding-left: 30px;
 display: inline-flex;
  li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .icon-placeholder {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex: 40px 0;
    margin-right: 20px;
  }

  .text-placeholder {
    border-radius: 5px;
    width: 200px;
    height: 20px;
    flex: 1;
  }
`;

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Menu = () => (
  <Container>
    <List variants={variants}>
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </List>
  </Container>
);

const itemIds = [0, 1, 2, 3, 4];

export default Menu;
