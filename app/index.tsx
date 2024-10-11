import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors } from '../assets/utils/colors'

const HomePage= () => {




  return (
    <View style={styles.container} >
            <Image source={require("../assets/images/All-Square-Logo.png")} style={styles.logo} />
            <Text style={styles.title} >Bet. Play. Win.</Text>
            <Text style={styles.subTitle} >Upgrade your golf rounds: Simple Bets, Instant Wins. Challenge friends, track live scores, and ensure every shot matters. Bet directly from your digital wallet and savor speedy payouts.
            </Text>
            <View style={styles.buttonContainer} >
                <TouchableOpacity style={[
                    styles.loginButtonWrapper,
                    {  backgroundColor: colors.primary },
                ]} 
                // onPress={handleLogin}
                >
                    <Text style={styles.loginButtonText } >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.loginButtonWrapper]}  >
                    <Text style={styles.signupButtonText} >Sign-up</Text>
                </TouchableOpacity>
                
            </View>
        </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  loginButtonWrapper: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default HomePage;
