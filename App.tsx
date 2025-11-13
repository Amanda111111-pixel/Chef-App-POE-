// App.tsx
import React, { useMemo, useState } from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Alert, StyleSheet, Dimensions, Image} from 'react-native';

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fefaf5', // Warm cream background
    paddingBottom: 60
  },
  header: {
    fontSize: 28, 
    fontWeight: '800', 
    textAlign: 'center', 
    marginBottom: 20, 
    marginTop: 20,
    color: '#5d4037', // Deep brown
    fontFamily: 'System', // Will use system font
    letterSpacing: -0.5,
  },
  menuCard: {
    width: (width - 48) / 2,
    backgroundColor: '#fff',
    padding: 12,
    margin: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e8d5c4', // Light brown border
    // Enhanced shadow
    shadowColor: '#5d4037',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%', 
    height: 130, 
    borderRadius: 10, 
    marginBottom: 10,
    // Image shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  dealCard: {
    alignItems: 'center', 
    marginBottom: 20 
  },
  dealImage: { 
    width: 120, 
    height: 120, 
    borderRadius: 12, 
    marginBottom: 8,
    // Enhanced shadow for deal images
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  itemName: {
    fontWeight: '700', 
    fontSize: 16,
    color: '#4e342e', // Dark brown
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 13, 
    color: '#8d6e63', // Medium brown
    lineHeight: 16,
    marginBottom: 6,
  },
  itemPrice: {
    marginTop: 4, 
    fontWeight: '700',
    fontSize: 15,
    color: '#d7ccc8', // Light brown
  },
  screen: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#fefaf5', // Warm cream
  },
  screenHeader: {
    fontSize: 24,
    fontWeight: '800',
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#5d4037', // Deep brown
    backgroundColor: '#fff',
    // Header shadow
    shadowColor: '#5d4037',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 8,
  },
  formCard: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e8d5c4',
    // Enhanced card shadow
    shadowColor: '#5d4037',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#d7ccc8', // Light brown border
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: '#faf4ed', // Very light warm background
    fontSize: 15,
    color: '#5d4037',
    // Input shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  primaryButton: {
    backgroundColor: '#6d4c41', // Rich brown
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    // Button shadow
    shadowColor: '#4e342e',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  ghostButton: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1.5,
    borderColor: '#a1887f', // Medium brown border
    backgroundColor: '#fff',
  },
  ghostButtonText: {
    color: '#5d4037',
    fontWeight: '600',
    fontSize: 15,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderColor: '#e8d5c4',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    // Nav shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  navButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 11,
    color: '#8d6e63',
    fontWeight: '600',
    marginTop: 2,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    backgroundColor: '#8d6e63', // Warm medium brown
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 28,
    // FAB shadow
    shadowColor: '#4e342e',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e8d5c4',
    // Info card shadow
    shadowColor: '#5d4037',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 12,
    color: '#8d6e63',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 6,
    color: '#5d4037',
  },
  filterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1.5,
    borderColor: '#d7ccc8',
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#fff',
    // Filter button shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  filterBtnActive: {
    backgroundColor: '#efebe9', // Very light brown
    borderColor: '#8d6e63',
  },
  avgRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
  },
  menuImage: {
    width: '100%',
    height: 110,
    borderRadius: 8,
    marginBottom: 10,
    // Enhanced menu image shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  secondaryButton: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#d7ccc8',
    alignItems: 'center',
    marginVertical: 6,
    backgroundColor: '#fff',
    // Secondary button shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  listItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 8,
    // List item shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
    marginBottom: 6,
    borderRadius: 10,
    // Menu row shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
  },
  cardDescription: {
    fontSize: 12,
    color: '#8d6e63',
    marginTop: 4,
    marginBottom: 8,
    lineHeight: 16,
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});

// ---------- Types ----------
type Course = 'Starter' | 'Main' | 'Dessert' | 'Drink';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: Course;
  price: number;
  image: string;
};

type Screen = 'Login' | 'Home' | 'Search' | 'Personal' | 'Contact' | 'Deals' | 'Payment' | 'Change' | 'AddMenu' | 'EditMenu';

// ---------- Helpers ----------
const uid = () => Math.random().toString(36).slice(2, 9);
const COURSES: Course[] = ['Starter', 'Main', 'Dessert', 'Drink'];

// Admin credentials
const ADMIN_EMAIL = 'jabarileeds@gmail.com';
const ADMIN_PASSWORD = 'kor';

// UUID v4 helper
function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Navigation Button Component
function NavButton({ label, onPress }: {label: string; onPress: () => void}){
  return (
    <TouchableOpacity style={styles.navButton} onPress={onPress}>
      <Text style={styles.navButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

// Deals Screen - SHOWS ALL ITEMS WITH FILTERING
function DealsScreen({ menuItems, filter, onBack }: { menuItems: MenuItem[]; filter: Course | 'All'; onBack: () => void }) {
  const filtered = filter === 'All' ? menuItems : menuItems.filter(m => m.course === filter);

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Deals{filter !== 'All' ? ` — ${filter}` : ''}</Text>
      <ScrollView style={{ flex: 1, paddingHorizontal: 12 }} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {filtered.map(item => (
            <View key={item.id} style={styles.menuCard}>
              <Image source={{ uri: item.image }} style={styles.menuImage} resizeMode="cover" />
              <View style={styles.cardContent}>
                <Text style={{ fontWeight: '700', fontSize: 14 }}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <Text style={{ color: '#666', fontSize: 12 }}>{item.course} • ${item.price}</Text>
              </View>
            </View>
          ))}
          {filtered.length === 0 && (
            <View style={{ padding: 12, width: '100%' }}>
              <Text>No items found for this filter.</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity style={[styles.ghostButton, { margin: 12 }]} onPress={onBack}>
        <Text style={styles.ghostButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

// Home Screen - SHOWS ALL ITEMS WITH FILTERING
function HomeScreen({
  menuItems,
  totalCount,
  averageByCourse,
  onOpenScreen,
  onSelectCourse,
  currentFilter,
  isAdmin,
  onAddToPersonalMenu,
}: {
  menuItems: MenuItem[];
  totalCount: number;
  averageByCourse: Record<string, number>;
  onOpenScreen: (s: Screen) => void;
  onSelectCourse: (c: Course | 'All') => void;
  currentFilter: Course | 'All';
  isAdmin: boolean;
  onAddToPersonalMenu: (item: MenuItem) => void;
}) {
  const avgAll = menuItems.length
    ? +(menuItems.reduce((s, m) => s + m.price, 0) / menuItems.length).toFixed(2)
    : 0;

  const filtered = currentFilter === 'All' ? menuItems : menuItems.filter(m => m.course === currentFilter);

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Chef's Menu</Text>

      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Total items</Text>
          <Text style={styles.infoValue}>{totalCount}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Avg price</Text>
          <Text style={styles.infoValue}>${avgAll}</Text>
        </View>
      </View>

      {/* FILTERING SYSTEM */}
      <View style={styles.filterRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.filterBtn, currentFilter === 'All' && styles.filterBtnActive]}
            onPress={() => onSelectCourse('All')}
          >
            <Text>All</Text>
          </TouchableOpacity>
          {COURSES.map(c => (
            <TouchableOpacity
              key={c}
              style={[styles.filterBtn, currentFilter === c && styles.filterBtnActive]}
              onPress={() => onSelectCourse(c)}
            >
              <Text>{c}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{ paddingHorizontal: 12 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {filtered.map(item => (
              <View key={item.id} style={styles.menuCard}>
                <Image source={{ uri: item.image }} style={styles.menuImage} resizeMode="cover" />
                <View style={styles.cardContent}>
                  <Text style={{ fontWeight: '700', fontSize: 14 }}>{item.name}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                  <Text style={{ color: '#666', fontSize: 12 }}>{item.course} • ${item.price}</Text>
                  
                  <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => onAddToPersonalMenu(item)}
                  >
                    <Text style={{ color: '#2a9d8f', fontWeight: '700', fontSize: 12 }}>Add to My Menu</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            {filtered.length === 0 && (
              <View style={{ padding: 12, width: '100%' }}>
                <Text>No items found for this filter.</Text>
              </View>
            )}
          </View>

          <View style={{ marginTop: 12 }}>
            <TouchableOpacity style={styles.primaryButton} onPress={() => onOpenScreen('Search')}>
              <Text style={styles.primaryButtonText}>Search menu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={() => onOpenScreen('Deals')}>
              <Text style={styles.ghostButtonText}>View deals</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={() => onOpenScreen('Contact')}>
              <Text style={styles.ghostButtonText}>Contact</Text>
            </TouchableOpacity>
            {isAdmin && (
              <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={() => onOpenScreen('Change')}>
                <Text style={styles.ghostButtonText}>Manage menu</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// Search Screen - SHOWS ALL ITEMS WITH SEARCH AND FILTERING
function SearchScreen({
  menuItems,
  onBack,
  onAddToPersonalMenu,
}: {
  menuItems: MenuItem[];
  onBack: () => void;
  onAddToPersonalMenu: (item: MenuItem) => void;
}) {
  const [query, setQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState<Course | 'All'>('All');

  // Combined search and filter - shows all items when no search query
  const filtered = menuItems.filter(m => {
    if (query === '') {
      // When no search query, show all items that match the filter
      return searchFilter === 'All' || m.course === searchFilter;
    } else {
      // When there's a search query, filter by both search and course
      const matchesSearch = m.name.toLowerCase().includes(query.toLowerCase()) ||
                           m.description.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = searchFilter === 'All' || m.course === searchFilter;
      return matchesSearch && matchesFilter;
    }
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Search</Text>
      <View style={styles.formCard}>
        <TextInput
          placeholder="Search by name or description"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
        />
        
        {/* FILTERING SYSTEM IN SEARCH */}
        <Text style={{ marginTop: 12, marginBottom: 8, fontWeight: '600' }}>Filter by course:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
          <TouchableOpacity
            style={[styles.filterBtn, searchFilter === 'All' && styles.filterBtnActive]}
            onPress={() => setSearchFilter('All')}
          >
            <Text>All</Text>
          </TouchableOpacity>
          {COURSES.map(c => (
            <TouchableOpacity
              key={c}
              style={[styles.filterBtn, searchFilter === c && styles.filterBtnActive]}
              onPress={() => setSearchFilter(c)}
            >
              <Text>{c}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>
          {filtered.length} items found {searchFilter !== 'All' ? `in ${searchFilter}` : ''}
          {query && ` matching "${query}"`}
        </Text>

        <FlatList
          data={filtered}
          style={{ maxHeight: 400 }}
          keyExtractor={i => i.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.listItem} 
              onPress={() => onAddToPersonalMenu(item)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image 
                  source={{ uri: item.image }} 
                  style={{ width: 60, height: 60, borderRadius: 6, marginRight: 12 }} 
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: '700' }}>{item.name}</Text>
                  <Text style={{ color: '#666', fontSize: 12 }}>{item.description}</Text>
                  <Text style={{ color: '#666', fontSize: 12 }}>{item.course} • ${item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={{ padding: 20, alignItems: 'center' }}>
              <Text style={{ color: '#666' }}>No items found</Text>
              <Text style={{ color: '#666', fontSize: 12, marginTop: 4 }}>
                {query ? 'Try a different search term' : 'Search for menu items above'}
              </Text>
            </View>
          }
        />
        <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={onBack}>
          <Text style={styles.ghostButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Personal Menu Screen - SHOWS ALL SELECTED ITEMS
function PersonalMenuScreen({
  personalMenuItems,
  onBack,
  onPay,
  onRemoveFromPersonalMenu,
}: {
  personalMenuItems: MenuItem[];
  onBack: () => void;
  onPay: () => void;
  onRemoveFromPersonalMenu: (id: string) => void;
}) {
  const totalPrice = personalMenuItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Your Personal Menu</Text>
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={{ paddingHorizontal: 12 }}>
          {personalMenuItems.length === 0 ? (
            <View style={{ padding: 20, alignItems: 'center' }}>
              <Text style={{ color: '#666', textAlign: 'center' }}>
                Your personal menu is empty.{'\n'}Add items from the Home or Search screens!
              </Text>
            </View>
          ) : (
            <>
              {personalMenuItems.map(item => (
                <View key={item.id} style={styles.menuRow}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <Image 
                      source={{ uri: item.image }} 
                      style={{ width: 60, height: 60, borderRadius: 6, marginRight: 12 }} 
                    />
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontWeight: '700' }}>{item.name}</Text>
                      <Text style={{ color: '#666', fontSize: 12 }}>{item.course}</Text>
                      <Text style={{ color: '#2a9d8f', fontWeight: '600' }}>${item.price}</Text>
                    </View>
                  </View>
                  <TouchableOpacity 
                    style={[styles.secondaryButton, { paddingHorizontal: 8 }]} 
                    onPress={() => onRemoveFromPersonalMenu(item.id)}
                  >
                    <Text style={{ color: '#e76f51', fontWeight: '700', fontSize: 12 }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))}
              
              <View style={[styles.infoCard, { marginTop: 16 }]}>
                <Text style={styles.infoTitle}>Total Price</Text>
                <Text style={[styles.infoValue, { color: '#2a9d8f' }]}>${totalPrice}</Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>

      <View style={{ paddingHorizontal: 12 }}>
        {personalMenuItems.length > 0 && (
          <TouchableOpacity style={styles.primaryButton} onPress={onPay}>
            <Text style={styles.primaryButtonText}>Proceed to Payment (${totalPrice})</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={onBack}>
          <Text style={styles.ghostButtonText}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Login Screen
function LoginScreen({
  email,
  password,
  setEmail,
  setPassword,
  username,
  setUsername,
  onLogin,
  onSignup,
}: {
  email: string;
  password: string;
  setEmail: (s: string) => void;
  setPassword: (s: string) => void;
  username: string;
  setUsername: (s: string) => void;
  onLogin: () => void;
  onSignup: () => void;
}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Welcome</Text>
      <View style={styles.formCard}>
        <TextInput
          placeholder="Username (optional)"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.primaryButton} onPress={onLogin}>
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={onSignup}>
          <Text style={styles.ghostButtonText}>Sign up (demo)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Contact Screen - with message box to send to chef
function ContactScreen({ onBack }: { onBack: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Missing Information', 'Please fill in all fields before sending your message.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    setIsSending(true);
    
    // Simulate sending message (in a real app, this would call an API)
    setTimeout(() => {
      setIsSending(false);
      Alert.alert(
        'Message Sent!', 
        `Thank you ${name.trim()}! Your message has been sent to the chef. We'll get back to you within 24 hours.`,
        [
          {
            text: 'OK',
            onPress: () => {
              // Clear the form
              setName('');
              setEmail('');
              setMessage('');
              onBack();
            }
          }
        ]
      );
    }, 1500);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Contact The Chef</Text>
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.formCard}>
          <Text style={{ 
            fontSize: 16, 
            color: '#5d4037', 
            marginBottom: 16, 
            lineHeight: 22,
            textAlign: 'center'
          }}>
            Have questions, feedback, or special requests? Send a message directly to our chef!
          </Text>

          {/* Contact Information */}
          <View style={{ 
            backgroundColor: '#faf4ed', 
            padding: 16, 
            borderRadius: 8, 
            marginBottom: 20,
            borderLeftWidth: 4,
            borderLeftColor: '#8d6e63'
          }}>
            <Text style={{ fontWeight: '700', color: '#5d4037', marginBottom: 8 }}>
              Contact Information
            </Text>
            <Text style={{ color: '#8d6e63', marginBottom: 4 }}>
              📧 Email: chef@tastebuddies.example
            </Text>
            <Text style={{ color: '#8d6e63', marginBottom: 4 }}>
              📞 Phone: +1 (555) 123-CHEF
            </Text>
            <Text style={{ color: '#8d6e63' }}>
              ⏰ Hours: Mon-Sun, 9AM-10PM
            </Text>
          </View>

          {/* Message Form */}
          <Text style={{ 
            fontWeight: '700', 
            color: '#5d4037', 
            marginBottom: 16,
            fontSize: 18
          }}>
            Send a Message
          </Text>

          <TextInput
            placeholder="Your Name *"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#a1887f"
          />
          
          <TextInput
            placeholder="Your Email *"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#a1887f"
          />
          
          <TextInput
            placeholder="Your Message to the Chef *"
            value={message}
            onChangeText={setMessage}
            style={[styles.input, { 
              height: 120, 
              textAlignVertical: 'top',
              paddingTop: 12
            }]}
            multiline
            numberOfLines={5}
            placeholderTextColor="#a1887f"
          />

          <Text style={{ 
            fontSize: 12, 
            color: '#8d6e63', 
            marginBottom: 16,
            fontStyle: 'italic'
          }}>
            * Required fields. We typically respond within 24 hours.
          </Text>

          {/* Action Buttons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity 
              style={[styles.ghostButton, { flex: 1, marginRight: 8 }]} 
              onPress={clearForm}
              disabled={isSending}
            >
              <Text style={styles.ghostButtonText}>Clear</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.primaryButton, { flex: 2 }]} 
              onPress={handleSendMessage}
              disabled={isSending}
            >
              {isSending ? (
                <Text style={styles.primaryButtonText}>
                  Sending...
                </Text>
              ) : (
                <Text style={styles.primaryButtonText}>
                  Send Message to Chef
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Quick Responses */}
          <View style={{ marginTop: 20, padding: 16, backgroundColor: '#f8f9fa', borderRadius: 8 }}>
            <Text style={{ fontWeight: '600', color: '#5d4037', marginBottom: 8 }}>
              💡 Quick Message Ideas:
            </Text>
            <Text style={{ fontSize: 12, color: '#8d6e63', lineHeight: 16 }}>
              • "I have dietary restrictions - can you accommodate?"
            </Text>
            <Text style={{ fontSize: 12, color: '#8d6e63', lineHeight: 16 }}>
              • "Loved the [dish name]! Could I get the recipe?"
            </Text>
            <Text style={{ fontSize: 12, color: '#8d6e63', lineHeight: 16 }}>
              • "Do you offer cooking classes or private events?"
            </Text>
          </View>

          <TouchableOpacity 
            style={[styles.ghostButton, { marginTop: 16 }]} 
            onPress={onBack}
            disabled={isSending}
          >
            <Text style={styles.ghostButtonText}>Back to Menu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// Payment Screen - simple simulated payment flow
function PaymentScreen({ onBack, onPaySuccess }: { onBack: () => void; onPaySuccess: () => void }) {
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePay = () => {
    if (!nameOnCard || !cardNumber || !cvv) {
      Alert.alert('Missing info', 'Please fill in all payment fields.');
      return;
    }
    // In a real app you would process payment here.
    onPaySuccess();
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Payment</Text>
      <View style={styles.formCard}>
        <Text style={{ fontWeight: '700', marginBottom: 6 }}>Enter payment details</Text>

        <TextInput
          placeholder="Name on card"
          value={nameOnCard}
          onChangeText={setNameOnCard}
          style={styles.input}
        />
        <TextInput
          placeholder="Card number"
          value={cardNumber}
          onChangeText={setCardNumber}
          style={styles.input}
          keyboardType="number-pad"
        />
        <TextInput
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          style={styles.input}
          keyboardType="number-pad"
          secureTextEntry
        />

        <TouchableOpacity style={styles.primaryButton} onPress={handlePay}>
          <Text style={styles.primaryButtonText}>Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={onBack}>
          <Text style={styles.ghostButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Add Menu Screen - simple form to add a new menu item
// Add Menu Screen - simple form to add a new menu item
function AddMenuScreen({
  onAdd,
  onCancel,
}: {
  onAdd: (item: Omit<MenuItem, 'id'>) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>('Starter');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = () => {
    // Simple validation - just check for name and valid price
    if (!name.trim()) {
      Alert.alert('Missing Name', 'Please enter a name for the menu item.');
      return;
    }
    
    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      Alert.alert('Invalid Price', 'Please enter a valid price greater than 0.');
      return;
    }

    const newItem: Omit<MenuItem, 'id'> = {
      name: name.trim(),
      description: description.trim(),
      course,
      price: priceValue,
      image: image.trim() || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    };
    
    onAdd(newItem);
    
    // Clear the form
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
    setCourse('Starter');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Add Menu Item</Text>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.formCard}>
          <TextInput
            placeholder="Name *"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
            multiline
          />
          
          <Text style={{ marginTop: 12, marginBottom: 8, fontWeight: '600' }}>Course *</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
            <TouchableOpacity
              style={[styles.filterBtn, course === 'Starter' && styles.filterBtnActive]}
              onPress={() => setCourse('Starter')}
            >
              <Text>Starter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterBtn, course === 'Main' && styles.filterBtnActive]}
              onPress={() => setCourse('Main')}
            >
              <Text>Main</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterBtn, course === 'Dessert' && styles.filterBtnActive]}
              onPress={() => setCourse('Dessert')}
            >
              <Text>Dessert</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterBtn, course === 'Drink' && styles.filterBtnActive]}
              onPress={() => setCourse('Drink')}
            >
              <Text>Drink</Text>
            </TouchableOpacity>
          </ScrollView>

          <TextInput
            placeholder="Price * (e.g., 12.99)"
            value={price}
            onChangeText={setPrice}
            style={styles.input}
            keyboardType="decimal-pad"
          />
          
          <TextInput
            placeholder="Image URL (optional)"
            value={image}
            onChangeText={setImage}
            style={styles.input}
            autoCapitalize="none"
          />
          
          <Text style={{ fontSize: 12, color: '#666', marginTop: 4, marginBottom: 12 }}>
            * Required fields
          </Text>

          <TouchableOpacity style={styles.primaryButton} onPress={handleAdd}>
            <Text style={styles.primaryButtonText}>Add Item</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={onCancel}>
            <Text style={styles.ghostButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// Edit Menu Screen - edit an existing menu item
function EditMenuScreen({
  item,
  onUpdate,
  onCancel,
}: {
  item: MenuItem;
  onUpdate: (id: string, updatedItem: Omit<MenuItem, 'id'>) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [course, setCourse] = useState<Course>(item.course);
  const [price, setPrice] = useState(String(item.price));
  const [image, setImage] = useState(item.image);

  // keep fields in sync if the item prop changes while mounted
  React.useEffect(() => {
    setName(item.name);
    setDescription(item.description);
    setCourse(item.course);
    setPrice(String(item.price));
    setImage(item.image);
  }, [item]);

  const handleUpdate = () => {
    if (!name.trim() || !description.trim() || !price.trim() || isNaN(Number(price))) {
      Alert.alert('Invalid input', 'Please provide a valid name, description and numeric price.');
      return;
    }
    const updated: Omit<MenuItem, 'id'> = {
      name: name.trim(),
      description: description.trim(),
      course,
      price: Number(price),
      image: image.trim() || 'https://via.placeholder.com/150',
    };
    onUpdate(item.id, updated);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Edit Menu Item</Text>
      <View style={styles.formCard}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={[styles.input, { height: 80 }]}
          multiline
        />
        <TextInput
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Image URL (optional)"
          value={image}
          onChangeText={setImage}
          style={styles.input}
          autoCapitalize="none"
        />

        <Text style={{ marginTop: 12, marginBottom: 8, fontWeight: '600' }}>Course</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
          <TouchableOpacity
            style={[styles.filterBtn, course === 'Starter' && styles.filterBtnActive]}
            onPress={() => setCourse('Starter')}
          >
            <Text>Starter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, course === 'Main' && styles.filterBtnActive]}
            onPress={() => setCourse('Main')}
          >
            <Text>Main</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, course === 'Dessert' && styles.filterBtnActive]}
            onPress={() => setCourse('Dessert')}
          >
            <Text>Dessert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, course === 'Drink' && styles.filterBtnActive]}
            onPress={() => setCourse('Drink')}
          >
            <Text>Drink</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity style={styles.primaryButton} onPress={handleUpdate}>
          <Text style={styles.primaryButtonText}>Save Changes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={onCancel}>
          <Text style={styles.ghostButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// MAIN APP COMPONENT
export default function App() {
  const [screen, setScreen] = useState<Screen>('Login');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // Menu items state - ALL WITH WORKING IMAGE LINKS
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    // 🌿 Starters - Working food images
    { id: uuidv4(), name: 'Tomato Bruschetta', description: 'Toasted sourdough topped with marinated cherry tomatoes and basil.', course: 'Starter', price: 45, image: 'https://images.unsplash.com/photo-1572695157363-4a7d7f4c12d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: uuidv4(), name: 'Avocado Toast', description: 'Creamy smashed avocado on seeded bread with lemon drizzle.', course: 'Starter', price: 55, image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: uuidv4(), name: 'Caprese Salad', description: 'Fresh mozzarella, ripe tomatoes, and basil with olive oil.', course: 'Starter', price: 60, image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },

    // 🍝 Mains - Working food images
    { id: uuidv4(), name: 'Creamy Mushroom Pasta', description: 'Penne in rich garlic mushroom sauce.', course: 'Main', price: 85, image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: uuidv4(), name: 'Grilled Salmon', description: 'Lemon butter salmon with roasted vegetables.', course: 'Main', price: 120, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: uuidv4(), name: 'Beef Steak', description: 'Juicy sirloin steak with creamy mash and herbs.', course: 'Main', price: 150, image: 'https://images.unsplash.com/photo-1600891964092-4314c7888b63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: uuidv4(), name: 'Vegan Buddha Bowl', description: 'Quinoa, roasted chickpeas, avocado, and tahini dressing.', course: 'Main', price: 95, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },

    // 🍰 Desserts - Working food images
    { id: uuidv4(), name: 'Chocolate Mousse', description: 'Light and airy cocoa mousse with cream topping.', course: 'Dessert', price: 40, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: uuidv4(), name: 'Cheesecake Slice', description: 'Classic creamy cheesecake with berry sauce.', course: 'Dessert', price: 50, image: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: uuidv4(), name: 'Brownie Sundae', description: 'Warm chocolate brownie with ice cream.', course: 'Dessert', price: 60, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },

    // ☕ Drinks - Working drink images
    { id: uuidv4(), name: 'Iced Coffee', description: 'Cold brew with a splash of milk and ice.', course: 'Drink', price: 35, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: uuidv4(), name: 'Berry Smoothie', description: 'Mixed berries, banana, and yogurt smoothie.', course: 'Drink', price: 45, image: 'https://images.unsplash.com/photo-1570194065650-74c6c17fcfa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: uuidv4(), name: 'Matcha Latte', description: 'Japanese green tea latte with almond milk.', course: 'Drink', price: 40, image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
    { id: uuidv4(), name: 'Fresh Lemonade', description: 'Sparkling homemade lemonade with mint leaves.', course: 'Drink', price: 30, image: 'https://images.unsplash.com/photo-1523371683702-309cffa2e52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
  ]);

  // NEW: Personal menu items state
  const [personalMenuItems, setPersonalMenuItems] = useState<MenuItem[]>([]);
  // State for editing items (Edit screen)
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const updateMenuItem = (id: string, updatedItem: Omit<MenuItem, 'id'>) => {
    setMenuItems(prev => prev.map(item => (item.id === id ? { ...updatedItem, id } : item)));
    Alert.alert('Updated', `${updatedItem.name} has been updated.`);
    setEditingItem(null);
    setScreen('Home');
  };

  const [selectedCourseFilter, setSelectedCourseFilter] = useState<Course | 'All'>('All');

  // Derived values
  const totalCount = menuItems.length;
  const averageByCourse = useMemo(() => {
    const byCourse: Record<string, { total: number; count: number }> = {};
    COURSES.forEach(c => (byCourse[c] = { total: 0, count: 0 }));
    menuItems.forEach(m => {
      byCourse[m.course].total += m.price;
      byCourse[m.course].count += 1;
    });
    const avg: Record<string, number> = {};
    COURSES.forEach(c => {
      avg[c] = byCourse[c].count ? +(byCourse[c].total / byCourse[c].count).toFixed(2) : 0;
    });
    return avg;
  }, [menuItems]);

  // Actions
  const login = () => {
    if (!userEmail) return Alert.alert('Please enter email');
    if (userEmail.toLowerCase() === ADMIN_EMAIL && userPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    setScreen('Home');
  };

  const logout = () => {
    setUserEmail(''); setUserPassword(''); setUsername(''); setIsAdmin(false);
    setPersonalMenuItems([]);
    setScreen('Login');
  };

  const addMenuItem = (item: Omit<MenuItem,'id'>) => {
    const newIt: MenuItem = { ...item, id: uid() };
    setMenuItems(prev => [newIt, ...prev]);
    Alert.alert('Added', `${item.name} added to the menu.`);
    setScreen('Home');
  };

  const removeMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(i => i.id !== id));
  };

  // NEW: Add item to personal menu
  const addToPersonalMenu = (item: MenuItem) => {
    setPersonalMenuItems(prev => [...prev, { ...item, id: uid() }]);
    Alert.alert('Added', `${item.name} added to your personal menu!`);
  };

  // NEW: Remove item from personal menu
  const removeFromPersonalMenu = (id: string) => {
    setPersonalMenuItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'Login' && (
        <LoginScreen
          email={userEmail}
          password={userPassword}
          setEmail={setUserEmail}
          setPassword={setUserPassword}
          username={username}
          setUsername={setUsername}
          onLogin={login}
          onSignup={() => Alert.alert('Sign up', 'Sign-up would be implemented here (demo).')}
        />
      )}

      {screen === 'Home' && (
        <HomeScreen
          menuItems={menuItems}
          totalCount={totalCount}
          averageByCourse={averageByCourse}
          onOpenScreen={setScreen}
          onSelectCourse={setSelectedCourseFilter}
          currentFilter={selectedCourseFilter}
          isAdmin={isAdmin}
          onAddToPersonalMenu={addToPersonalMenu}
        />
      )}

      {screen === 'Search' && (
        <SearchScreen
          menuItems={menuItems}
          onBack={() => setScreen('Home')}
          onAddToPersonalMenu={addToPersonalMenu}
        />
      )}

      {screen === 'Personal' && (
        <PersonalMenuScreen
          personalMenuItems={personalMenuItems}
          onBack={() => setScreen('Home')}
          onPay={() => setScreen('Payment')}
          onRemoveFromPersonalMenu={removeFromPersonalMenu}
        />
      )}

      {screen === 'Contact' && <ContactScreen onBack={() => setScreen('Home')} />}
      {screen === 'Deals' && <DealsScreen menuItems={menuItems} filter={selectedCourseFilter} onBack={() => setScreen('Home')} />}
      {screen === 'Payment' && <PaymentScreen onBack={() => setScreen('Home')} onPaySuccess={() => { Alert.alert('Paid', 'Payment simulated.'); setScreen('Home'); }} />}
      {screen === 'AddMenu' && <AddMenuScreen onAdd={addMenuItem} onCancel={() => setScreen('Home')} />}

      {screen === 'EditMenu' && editingItem && (
        <EditMenuScreen
          item={editingItem}
          onUpdate={updateMenuItem}
          onCancel={() => { setEditingItem(null); setScreen('Home'); }}
        />
      )}

      {screen === 'Change' && isAdmin && (
        <View style={styles.screen}>
          <Text style={styles.screenHeader}>Manage Menu</Text>
          <ScrollView style={{ flex: 1, paddingHorizontal: 12 }}>
            {menuItems.map(item => (
              <View key={item.id} style={styles.menuRow}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                  <Image 
                    source={{ uri: item.image }} 
                    style={{ width: 60, height: 60, borderRadius: 6, marginRight: 12 }} 
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '700' }}>{item.name}</Text>
                    <Text style={{ color: '#666' }}>{item.course} • ${item.price}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity 
                    style={[styles.secondaryButton, { marginRight: 8, paddingHorizontal: 8 }]} 
                    onPress={() => {
                      setEditingItem(item);
                      setScreen('EditMenu');
                    }}
                  >
                    <Text style={{ color: '#2a9d8f', fontWeight: '700', fontSize: 12 }}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.secondaryButton, { paddingHorizontal: 8 }]} 
                    onPress={() => removeMenuItem(item.id)}
                  >
                    <Text style={{ color: '#e76f51', fontWeight: '700', fontSize: 12 }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={[styles.ghostButton, { margin: 12 }]} onPress={() => setScreen('Home')}>
            <Text style={styles.ghostButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Bottom Navigation */}
      {screen !== 'Login' && (
        <View style={styles.bottomNav}>
          <NavButton label="Home" onPress={() => setScreen('Home')} />
          <NavButton label="Search" onPress={() => setScreen('Search')} />
          <NavButton label="Contact" onPress={() => setScreen('Contact')} />
          <NavButton label="Deals" onPress={() => setScreen('Deals')} />
          <NavButton label={isAdmin ? 'Change' : 'Personal'} onPress={() => setScreen(isAdmin ? 'Change' : 'Personal')} />
          <NavButton label="Logout" onPress={logout} />
        </View>
      )}

      {/* Floating Action Button */}
      {isAdmin && screen !== 'AddMenu' && screen !== 'Login' && (
        <TouchableOpacity style={styles.fab} onPress={() => setScreen('AddMenu')}>
          <Text style={{color:'#fff', fontWeight:'700'}}>+ Add</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}