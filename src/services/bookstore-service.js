/**
 * Class that simulates server requests and data responses.
 */
export default class BookstoreService {
    getBooks() {
        return [
			{ id: 1, title: "hello world", author: "Micheal Jackson" },
			{ id: 2, title: "Learn to say warap", author: "Some famous mo-fo" },
		];
    }
}