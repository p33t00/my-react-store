/**
 * Class that simulates server requests and data responses.
 */
export default class BookstoreService {
	timerID;
	data = [
		{
			id: 1,
			title: "hello world",
			author: "Micheal Jackson",
			quantity: 1,
			price: 32,
			coverImage: "static/media/200px-square.jpg",
		},
		{
			id: 2,
			title: "Learn to say warap",
			author: "Some famous mo-fo",
			quantity: 1,
			price: 45,
			coverImage: "static/media/200px-square.jpg",
		},
	];

	getBooks() {
		return new Promise((resolve) => {
			this.timerID = setTimeout(() => {
				resolve(this.data);
			}, 1200);
		});
	}

	componentWillUnmount = () => {
		clearTimeout(this.timerID);
	};
}
