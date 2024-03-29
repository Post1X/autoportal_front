import React from 'react';
import {BorderTopUI} from '../../../../template/ui/BorderTopUI';
import {ButtonUI} from '../../../../template/ui/ButtonUI';

interface CreateSaveProps {
  isEdit?: boolean;
  isDisabled?: boolean;
  onRemovePress: () => void;
  onSavePress: () => void;
}

export const CreateSave = (props: CreateSaveProps) => {
  return (
    <BorderTopUI $pt={25} $pb={25} $ph={20}>
      {props.isEdit ? (
        <ButtonUI
          title={'Удалить организацию'}
          $type={'border'}
          $mb={10}
          $btnDisabled={props.isDisabled}
          onPress={props.onRemovePress}
        />
      ) : (
        ''
      )}
      <ButtonUI
        title={'Сохранить'}
        $btnDisabled={props.isDisabled}
        onPress={props.onSavePress}
      />
    </BorderTopUI>
  );
};
