import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';

import {
  filterChangeForm,
  selectOrganizationsValues,
} from '../../modules/organizations/OrganizationsSlice';
import {useAppDispatch, useAppSelector} from '../../settings/redux/hooks';
import {Dimensions, StatusBar} from 'react-native';
import {MainContainer} from '../../template/containers/MainContainer';
import {ColumnContainerFlex} from '../../template/containers/ColumnContainer';
import {InputSelectUI} from '../../template/ui/InputSelectUI';
import {SearchIcon} from '../../template/icons/SearchIcon';
import {ThreeMenuItem} from '../../components/ThreeMenuItem';
import {IconContainerUI} from '../../template/ui/IconContainerUI';
import {ScrollViewScreen} from '../../template/containers/ScrollViewScreen';
import {BottomMenu} from '../../components/bottomMenu/BottomMenu';
import Navigation from '../../routes/navigation/Navigation';
import {Screens} from '../../routes/models/Screens';
import {Category} from '../../modules/organizations/models/Category';
import {useEffect, useRef} from 'react';
import {getBanners, getCategories} from '../../modules/organizations/_thunks';
import {ColorsUI} from '../../template/styles/ColorUI';
import {CitiesModal} from '../../components/CitiesModal';
import {Modalize} from 'react-native-modalize';
import {SelectUI} from '../../template/ui/SelectUI';
import {CarouselRenderItemInfo} from 'react-native-reanimated-carousel/lib/typescript/types';
import {CarouselItem} from './components/CarouselItem';
import {Banner} from '../../modules/organizations/models/Banner';

function renderCarousel({item}: CarouselRenderItemInfo<Banner>) {
  return <CarouselItem url={item.image} />;
}

export const CategoriesScreen = () => {
  const {banners, categories, filterForm} = useAppSelector(
    selectOrganizationsValues,
  );

  const citiesModalRef = useRef<Modalize>(null);

  const dispatch = useAppDispatch();

  const insets = useSafeAreaInsets();

  const carouselWidth = Dimensions.get('window').width - 40;
  const carouselHeight = carouselWidth / 2.5;

  const handleGoToSearch = () => {
    Navigation.navigate(Screens.CAT_SEARCH);
  };

  const handlePickCategory = (category: Category) => {
    dispatch(filterChangeForm({key: 'category', value: category}));

    Navigation.navigate(Screens.CAT_ORGANIZATIONS);
  };

  const handleOpenModalCity = () => {
    citiesModalRef.current?.open();
  };

  useEffect(() => {
    dispatch(getBanners());
    dispatch(getCategories());
  }, []);

  return (
    <ColumnContainerFlex $isRelative>
      <StatusBar barStyle={'dark-content'} backgroundColor={ColorsUI.white} />
      <ScrollViewScreen
        $mt={Math.max(insets.top, 20)}
        showsVerticalScrollIndicator={false}>
        <MainContainer $ph={20} $mb={20}>
          {banners.length ? (
            <Carousel
              loop={banners.length > 1}
              autoPlay={banners.length > 1}
              autoPlayInterval={3000}
              width={carouselWidth}
              height={carouselHeight}
              data={banners}
              scrollAnimationDuration={1000}
              renderItem={renderCarousel}
            />
          ) : null}

          <MainContainer $mt={18} $mb={10}>
            <InputSelectUI
              value={'Поиск по названию и услуге'}
              rightIcon={<SearchIcon />}
              onPress={handleGoToSearch}
            />
          </MainContainer>
          <SelectUI text={filterForm.city} onPress={handleOpenModalCity} />
        </MainContainer>

        <MainContainer $pb={120}>
          {categories.map(item => (
            <ThreeMenuItem
              key={item._id}
              leftIcon={<IconContainerUI img={item.img} />}
              title={item.title}
              onPress={() => handlePickCategory(item)}
            />
          ))}
        </MainContainer>
      </ScrollViewScreen>

      <CitiesModal modalizeRef={citiesModalRef} />
      <BottomMenu />
    </ColumnContainerFlex>
  );
};
