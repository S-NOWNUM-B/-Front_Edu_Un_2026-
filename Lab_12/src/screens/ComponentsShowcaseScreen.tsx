import React from 'react';
import { Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Product } from '../data/products';
import { AdaptiveLayout, FeatureCard, StatsRow } from '../components/AdaptiveLayout';
import { ContactSection } from '../components/ContactSection';
import { GridLayout, Card } from '../components/GridLayout';
import { ProfileCard } from '../components/ProfileCard';
import { ResponsiveContainer, ResponsiveHeader } from '../components/ResponsiveHeader';

type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
  ComponentsShowcase: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ComponentsShowcase'>;
};

export function ComponentsShowcaseScreen({ navigation }: Props) {
  return (
    <ResponsiveContainer>
      <AdaptiveLayout
        header={
          <ResponsiveHeader
            title="Components Showcase"
            leftAction={{ icon: '←', onPress: () => navigation.goBack() }}
            rightAction={{ icon: '🏠', onPress: () => navigation.navigate('ProductList') }}
          />
        }
        content={
          <>
            <StatsRow
              stats={[
                { value: '6', label: 'components' },
                { value: '100%', label: 'connected' },
                { value: 'ready', label: 'status' },
              ]}
            />

            <FeatureCard
              icon="⚡"
              title="Adaptive Layout"
              description="Automatically adjusts card layout for phone and tablet screens."
            />
            <FeatureCard
              icon="🧩"
              title="Reusable Blocks"
              description="Every custom component is wired into the real navigation flow."
              variant="secondary"
            />

            <GridLayout columns={2} spacing={12}>
              <Card title="Grid Item A" subtitle="Card component" />
              <Card title="Grid Item B" subtitle="Card component" />
              <Card title="Grid Item C" subtitle="Card component" />
              <Card title="Grid Item D" subtitle="Card component" />
            </GridLayout>

            <ProfileCard
              name="Frontend Student"
              role="React Native Developer"
              avatar="https://i.pravatar.cc/160?img=12"
              bio="Building adaptive mobile interfaces and practicing reusable component architecture."
            />

            <ContactSection />
          </>
        }
        footer={<Text>All custom components are connected and active in this screen.</Text>}
      />
    </ResponsiveContainer>
  );
}
