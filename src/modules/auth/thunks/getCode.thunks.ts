import {appConfig} from '../../../appConfig';
import {MaskHelper} from '../../../helper/MaskHelper';
import {Screens} from '../../../routes/models/Screens';
import Navigation from '../../../routes/navigation/Navigation';
import {RootState} from '../../../settings/redux/store';
import {setTitle} from '../AuthSlice';
import {authService} from '../services/auth.service';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getCode = createAsyncThunk(
  'auth/getCode',
  async (_, {getState, dispatch}) => {
    const {type, loginForm, registerForm} = (getState() as RootState).authSlice;



    if (
      MaskHelper.clearFormat(loginForm.phone_number) === appConfig.adminPhone
    ) {
      Navigation.navigate(Screens.AUTH_ADMIN);
      return;
    }

    const callPhone = await authService.getCode(
      type === 'Вход' ? loginForm : registerForm,
    );

    if (callPhone.message) {
      dispatch(setTitle(callPhone.message));

      Navigation.navigate(Screens.AUTH_CODE);
    }
  },
);
