<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	const onClickRightContent = (/** @type {any} */ e) => {
		console.log(e.target);
	};
</script>

<header class="columns mt-0 ml-0 has-background-black">
	<div class="column is-half">
		<a href="#" class="is-flex has-text-white is-align-items-center">
			<img src={'https://media.sellycdn.net/files/md_445646269301_1617593312837.png'} alt="Selly" />
			<h1 class="is-inline-desktop is-hidden-mobile pl-4 is-size-6 has-text-weight-bold">Selly</h1>
		</a>
	</div>
	<div class="column is-half">
		<div class="dropdown is-hoverable">
			<figure class="image is-32x32">
				<img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
			</figure>
		</div>
	</div>

	<!-- <nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div> -->
</header>

<style>
	img {
		width: 28px;
		height: 28px;
	}

	.dropdown:active {
	}
</style>
