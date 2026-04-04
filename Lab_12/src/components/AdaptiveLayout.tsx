import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Platform
} from 'react-native';

interface AdaptiveLayoutProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export function AdaptiveLayout({ header, content, footer }: AdaptiveLayoutProps) {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 768;
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      {header && <View>{header}</View>}
      
      <View style={[
        styles.main,
        isLandscape && styles.mainLandscape,
        isTablet && styles.mainTablet
      ]}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            isTablet && styles.scrollContentTablet
          ]}
        >
          {isTablet ? (
            <View style={styles.tabletLayout}>
              {React.Children.map(content, (child, index) => (
                <View key={index} style={styles.tabletItem}>{child}</View>
              ))}
            </View>
          ) : (
            <View style={styles.phoneLayout}>{content}</View>
          )}
        </ScrollView>
      </View>

      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
}

// Дополнительные компоненты: FeatureCard и StatsRow
export function FeatureCard({ icon, title, description, variant = 'primary' }: any) {
  const bgColors: any = { primary: '#ffffff', secondary: '#f0f8ff', accent: '#fff8f0' };
  return (
    <View style={[styles.featureCard, { backgroundColor: bgColors[variant] }]}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
}

export function StatsRow({ stats }: { stats: any[] }) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  return (
    <View style={[styles.statsRow, isTablet && styles.statsRowTablet]}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statItem}>
          <Text style={[styles.statValue, isTablet && styles.statValueTablet]}>{stat.value}</Text>
          <Text style={[styles.statLabel, isTablet && styles.statLabelTablet]}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  main: { flex: 1 },
  mainLandscape: { flexDirection: 'row' },
  mainTablet: { paddingHorizontal: 20 },
  scrollView: { flex: 1 },
  scrollContent: { paddingVertical: 16 },
  scrollContentTablet: { paddingVertical: 24 },
  phoneLayout: { paddingHorizontal: 16 },
  tabletLayout: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  tabletItem: { width: '48%', marginBottom: 16 },
  footer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  featureCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featureIcon: { fontSize: 32, marginBottom: 12 },
  featureTitle: { fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 8 },
  featureDescription: { fontSize: 14, color: '#666', textAlign: 'center' },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  statsRowTablet: { paddingVertical: 24 },
  statItem: { alignItems: 'center' },
  statValue: { fontSize: 24, fontWeight: '700', color: '#0066cc' },
  statValueTablet: { fontSize: 32 },
  statLabel: { fontSize: 12, color: '#666', textTransform: 'uppercase' },
  statLabelTablet: { fontSize: 14 },
});