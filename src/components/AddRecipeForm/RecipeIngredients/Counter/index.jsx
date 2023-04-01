import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Counter.styled';

export function Counter({ value = 0, onQuanityChange }) {
  function calculateQuantity(val) {
    if (val < 0) return;

    onQuanityChange(val);
  }

  return (
    <Styled.Counter>
      {/* minus */}
      <Styled.CounterButton type="button" onClick={calculateQuantity.bind(null, value - 1)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M2.5 8H13.5"
            stroke="#333333"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Styled.CounterButton>

      {/* quantity */}
      <Styled.Quantity>{value}</Styled.Quantity>

      {/* plus */}
      <Styled.CounterButton type="button" onClick={calculateQuantity.bind(null, value + 1)}>
        <svg className="plus" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M2.5 8H13.5"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2.5V13.5"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Styled.CounterButton>
    </Styled.Counter>
  );
}

Counter.propTypes = {
  value: PropTypes.number,
  onQuanityChange: PropTypes.func
};
