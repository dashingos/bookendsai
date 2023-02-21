export async function searchBooksByTitle(title, maxResults = 10) {
	const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
	const params = {
		q: `intitle:${title}`,
		maxResults
	};

	const response = await fetch(`${baseUrl}?${new URLSearchParams(params)}`);
	if (response.ok) {
		const data = await response.json();
		return data.items;
	} else {
		console.error(`Error: ${response.status} ${response.statusText}`);
		return [];
	}
}

async function callOpenAI() {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			prompt: 'Return a list of books based on the user request. User: `Nassim Taleb`'
		})
	};

	const response = await fetch('https://api.openai.com/v1/completions', requestOptions);

	const reader = response.body.getReader();
	const decoder = new TextDecoder();

	let result = [];

	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			const data = decoder.decode(value);
			result.push(data);
			console.log(result);
		}
	} catch (error) {
		console.log('Error:', error);
	}

	return result.join('\n');
}
