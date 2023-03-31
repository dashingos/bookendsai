export async function searchBooksByTitle(title, maxResults = 10) {
	if (!title) title = 'Behave by Robert Sapolsky';
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

export async function ask(update_result, book, question) {
	let res = await fetch('/api/ask', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			book,
			question
		})
	});

	if (!res.ok) return console.log(res.error);
	const reader = res.body.getReader();
	const decoder = new TextDecoder();

	let buffer = '';
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			break;
		}
		buffer += decoder.decode(value, { stream: !done });
		const lines = buffer.split('\n');
		buffer = lines.pop();

		for (const line of lines) {
			if (line.trim() === '') {
				continue;
			}

			if (line.endsWith('[DONE]')) {
				buffer = '';
				break;
			}
			const data = JSON.parse(line.substring(5));

			let letter = data.choices[0].delta.content;
			if (letter) update_result(letter.replace(/\n/g, '<br>'));
		}
	}

	// If all the data has been received, process any remaining buffer
	if (buffer) {
		const data = JSON.parse(buffer.substring(5));

		// Process the parsed data here

		//I'm actually not sure if this is necessary...
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
		}
	} catch (error) {
		console.log('Error:', error);
	}

	return result.join('\n');
}
