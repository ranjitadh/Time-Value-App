import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
};

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: '1', title: 'Expense Alert', message: 'You spent $200, equivalent to 4 hours of work.', time: '2 hours ago' },
    { id: '2', title: 'Milestone Reached', message: 'You’ve tracked 200 hours this month!', time: '1 day ago' },
    { id: '3', title: 'Budget Reminder', message: 'Your weekly budget is nearing its limit.', time: '2 days ago' },
  ]);
  const [fadeAnim] = useState(new Animated.Value(0));

  // Fade-in animation
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const clearNotifications = () => {
    setNotifications([]);
  };

  const renderNotification = ({ item }: { item: Notification }) => (
    <View style={styles.notificationCard}>
      <View style={styles.notificationIcon}>
        <Ionicons name="notifications" size={24} color="#3b82f6" />
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <LinearGradient colors={['#f8fafc', '#e2e8f0']} style={styles.container}>
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Notifications</Text>
        <Text style={styles.subtitle}>Stay updated on your time-value tracking</Text>
        {notifications.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={clearNotifications}>
            <Text style={styles.clearButtonText}>Clear All</Text>
          </TouchableOpacity>
        )}
      </Animated.View>

      <View style={styles.content}>
        {notifications.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="notifications-off" size={48} color="#64748b" />
            <Text style={styles.emptyStateText}>No notifications yet</Text>
          </View>
        ) : (
          <FlatList
            data={notifications}
            renderItem={renderNotification}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.notificationList}
          />
        )}

       
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
    marginBottom: 10,
  },
  clearButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
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
  notificationList: {
    paddingBottom: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    fontWeight: '400',
    color: '#475569',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    fontWeight: '400',
    color: '#64748b',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#64748b',
    marginTop: 10,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
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

export default Notifications;