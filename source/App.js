import createCommentBox from './commentbox/commentbox';

export default React => ({ ...props }) => {
  const CommentBox = createCommentBox(React);
  const data = [
    {
      author: 'Chris',
      text: 'Stuff'
    },
    {
      author: 'Steve',
      text: 'Some other stuff'
    },
    {
      author: 'Chris M',
      text: 'The best stuff'
    }
  ];

  return (<div>
    Content goes here: { props.foo }
    <CommentBox data={data}></CommentBox>
  </div>);
};
