<script>
	let result = '';
	async function fetcher() {
		let res = await fetch('http://localhost:8787/');
		const reader = res.body.getReader();
		const decoder = new TextDecoder();

		let buffer = '';
		while (true) {
			const { done, value } = await reader.read();

			// If there is no more data coming in, break out of the loop
			if (done) {
				break;
			}

			// Add the new data to the buffer
			buffer += decoder.decode(value, { stream: !done });

			// Split the buffer by the newline character
			const lines = buffer.split('\n');
			buffer = lines.pop();

			for (const line of lines) {
				if (line.trim() === '') {
					continue; // Skip empty lines
				}

				if (line.endsWith('[DONE]')) {
					buffer = '';
					break; // End of data
				}
				const data = JSON.parse(line.substring(5));

				let letter = data.choices[0].text;
				// Process the parsed data here
				if (letter === '\n') letter = '<br>';
				result += letter;
			}
		}

		// If all the data has been received, process any remaining buffer
		if (buffer) {
			const data = JSON.parse(buffer.substring(5));

			// Process the parsed data here
		}
	}
</script>

<button on:click={fetcher}> Fetch </button>

{@html result}
