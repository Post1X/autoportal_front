import React from 'react';
import {QuestionModal} from '../../../components/QuestionModal';
import Navigation from '../../../routes/navigation/Navigation';
import {useAppDispatch, useAppSelector} from '../../../settings/redux/hooks';
import {logoutAuth} from '../../../modules/auth/thunks/logout.thunks';
import {selectAuthValues} from '../../../modules/auth/AuthSlice';

export const LogoutModal = () => {
  const {isAdmin} = useAppSelector(selectAuthValues);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logoutAuth(isAdmin));
  };

  return (
    <QuestionModal
      title={'Вы действительно хотите\nвыйти из аккаунта?'}
      btnMainTitle={'Назад'}
      btnSecondTitle={'Выйти'}
      onMainPress={() => Navigation.pop()}
      onSecondPress={handleLogOut}
    />
  );
};
