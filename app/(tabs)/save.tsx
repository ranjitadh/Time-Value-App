import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Animated, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

const Settings = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [currency, setCurrency] = useState('USD');
  const [fadeAnim] = useState(new Animated.Value(0));

  // Fade-in animation
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const toggleNotifications = () => {
    setIsNotificationsEnabled((prev) => !prev);
  };

  const changeCurrency = () => {
    // Placeholder for currency change logic (e.g., open a modal or picker)
    setCurrency(currency === 'USD' ? 'EUR' : 'USD');
  };

  const handleLogout = () => {
    // Placeholder for logout logic
    console.log('User logged out');
  };

  return (
    <LinearGradient colors={['#f8fafc', '#e2e8f0']} style={styles.container}>
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Customize your time-value experience</Text>
      </Animated.View>

      <View style={styles.content}>
        <View style={styles.settingsCard}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Enable Notifications</Text>
            <Switch
              value={isNotificationsEnabled}
              onValueChange={toggleNotifications}
              trackColor={{ false: '#e5e7eb', true: '#3b82f6' }}
              thumbColor="#fff"
            />
          </View>
          <TouchableOpacity style={styles.settingRow} onPress={changeCurrency}>
            <Text style={styles.settingLabel}>Currency</Text>
            <Text style={styles.settingValue}>{currency}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsCard}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.settingRow} onPress={handleLogout}>
            <Text style={styles.settingLabel}>Log Out</Text>
            <Ionicons name="log-out-outline" size={24} color="#3b82f6" />
          </TouchableOpacity>
        </View>

        <View style={styles.navigation}>
          <Link href="/(tabs)/(tabs_calc)/TimeCalculator" asChild>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="calculator" size={20} color="#fff" />
              <Text style={styles.navButtonText}>Time Calculator</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/home" asChild>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="home" size={20} color="#fff" />
              <Text style={styles.navButtonText}>Home</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/profile" asChild>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="person" size={20} color="#fff" />
              <Text style={styles.navButtonText}>Profile</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/notification" asChild>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="notifications" size={20} color="#fff" />
              <Text style={styles.navButtonText}>Notifications</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#1e3a8a',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#475569',
    textAlign: 'center',
  },
  content: {
    flex: 0.7,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  settingsCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#475569',
  },
  settingValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e3a8a',
  },
  navigation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  navButton: {
    flexBasis: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
});

export default Settings;