import React from 'react';
import {QuestionModal} from '../../../components/QuestionModal';
import Navigation from '../../../routes/navigation/Navigation';
import {useAppDispatch, useAppSelector} from '../../../settings/redux/hooks';
import {adminService} from '../../../modules/admin/service/admin.service';
import {selectUserValues} from '../../../modules/user/UserSlice';
import {selectAuthValues} from '../../../modules/auth/AuthSlice';
import {logoutAuth} from '../../../modules/auth/thunks/logout.thunks';

export const RemoveProfileModal = () => {
  const {userInfo} = useAppSelector(selectUserValues);
  const {isAdmin} = useAppSelector(selectAuthValues);

  let dispatch = useAppDispatch();
  const handleRemoveAccount = async () => {
    try {
      const response = await adminService.deleteUser();

      if (response.message === 'success') {
        dispatch(logoutAuth(isAdmin));
      }
    } catch (error) {
      console.error('Ошибка при удалении аккаунта:', error);
    }
  };

  return (
    <QuestionModal
      title={
        'Вы действительно удалить аккаунт?\nВсе данные, включая активные подписки и все ваши организации, будут безвозвратно удалены.'
      }
      btnMainTitle={'Назад'}
      btnSecondTitle={'Удалить'}
      onMainPress={() => Navigation.pop()}
      onSecondPress={() => handleRemoveAccount()}
    />
  );
};
