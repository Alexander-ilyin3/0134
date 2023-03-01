import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Styled as S } from './CommentFormStyles';
import { CommentMockData } from 'src/mockData/CommentsMockData';

type PropTypes = {
  addComment: (newComment: CommentMockData) => void;
};

export const CommentForm: React.FC<PropTypes> = ({ addComment }) => {
  const [inputText, setInputText] = useState('');

  const onSubmit = useCallback(() => {
    if (!inputText.trim()) {
      return;
    }

    const dateText = new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'medium',
    }).format(new Date());

    addComment({ comment: inputText, date: dateText, name: 'John Doe' });
    setInputText('');
  }, [addComment, inputText]);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === 'Enter') {
        console.log('ctrl+enter was pressed');
        event.preventDefault();
        onSubmit();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSubmit]);

  return (
    <S.Form ref={formRef} onSubmit={onSubmit}>
      <S.Input onChange={(e) => setInputText(e.target.value)} value={inputText} />
      <S.Button onClick={onSubmit} disabled={!inputText.trim()}>
        Send a message
      </S.Button>
    </S.Form>
  );
};
