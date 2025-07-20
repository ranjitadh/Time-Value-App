import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  const [quote, setQuote] = useState('Time is money, make every moment count.');
  const [fadeAnim] = useState(new Animated.Value(0));

  // Sample quotes for rotation
  const quotes = [
    'Time is money, make every moment count.',
    'Invest your time wisely to grow your wealth.',
    'Every second spent well is a dollar earned.',
  ];

  // Rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000);

    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient colors={['#f8fafc', '#e2e8f0']} style={styles.container}>
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Your Time Value Journey</Text>
      </Animated.View>

      <View style={styles.content}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceTitle}>Current Balance</Text>
          <Text style={styles.balanceAmount}>$10,000</Text>
          <Text style={styles.balanceSubtitle}>Available Funds</Text>
        </View>

        <View style={styles.quoteSection}>
          <Ionicons name="chatbox-ellipses" size={24} color="#3b82f6" />
          <Text style={styles.quoteText}>{quote}</Text>
        </View>

        <View style={styles.navigation}>
          <Link href="/(tabs)/(tabs_calc)/TimeCalculator" asChild>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="calculator" size={20} color="#fff" />
              <Text style={styles.navButtonText}>Time Calculator</Text>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.navButton}>
            <Ionicons name="list" size={20} color="#fff" />
            <Text style={styles.navButtonText}>Transaction History</Text>
          </TouchableOpacity>
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
    flex: 0.4,
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
    flex: 0.6,
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
  balanceCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  balanceTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e3a8a',
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1e3a8a',
    marginVertical: 8,
  },
  balanceSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#64748b',
  },
  quoteSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  quoteText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#475569',
    marginLeft: 10,
    flex: 1,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  navButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 5,
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

export default Home;