import React from 'react';
import {
  BlockObjectResponse as Block,
  ParagraphBlockObjectResponse as ParagraphNotionBlock,
  ToDoBlockObjectResponse,
  EmbedBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NotionParagraph } from '../chakra/NotionParagraph';
import { HeadingBlock, NotionHeading } from '../chakra/NotionHeading';
import { ListItemBlock, NotionListItem } from '../chakra/NotionListItem';
import { NotionToDo } from '../chakra/NotionTodo';
import { NotionEmbed } from '../chakra/NotionEmbed';
import { NotionUnsupported } from '../chakra/NotionUnsupported';

type NotionImageProps = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

type CustomImage = {
  Image: (props: NotionImageProps) => JSX.Element;
  props: NotionImageProps;
};

export const NotionBlock = ({
  block,
  customImage,
}: {
  block: Block;
  customImage?: CustomImage;
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
