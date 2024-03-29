import React, {useState} from 'react';
import {TypeService} from '../../../../modules/organizations/models/TypeService';
import {BorderTopUI} from '../../../../template/ui/BorderTopUI';
import {
  RowContainer,
  RowContainerBeetwen,
} from '../../../../template/containers/RowContainer';
import {Ag, TextUI} from '../../../../template/ui/TextUI';
import {DownIcon} from '../../../../template/icons/DownIcon';
import {ViewPress} from '../../../../template/containers/ViewPress';
import {MainContainer} from '../../../../template/containers/MainContainer';
import {ColorsUI} from '../../../../template/styles/ColorUI';

interface OrgServiceProps {
  service: TypeService;
  subService: TypeService;
}

export const OrgService = ({service, subService}: OrgServiceProps) => {
  const filteredSubServices = subService.filter(
    sub => sub.service_id === service._id,
  );

  const [isMore, setIsMore] = useState(false);

  return (
    <BorderTopUI key={`org-${service._id}`} $ph={20} $pv={10}>
      {filteredSubServices.length > 0 ? (
        <ViewPress onPress={() => setIsMore(!isMore)} activeOpacity={0.8}>
          <RowContainerBeetwen>
            <TextUI ag={Ag['400_16']}>{service.title}</TextUI>
            <DownIcon />
          </RowContainerBeetwen>

          {isMore ? (
            <MainContainer $mt={10}>
              {filteredSubServices?.map(sub => (
                <RowContainer key={`org-sub-${sub._id}`} $mb={5} $pl={20}>
                  <MainContainer
                    $mr={10}
                    $bg={ColorsUI.black}
                    $br={5}
                    $heightPX={3}
                    $widthPX={3}
                  />
                  <TextUI ag={Ag['400_16']}>{sub.title}</TextUI>
                </RowContainer>
              ))}
            </MainContainer>
          ) : null}
        </ViewPress>
      ) : (
        <TextUI ag={Ag['400_16']}>{service.title}</TextUI>
      )}
    </BorderTopUI>
  );
};
