import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {OrganizationsStateModel} from './types/OrganizationTypes';
import {RootState} from '../../settings/redux/store';
import {DefaultFilterForm, FilterFormProps} from './form/FilterForm';
import {
  getBanners,
  getCategories,
  getOrganizationFilter,
  getOrganizationList,
  getSearchServices,
} from './thunks/OrganizationsThunks';

const initialState: OrganizationsStateModel = {
  banners: [],
  categories: [],
  filterForm: DefaultFilterForm,
  organizationFilter: null,
  searchServices: [],
  organizationList: [],

  isSearchLoad: false,
  isBannersLoad: false,
  isCategoriesLoad: false,
  isOrganizationFilter: false,
  isOrganizationListLoad: false,
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

    setDefaultFilter: state => {
      state.filterForm = DefaultFilterForm;
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
  },
  extraReducers: builder => {
    // GET Categories
    builder.addCase(getCategories.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      state.categories = action.payload;
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
  },
});

export const selectOrganizationsValues = (state: RootState) =>
  state.organizationsSlice;

export const {
  filterChangeForm,
  setIsSearchLoad,
  setIsBannersLoad,
  setIsCategoriesLoad,
  setIsOrganizationFilter,
} = organizationsSlice.actions;

export default organizationsSlice.reducer;
