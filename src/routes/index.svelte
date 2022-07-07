<script>
  export let token;
  export let profile;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<pre>{JSON.stringify(profile)}</pre>
<pre>{JSON.stringify(token)}</pre>
