import {
  CreateFormProps,
  CreatetFormModel,
  DefaultCreateForm,
} from './form/CreateForm';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {OrganizationsStateModel} from './types/OrganizationTypes';
import {RootState} from '../../settings/redux/store';
import {DefaultFilterForm, FilterFormProps} from './form/FilterForm';
import {
  getBanners,
  getCategories,
  getContacts,
  getCreatedStatus,
  getCurrentOrganization,
  getFavoritesList,
  getOrganizationFilter,
  getOrganizationList,
  getPersonalOrganizations,
  getPromotionsList,
  getSearchServices,
} from './_thunks';
import {getReviews} from './thunks/reviews.thunk';
import {getSubInfo} from './thunks/subscribe.thunk';
import {getServices} from './thunks/services.thunk';
import {OrganizationList} from './models/OrganizationList';
import {checkRelease} from './thunks/create.thunk';

const initialState: OrganizationsStateModel = {
  banners: [],
  categories: [],
  services: [],

  filterForm: DefaultFilterForm,
  createForm: DefaultCreateForm,

  subInfo: null,

  contacts: null,

  organizationFilter: null,
  searchServices: [],
  organizationList: [],
  promotionsList: [],
  favoritesList: [],
  personalOrganizations: [],

  reviews: [],

  createdStatus: null,

  isSearchLoad: false,
  isBannersLoad: false,
  isCategoriesLoad: false,
  isOrganizationFilter: false,
  isOrganizationListLoad: false,
  isCurrentOrganizationLoad: false,
  isPromotionListLoad: false,
  isFavoritesListLoad: false,
  isPersonalOrganizationsLoad: false,
  isCreatedStatusLoad: false,
  isReviewsLoad: false,

  currentOrganization: null,

  checkRelease: false,
};

const organizationsSlice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    filterChangeForm: (state, action: PayloadAction<FilterFormProps>) => {
      state.filterForm = {
        ...state.filterForm,
        [action.payload.key]: action.payload.value,
      };
    },
    createChangeForm: (state, action: PayloadAction<CreateFormProps>) => {
      state.createForm = {
        ...state.createForm,
        [action.payload.key]: action.payload.value,
      };
    },

    setDefaultFilter: state => {
      state.filterForm = DefaultFilterForm;
    },

    setDefaultCreateForm: (state, action: PayloadAction<CreatetFormModel>) => {
      state.createForm = action.payload;
    },

    setIsSearchLoad: (state, action: PayloadAction<boolean>) => {
      state.isSearchLoad = action.payload;
    },
    setIsBannersLoad: (state, action: PayloadAction<boolean>) => {
      state.isBannersLoad = action.payload;
    },
    setIsCategoriesLoad: (state, action: PayloadAction<boolean>) => {
      state.isCategoriesLoad = action.payload;
    },
    setIsOrganizationFilter: (state, action: PayloadAction<boolean>) => {
      state.isOrganizationFilter = action.payload;
    },
    setIsOrganizationList: (state, action: PayloadAction<boolean>) => {
      state.isOrganizationListLoad = action.payload;
    },
    setOrganizationList: (state, action: PayloadAction<OrganizationList[]>) => {
      state.organizationList = action.payload;
    },
    setIsCurrentOrganizationLoad: (state, action: PayloadAction<boolean>) => {
      state.isCurrentOrganizationLoad = action.payload;
    },
    setIsPromotionListLoad: (state, action: PayloadAction<boolean>) => {
      state.isPromotionListLoad = action.payload;
    },
    setIsFavoritesListLoad: (state, action: PayloadAction<boolean>) => {
      state.isFavoritesListLoad = action.payload;
    },
    setIsPersonalOrganizationsLoad: (state, action: PayloadAction<boolean>) => {
      state.isPersonalOrganizationsLoad = action.payload;
    },
    setIsCreatedStatusLoad: (state, action: PayloadAction<boolean>) => {
      state.isCreatedStatusLoad = action.payload;
    },
    setIsReviewsLoad: (state, action: PayloadAction<boolean>) => {
      state.isReviewsLoad = action.payload;
    },

    resetOrganizationFilter: state => {
      state.organizationFilter = null;
    },

    resetFilterForm: state => {
      state.filterForm = {
        ...DefaultFilterForm,
        city: state.filterForm.city,
        category: state.filterForm.category,
      };
    },
  },
  extraReducers: builder => {
    // GET Categories
    builder.addCase(getCategories.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.categories = action.payload;
    });

    // GET Services
    builder.addCase(getServices.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.services = action.payload;
    });

    // GET Organization Filter
    builder.addCase(getOrganizationFilter.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.organizationFilter = action.payload;
    });

    // GET Banners
    builder.addCase(getBanners.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.banners = action.payload;
    });

    // GET Search Services
    builder.addCase(getSearchServices.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.searchServices = action.payload;
    });

    // GET Organizations List
    builder.addCase(getOrganizationList.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.organizationList = action.payload;
    });

    // GET Current Organization
    builder.addCase(getCurrentOrganization.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.currentOrganization = action.payload;
    });

    // GET Promotions List
    builder.addCase(getPromotionsList.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.promotionsList = action.payload;
    });

    // GET Favorites List
    builder.addCase(getFavoritesList.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.favoritesList = action.payload;
    });

    // GET Created Status
    builder.addCase(getCreatedStatus.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.createdStatus = action.payload;
    });

    // GET Personal Organizations
    builder.addCase(getPersonalOrganizations.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.personalOrganizations = action.payload;
    });

    // GET Reviews
    builder.addCase(getReviews.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.reviews = action.payload;
    });

    // GET Subscribe info
    builder.addCase(getSubInfo.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.subInfo = action.payload;
    });

    // GET Contacts
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });

    // GET Check Release
    builder.addCase(checkRelease.fulfilled, (state, action) => {
      state.checkRelease = action.payload.isSubscribe;
    });
  },
});

export const selectOrganizationsValues = (state: RootState) =>
  state.organizationsSlice;

export const {
  filterChangeForm,
  createChangeForm,
  setIsSearchLoad,
  setIsBannersLoad,
  setIsCategoriesLoad,
  setIsOrganizationFilter,
  setIsCurrentOrganizationLoad,
  setIsPromotionListLoad,
  setIsFavoritesListLoad,
  setIsPersonalOrganizationsLoad,
  setIsCreatedStatusLoad,
  setDefaultCreateForm,
  resetOrganizationFilter,
  setIsReviewsLoad,
  resetFilterForm,
  setOrganizationList,
} = organizationsSlice.actions;

export default organizationsSlice.reducer;
