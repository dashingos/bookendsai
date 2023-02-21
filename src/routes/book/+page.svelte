<script>
	let result = '';
	async function fetcher() {
		let res = await fetch('https://bookendsai.com/api/ask', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				book: 'The Mom Test',
				question: 'What are the highlights?'
			})
		});

		if (!res.ok) return console.log(res);
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

				let letter = data.choices[0].text;
				if (letter === '\n') letter = '<br>';
				result += letter;
			}
		}

		// If all the data has been received, process any remaining buffer
		if (buffer) {
			const data = JSON.parse(buffer.substring(5));

			// Process the parsed data here

			//I'm actually not sure if this is necessary...
		}
	}
</script>

<button on:click={fetcher}> Fetch </button>

{@html result}
