import { transformPost } from '../transformers';
export const getPosts = (page, limit) =>
	fetch(`http://localhost:3005/posts?_page=${page}&_per_page=${limit}`)
		.then((data) => data.json())
		.then(({ data, last }) => ({
			posts: data && data.map(transformPost),
			last,
		}));
