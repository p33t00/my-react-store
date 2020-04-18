import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book }) => {
	const { title, author, price, coverImage } = book;
	return (
		<div className="block-list-item">
			<img src={coverImage} alt="book" />
            <div className="item-info">
                <h3>{title}</h3>
                <span>
                    <i>{author}</i>
                </span>
            </div>
            <div className="buy-info">
                <button className="btn btn-success">Buy me !</button>
                <span className="list-item-price">${price}</span>
            </div>
		</div>
	);
};

export default BookListItem;
