import React from 'react';
import { pxToRem } from '../Utils/pxToRem.util';

export const useAutoResizeTextArea = (ref, value) => {
  const initialHeight = React.useRef('');
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (ref) {
      if (isFirstRender.current) {
        initialHeight.current = pxToRem(ref.clientHeight);
        isFirstRender.current = false;
      }

      if (!value) {
        ref.style.height = initialHeight.current;
      }

      const { scrollHeight } = ref;

      ref.style.height = pxToRem(scrollHeight);
    }
  }, [ref, value]);
};
