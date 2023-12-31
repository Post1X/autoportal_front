import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../models/Screens';
import {AuthScreen} from '../../screens/auth/AuthScreen';
import {AuthCode} from '../../screens/auth/_code/AuthCode';
import {AuthAdmin} from '../../screens/auth/AuthAdmin';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Group screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.AUTH} component={AuthScreen} />

      <Stack.Screen
        name={Screens.AUTH_CODE}
        component={AuthCode}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name={Screens.AUTH_ADMIN}
        component={AuthAdmin}
        options={{
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Group>
  );
};
