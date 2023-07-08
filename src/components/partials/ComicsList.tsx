import { FlatList } from 'react-native';
import React, { memo } from 'react';
import ComicCard from '~/components/shared/ComicCard';
import { CardLayout } from '~/common/types/cardLayouts';

function ComicsList({ cardLayout }: { cardLayout: CardLayout }) {
  if (cardLayout === 'list') {
    return (
      <FlatList
        key={cardLayout}
        style={{ borderRadius: 10 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => cardLayout + item}
        data={Array.from(new Array(15).keys()).reverse()}
        renderItem={({ item, index }) => {
          return (
            <ComicCard
              cardLayout={cardLayout}
              style={{ marginRight: index % 2 == 0 ? 22 : 0 }}
            />
          );
        }}
      />
    );
  }

  return (
    <FlatList
      key={cardLayout}
      style={{ borderRadius: 10 }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => cardLayout + item}
      numColumns={2}
      data={Array.from(new Array(15).keys()).reverse()}
      columnWrapperStyle={{ justifyContent: 'center', marginTop: 16 }}
      renderItem={({ item, index }) => {
        return (
          <ComicCard
            cardLayout={cardLayout}
            style={{ marginRight: index % 2 == 0 ? 22 : 0 }}
          />
        );
      }}
    />
  );
}

export default memo(ComicsList);
