import { useState } from 'react';

import { commentMockData, CommentMockData } from 'src/mockData/CommentsMockData';

export const useCommentsController = () => {
  const [comments, setComments] = useState<CommentMockData[]>(commentMockData);

  const addComment = (newComment: CommentMockData) => {
    setComments((comments) => [...comments, newComment]);
  };

  return { comments, addComment };
};
