import { chakra } from '@chakra-ui/react';
import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import { NotionText } from '../notion/NotionText';

export type ListItemBlock =
  | NumberedListItemBlockObjectResponse
  | BulletedListItemBlockObjectResponse;

type NotionListItemProps = {
  block: ListItemBlock;
};

export const NotionListItem = ({ block }: NotionListItemProps): JSX.Element => {
  return (
    <chakra.li color="#374151" marginBottom="1rem" lineHeight="1.75">
      <NotionText
        text={
          'bulleted_list_item' in block
            ? block.bulleted_list_item.rich_text
            : block.numbered_list_item.rich_text
        }
      />
    </chakra.li>
  );
};
