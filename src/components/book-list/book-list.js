import React, { Component } from 'react';
import BookListItem from '../book-list-item';

export default class BookList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.books.map((b) => {
                        return <li key={b.id}><BookListItem book={b}/></li>;
                    })
                }
            </ul>
        );
    }
}