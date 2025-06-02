import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 아이콘 라이브러리 (설치 필요)

// 1. Stack Navigator 생성
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

// 2. Bottom Tab Navigator 생성
const Tab = createBottomTabNavigator();

// --- 홈 탭 내부의 스택 내비게이션 ---
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} options={{ title: '홈' }} />
      <HomeStack.Screen name="HomeDetail" component={DetailScreen} options={{ title: '홈 상세' }} />
    </HomeStack.Navigator>
  );
}

// --- 설정 탭 내부의 스택 내비게이션 ---
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsMain" component={SettingsScreen} options={{ title: '설정' }} />
      <SettingsStack.Screen name="SettingsDetail" component={DetailScreen} options={{ title: '설정 상세' }} />
    </SettingsStack.Navigator>
  );
}

// --- 프로필 탭 내부의 스택 내비게이션 ---
function ProfileStackScreen() {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} options={{ title: '프로필' }} />
        <ProfileStack.Screen name="ProfileDetail" component={DetailScreen} options={{ title: '프로필 상세' }} />
      </ProfileStack.Navigator>
    );
  }

// --- 각 화면 컴포넌트들 ---
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>홈 화면입니다!</Text>
      <Button
        title="홈 상세 화면으로 이동"
        onPress={() => navigation.navigate('HomeDetail')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>설정 화면입니다!</Text>
      <Button
        title="설정 상세 화면으로 이동"
        onPress={() => navigation.navigate('SettingsDetail')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.screenText}>프로필 화면입니다!</Text>
        <Button
          title="프로필 상세 화면으로 이동"
          onPress={() => navigation.navigate('ProfileDetail')}
        />
      </View>
    );
  }

function DetailScreen({ navigation, route }) {
    // 이전 화면에서 전달된 파라미터가 있다면 route.params로 접근 가능
    const fromScreen = route.name.includes('Home') ? '홈' : route.name.includes('Settings') ? '설정' : '프로필';
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.screenText}>{fromScreen} 상세 화면입니다!</Text>
        <Button
          title="이전 화면으로 돌아가기"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.separator} />
        <Button
          title="홈 탭의 메인 화면으로 이동"
          // 중첩 내비게이션 시, 다른 스택 내부의 특정 화면으로 이동할 때는
          // '탭 이름'과 '스택 안의 화면 이름'을 객체 형태로 전달합니다.
          onPress={() => navigation.navigate('HomeTab', { screen: 'HomeMain' })}
        />
      </View>
    );
}


// --- 앱의 메인 컴포넌트 ---
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeTab') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'SettingsTab') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'ProfileTab') {
                iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // 탭 내부 스택에 헤더가 있으므로 탭 내비게이터 헤더는 숨김
        })}
      >
        {/* 각 탭의 component로 해당 탭의 Stack Navigator를 감싸는 함수 컴포넌트를 할당 */}
        <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ tabBarLabel: '홈' }} />
        <Tab.Screen name="SettingsTab" component={SettingsStackScreen} options={{ tabBarLabel: '설정' }} />
        <Tab.Screen name="ProfileTab" component={ProfileStackScreen} options={{ tabBarLabel: '프로필' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  screenText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    height: 10,
  },
});

export default App;