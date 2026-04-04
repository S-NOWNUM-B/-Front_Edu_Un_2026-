import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  useWindowDimensions
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ResponsiveHeaderProps {
  title: string;
  leftAction?: { icon: string; onPress: () => void; };
  rightAction?: { icon: string; onPress: () => void; };
}

export function ResponsiveHeader({ title, leftAction, rightAction }: ResponsiveHeaderProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={[
      styles.header, 
      { paddingTop: Platform.OS === 'ios' ? 0 : insets.top }
    ]}>
      <StatusBar barStyle="light-content" backgroundColor="#0066cc" />
      <View style={styles.headerContent}>
        <View style={styles.headerLeft}>
          {leftAction && (
            <TouchableOpacity style={styles.headerButton} onPress={leftAction.onPress}>
              <Text style={styles.headerIcon}>{leftAction.icon}</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.headerCenter}>
          <Text 
            style={[styles.headerTitle, isTablet && styles.headerTitleTablet]} 
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>

        <View style={styles.headerRight}>
          {rightAction && (
            <TouchableOpacity style={styles.headerButton} onPress={rightAction.onPress}>
              <Text style={styles.headerIcon}>{rightAction.icon}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

// Адаптивный контейнер (с сайдбаром для планшетов)
export function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {isTablet ? (
        <View style={styles.tabletContainer}>
          <View style={styles.tabletSidebar}>
            <Text style={styles.sidebarText}>Navigation</Text>
          </View>
          <View style={styles.tabletContent}>{children}</View>
        </View>
      ) : (
        children
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    backgroundColor: '#0066cc',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerContent: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  headerLeft: { width: 48, alignItems: 'flex-start' },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerRight: { width: 48, alignItems: 'flex-end' },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: { fontSize: 20, color: '#fff' },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#fff' },
  headerTitleTablet: { fontSize: 22 },
  tabletContainer: { flex: 1, flexDirection: 'row' },
  tabletSidebar: {
    width: 250,
    backgroundColor: '#ffffff',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
    paddingTop: 20,
    alignItems: 'center',
  },
  sidebarText: { fontSize: 16, color: '#666' },
  tabletContent: { flex: 1 },
});