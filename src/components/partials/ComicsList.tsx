import {
  FlatList,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
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
import { ComicPreview } from '~/models/Comic';
import Skeleton from '~/components/shared/Skeleton';
import TorriGate from '~/components/icons/TorriGate';

function ComicsList({
  listHeaderComp,
  cardLayout,
  deleteMode,
  comics,
  actionOnEndReachedProp,
  isFetchingNextPage,
  contentContainerStyle,
}: {
  contentContainerStyle?: StyleProp<ViewStyle>;
  isFetchingNextPage?: boolean;
  actionOnEndReachedProp?: () => void;
  comics?: ComicPreview[];
  deleteMode?: boolean;
  cardLayout: CardLayout;
  listHeaderComp?:
    | ComponentType<any>
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null
    | undefined;
}) {
  const actionOnEndReached = () => {
    if (actionOnEndReachedProp) {
      actionOnEndReachedProp();
    }
  };

  if (cardLayout === 'list') {
    return (
      <FlatList
        onEndReached={() => actionOnEndReached()}
        ListFooterComponent={
          isFetchingNextPage ? (
            <View className='w-full h-20 flex items-center justify-center'>
              <Skeleton height={50} width={50}>
                <View className='bg-white/20 w-full h-full rounded-xl items-center justify-center flex'>
                  <TorriGate width={30} height={30} />
                </View>
              </Skeleton>
            </View>
          ) : undefined
        }
        ListHeaderComponent={listHeaderComp}
        key={cardLayout + '_list_'}
        style={{ borderRadius: 10 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => cardLayout + item.path}
        data={
          comics ? comics : Array.from(new Array(1).fill(mock_comic_preview))
        }
        renderItem={({ item, index }) => {
          return (
            <ComicCard
              comicPreview={item}
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
      ></FlatList>
    );
  }

  return (
    <FlatList
      ListHeaderComponent={listHeaderComp}
      ListFooterComponent={
        isFetchingNextPage ? (
          <View className='w-full h-20 flex items-center justify-center'>
            <Skeleton height={50} width={50}>
              <View className='bg-white/20 w-full h-full rounded-xl items-center justify-center flex'>
                <TorriGate width={30} height={30} />
              </View>
            </Skeleton>
          </View>
        ) : undefined
      }
      onEndReached={() => actionOnEndReached()}
      key={cardLayout + '_layout_'}
      style={{ borderRadius: 10 }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => cardLayout + item.path}
      numColumns={2}
      data={comics ? comics : Array.from(new Array(1).fill(mock_comic_preview))}
      columnWrapperStyle={{
        gap: 20,
        marginTop: 14,
      }}
      contentContainerStyle={contentContainerStyle}
      renderItem={({ item, index }) => {
        return (
          <ComicCard
            comicPreview={item}
            CornerButton={
              deleteMode ? (
                <TouchableOpacity className='z-50 absolute top-2 right-2 bg-black/50 p-3 rounded-full'>
                  <GarbageIcon width={16} height={16} className='text-white' />
                </TouchableOpacity>
              ) : undefined
            }
            cardLayout={cardLayout}
          />
        );
      }}
    />
  );
}

export default memo(ComicsList);
