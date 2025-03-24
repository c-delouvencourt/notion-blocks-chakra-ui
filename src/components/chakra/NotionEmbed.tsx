import { EmbedBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import React from 'react';

type NotionEmbedProps = {
  block: EmbedBlockObjectResponse;
};

export const NotionEmbed = ({ block }: NotionEmbedProps): JSX.Element => {
  return (
    <iframe
      src={block.embed.url}
      title={block.embed.caption?.pop()?.plain_text ?? 'Embed item'}
      style={{ width: '100%', height: '600px' }}
    />
  );
};
