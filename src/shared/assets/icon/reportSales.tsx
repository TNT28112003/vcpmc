import React from 'react';
import Icon from '@ant-design/icons';

const reportSales = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke='currentColor'
    strokeWidth='2'
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.2861 4.99902H8.1433C7.30977 4.99902 6.51039 5.33014 5.921 5.91953C5.3316 6.50892 5.00049 7.30831 5.00049 8.14183V26.9987C5.00049 27.8322 5.3316 28.6316 5.921 29.221C6.51039 29.8104 7.30977 30.1415 8.1433 30.1415H23.8574C24.6909 30.1415 25.4903 29.8104 26.0797 29.221C26.669 28.6316 27.0002 27.8322 27.0002 26.9987V8.14183C27.0002 7.30831 26.669 6.50892 26.0797 5.91953C25.4903 5.33014 24.6909 4.99902 23.8574 4.99902H20.7145" />
    <path d="M17.5718 1.85645H14.4289C12.6932 1.85645 11.2861 3.26353 11.2861 4.99926C11.2861 6.73498 12.6932 8.14207 14.4289 8.14207H17.5718C19.3075 8.14207 20.7146 6.73498 20.7146 4.99926C20.7146 3.26353 19.3075 1.85645 17.5718 1.85645Z" />
    <path d="M19.143 14.4277H15.2145C14.5894 14.4277 13.9898 14.6761 13.5478 15.1181C13.1058 15.5602 12.8574 16.1597 12.8574 16.7848C12.8574 17.41 13.1058 18.0095 13.5478 18.4516C13.9898 18.8936 14.5894 19.142 15.2145 19.142H16.7859C17.4111 19.142 18.0106 19.3903 18.4527 19.8323C18.8947 20.2744 19.143 20.8739 19.143 21.4991C19.143 22.1242 18.8947 22.7237 18.4527 23.1658C18.0106 23.6078 17.4111 23.8562 16.7859 23.8562H12.8574" />
    <path d="M16 12.8564V14.4279M16 23.8563V25.4277V23.8563Z" />
  </svg>
);
const ReportSales = props => <Icon component={reportSales} {...props} />;
export default ReportSales;
