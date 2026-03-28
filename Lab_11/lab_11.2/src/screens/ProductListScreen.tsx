import React, { useState, useCallback } from 'react';
import { View, FlatList, Text, RefreshControl, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProductItem } from '../components/ProductItem';
import { products, Product } from '../data/products';

type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProductList'>;
};

export function ProductListScreen({ navigation }: Props) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} onPress={(p) => navigation.navigate('ProductDetail', { product: p })} />
        )}
        keyExtractor={item => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListHeaderComponent={<Text style={styles.header}>Products ({products.length})</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#333', margin: 16 },
});