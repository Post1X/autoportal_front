import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';

import {selectOrganizationsValues} from '../../modules/organizations/OrganizationsSlice';
import {useAppSelector} from '../../settings/redux/hooks';
import {CenterContainerFlex} from '../../template/containers/CenterContainer';
import {MockBanners} from './mock/MockBanners';
import {Dimensions, View} from 'react-native';
import {MainContainer} from '../../template/containers/MainContainer';
import {
  ColumnContainerBetweenFlex,
  ColumnContainerFlex,
} from '../../template/containers/ColumnContainer';
import {InputSelectUI} from '../../template/ui/InputSelectUI';
import {SearchIcon} from '../../template/icons/SearchIcon';
import {SelectUI} from '../../template/ui/SelectUI';
import {MockCategories} from './mock/MockCategories';
import {ThreeMenuItem} from '../../components/ThreeMenuItem';
import {IconContainerUI} from '../../template/ui/IconContainerUI';
import {ScrollViewScreen} from '../../template/containers/ScrollViewScreen';
import {BottomMenu} from '../../components/bottomMenu/BottomMenu';
import Navigation from '../../routes/navigation/Navigation';
import {Screens} from '../../routes/models/Screens';

export const CategoriesScreen = () => {
  const {banners} = useAppSelector(selectOrganizationsValues);

  const insets = useSafeAreaInsets();

  const carouselWidth = Dimensions.get('window').width - 40;
  const carouselHeight = carouselWidth / 2.5;

  const handleGoToSearch = () => {
    Navigation.navigate(Screens.CATEGORIES_SEARCH);
  };

  return (
    <ColumnContainerFlex $isRelative>
      <ScrollViewScreen
        $mt={Math.max(insets.top, 20)}
        showsVerticalScrollIndicator={false}>
        <MainContainer $ph={20} $mb={20}>
          <Carousel
            loop
            autoPlay={true}
            autoPlayInterval={3000}
            width={carouselWidth}
            height={carouselHeight}
            data={MockBanners}
            scrollAnimationDuration={1000}
            renderItem={({item}) => (
              <ColumnContainerFlex key={item.id} $bg={item.url} />
            )}
          />
          <MainContainer $mt={18}>
            <InputSelectUI
              value={'Поиск по названию и услуге'}
              rightIcon={<SearchIcon />}
              onPress={handleGoToSearch}
            />
            <MainContainer $mt={10} $widthPRC={50}>
              <SelectUI text={'Местоположение'} />
            </MainContainer>
          </MainContainer>
        </MainContainer>

        <MainContainer $pb={120}>
          {MockCategories.map(item => (
            <ThreeMenuItem
              key={item._id}
              leftIcon={<IconContainerUI />}
              title={item.title}
              onPress={() => {}}
            />
          ))}
        </MainContainer>
      </ScrollViewScreen>
      <BottomMenu />
    </ColumnContainerFlex>
  );
};
