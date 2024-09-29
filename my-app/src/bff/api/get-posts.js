import { transformPost } from '../transformers';
export const getPosts = (searchPhrase, page, limit) => {
	if (searchPhrase) {
		return fetch(`http://localhost:3005/posts`)
			.then((data) => data.json())
			.then((data) => {
				const posts = data.filter(
					({ title }, index) =>
						title.toLowerCase().includes(searchPhrase.toLowerCase()) &&
						Math.ceil((index + 1) / limit) === page,
				);
				const last = Math.ceil(data.length / limit);

				return {
					posts: posts && posts.map(transformPost),
					last,
				};
			});
	}

	return fetch(`http://localhost:3005/posts?_page=${page}&_per_page=${limit}`)
		.then((data) => data.json())
		.then(({ data, last }) => {
			return {
				posts: data && data.map(transformPost),
				last,
			};
		});
};
