import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styled from "styled-components";
import { useAppContext } from "core/context/context";
import { Interactable } from "components";

const Container = styled(Grid)`
  ${({ theme: { palette } }) => ` 
    height: 100vh;
    background-color: ${palette.secondary.light}
    `}
`;

const Sheet = styled(Paper)`
  ${({ theme: { palette } }) => `
    width: 50%;
    height: 50%;
    background-color: ${palette.primary.main}
    `}
`;

const Workspace = () => {
  const [{ elements }] = useAppContext();
  console.log(elements);
  return (
    <Container container>
      <Grid container item justify="center" alignItems="center" xs={12} sm={12}>
        <Sheet elevation={3}>
          {elements.map((a, i) => (
            <Interactable key={i} />
          ))}
        </Sheet>
      </Grid>
    </Container>
  );
};

export default Workspace;

// <Rnd default={{ x: 0, y: 0, width: 100, height: 100 }} enableResizing>
// </Rnd>
/* <Reactable
        draggable={{
          onmove: (event) => {
            setPosition((prev) => ({
              x: prev.x + event.dx,
              y: prev.y + event.dy,
            }));
            // event.target.style.transform = `translate(${event.dx}px, ${event.dy}px)`;
            //   position.x += event.dx
            //   position.y += event.dy

            //   event.target.style.transform =
            //     `translate(${position.x}px, ${position.y}px)`
          },
        }}
        x={50}
        y={50}
        // {...coordinate}
      /> */
