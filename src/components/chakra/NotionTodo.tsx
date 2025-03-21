import { Checkbox } from '@chakra-ui/react';
import { ToDoBlock } from '@notionhq/client/build/src/api-types';
import React from 'react';
import { NotionText } from '../notion/NotionText';

type NotionToDoProps = {
  block: ToDoBlock;
};

export const NotionToDo = ({ block }: NotionToDoProps): JSX.Element => {
  return (
    <Checkbox defaultChecked={block.to_do.checked} isReadOnly>
      <NotionText text={block.to_do.text} color="#374151" marginBottom="0.5rem" lineHeight="1.75" />
    </Checkbox>
  );
};
