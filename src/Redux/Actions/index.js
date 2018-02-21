const GET_LIST = 'GET_LIST';
const GET_LIKE_STATUS = 'GET_LIKE_STATUS';
// const EDIT_NOTE = 'EDIT_NOTE';
// const GO_BACK = 'GO_BACK';
// const GET_NOTES = 'GET_NOTES';

export const getBooks = bookList => (
  {
    type: GET_LIST,
    payload: bookList,
  }
);

export const getLikeStatus = () => ({
  type: GET_LIKE_STATUS,
});
