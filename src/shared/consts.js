export const STATUSES = {
  INIT: 'init',
  PENDING: 'pending',
  RESOLVE: 'resolve',
  REJECT: 'reject',
};

export const ROUTES = {
  HOME: '/',
  USER_PROFILE: '/profile',
};

export const API_CONSTS = {
  BASE_URL: 'https://tiktok33.p.rapidapi.com',
  HOST: 'tiktok33.p.rapidapi.com',
  API_KEY: process.env.REACT_APP_API_KEY,
};

export const THEME = {
  LIGHT_COLOR: {
    type: 'light',
    color: '#e6dfdf',
    textColor: '#000',
    iconColor: '#333',
  },
  DARK_COLOR: {
    type: 'dark',
    color: '#333',
    textColor: '#fff',
    iconColor: '#f33958',
  },
};
