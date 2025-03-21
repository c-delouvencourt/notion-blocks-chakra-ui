import { Heading } from '@chakra-ui/react';
import {
  HeadingOneBlock,
  HeadingThreeBlock,
  HeadingTwoBlock,
} from '@notionhq/client/build/src/api-types';
import React from 'react';
import { NotionText } from '../notion/NotionText';

export type HeadingBlock =
  | HeadingOneBlock
  | HeadingTwoBlock
  | HeadingThreeBlock;

type NotionHeadingProps = {
  block: HeadingBlock;
};

export const NotionHeading = ({ block }: NotionHeadingProps): JSX.Element => {
  switch (block.type) {
    case 'heading_1': {
      return (
        <Heading as="h1" fontSize="30px" marginBottom="2rem" color="#111827">
          <NotionText text={block.heading_1.text} />
        </Heading>
      );
    }
    case 'heading_2': {
      return (
        <Heading as="h2" fontSize="22px" marginBottom="1.5rem" marginTop="3rem" color="#111827">
          <NotionText text={block.heading_2.text} />
        </Heading>
      );
    }
    case 'heading_3': {
      return (
        <Heading as="h3" fontSize="16px" marginBottom="1rem" marginTop="2rem" color="#111827">
          <NotionText text={block.heading_3.text} />
        </Heading>
      );
    }
    default:
      return <></>;
  }
};
