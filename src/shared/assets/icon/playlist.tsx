import React from 'react';
import Icon from '@ant-design/icons';

const playlist = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.20234 10.2074H24.2257C25.437 10.2074 26.4281 10.8148 26.4281 12C26.4281 13.1852 25.437 13.6306 24.2257 13.6306H2.20234C0.991053 13.6306 0 13.1852 0 12C0 10.8148 0.991053 10.2074 2.20234 10.2074ZM2.20234 1.33301H24.2257C25.437 1.33301 26.4281 1.81477 26.4281 3C26.4281 4.18523 25.437 4.5 24.2257 4.5H2.20234C0.991053 4.5 0 4.18523 0 3C0 1.81477 0.991053 1.33301 2.20234 1.33301ZM2.20234 18.757H15.4164C16.6277 18.757 17.6187 19.3148 17.6187 20.5C17.6187 21.6852 16.6277 22.2593 15.4164 22.2593H2.20234C0.991053 22.2593 0 21.6852 0 20.5C0 19.3148 0.991053 18.757 2.20234 18.757ZM22.0234 20.469V29.5845C22.0234 30.4249 22.9484 30.9421 23.6972 30.5111L31.4714 25.9426C32.1762 25.5332 32.1762 24.5203 31.4714 24.0893L23.6972 19.5208C23.5272 19.4258 23.3347 19.3761 23.139 19.3766C22.9432 19.3772 22.751 19.428 22.5816 19.524C22.4122 19.6199 22.2715 19.7577 22.1735 19.9235C22.0756 20.0894 22.0238 20.2775 22.0234 20.469Z" />
  </svg>
);
const Playlist = props => <Icon component={playlist} {...props} />;
export default Playlist;
