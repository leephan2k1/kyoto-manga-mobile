import { FlatList, TouchableOpacity } from 'react-native';
import React, {
  ComponentType,
  JSXElementConstructor,
  memo,
  ReactElement,
} from 'react';
import ComicCard from '~/components/shared/ComicCard';
import { CardLayout } from '~/common/types/cardLayouts';
import { GarbageIcon } from '~/components/icons';
import { mock_comic_preview } from '~/common/constants';

function ComicsList({
  listHeaderComp,
  cardLayout,
  deleteMode,
}: {
  deleteMode?: boolean;
  cardLayout: CardLayout;
  listHeaderComp?:
    | ComponentType<any>
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null
    | undefined;
}) {
  if (cardLayout === 'list') {
    return (
      <FlatList
        ListHeaderComponent={listHeaderComp}
        key={cardLayout}
        style={{ borderRadius: 10 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => cardLayout + item}
        data={Array.from(new Array(15).keys()).reverse()}
        renderItem={({ item, index }) => {
          return (
            <ComicCard
              comicPreview={mock_comic_preview}
              CornerButton={
                deleteMode ? (
                  <TouchableOpacity className='z-50 absolute bottom-0 right-2 bg-black/50 p-3 rounded-full'>
                    <GarbageIcon
                      width={16}
                      height={16}
                      className='text-white'
                    />
                  </TouchableOpacity>
                ) : undefined
              }
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
      ListHeaderComponent={listHeaderComp}
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
            comicPreview={mock_comic_preview}
            CornerButton={
              deleteMode ? (
                <TouchableOpacity className='z-50 absolute top-2 right-2 bg-black/50 p-3 rounded-full'>
                  <GarbageIcon width={16} height={16} className='text-white' />
                </TouchableOpacity>
              ) : undefined
            }
            cardLayout={cardLayout}
            style={{ marginRight: index % 2 == 0 ? 22 : 0 }}
          />
        );
      }}
    />
  );
}

export default memo(ComicsList);
