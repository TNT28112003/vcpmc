import { routerForgotPassword } from '@view/Auth/ForgotPassword/router';
import { routerLogin } from '@view/Auth/Login/router';
import { routerPageError } from '@view/PageError/router';
import { IRouter } from './interface';
import { routerHomepage } from '@view/Home/router';
import { routerViewProfile } from '@view/Auth/Profiles/router';

export const privatePage: IRouter[] = [routerHomepage, routerViewProfile, routerPageError];

export const publicPage: IRouter[] = [routerLogin, routerForgotPassword];
