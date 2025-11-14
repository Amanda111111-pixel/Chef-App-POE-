// App.tsx
import React, { useMemo, useState } from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Alert, StyleSheet, Dimensions, Image} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fefaf5',
    paddingBottom: 60
  },
  header: {
    fontSize: 28, 
    fontWeight: '800', 
    textAlign: 'center', 
    marginBottom: 20, 
    marginTop: 20,
    color: '#5d4037',
    fontFamily: 'System',
    letterSpacing: -0.5,
  },
  menuCard: {
    width: (width - 48) / 2,
    backgroundColor: '#fff',
    padding: 12,
    margin: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e8d5c4',
    shadowColor: '#5d4037',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },
  image: {
    width: '100%', 
    height: 130, 
    borderRadius: 12, 
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dealCard: {
    alignItems: 'center', 
    marginBottom: 20 
  },
  dealImage: { 
    width: 120, 
    height: 120, 
    borderRadius: 16, 
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  itemName: {
    fontWeight: '800', 
    fontSize: 16,
    color: '#4e342e',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 13, 
    color: '#8d6e63',
    lineHeight: 16,
    marginBottom: 6,
  },
  itemPrice: {
    marginTop: 4, 
    fontWeight: '800',
    fontSize: 15,
    color: '#d7ccc8',
  },
  screen: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#fefaf5',
  },
  screenHeader: {
    fontSize: 26,
    fontWeight: '800',
    paddingHorizontal: 20,
    paddingVertical: 16,
    color: '#5d4037',
    backgroundColor: '#fff',
    shadowColor: '#5d4037',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#f5efe8',
  },
  formCard: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e8d5c4',
    shadowColor: '#5d4037',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#e8d5c4',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 8,
    backgroundColor: '#faf7f2',
    fontSize: 16,
    color: '#5d4037',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  primaryButton: {
    backgroundColor: '#6d4c41',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#4e342e',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  ghostButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 2,
    borderColor: '#a1887f',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
    borderTopWidth: 2,
    borderColor: '#e8d5c4',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 12,
  },
  navButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  navButtonText: {
    fontSize: 11,
    color: '#8d6e63',
    fontWeight: '600',
    marginTop: 4,
  },
  fabContainer: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    alignItems: 'flex-end',
  },
  fab: {
    backgroundColor: '#8d6e63',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 28,
    shadowColor: '#4e342e',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fabText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 6,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e8d5c4',
    shadowColor: '#5d4037',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 12,
    color: '#8d6e63',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 8,
    color: '#5d4037',
  },
  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#d7ccc8',
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  filterBtnActive: {
    backgroundColor: '#6d4c41',
    borderColor: '#5d4037',
  },
  filterBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8d6e63',
  },
  filterBtnTextActive: {
    color: '#fff',
  },
  avgRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
  },
  menuImage: {
    width: '100%',
    height: 110,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  secondaryButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#d7ccc8',
    alignItems: 'center',
    marginVertical: 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 3,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
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
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#5d4037',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  tabButtonActive: {
    backgroundColor: '#6d4c41',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8d6e63',
  },
  tabButtonTextActive: {
    color: '#fff',
  },
  saleBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ff6b6b',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  saleBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '800',
  },
  emptyState: {
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 16,
    shadowColor: '#5d4037',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#8d6e63',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '600',
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#a1887f',
    textAlign: 'center',
    lineHeight: 20,
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

type DealItem = {
  id: string;
  menuItemId: string;
  previousPrice: number;
  newPrice: number;
  isActive: boolean;
};

type Screen = 'Login' | 'Home' | 'Search' | 'Personal' | 'Contact' | 'Deals' | 'Payment' | 'Change' | 'AddMenu' | 'EditMenu' | 'DealManagement' | 'Manage';

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

// New Manage Screen with Tabs
function ManageScreen({
  menuItems,
  dealItems,
  onUpdateDeals,
  onEditItem,
  onRemoveItem,
  onOpenScreen,
  onBack,
}: {
  menuItems: MenuItem[];
  dealItems: DealItem[];
  onUpdateDeals: (deals: DealItem[]) => void;
  onEditItem: (item: MenuItem) => void;
  onRemoveItem: (id: string) => void;
  onOpenScreen: (screen: Screen) => void;
  onBack: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'menu' | 'deals'>('menu');

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Manage Restaurant</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'menu' && styles.tabButtonActive]}
          onPress={() => setActiveTab('menu')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'menu' && styles.tabButtonTextActive]}>
            Menu Items ({menuItems.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'deals' && styles.tabButtonActive]}
          onPress={() => setActiveTab('deals')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'deals' && styles.tabButtonTextActive]}>
            Deals ({dealItems.filter(d => d.isActive).length})
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'menu' ? (
        <MenuManagementTab
          menuItems={menuItems}
          onEditItem={onEditItem}
          onRemoveItem={onRemoveItem}
          onOpenScreen={onOpenScreen}
        />
      ) : (
        <DealsManagementTab
          menuItems={menuItems}
          dealItems={dealItems}
          onUpdateDeals={onUpdateDeals}
        />
      )}

      <TouchableOpacity style={[styles.ghostButton, { margin: 16 }]} onPress={onBack}>
        <Text style={styles.ghostButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

// Menu Management Tab
function MenuManagementTab({
  menuItems,
  onEditItem,
  onRemoveItem,
  onOpenScreen,
}: {
  menuItems: MenuItem[];
  onEditItem: (item: MenuItem) => void;
  onRemoveItem: (id: string) => void;
  onOpenScreen: (screen: Screen) => void;
}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => onOpenScreen('AddMenu')}
        >
          <Text style={styles.primaryButtonText}>+ Add New Menu Item</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
        {menuItems.map(item => (
          <View key={item.id} style={styles.menuRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Image 
                source={{ uri: item.image }} 
                style={{ width: 70, height: 70, borderRadius: 8, marginRight: 16 }} 
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '700', fontSize: 16, color: '#5d4037' }}>{item.name}</Text>
                <Text style={{ color: '#8d6e63', fontSize: 13, fontWeight: '600' }}>{item.course}</Text>
                <Text style={{ color: '#5d4037', fontWeight: '700', fontSize: 16 }}>${item.price}</Text>
                <Text style={{ color: '#8d6e63', fontSize: 12, marginTop: 4 }} numberOfLines={2}>
                  {item.description}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity 
                style={[styles.secondaryButton, { marginRight: 8, paddingHorizontal: 12 }]} 
                onPress={() => onEditItem(item)}
              >
                <Text style={{ color: '#2a9d8f', fontWeight: '700', fontSize: 12 }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.secondaryButton, { paddingHorizontal: 12 }]} 
                onPress={() => onRemoveItem(item.id)}
              >
                <Text style={{ color: '#e76f51', fontWeight: '700', fontSize: 12 }}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        
        {menuItems.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              No menu items yet.{'\n'}Add your first menu item to get started!
            </Text>
            <TouchableOpacity 
              style={[styles.primaryButton, { marginTop: 16 }]}
              onPress={() => onOpenScreen('AddMenu')}
            >
              <Text style={styles.primaryButtonText}>Add First Item</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

// FIXED Deals Management Tab - Now with proper state synchronization
function DealsManagementTab({
  menuItems,
  dealItems,
  onUpdateDeals,
}: {
  menuItems: MenuItem[];
  dealItems: DealItem[];
  onUpdateDeals: (deals: DealItem[]) => void;
}) {
  const [selectedItems, setSelectedItems] = useState<DealItem[]>(dealItems);

  // Sync local state with prop changes
  React.useEffect(() => {
    setSelectedItems(dealItems);
  }, [dealItems]);

  const toggleItemSelection = (menuItem: MenuItem) => {
    setSelectedItems(prev => {
      const existingIndex = prev.findIndex(item => item.menuItemId === menuItem.id);
      
      if (existingIndex >= 0) {
        return prev.filter(item => item.menuItemId !== menuItem.id);
      } else {
        const newDeal: DealItem = {
          id: uuidv4(),
          menuItemId: menuItem.id,
          previousPrice: menuItem.price,
          newPrice: Math.max(1, Math.floor(menuItem.price * 0.8)),
          isActive: true,
        };
        return [...prev, newDeal];
      }
    });
  };

  const updateDealPrice = (menuItemId: string, field: 'previousPrice' | 'newPrice', value: string) => {
    const numValue = parseFloat(value) || 0;
    setSelectedItems(prev =>
      prev.map(item =>
        item.menuItemId === menuItemId ? { ...item, [field]: numValue } : item
      )
    );
  };

  const saveDeals = () => {
    onUpdateDeals(selectedItems);
    Alert.alert('Success', 'Deals have been updated successfully!');
  };

  const isItemSelected = (menuItemId: string) => {
    return selectedItems.some(item => item.menuItemId === menuItemId);
  };

  const getDealForItem = (menuItemId: string) => {
    return selectedItems.find(item => item.menuItemId === menuItemId);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <Text style={{ 
          fontSize: 16, 
          color: '#5d4037', 
          marginBottom: 16, 
          lineHeight: 22,
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Select menu items to feature on the deals page and set their special prices.
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
        {menuItems.map(item => {
          const isSelected = isItemSelected(item.id);
          const deal = getDealForItem(item.id);
          
          return (
            <View key={item.id} style={[
              styles.menuRow,
              { 
                backgroundColor: isSelected ? '#f8f5f0' : '#fff',
                borderLeftWidth: 4,
                borderLeftColor: isSelected ? '#6d4c41' : 'transparent'
              }
            ]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Image 
                  source={{ uri: item.image }} 
                  style={{ width: 70, height: 70, borderRadius: 8, marginRight: 16 }} 
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: '700', fontSize: 16, color: '#5d4037' }}>{item.name}</Text>
                  <Text style={{ color: '#8d6e63', fontSize: 13, fontWeight: '600' }}>{item.course}</Text>
                  <Text style={{ color: '#5d4037', fontWeight: '700', fontSize: 16 }}>${item.price}</Text>
                  <Text style={{ color: '#8d6e63', fontSize: 12, marginTop: 4 }} numberOfLines={2}>
                    {item.description}
                  </Text>
                  
                  {/* Deal Selection Toggle */}
                  <TouchableOpacity 
                    style={{ 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      marginTop: 12,
                      padding: 8,
                      backgroundColor: isSelected ? '#e8f5e8' : '#f5f5f5',
                      borderRadius: 8
                    }}
                    onPress={() => toggleItemSelection(item)}
                  >
                    <View style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor: isSelected ? '#28a745' : '#ccc',
                      backgroundColor: isSelected ? '#28a745' : 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 8
                    }}>
                      {isSelected && (
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>✓</Text>
                      )}
                    </View>
                    <Text style={{ 
                      color: isSelected ? '#28a745' : '#666', 
                      fontWeight: '600',
                      fontSize: 14
                    }}>
                      {isSelected ? 'Selected for Deals' : 'Add to Deals'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Deal Price Inputs */}
              {isSelected && deal && (
                <View style={{ 
                  width: '100%', 
                  marginTop: 12, 
                  padding: 16, 
                  backgroundColor: '#faf7f2', 
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#e8d5c4'
                }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <Text style={{ fontWeight: '700', color: '#5d4037', fontSize: 15 }}>
                      Set Deal Prices:
                    </Text>
                    <TouchableOpacity 
                      style={{ 
                        paddingHorizontal: 12,
                        paddingVertical: 6,
                        backgroundColor: '#e76f51',
                        borderRadius: 8
                      }}
                      onPress={() => toggleItemSelection(item)}
                    >
                      <Text style={{ color: 'white', fontWeight: '700', fontSize: 12 }}>Remove Deal</Text>
                    </TouchableOpacity>
                  </View>
                  
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
                    <View style={{ flex: 1, marginRight: 8 }}>
                      <Text style={{ fontSize: 13, color: '#8d6e63', marginBottom: 6, fontWeight: '600' }}>
                        Previous Price
                      </Text>
                      <TextInput
                        value={deal.previousPrice.toString()}
                        onChangeText={(value) => updateDealPrice(item.id, 'previousPrice', value)}
                        style={[styles.input, { textAlign: 'center' }]}
                        keyboardType="decimal-pad"
                        placeholder="Previous price"
                      />
                    </View>
                    
                    <View style={{ flex: 1, marginLeft: 8 }}>
                      <Text style={{ fontSize: 13, color: '#8d6e63', marginBottom: 6, fontWeight: '600' }}>
                        New Price
                      </Text>
                      <TextInput
                        value={deal.newPrice.toString()}
                        onChangeText={(value) => updateDealPrice(item.id, 'newPrice', value)}
                        style={[styles.input, { 
                          textAlign: 'center',
                          borderColor: deal.newPrice < deal.previousPrice ? '#28a745' : '#ff6b6b'
                        }]}
                        keyboardType="decimal-pad"
                        placeholder="Deal price"
                      />
                    </View>
                  </View>

                  {deal.newPrice < deal.previousPrice && (
                    <Text style={{ 
                      fontSize: 13, 
                      color: '#28a745', 
                      textAlign: 'center',
                      marginTop: 8,
                      fontWeight: '700'
                    }}>
                      Save ${(deal.previousPrice - deal.newPrice).toFixed(2)}!
                    </Text>
                  )}
                </View>
              )}
            </View>
          );
        })}
        
        {menuItems.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              No menu items available.{'\n'}Add menu items first to create deals!
            </Text>
          </View>
        )}

        {/* Deal Summary */}
        <View style={{ 
          marginTop: 20, 
          padding: 16, 
          backgroundColor: '#f8f5f0', 
          borderRadius: 12,
          marginHorizontal: 16
        }}>
          <Text style={{ fontWeight: '700', color: '#5d4037', marginBottom: 8, fontSize: 15 }}>
            📊 Deal Summary
          </Text>
          <Text style={{ fontSize: 14, color: '#8d6e63', lineHeight: 20 }}>
            • {selectedItems.length} item(s) selected for deals{'\n'}
            • {selectedItems.filter(item => item.newPrice < item.previousPrice).length} item(s) with discounts
          </Text>
        </View>

        {/* Save Button */}
        <TouchableOpacity 
          style={[styles.primaryButton, { margin: 16 }]} 
          onPress={saveDeals}
        >
          <Text style={styles.primaryButtonText}>Save Deals</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

// Deal Management Screen (Standalone - kept for backward compatibility)
function DealManagementScreen({
  menuItems,
  dealItems,
  onUpdateDeals,
  onBack,
}: {
  menuItems: MenuItem[];
  dealItems: DealItem[];
  onUpdateDeals: (deals: DealItem[]) => void;
  onBack: () => void;
}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Manage Deals</Text>
      <DealsManagementTab
        menuItems={menuItems}
        dealItems={dealItems}
        onUpdateDeals={onUpdateDeals}
      />
      <TouchableOpacity style={[styles.ghostButton, { margin: 16 }]} onPress={onBack}>
        <Text style={styles.ghostButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

// FIXED Deals Screen - Now with proper scrolling
function DealsScreen({ 
  menuItems, 
  dealItems, 
  filter, 
  onBack 
}: { 
  menuItems: MenuItem[]; 
  dealItems: DealItem[];
  filter: Course | 'All'; 
  onBack: () => void; 
}) {
  // Get active deals and match them with menu items
  const activeDeals = dealItems
    .filter(deal => deal.isActive)
    .map(deal => {
      const menuItem = menuItems.find(item => item.id === deal.menuItemId);
      return menuItem ? { ...menuItem, deal } : null;
    })
    .filter(Boolean) as (MenuItem & { deal: DealItem })[];

  // Apply filter
  const filtered = filter === 'All' 
    ? activeDeals 
    : activeDeals.filter(item => item.course === filter);

  const hasDiscounts = activeDeals.some(item => item.deal.newPrice < item.deal.previousPrice);

  // Render deal item
  const renderDealItem = ({ item }: { item: MenuItem & { deal: DealItem } }) => (
    <View style={[
      styles.menuCard,
      { 
        borderColor: item.deal.newPrice < item.deal.previousPrice ? '#ff6b6b' : '#e8d5c4',
        borderWidth: item.deal.newPrice < item.deal.previousPrice ? 2 : 1
      }
    ]}>
      {item.deal.newPrice < item.deal.previousPrice && (
        <View style={styles.saleBadge}>
          <Text style={styles.saleBadgeText}>
            SALE
          </Text>
        </View>
      )}
      
      <Image source={{ uri: item.image }} style={styles.menuImage} resizeMode="cover" />
      <View style={styles.cardContent}>
        <Text style={{ fontWeight: '700', fontSize: 15, color: '#5d4037', marginBottom: 4 }}>
          {item.name}
        </Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
          {item.deal.newPrice < item.deal.previousPrice ? (
            <>
              <Text style={{
                fontSize: 14,
                color: '#8d6e63',
                textDecorationLine: 'line-through',
                marginRight: 8,
                fontWeight: '600'
              }}>
                ${item.deal.previousPrice}
              </Text>
              <Text style={{
                fontSize: 18,
                fontWeight: '800',
                color: '#ff6b6b'
              }}>
                ${item.deal.newPrice}
              </Text>
              <Text style={{
                fontSize: 11,
                color: '#28a745',
                marginLeft: 8,
                fontWeight: '700'
              }}>
                Save ${(item.deal.previousPrice - item.deal.newPrice).toFixed(2)}
              </Text>
            </>
          ) : (
            <Text style={{
              fontSize: 18,
              fontWeight: '800',
              color: '#5d4037'
            }}>
              ${item.deal.newPrice}
            </Text>
          )}
        </View>
        
        <Text style={{ 
          color: '#8d6e63', 
          fontSize: 12, 
          marginTop: 6,
          fontWeight: '600'
        }}>
          {item.course}
        </Text>
      </View>
    </View>
  );

  // Render header with sale banner
  const renderHeader = () => (
    <>
      {hasDiscounts && (
        <View style={{
          backgroundColor: '#fff3cd',
          padding: 16,
          marginHorizontal: 16,
          marginBottom: 20,
          borderRadius: 12,
          borderLeftWidth: 4,
          borderLeftColor: '#ffc107'
        }}>
          <Text style={{ color: '#856404', fontSize: 15, fontWeight: '700', textAlign: 'center' }}>
            🎉 Limited Time Offers - Save on Your Favorites!
          </Text>
        </View>
      )}
    </>
  );

  // Render empty state
  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateText}>
        {activeDeals.length === 0 ? 'No deals available' : 'No deals found for this filter'}
      </Text>
      <Text style={styles.emptyStateSubtext}>
        {activeDeals.length === 0 
          ? 'Check back later for special offers!' 
          : 'Try selecting a different filter'
        }
      </Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>
        Special Deals{filter !== 'All' ? ` — ${filter}` : ''}
      </Text>

      {filtered.length === 0 ? (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 100 }}>
          {renderHeader()}
          {renderEmptyState()}
        </ScrollView>
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={filtered}
            keyExtractor={item => item.id}
            renderItem={renderDealItem}
            ListHeaderComponent={renderHeader}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 12 }}
            contentContainerStyle={{ 
              paddingBottom: 100, // Extra padding at bottom to ensure content is visible above the back button
              flexGrow: 1 
            }}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
        </View>
      )}
      
      <View style={{ paddingHorizontal: 16, paddingBottom: 20 }}>
        <TouchableOpacity style={styles.ghostButton} onPress={onBack}>
          <Text style={styles.ghostButtonText}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
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
  dealItemsCount,
}: {
  menuItems: MenuItem[];
  totalCount: number;
  averageByCourse: Record<string, number>;
  onOpenScreen: (s: Screen) => void;
  onSelectCourse: (c: Course | 'All') => void;
  currentFilter: Course | 'All';
  isAdmin: boolean;
  onAddToPersonalMenu: (item: MenuItem) => void;
  dealItemsCount: number;
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
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Active deals</Text>
          <Text style={styles.infoValue}>{dealItemsCount}</Text>
        </View>
      </View>

      {/* FILTERING SYSTEM */}
      <View style={styles.filterRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.filterBtn, currentFilter === 'All' && styles.filterBtnActive]}
            onPress={() => onSelectCourse('All')}
          >
            <Text style={[styles.filterBtnText, currentFilter === 'All' && styles.filterBtnTextActive]}>All</Text>
          </TouchableOpacity>
          {COURSES.map(c => (
            <TouchableOpacity
              key={c}
              style={[styles.filterBtn, currentFilter === c && styles.filterBtnActive]}
              onPress={() => onSelectCourse(c)}
            >
              <Text style={[styles.filterBtnText, currentFilter === c && styles.filterBtnTextActive]}>{c}</Text>
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
                  <Text style={{ fontWeight: '700', fontSize: 15, color: '#5d4037' }}>{item.name}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                  <Text style={{ color: '#8d6e63', fontSize: 12, fontWeight: '600' }}>{item.course} • ${item.price}</Text>
                  
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
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>No items found for this filter.</Text>
              </View>
            )}
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity style={styles.primaryButton} onPress={() => onOpenScreen('Search')}>
              <Text style={styles.primaryButtonText}>Search menu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.ghostButton, { marginTop: 12 }]} onPress={() => onOpenScreen('Deals')}>
              <Text style={styles.ghostButtonText}>View deals ({dealItemsCount})</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={() => onOpenScreen('Contact')}>
              <Text style={styles.ghostButtonText}>Contact</Text>
            </TouchableOpacity>
            {isAdmin && (
              <TouchableOpacity style={[styles.ghostButton, { marginTop: 8 }]} onPress={() => onOpenScreen('Manage')}>
                <Text style={styles.ghostButtonText}>Manage Restaurant</Text>
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

  const filtered = menuItems.filter(m => {
    if (query === '') {
      return searchFilter === 'All' || m.course === searchFilter;
    } else {
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
          placeholder="Search by name or description..."
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          placeholderTextColor="#a1887f"
        />
        
        {/* FILTERING SYSTEM IN SEARCH */}
        <Text style={{ marginTop: 16, marginBottom: 12, fontWeight: '700', color: '#5d4037' }}>Filter by course:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
          <TouchableOpacity
            style={[styles.filterBtn, searchFilter === 'All' && styles.filterBtnActive]}
            onPress={() => setSearchFilter('All')}
          >
            <Text style={[styles.filterBtnText, searchFilter === 'All' && styles.filterBtnTextActive]}>All</Text>
          </TouchableOpacity>
          {COURSES.map(c => (
            <TouchableOpacity
              key={c}
              style={[styles.filterBtn, searchFilter === c && styles.filterBtnActive]}
              onPress={() => setSearchFilter(c)}
            >
              <Text style={[styles.filterBtnText, searchFilter === c && styles.filterBtnTextActive]}>{c}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={{ fontSize: 14, color: '#8d6e63', marginBottom: 12, fontWeight: '600' }}>
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
                  style={{ width: 70, height: 70, borderRadius: 8, marginRight: 16 }} 
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: '700', fontSize: 16, color: '#5d4037' }}>{item.name}</Text>
                  <Text style={{ color: '#8d6e63', fontSize: 13, marginTop: 2 }}>{item.description}</Text>
                  <Text style={{ color: '#8d6e63', fontSize: 14, marginTop: 4, fontWeight: '600' }}>{item.course} • ${item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>No items found</Text>
              <Text style={styles.emptyStateSubtext}>
                {query ? 'Try a different search term' : 'Search for menu items above'}
              </Text>
            </View>
          }
        />
        <TouchableOpacity style={[styles.ghostButton, { marginTop: 16 }]} onPress={onBack}>
          <Text style={styles.ghostButtonText}>Back to Menu</Text>
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
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
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
                      style={{ width: 70, height: 70, borderRadius: 8, marginRight: 16 }} 
                    />
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontWeight: '700', fontSize: 16, color: '#5d4037' }}>{item.name}</Text>
                      <Text style={{ color: '#8d6e63', fontSize: 14, fontWeight: '600' }}>{item.course}</Text>
                      <Text style={{ color: '#2a9d8f', fontWeight: '700', fontSize: 18 }}>${item.price}</Text>
                    </View>
                  </View>
                  <TouchableOpacity 
                    style={[styles.secondaryButton, { paddingHorizontal: 12 }]} 
                    onPress={() => onRemoveFromPersonalMenu(item.id)}
                  >
                    <Text style={{ color: '#e76f51', fontWeight: '700', fontSize: 12 }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              ))}
              
              <View style={[styles.infoCard, { marginTop: 20 }]}>
                <Text style={styles.infoTitle}>Total Price</Text>
                <Text style={[styles.infoValue, { color: '#2a9d8f' }]}>${totalPrice}</Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>

      <View style={{ paddingHorizontal: 16 }}>
        {personalMenuItems.length > 0 && (
          <TouchableOpacity style={styles.primaryButton} onPress={onPay}>
            <Text style={styles.primaryButtonText}>Proceed to Payment (${totalPrice})</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={[styles.ghostButton, { marginTop: 12 }]} onPress={onBack}>
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
          placeholderTextColor="#a1887f"
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#a1887f"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#a1887f"
        />

        <TouchableOpacity style={styles.primaryButton} onPress={onLogin}>
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.ghostButton, { marginTop: 12 }]} onPress={onSignup}>
          <Text style={styles.ghostButtonText}>Sign up</Text>
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
    
    setTimeout(() => {
      setIsSending(false);
      Alert.alert(
        'Message Sent!', 
        `Thank you ${name.trim()}! Your message has been sent to the chef. We'll get back to you within 24 hours.`,
        [
          {
            text: 'OK',
            onPress: () => {
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
            textAlign: 'center',
            fontWeight: '600'
          }}>
            Have questions, feedback, or special requests? Send a message directly to our chef!
          </Text>

          <View style={{ 
            backgroundColor: '#faf7f2', 
            padding: 16, 
            borderRadius: 12, 
            marginBottom: 20,
            borderLeftWidth: 4,
            borderLeftColor: '#8d6e63'
          }}>
            <Text style={{ fontWeight: '700', color: '#5d4037', marginBottom: 8, fontSize: 16 }}>
              Contact Information
            </Text>
            <Text style={{ color: '#8d6e63', marginBottom: 6, fontSize: 14 }}>
              📧 Email: chef@tastebuddies.example
            </Text>
            <Text style={{ color: '#8d6e63', marginBottom: 6, fontSize: 14 }}>
              📞 Phone: +1 (555) 123-CHEF
            </Text>
            <Text style={{ color: '#8d6e63', fontSize: 14 }}>
              ⏰ Hours: Mon-Sun, 9AM-10PM
            </Text>
          </View>

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
            fontSize: 13, 
            color: '#8d6e63', 
            marginBottom: 16,
            fontStyle: 'italic'
          }}>
            * Required fields. We typically respond within 24 hours.
          </Text>

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

          <View style={{ marginTop: 20, padding: 16, backgroundColor: '#f8f5f0', borderRadius: 12 }}>
            <Text style={{ fontWeight: '700', color: '#5d4037', marginBottom: 8, fontSize: 15 }}>
              💡 Quick Message Ideas:
            </Text>
            <Text style={{ fontSize: 13, color: '#8d6e63', lineHeight: 18 }}>
              • "I have dietary restrictions - can you accommodate?"
            </Text>
            <Text style={{ fontSize: 13, color: '#8d6e63', lineHeight: 18 }}>
              • "Loved the [dish name]! Could I get the recipe?"
            </Text>
            <Text style={{ fontSize: 13, color: '#8d6e63', lineHeight: 18 }}>
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
    onPaySuccess();
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.screenHeader}>Payment</Text>
      <View style={styles.formCard}>
        <Text style={{ fontWeight: '700', marginBottom: 8, color: '#5d4037', fontSize: 16 }}>Enter payment details</Text>

        <TextInput
          placeholder="Name on card"
          value={nameOnCard}
          onChangeText={setNameOnCard}
          style={styles.input}
          placeholderTextColor="#a1887f"
        />
        <TextInput
          placeholder="Card number"
          value={cardNumber}
          onChangeText={setCardNumber}
          style={styles.input}
          keyboardType="number-pad"
          placeholderTextColor="#a1887f"
        />
        <TextInput
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          style={styles.input}
          keyboardType="number-pad"
          secureTextEntry
          placeholderTextColor="#a1887f"
        />

        <TouchableOpacity style={styles.primaryButton} onPress={handlePay}>
          <Text style={styles.primaryButtonText}>Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.ghostButton, { marginTop: 12 }]} onPress={onBack}>
          <Text style={styles.ghostButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
            placeholderTextColor="#a1887f"
          />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
            multiline
            placeholderTextColor="#a1887f"
          />
          
          <Text style={{ marginTop: 16, marginBottom: 12, fontWeight: '700', color: '#5d4037' }}>Course *</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
            <TouchableOpacity
              style={[styles.filterBtn, course === 'Starter' && styles.filterBtnActive]}
              onPress={() => setCourse('Starter')}
            >
              <Text style={[styles.filterBtnText, course === 'Starter' && styles.filterBtnTextActive]}>Starter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterBtn, course === 'Main' && styles.filterBtnActive]}
              onPress={() => setCourse('Main')}
            >
              <Text style={[styles.filterBtnText, course === 'Main' && styles.filterBtnTextActive]}>Main</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterBtn, course === 'Dessert' && styles.filterBtnActive]}
              onPress={() => setCourse('Dessert')}
            >
              <Text style={[styles.filterBtnText, course === 'Dessert' && styles.filterBtnTextActive]}>Dessert</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterBtn, course === 'Drink' && styles.filterBtnActive]}
              onPress={() => setCourse('Drink')}
            >
              <Text style={[styles.filterBtnText, course === 'Drink' && styles.filterBtnTextActive]}>Drink</Text>
            </TouchableOpacity>
          </ScrollView>

          <TextInput
            placeholder="Price * (e.g., 12.99)"
            value={price}
            onChangeText={setPrice}
            style={styles.input}
            keyboardType="decimal-pad"
            placeholderTextColor="#a1887f"
          />
          
          <TextInput
            placeholder="Image URL (optional)"
            value={image}
            onChangeText={setImage}
            style={styles.input}
            autoCapitalize="none"
            placeholderTextColor="#a1887f"
          />
          
          <Text style={{ fontSize: 13, color: '#8d6e63', marginTop: 8, marginBottom: 16, fontStyle: 'italic' }}>
            * Required fields
          </Text>

          <TouchableOpacity style={styles.primaryButton} onPress={handleAdd}>
            <Text style={styles.primaryButtonText}>Add Item</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.ghostButton, { marginTop: 12 }]} onPress={onCancel}>
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
          placeholderTextColor="#a1887f"
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={[styles.input, { height: 80 }]}
          multiline
          placeholderTextColor="#a1887f"
        />
        <TextInput
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          style={styles.input}
          keyboardType="numeric"
          placeholderTextColor="#a1887f"
        />
        <TextInput
          placeholder="Image URL (optional)"
          value={image}
          onChangeText={setImage}
          style={styles.input}
          autoCapitalize="none"
          placeholderTextColor="#a1887f"
        />

        <Text style={{ marginTop: 16, marginBottom: 12, fontWeight: '700', color: '#5d4037' }}>Course</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
          <TouchableOpacity
            style={[styles.filterBtn, course === 'Starter' && styles.filterBtnActive]}
            onPress={() => setCourse('Starter')}
          >
            <Text style={[styles.filterBtnText, course === 'Starter' && styles.filterBtnTextActive]}>Starter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, course === 'Main' && styles.filterBtnActive]}
            onPress={() => setCourse('Main')}
          >
            <Text style={[styles.filterBtnText, course === 'Main' && styles.filterBtnTextActive]}>Main</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, course === 'Dessert' && styles.filterBtnActive]}
            onPress={() => setCourse('Dessert')}
          >
            <Text style={[styles.filterBtnText, course === 'Dessert' && styles.filterBtnTextActive]}>Dessert</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, course === 'Drink' && styles.filterBtnActive]}
            onPress={() => setCourse('Drink')}
          >
            <Text style={[styles.filterBtnText, course === 'Drink' && styles.filterBtnTextActive]}>Drink</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity style={styles.primaryButton} onPress={handleUpdate}>
          <Text style={styles.primaryButtonText}>Save Changes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.ghostButton, { marginTop: 12 }]} onPress={onCancel}>
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

  // Menu items state
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    // 🌿 Starters
    { id: uuidv4(), name: 'Tomato Bruschetta', description: 'Toasted sourdough topped with marinated cherry tomatoes and basil.', course: 'Starter', price: 45, image: 'https://i.pinimg.com/1200x/ad/d5/93/add593c77532d55b43038159365aa603.jpg' },
    { id: uuidv4(), name: 'Avocado Toast', description: 'Creamy smashed avocado on seeded bread with lemon drizzle.', course: 'Starter', price: 55, image: 'https://i.pinimg.com/1200x/2b/c5/4a/2bc54ab609fc9d71785c17a39fb2587e.jpg' },
    { id: uuidv4(), name: 'Caprese Salad', description: 'Fresh mozzarella, ripe tomatoes, and basil with olive oil.', course: 'Starter', price: 60, image: 'https://i.pinimg.com/736x/ba/0c/cb/ba0ccb0f4c90126eb737963fd172c894.jpg' },

    // 🍝 Mains
    { id: uuidv4(), name: 'Creamy Mushroom Pasta and chicken', description: 'Penne in rich garlic mushroom sauce with grilled chicken on the side.', course: 'Main', price: 85, image: 'https://i.pinimg.com/1200x/d0/66/a3/d066a3fdfb8cd7d70689a9ec40e86ffb.jpg' },
    { id: uuidv4(), name: 'Grilled Salmon', description: 'Lemon butter salmon with roasted vegetables.', course: 'Main', price: 120, image: 'https://i.pinimg.com/736x/de/9c/1b/de9c1b6d21cbeb650e486b9f5010103f.jpg' },
    { id: uuidv4(), name: 'Beef Steak', description: 'Juicy sirloin steak with creamy mash and herbs.', course: 'Main', price: 150, image: 'https://i.pinimg.com/736x/ad/51/45/ad5145a14109d6e410c503b377466392.jpg' },
    { id: uuidv4(), name: 'Vegan Buddha Bowl', description: 'Quinoa, roasted chickpeas, avocado, and tahini dressing.', course: 'Main', price: 95, image: 'https://i.pinimg.com/736x/ad/a5/71/ada571b95c086f59f987d64115acfb97.jpg' },

    // 🍰 Desserts
    { id: uuidv4(), name: 'Chocolate Mousse', description: 'Light and airy cocoa mousse with cream topping.', course: 'Dessert', price: 40, image: 'https://i.pinimg.com/1200x/d8/b6/f9/d8b6f9e951905047935ce9bfa30bcfc2.jpg' },
    { id: uuidv4(), name: 'Cheesecake Slice', description: 'Classic creamy cheesecake with berryies.', course: 'Dessert', price: 50, image: 'https://i.pinimg.com/736x/68/b3/e2/68b3e222556a926e971bd2b22eac2cad.jpg' },
    { id: uuidv4(), name: 'Brownie Sundae', description: 'Warm chocolate brownie with ice cream.', course: 'Dessert', price: 60, image: 'https://i.pinimg.com/736x/41/57/ba/4157baa7bfc1eff9705fa9e64e1caec3.jpg' },

    // ☕ Drinks
    { id: uuidv4(), name: 'Iced Coffee', description: 'Cold brew with a splash of milk and ice.', course: 'Drink', price: 35, image: 'https://i.pinimg.com/736x/69/ea/52/69ea52970ed833c780467f46475850e2.jpg' },
    { id: uuidv4(), name: 'Berry Smoothie', description: 'Mixed berries, banana, and yogurt smoothie.', course: 'Drink', price: 45, image: 'https://i.pinimg.com/1200x/79/b9/ef/79b9efb4ef01c1f218434cabe5bd5806.jpg' },
    { id: uuidv4(), name: 'Matcha Latte', description: 'Japanese green tea chai latte with almond milk.', course: 'Drink', price: 40, image: 'https://i.pinimg.com/736x/52/2f/98/522f982f88048da147ed011efef16ac1.jpg' },
    { id: uuidv4(), name: 'Fresh Lemonade', description: 'Sparkling homemade lemonade with mint leaves.', course: 'Drink', price: 30, image: 'https://i.pinimg.com/736x/75/8e/8f/758e8fcb501b48b5db38c6fb83f8c46d.jpg' },
  ]);

  // NEW: Deal items state - Start with empty array (no sample deals)
  const [dealItems, setDealItems] = useState<DealItem[]>([]);

  const [personalMenuItems, setPersonalMenuItems] = useState<MenuItem[]>([]);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
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

  const activeDealsCount = dealItems.filter(deal => deal.isActive).length;

  // Actions
  const login = () => {
    if (!userEmail) return Alert.alert('Please enter email');
    if (userEmail.toLowerCase() === ADMIN_EMAIL && userPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      Alert.alert('Welcome Admin!', 'You have logged in as administrator.');
    } else {
      setIsAdmin(false);
      Alert.alert('Welcome!', 'You have successfully logged in.');
    }
    setScreen('Home');
  };

  const signup = () => {
    if (!userEmail || !userPassword) {
      Alert.alert('Missing Information', 'Please enter both email and password to sign up.');
      return;
    }

    if (!userEmail.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (userPassword.length < 3) {
      Alert.alert('Weak Password', 'Please enter a password with at least 3 characters.');
      return;
    }

    // For demo purposes, any non-admin email/password will work
    if (userEmail.toLowerCase() === ADMIN_EMAIL && userPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      Alert.alert('Welcome Admin!', 'You have signed up as administrator.');
    } else {
      setIsAdmin(false);
      Alert.alert('Success!', `Welcome ${username || 'User'}! Your account has been created.`);
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

  const updateMenuItem = (id: string, updatedItem: Omit<MenuItem, 'id'>) => {
    setMenuItems(prev => prev.map(item => (item.id === id ? { ...updatedItem, id } : item)));
    Alert.alert('Updated', `${updatedItem.name} has been updated.`);
    setEditingItem(null);
    setScreen('Home');
  };

  // NEW: Update deals function
  const updateDeals = (newDeals: DealItem[]) => {
    setDealItems(newDeals);
  };

  const addToPersonalMenu = (item: MenuItem) => {
    setPersonalMenuItems(prev => [...prev, { ...item, id: uid() }]);
    Alert.alert('Added', `${item.name} added to your personal menu!`);
  };

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
          onSignup={signup}
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
          dealItemsCount={activeDealsCount}
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

      {screen === 'Deals' && (
        <DealsScreen 
          menuItems={menuItems} 
          dealItems={dealItems}
          filter={selectedCourseFilter} 
          onBack={() => setScreen('Home')} 
        />
      )}

      {screen === 'Payment' && (
        <PaymentScreen 
          onBack={() => setScreen('Home')} 
          onPaySuccess={() => { 
            Alert.alert('Paid', 'Payment simulated.'); 
            setScreen('Home'); 
          }} 
        />
      )}

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
                    style={{ width: 70, height: 70, borderRadius: 8, marginRight: 16 }} 
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, color: '#5d4037' }}>{item.name}</Text>
                    <Text style={{ color: '#8d6e63', fontSize: 14, fontWeight: '600' }}>{item.course} • ${item.price}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity 
                    style={[styles.secondaryButton, { marginRight: 8, paddingHorizontal: 12 }]} 
                    onPress={() => {
                      setEditingItem(item);
                      setScreen('EditMenu');
                    }}
                  >
                    <Text style={{ color: '#2a9d8f', fontWeight: '700', fontSize: 12 }}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.secondaryButton, { paddingHorizontal: 12 }]} 
                    onPress={() => removeMenuItem(item.id)}
                  >
                    <Text style={{ color: '#e76f51', fontWeight: '700', fontSize: 12 }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={[styles.ghostButton, { margin: 16 }]} onPress={() => setScreen('Home')}>
            <Text style={styles.ghostButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}

      {screen === 'DealManagement' && isAdmin && (
        <DealManagementScreen
          menuItems={menuItems}
          dealItems={dealItems}
          onUpdateDeals={updateDeals}
          onBack={() => setScreen('Home')}
        />
      )}

      {screen === 'Manage' && isAdmin && (
        <ManageScreen
          menuItems={menuItems}
          dealItems={dealItems}
          onUpdateDeals={updateDeals}
          onEditItem={(item) => {
            setEditingItem(item);
            setScreen('EditMenu');
          }}
          onRemoveItem={removeMenuItem}
          onOpenScreen={setScreen}
          onBack={() => setScreen('Home')}
        />
      )}

      {/* Bottom Navigation */}
      {screen !== 'Login' && (
        <View style={styles.bottomNav}>
          <NavButton label="Home" onPress={() => setScreen('Home')} />
          <NavButton label="Search" onPress={() => setScreen('Search')} />
          <NavButton label="Contact" onPress={() => setScreen('Contact')} />
          <NavButton label="Deals" onPress={() => setScreen('Deals')} />
          <NavButton 
            label={isAdmin ? 'Manage' : 'Personal'} 
            onPress={() => setScreen(isAdmin ? 'Manage' : 'Personal')} 
          />
          <NavButton label="Logout" onPress={logout} />
        </View>
      )}

      {/* Floating Action Buttons - Fixed positioning */}
      {isAdmin && screen !== 'AddMenu' && screen !== 'Login' && screen !== 'DealManagement' && screen !== 'Manage' && (
        <View style={styles.fabContainer}>
          <TouchableOpacity 
            style={[styles.fab, { backgroundColor: '#5d4037' }]} 
            onPress={() => setScreen('Manage')}
          >
            <Text style={styles.fabText}>⚙️ Manage</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.fab, { backgroundColor: '#8d6e63' }]} 
            onPress={() => setScreen('AddMenu')}
          >
            <Text style={styles.fabText}>+ Add Item</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
//https://www.reactnative.express/

//https://reactnative.dev/docs/tutorial/

//https://reactnative.dev/docs/components-and-apis/

//https://callstack.github.io/react-native-paper//

//https://react-native-elements.js.org/#/image/

//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/
