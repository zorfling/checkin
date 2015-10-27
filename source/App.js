import createCommentBox from './commentbox/commentbox';

export default React => ({ ...props }) => {
  const CommentBox = createCommentBox(React);
  return (<div>
    Content goes here: { props.foo }
    <CommentBox></CommentBox>
  </div>);
};
