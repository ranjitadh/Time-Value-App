import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Animated, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const Profile = () => {
  const [userName, setUserName] = useState('Ranjit  Adhikari');
  const [hourlyRate, setHourlyRate] = useState('40');
  const [fadeAnim] = useState(new Animated.Value(0));
  

  // Fade-in animation
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={['#f8fafc', '#e2e8f0']} style={styles.container}>
        <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
          <Image
            source={{ uri: 'https://instagram.fktm17-1.fna.fbcdn.net/v/t51.29350-15/329763145_155182917330495_7078106056909854779_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fktm17-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QEZbrq39B0mMWI-p9z9XTzXyDEHa1OxRMagmbliPrP1LUxqS65GCbUqvKxWOmUXBmc&_nc_ohc=-6KhOSV3r0YQ7kNvwGbhiDz&_nc_gid=dzhsVcfpCyKPOonVz9LfBQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzAzMjk5MDI1OTg1MTA1NzEzNQ%3D%3D.3-ccb7-5&oh=00_AfTaGZDQA2EiH0hL4qFhz06In1UKvJ206RIOhseQxLU1xw&oe=688344B5&_nc_sid=22de04' }}
            style={styles.avatar}
          />
          <Text style={styles.title}>Your Profile</Text>
          <Text style={styles.subtitle}>Manage your time-value settings</Text>
        </Animated.View>

        <View style={styles.content}>
          <View style={styles.profileCard}>
            <Text style={styles.sectionTitle}>Personal Details</Text>
            <TextInput
              style={styles.input}
              value={userName}
              onChangeText={setUserName}
              placeholder="Your Name"
              placeholderTextColor="#94a3b8"
            />
            <TextInput
              style={styles.input}
              value={hourlyRate}
              onChangeText={setHourlyRate}
              placeholder="Hourly Rate ($)"
              keyboardType="numeric"
              placeholderTextColor="#94a3b8"
              returnKeyType="done"
            />
                       
          </View>
          

          <View style={styles.statsCard}>
            <Text style={styles.sectionTitle}>Time-Value Stats</Text>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Total Funds:</Text>
              <Text style={styles.statValue}>$0</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Hours Tracked:</Text>
              <Text style={styles.statValue}>200 hours</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Avg. Expense:</Text>
              <Text style={styles.statValue}>$500</Text>


   
            </View>
      
            
          </View>
             <TouchableOpacity className='w-32 text-white' style={styles.navButton}>
              <Text className='text-white font-bold mr-3'>Save</Text>
           
              <Feather name="save" size={24} color="white" />
            </TouchableOpacity>
        
      
             
         
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
    
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#3b82f6',
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
  profileCard: {
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
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  statsCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#475569',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e3a8a',
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

export default Profile;