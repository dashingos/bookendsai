import { OPENAI_KEY } from '$env/static/private';
export async function POST({ request }) {
	const { book, question } = await request.json();

	let messages = [
		{
			role: 'system',
			content: `Answer user question about the book: "${book}"`
		},
		{ role: 'user', content: question }
	];

	return await stream_openai(OPENAI_KEY, messages);
}

async function stream_openai(KEY, messages, max_tokens = 500) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${KEY}`
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages,
			max_tokens,
			stream: true
		})
	};

	const res = await fetch('https://api.openai.com/v1/chat/completions', requestOptions);

	if (!res.ok)
		return new Response('There was an error...', {
			status: 500
		});

	let { readable, writable } = new TransformStream();
	res.body.pipeTo(writable);
	return new Response(readable, {
		status: res.status
	});
}
