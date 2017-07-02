export function selectBook(book){
  //selectBook is an action creator. It needs to return action
  //an object with a type property
  return (
    type:'BOOK_SELECTED',
    payload:book
  );
}
