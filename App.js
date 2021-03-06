import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import { MainStackNavigator} from './src/navigation/StackNavigators'

const App = () => {
  return (
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App