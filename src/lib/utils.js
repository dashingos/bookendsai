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
