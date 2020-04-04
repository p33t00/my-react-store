import React, { Fragment } from 'react';

const BookListItem = ({book}) => {
    const { title, author } = book;
    return (
        <Fragment>
            <span>{ title }</span>
            <i>{ author }</i>
        </Fragment>
    );
}

export default BookListItem;