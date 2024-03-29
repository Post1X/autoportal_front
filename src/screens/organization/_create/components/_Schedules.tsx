import React, {useState} from 'react';
import {BorderTopUI} from '../../../../template/ui/BorderTopUI';
import {Ag, TextUI} from '../../../../template/ui/TextUI';
import {CreateDayTimeWork} from './_DayTimeWork';
import {ScheduleModel} from '../../../../modules/organizations/types/OrganizationTypes';
import {DaysOfWeek} from '../../../../helper/DateHelper';

interface CreateSchedulesProps {
  onChangeSchedule: (value: ScheduleModel, isRemove?: boolean) => void;
  defaultSchedule: ScheduleModel[];
}

export const CreateSchedules = (props: CreateSchedulesProps) => {
  return (
    <BorderTopUI $ph={20} $pt={25} $pb={25}>
      <TextUI $mb={25} ag={Ag['600_16']}>
        {'График работы'}
      </TextUI>

      {Array.from({length: 7}).map((_, index) => (
        <CreateDayTimeWork
          key={`create-day-${index}`}
          sch={props.defaultSchedule}
          schedule={
            props.defaultSchedule.findIndex(
              item => item.title === DaysOfWeek[index],
            ) === index
              ? props.defaultSchedule[index]
              : null
          }
          indexDay={index}
          onChangeSchedule={props.onChangeSchedule}
        />
      ))}
    </BorderTopUI>
  );
};
