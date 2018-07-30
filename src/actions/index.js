export function selectBook(book) {
    //selectBook is an action creator, must retun an action
    //(object with type property)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
};
