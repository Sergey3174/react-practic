import { getPost } from '../api';
import { commentsWithAuthor } from '../utils';

export const fetchPost = async (postId) => {
	const post = await getPost(postId);

	return {
		error: null,
		res: {
			...post,
			comments: await commentsWithAuthor(postId),
		},
	};
};
