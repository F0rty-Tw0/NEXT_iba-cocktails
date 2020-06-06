import axios from 'axios';

export default async (req, res) => {
	if (req.method === 'POST') {
		const postData = JSON.parse(req.body);
		console.log(postData);

		return res.json({
			status: 'saving',
			...postData
		});
	} else {
		const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
		const posts = postsResponse.data;
		return res.json(posts.slice(0, 20));
	}
};
