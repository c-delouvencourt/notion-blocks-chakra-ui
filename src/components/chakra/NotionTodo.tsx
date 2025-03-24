import { Checkbox } from '@chakra-ui/react';
import { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';
import { NotionText } from '../notion/NotionText';

type NotionToDoProps = {
  block: ToDoBlockObjectResponse;
};

export const NotionToDo = ({ block }: NotionToDoProps): JSX.Element => {
  return (
    <Checkbox
      defaultChecked={block.to_do.checked}
      color="#374151"
      marginBottom="0.5rem"
      lineHeight="1.75"
      isReadOnly
    >
      <NotionText text={block.to_do.rich_text} />
    </Checkbox>
  );
};
