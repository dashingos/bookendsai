<script>
	export let title;
	export let description = 'Get book highlights, takeaways, and questions answered.';
</script>

<svelte:head>
	<title>{title ? `${title} / Bookends AI` : 'Bookends AI'}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://bookendsai.com" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://bookendsai.com" />
	<meta property="og:site_name" content="Bookends AI" />
	<meta property="og:image" content="http://bookendsai.com/Bookends_AI_meta.png" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Bookends AI" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="http://bookendsai.com/Bookends_AI_meta.png" />
</svelte:head>
