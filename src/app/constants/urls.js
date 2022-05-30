export const login = {
  route: "/login",
};

export const signup = {
  route: "/signup",
};

export const welcome = {
  route: "/",
};

export const forgot = {
  route: "/forgot",
};

export const transit = {
  route: "/transit/:redirect",
  path: (redirect) => {
    return `/transit/${redirect}`;
  },
};

export const account = {
  route: "/account/:id",
  path: (id) => {
    return `/account/${id}`;
  },
};

export const changePass = {
  route: "/account/password/:id",
  path: (id) => {
    return `/account/password/${id}`;
  },
};

export const suppliers = {
  route: "/suppliers",
};

export const recipe = {
  route: "/recipe",
};

export const base = {
  route: "/base",
};

export const sched = {
  route: "/schedule",
};
