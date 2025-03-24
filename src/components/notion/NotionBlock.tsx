import React from 'react';
import {
  BlockObjectResponse as Block,
  ParagraphBlockObjectResponse as ParagraphNotionBlock,
  ToDoBlockObjectResponse,
  EmbedBlockObjectResponse,
  ToggleBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NotionParagraph } from '../chakra/NotionParagraph';
import { HeadingBlock, NotionHeading } from '../chakra/NotionHeading';
import { ListItemBlock, NotionListItem } from '../chakra/NotionListItem';
import { NotionToDo } from '../chakra/NotionTodo';
import { NotionEmbed } from '../chakra/NotionEmbed';
import { NotionUnsupported } from '../chakra/NotionUnsupported';

export const NotionBlock = ({
  block,
  customImage,
}: {
  block: Block;
  customImage?: { Image: (props: any) => JSX.Element; props: any };
}): JSX.Element => {
  const { type } = block;
  switch (type) {
    case 'paragraph':
      return (
        <NotionParagraph
          block={block as ParagraphNotionBlock}
          customImage={customImage}
        />
      );

    case 'heading_1':
    case 'heading_2':
    case 'heading_3':
      return <NotionHeading block={block as HeadingBlock} />;
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return <NotionListItem block={block as ListItemBlock} />;
    case 'to_do':
      return <NotionToDo block={block as ToDoBlockObjectResponse} />;
    case 'embed':
      return <NotionEmbed block={block as EmbedBlockObjectResponse} />;
    default:
      return <NotionUnsupported />;
  }
};
