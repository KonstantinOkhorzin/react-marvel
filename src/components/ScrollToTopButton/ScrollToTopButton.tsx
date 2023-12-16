import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowUpSharpIcon from '@mui/icons-material/KeyboardDoubleArrowUpSharp';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#button-root')!;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (scrollY >= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return isVisible
    ? createPortal(
        <IconButton
          onClick={onScrollToTop}
          aria-label='to top'
          sx={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
          }}
        >
          <KeyboardDoubleArrowUpSharpIcon
            sx={{
              width: '50px',
              height: '50px',
            }}
          />
        </IconButton>,
        modalRoot
      )
    : null;
};

export default ScrollToTopButton;
