import React, {useEffect, useState} from 'react';
import {ColumnContainerFlex} from '../../../template/containers/ColumnContainer';
import {GradientHeader} from '../../../components/GradientHeader';
import {InputUI} from '../../../template/ui/InputUI';
import {Ag, TextUI} from '../../../template/ui/TextUI';
import {MainContainer} from '../../../template/containers/MainContainer';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ButtonUI} from '../../../template/ui/ButtonUI';
import {Notifications} from '../../../template/notifications/Notifications';
import {useAppDispatch, useAppSelector} from '../../../settings/redux/hooks';
import {changeFinanceSettings} from '../../../modules/admin/thunks/finance.thunk';
import {getSubInfo} from '../../../modules/organizations/thunks/subscribe.thunk';
import {selectOrganizationsValues} from '../../../modules/organizations/OrganizationsSlice';

export const FinanceSettings = () => {
  const insets = useSafeAreaInsets();

  const {subInfo} = useAppSelector(selectOrganizationsValues);

  const dispatch = useAppDispatch();

  const [monthPrice, setMonthPrice] = useState('');
  const [yearPrice, setYearPrice] = useState('');
  const [freePeriod, setFreePeriod] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    setIsLoading(true);
    dispatch(getSubInfo()).finally(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (subInfo) {
      setMonthPrice(subInfo.month_amount.toString());
      setYearPrice(subInfo.year_amount.toString());
      setFreePeriod(subInfo.free_period.toString());
    }
  }, [subInfo]);

  const handleSaveFinance = () => {
    if (!monthPrice.length) {
      Notifications.error('Не указана стоимость за месяц');
      return;
    }

    if (!yearPrice.length) {
      Notifications.error('Не указана стоимость за год');
      return;
    }

    if (!freePeriod.length) {
      Notifications.error('Не указан период');
      return;
    }

    setIsLoading(true);

    dispatch(
      changeFinanceSettings({
        month_amount: Number(monthPrice),
        year_amount: Number(yearPrice),
        free_period: Number(freePeriod),
      }),
    ).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <ColumnContainerFlex $pb={insets.bottom}>
      <GradientHeader isBack={true} title={'Финансовые настройки'} />
      <ColumnContainerFlex style={compStyles.gap20} $pt={20} $ph={20}>
        <MainContainer>
          <TextUI ag={Ag['500_14']} $ml={10} $mb={10}>
            {'Стоимость подписки за месяц'}
          </TextUI>
          <InputUI
            placeholder={'Введите стоимость'}
            value={monthPrice}
            onChangeText={setMonthPrice}
            keyboardType={'number-pad'}
          />
        </MainContainer>

        <MainContainer>
          <TextUI ag={Ag['500_14']} $ml={10} $mb={10}>
            {'Стоимость подписки за год'}
          </TextUI>
          <InputUI
            placeholder={'Введите стоимость'}
            value={yearPrice}
            onChangeText={setYearPrice}
            keyboardType={'number-pad'}
          />
        </MainContainer>

        <MainContainer>
          <TextUI ag={Ag['500_14']} $ml={10} $mb={10}>
            {'Срок бесплатной подписки (мес)'}
          </TextUI>
          <InputUI
            placeholder={'Укажите срок'}
            value={freePeriod}
            onChangeText={setFreePeriod}
            keyboardType={'number-pad'}
          />
        </MainContainer>
        <ColumnContainerFlex />

        <ButtonUI
          title={'Сохранить'}
          onPress={handleSaveFinance}
          $btnDisabled={isLoading}
        />
      </ColumnContainerFlex>
    </ColumnContainerFlex>
  );
};

const compStyles = StyleSheet.create({
  gap20: {
    gap: 20,
  },
});