import React from 'react';
import BookList from '../book-list';

const Home = (props) => {
    const dummy = [
        {id: 1, title: 'hello world', author: 'Micheal Jackson'},
        {id: 2, title: 'Learn to say warap', author: 'Some famous mo-fo'}
    ];
    return <BookList books={dummy} />
}

export default Home;