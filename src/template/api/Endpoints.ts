export const Endpoints = {
  // AUTH
  guestAuth: '/users/login/guest',
  sendCode: '/users/login/dealer/confirm',
  getCode: '/users/login/dealer/make-call',

  editUser: '/users/login/dealer/data',

  adminLogin: '/admin/login',

  // ORGANIZATION
  banners: '/banners',

  categories: '/categories',

  organizations: '/organisations',
  myOrganizations: '/organisations/my',

  currentOrganization: (id: string) => `/organisations?id=${id}`,

  promotions: '/promotion',

  favorites: '/organisations/favorites',
  changeFavorite: (id: string) => `/organisations/favorites?organisation=${id}`,

  createdStatus: '/organisations/my/created',

  // FILTER

  searchSubServices: (query: string) => `/services?query="${query}"`,
  cities: (query: string) => `/cities/find?city=${query}`,
  filter: (catId: string) => `/filter?categoryId=${catId}`,

  // USER INFO
  userInfo: '/users/profile/dealer',

  // UPLOAD FILE
  file: '/organisations/photo',

  // REVIEWS
  reviews: (id: string) => `/reviews?organizationId=${id}`,

  //SUBSCRIBE
  checkRelease: '/subscribe/release',
  subInfo: '/subscribe/info',

  // ADMIN
  finance: '/admin/sub',
  getUsers: (city: string) => `/admin/users?city=${city}`,
};
