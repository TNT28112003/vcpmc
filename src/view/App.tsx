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
import React, { memo, Suspense, useEffect, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import lodash from 'lodash';

import locale from '@locale/index';
import { LanguageSelector } from '@modules/setting/settingStore';

import ThemeContext, { ThemeColors } from '@shared/hook/ThemeContext';
import { TokenSelector } from '@modules/authentication/profileStore';
import PublicPage from '@routers/component/PublicPage';
import PrivatePage from '@routers/component/PrivatePage';

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

const MainView = memo(({ statusLogin }: { statusLogin: boolean }) => {
  return (
    <>
      {statusLogin ? (
        <Suspense fallback={<></>}>
          <PrivatePage />
        </Suspense>
      ) : (
        <Suspense fallback={<></>}>
          <PublicPage />
        </Suspense>
      )}
    </>
  );
});

const App: React.FC = () => {
  const { token } = useSelector(TokenSelector);
  const history = useNavigate();
  const { language } = useSelector(LanguageSelector);

  const memoLangData = useMemo(() => {
    return locale[language];
  }, [language]);

  useEffect(() => {
    if (!token) {
      history('/login');
    }
  }, [token]);

  return (
    <IntlProvider locale={language} messages={memoLangData}>
      <ThemeContext token={initStyle}>
        <MainView statusLogin={!lodash.isEmpty(token)} />
      </ThemeContext>
    </IntlProvider>
  );
};

export default App;
