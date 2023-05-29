import React from 'react';
import Icon from '@ant-design/icons';
const uploadSvg = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.42 4.2199C16.809 2.8159 15.7545 1.65097 14.4181 0.903622C13.0817 0.156272 11.5371 -0.132273 10.021 0.0822043C8.50489 0.296681 7.10094 1.00235 6.02427 2.09107C4.9476 3.17979 4.2576 4.59151 4.06001 6.10989C3.1066 6.33822 2.27023 6.90873 1.70975 7.71308C1.14927 8.51744 0.903696 9.49962 1.01968 10.4731C1.13566 11.4466 1.60511 12.3436 2.33888 12.9938C3.07265 13.6439 4.01964 14.002 5.00001 13.9999C5.26523 13.9999 5.51958 13.8945 5.70712 13.707C5.89466 13.5195 6.00001 13.2651 6.00001 12.9999C6.00001 12.7347 5.89466 12.4803 5.70712 12.2928C5.51958 12.1053 5.26523 11.9999 5.00001 11.9999C4.46958 11.9999 3.96087 11.7892 3.5858 11.4141C3.21073 11.039 3.00001 10.5303 3.00001 9.9999C3.00001 9.46946 3.21073 8.96075 3.5858 8.58568C3.96087 8.21061 4.46958 7.9999 5.00001 7.9999C5.26523 7.9999 5.51958 7.89454 5.70712 7.707C5.89466 7.51947 6.00001 7.26511 6.00001 6.9999C6.00257 5.81717 6.4243 4.67365 7.19028 3.77248C7.95627 2.87131 9.0169 2.27085 10.1838 2.07777C11.3506 1.88469 12.5481 2.1115 13.5636 2.7179C14.579 3.32431 15.3466 4.27104 15.73 5.3899C15.7872 5.56174 15.8899 5.71483 16.0273 5.83283C16.1647 5.95083 16.3315 6.02931 16.51 6.0599C17.1761 6.18577 17.7799 6.5335 18.223 7.04643C18.6662 7.55936 18.9226 8.20725 18.9504 8.88454C18.9782 9.56182 18.7759 10.2286 18.3763 10.7761C17.9767 11.3237 17.4035 11.7198 16.75 11.8999C16.4928 11.9662 16.2724 12.132 16.1373 12.3608C16.0023 12.5896 15.9637 12.8626 16.03 13.1199C16.0963 13.3772 16.2621 13.5975 16.4909 13.7326C16.7197 13.8676 16.9928 13.9062 17.25 13.8399C18.3024 13.5618 19.2353 12.9479 19.907 12.0914C20.5787 11.2348 20.9526 10.1825 20.9718 9.09416C20.9911 8.00583 20.6546 6.94094 20.0136 6.06122C19.3725 5.18149 18.4619 4.53499 17.42 4.2199ZM11.71 6.2899C11.6149 6.19885 11.5028 6.12749 11.38 6.0799C11.1366 5.97988 10.8635 5.97988 10.62 6.0799C10.4973 6.12749 10.3851 6.19885 10.29 6.2899L7.29001 9.2899C7.10171 9.4782 6.99592 9.73359 6.99592 9.9999C6.99592 10.2662 7.10171 10.5216 7.29001 10.7099C7.47832 10.8982 7.73371 11.004 8.00001 11.004C8.26631 11.004 8.52171 10.8982 8.71001 10.7099L10 9.40989V14.9999C10 15.2651 10.1054 15.5195 10.2929 15.707C10.4804 15.8945 10.7348 15.9999 11 15.9999C11.2652 15.9999 11.5196 15.8945 11.7071 15.707C11.8947 15.5195 12 15.2651 12 14.9999V9.40989L13.29 10.7099C13.383 10.8036 13.4936 10.878 13.6154 10.9288C13.7373 10.9796 13.868 11.0057 14 11.0057C14.132 11.0057 14.2627 10.9796 14.3846 10.9288C14.5064 10.878 14.617 10.8036 14.71 10.7099C14.8037 10.6169 14.8781 10.5063 14.9289 10.3845C14.9797 10.2626 15.0058 10.1319 15.0058 9.9999C15.0058 9.86788 14.9797 9.73718 14.9289 9.61532C14.8781 9.49346 14.8037 9.38286 14.71 9.2899L11.71 6.2899Z"
      fill="#FFAC69"
    />
  </svg>
);
const UploadIcon = props => <Icon component={uploadSvg} {...props} />;
export default UploadIcon;