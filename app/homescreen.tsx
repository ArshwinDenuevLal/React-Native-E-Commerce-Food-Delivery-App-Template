import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Search, MapPin, ChevronDown, Star, Clock, Gift, Home, Candy, Calendar, Heart, User } from 'lucide-react-native';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('home');

  const categories = [
    { id: 1, name: 'Featured Restaurants', icon: '⭐' },
    { id: 2, name: 'Meal Plans', icon: '📋' },
    { id: 3, name: 'New Additions', badge: 'NEW', icon: '🆕' },
    { id: 4, name: '₫1 Delivery', icon: '🚚' },
    { id: 5, name: 'Top Rated', icon: '🏆' },
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Calicut Paradise Biryani',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
      discount: '30% off select items',
      cuisines: ['Kerala', 'South Indian', 'Biryani'],
      rating: 3.9,
      reviews: '100+',
      deliveryTime: '25-35 mins',
      deliveryFee: '₫ 1.50',
      originalFee: '₫ 3.50',
    },
    {
      id: 2,
      name: 'Paratha King',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400',
      hasGift: true,
      bankPromo: 'Emirates NBD',
      cuisines: ['North Indian', 'Paratha', 'Curry'],
      rating: 4.2,
      reviews: '250+',
      deliveryTime: '20-30 mins',
      deliveryFee: '₫ 2.00',
    },
  ];

  const NavIcon = ({ icon: Icon, label, isActive, onPress }) => (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Icon size={24} color={isActive ? '#FF6B6B' : '#999'} />
      <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <>
    <StatusBar
    barStyle="dark-content"
    backgroundColor="#FFF"
    translucent={false}
    />
    <SafeAreaView style={styles.container}>
      
      {/* Header with Location */}
      <View style={styles.header}>
        <View style={styles.locationBar}>
          <MapPin size={20} color="#FF6B6B" />
          <View style={styles.locationText}>
            <Text style={styles.locationLabel}>Home</Text>
            <Text style={styles.locationAddress}>sheikh mariyam 15 Room no 8</Text>
          </View>
          <ChevronDown size={20} color="#666" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Search size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search restaurants"
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Categories Horizontal Scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>{cat.icon}</Text>
              <Text style={styles.categoryName}>{cat.name}</Text>
              {cat.badge && (
                <View style={styles.newBadge}>
                  <Text style={styles.newBadgeText}>{cat.badge}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Restaurants near you</Text>

        {/* Filter Buttons */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
        >
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Sort by</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>⚡ Flash (Food in 15 min)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtn}>
            <Text style={styles.filterText}>Cuisines</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Restaurant Cards */}
        {restaurants.map((restaurant) => (
          <TouchableOpacity key={restaurant.id} style={styles.restaurantCard}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: restaurant.image }}
                style={styles.restaurantImage}
              />
              {restaurant.discount && (
                <View style={styles.discountBadge}>
                  <Text style={styles.discountText}>{restaurant.discount}</Text>
                </View>
              )}
              {restaurant.hasGift && (
                <View style={styles.giftBadge}>
                  <Gift size={20} color="#FFF" />
                </View>
              )}
            </View>

            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              
              {restaurant.bankPromo && (
                <View style={styles.bankPromoBadge}>
                  <Text style={styles.bankPromoText}>{restaurant.bankPromo}</Text>
                </View>
              )}

              <Text style={styles.cuisines}>
                {restaurant.cuisines.join(', ')}
              </Text>

              <View style={styles.restaurantMeta}>
                <View style={styles.metaItem}>
                  <Star size={14} color="#FFB800" fill="#FFB800" />
                  <Text style={styles.rating}>{restaurant.rating}</Text>
                  <Text style={styles.reviews}>({restaurant.reviews})</Text>
                </View>

                <View style={styles.metaItem}>
                  <Clock size={14} color="#666" />
                  <Text style={styles.metaText}>{restaurant.deliveryTime}</Text>
                </View>
              </View>

              <View style={styles.deliveryInfo}>
                <Text style={styles.deliveryFee}>{restaurant.deliveryFee}</Text>
                {restaurant.originalFee && (
                  <Text style={styles.originalFee}>{restaurant.originalFee}</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavIcon
          icon={Home}
          label="Home"
          isActive={activeTab === 'home'}
          onPress={() => setActiveTab('home')}
        />
        <NavIcon
          icon={Candy}
          label="Sweets"
          isActive={activeTab === 'sweets'}
          onPress={() => setActiveTab('sweets')}
        />
        <TouchableOpacity
          style={styles.mealPlanBtn}
          onPress={() => setActiveTab('meals')}
        >
          <Calendar size={24} color="#FFF" />
          <Text style={styles.mealPlanText}>Meal Plans</Text>
        </TouchableOpacity>
        <NavIcon
          icon={Heart}
          label="Favorites"
          isActive={activeTab === 'favorites'}
          onPress={() => setActiveTab('favorites')}
        />
        <NavIcon
          icon={User}
          label="Account"
          isActive={activeTab === 'account'}
          onPress={() => setActiveTab('account')}
        />
      </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    flex: 1,
    marginLeft: 8,
  },
  locationLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  locationAddress: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  content: {
    flex: 1,
  },
  categoriesScroll: {
    marginTop: 8,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  categoryCard: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginRight: 12,
    minWidth: 120,
    position: 'relative',
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryName: {
    fontSize: 11,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
  newBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: {
    color: '#FFF',
    fontSize: 8,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginTop: 24,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  filtersScroll: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    marginRight: 8,
  },
  filterText: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },
  restaurantCard: {
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 180,
  },
  restaurantImage: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  discountText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
  giftBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FF6B6B',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantInfo: {
    padding: 12,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  bankPromoBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 6,
  },
  bankPromoText: {
    fontSize: 10,
    color: '#1976D2',
    fontWeight: '600',
  },
  cuisines: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  restaurantMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  rating: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginLeft: 4,
  },
  reviews: {
    fontSize: 12,
    color: '#999',
    marginLeft: 2,
  },
  metaText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 4,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryFee: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF6B6B',
    marginRight: 8,
  },
  originalFee: {
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  bottomPadding: {
    height: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 10,
    color: '#999',
    marginTop: 4,
  },
  navLabelActive: {
    color: '#FF6B6B',
    fontWeight: '600',
  },
  mealPlanBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B6B',
    width: 56,
    height: 56,
    borderRadius: 28,
    marginTop: -30,
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  mealPlanText: {
    fontSize: 8,
    color: '#FFF',
    fontWeight: '600',
    marginTop: 2,
  },
});

export default HomeScreen;