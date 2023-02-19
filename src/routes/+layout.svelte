<script>
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
	<link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
	/>
	<link
		rel="stylesheet"
		href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
	/>
</svelte:head>

<div class="scroll-smooth bg-white antialiased">
	<slot />
</div>
