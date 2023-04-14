export const customStyles = {
  control: provided => ({
    ...provided,
    backgroundColor: '#ececec',
    border: '#D9D9D9',
    borderRadius: '6px',
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '1.5',
    textAlign: 'left',
    width: '9.125rem',
    height: '2.125rem',
    ':focus': {
      boxShadow: '0 0 0 1px transparent',
      border: 'none',
      outline: 'none',
    },
    '@media (min-width: 768px)': {
      fontWeight: '500',
      fontSize: '14px',
      width: '10.9375rem',
      height: '2.31rem',
      backgroundColor: '#d9d9d9',
    },
    '@media (min-width: 1440px)': {
      fontSize: '18px',
      width: '12.375rem',
      height: '3.06rem',
    },
  }),
  option: provided => ({
    ...provided,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    color: '#000000',
    backgroundColor: '#FAFAFA',
  }),
  menu: provided => ({
    ...provided,
    margin: '0',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '1.5',
    textAlign: 'left',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
    color: '#8BAA36',
    '@media (min-width: 768px)': {
      fontSize: '14px',
    },
    '@media (min-width: 1280px)': {
      fontSize: '18px',
    },
  })
};
