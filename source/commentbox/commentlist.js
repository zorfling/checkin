import createComment from './comment';

export default React => (props) => {
  const Comment = createComment(React);

  const commentNodes = props.data.map(function (comment) {
    return <Comment author={comment.author}>{comment.text}</Comment>;
  });

  return <div>
    Comment List
    {commentNodes}
  </div>;
};
