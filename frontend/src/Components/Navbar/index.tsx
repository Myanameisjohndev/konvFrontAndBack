import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';

import Close from '../../assets/ci_close-big.svg';
import { Icon, NavbarContainer } from './styles';

interface INavbar{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ open, setOpen }:INavbar) => {
  const [initialSIze, setInitialSize] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    setInitialSize(open);
  }, [open]);

  useEffect(() => {
    if (close) {
      setInitialSize(!open);
      setClose(false);
      setTimeout(() => {
        setOpen(false);
      }, 300);
    }
  }, [close]);

  return (
    <NavbarContainer style={{ width: `${initialSIze ? 30 : 0}%` }}>
      <Icon src={Close} onClick={() => setClose(true)} />
    </NavbarContainer>
  );
};
export default Navbar;
