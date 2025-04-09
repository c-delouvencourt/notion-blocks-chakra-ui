import { Heading } from '@chakra-ui/react';
import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import { NotionText } from '../notion/NotionText';

export type HeadingBlock =
  | Heading1BlockObjectResponse
  | Heading2BlockObjectResponse
  | Heading3BlockObjectResponse;

type NotionHeadingProps = {
  block: HeadingBlock;
};

export const NotionHeading = ({ block }: NotionHeadingProps): JSX.Element => {
  switch (block.type) {
    case 'heading_1': {
      return (
        <Heading as="h1" fontSize="30px" marginBottom="2rem" color="#111827">
          <NotionText text={block.heading_1.rich_text} />
        </Heading>
      );
    }
    case 'heading_2': {
      return (
        <Heading
          as="h2"
          fontSize="22px"
          marginBottom="1.5rem"
          marginTop="3rem"
          color="#111827"
        >
          <NotionText text={block.heading_2.rich_text} />
        </Heading>
      );
    }
    case 'heading_3': {
      return (
        <Heading
          as="h3"
          fontSize="18px"
          marginBottom="0.75rem"
          marginTop="1.75rem"
          color="#111827"
        >
          <NotionText text={block.heading_3.rich_text} />
        </Heading>
      );
    }
    default:
      return <></>;
  }
};
