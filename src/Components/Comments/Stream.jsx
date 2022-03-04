import React from 'react';
import Comments from './Comments/Comments';

const Stream = () => {
    return (
        <div>
        <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        />
      </div>
    );
};

export default Stream;

