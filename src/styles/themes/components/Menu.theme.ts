export default {
  baseStyle: {},
  variants: {
    default: {},
    listMenu: {
        list: {
          minWidth: '200px',
          border: '1px solid #DEE1E5',
          boxShadow: '0px 16px 12px 0px #19264814',
          maxHeight: '300px',
          overflow: 'auto',
          width: '400px',
        },
        item: {
          fontSize: '16px',
          fontWeight: 400,
          padding: '10px 14px',
        },
        button: {
          color: 'achromatic.500',
          fontSize: '14px',
          fontFamily: 'Regular',
          lineHeight: 'normal',
        },
      },
  },
};
