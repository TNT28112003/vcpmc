import React from 'react';
import Icon from '@ant-design/icons';

const prevButton = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7L9 12L15 17" fill="#A9A9B0"/>
<path d="M15 7L9 12L15 17L15 7Z" stroke="#A9A9B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);
const PrevButton = props => <Icon component={prevButton} {...props} />;
export default PrevButton;