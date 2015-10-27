import createCommentList from './commentlist';
import createCommentForm from './commentform';

export default React => (props) => {
  const CommentList = createCommentList(React);
  const CommentForm = createCommentForm(React);

  const doAlert = (e) => {
    e.preventDefault();

  }

  return <div>
    Comment Box
    <CommentList data={ props.data }></CommentList>
    <CommentForm alert={doAlert}></CommentForm>
  </div>;
};
