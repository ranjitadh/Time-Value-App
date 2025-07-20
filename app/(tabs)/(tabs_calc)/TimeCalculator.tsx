import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Animated, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

type Calculation = {
  id: string;
  expense: string;
  hourlyRate: string;
  timeValue: string;
  timestamp: string;
};

const TimeCalculator = () => {
  const [expense, setExpense] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [calculations, setCalculations] = useState<Calculation[]>([]);
  const [fadeAnim] = useState(new Animated.Value(0));

  // Fade-in animation
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const calculateTimeValue = () => {
    const rate = parseFloat(hourlyRate);
    const cost = parseFloat(expense);
    if (rate > 0 && cost > 0) {
      const hours = (cost / rate).toFixed(2);
      const newCalculation: Calculation = {
        id: Date.now().toString(),
        expense: cost.toFixed(2),
        hourlyRate: rate.toFixed(2),
        timeValue: `${hours} hours`,
        timestamp: new Date().toLocaleString(),
      };
      setCalculations([newCalculation, ...calculations]);
      setExpense('');
      setHourlyRate('');
      Keyboard.dismiss();
    } else {
      alert('Please enter valid numbers for expense and hourly rate.');
    }
  };

  const renderCalculation = ({ item }: { item: Calculation }) => (
    <View style={styles.calculationCard}>
      <View style={styles.calculationIcon}>
        <Ionicons name="time-outline" size={24} color="#3b82f6" />
      </View>
      <View style={styles.calculationContent}>
        <Text style={styles.calculationTitle}>${item.expense} = {item.timeValue}</Text>
        <Text style={styles.calculationDetails}>Hourly Rate: ${item.hourlyRate}</Text>
        <Text style={styles.calculationTimestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={['#f8fafc', '#e2e8f0']} style={styles.container}>
        <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
          <Text style={styles.title}>Time Calculator</Text>
          <Text style={styles.subtitle}>Calculate the time value of your expenses</Text>
        </Animated.View>

        <View style={styles.content}>
          <View style={styles.calculatorCard}>
            <Text style={styles.sectionTitle}>Calculate Time Value</Text>
            <TextInput
              style={styles.input}
              placeholder="Expense ($)"
              keyboardType="numeric"
              value={expense}
              onChangeText={setExpense}
              placeholderTextColor="#94a3b8"
              returnKeyType="done"
            />
            <TextInput
              style={styles.input}
              placeholder="Hourly Rate ($)"
              keyboardType="numeric"
              value={hourlyRate}
              onChangeText={setHourlyRate}
              placeholderTextColor="#94a3b8"
              returnKeyType="done"
            />
            <TouchableOpacity style={styles.calculateButton} onPress={calculateTimeValue}>
              <Text style={styles.calculateButtonText}>Calculate</Text>
            </TouchableOpacity>
          </View>
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
  calculatorCard: {
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
  calculateButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  calculateButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  historyCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 20,
    flex: 1,
  },
  calculationList: {
    paddingBottom: 20,
  },
  calculationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  calculationIcon: {
    marginRight: 12,
  },
  calculationContent: {
    flex: 1,
  },
  calculationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 4,
  },
  calculationDetails: {
    fontSize: 14,
    fontWeight: '400',
    color: '#475569',
    marginBottom: 4,
  },
  calculationTimestamp: {
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
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

export default TimeCalculator;