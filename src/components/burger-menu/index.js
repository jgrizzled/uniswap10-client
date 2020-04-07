import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useOnClickOutside } from 'hooks';
import Burger from './burger';
import Menu from './menu';

export default function BurgerMenu() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setBurgerOpen(false));
  return (
    <BurgerContainer ref={node}>
      <Burger open={burgerOpen} setOpen={setBurgerOpen} />
      <Menu open={burgerOpen} setOpen={setBurgerOpen} />
    </BurgerContainer>
  );
}

const BurgerContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;
