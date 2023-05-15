import '@shared/assets/css/animation.css';
import '@styles/styles.scss';

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import React, { useEffect, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import locale from '@locale/index';
import { LanguageSelector } from '@modules/setting/settingStore';

import ThemeContext, { ThemeColors } from '@shared/hook/ThemeContext';
import { auth } from 'src/firebase/firebase.config';
import { PublicPage } from '@routers/PublicPage';
import Login from './Auth/Login';
import { PrivatePage } from '@routers/PrivatePage';
import DefaultLayout from '@layout/index'

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(utc);

export const initStyle: ThemeColors = {
  colorPrimary: '#FF7506',
  colorPrimaryLight: '#82CA92',
  colorText: '#333333',
  colorTextSecondary: '#4f4c4d',
  colorLink: '#fff',
  colorBgContainer: '#fff',
  colorBgLayout: '#f5f5f5',
  fontFamily: 'Roboto',
  colorError: 'red',
  colorTextBase: '#000',
  colorTextLightSolid: '#fff',
  colorTextBlue: '#001DB8',
  colorErrorBg: '#ff4d4f',
};

const App: React.FC = () => {
  const history = useNavigate();
  const { language } = useSelector(LanguageSelector);

  const memoLangData = useMemo(() => {
    return locale[language];
  }, [language]);

  // useEffect(() => {
  //   if (auth.currentUser === null) {
  //     history('/login');
  //   }
  // });

  return (
    <IntlProvider locale={language} messages={memoLangData}>
      <ThemeContext token={initStyle}>
        <Routes>
          {PublicPage.map((page, index) => {
            const Comp = page.component;
            return <Route key={index} path={page.path} element={<Comp />} />;
          })}
          {PrivatePage.map((page, index) => {
            const Comp = page.component;
            return (
              <Route
                key={index}
                path={page.path}
                element={
                  <DefaultLayout>
                    <Comp />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </ThemeContext>
    </IntlProvider>
  );
};

export default App;
