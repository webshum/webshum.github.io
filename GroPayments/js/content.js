const SPACE = '34uihq81dwtm';
const TOKEN = 'bYCiQb6srVEhqYwtTF3Xzi7spI2F8-7jJc_LTbn4Jus';

const client = contentful.createClient({
	space: '34uihq81dwtm',
	accessToken: 'bYCiQb6srVEhqYwtTF3Xzi7spI2F8-7jJc_LTbn4Jus'
});

async function getPosts() {
	try {
		const response = await client.getEntries({
	    	content_type: 'pageBlogPost'
	    });

	    return response.items;
	} catch (error) {
		console.log('Error fetchind entries:', error);
		return null;
	}
}

function parsePost(posts, selector) {
	const container = document.querySelector(selector);
	let html = '';

	posts.forEach(post => {
		html += `
			<div class="post">
				<div class="image">
					<img src="${ post.fields.featuredImage.fields.file.url }" alt="${ post.fields.featuredImage.fields.title }">
				</div>

				<h2>${ post.fields.title }</h2>

				<div class="metadata">
					<span>Business</span>
					<span>12 min read</span>
					<span>${ post.fields.publishedDate }</span>
				</div>

				<a href="post.php/${ post.fields.slug }">
					<span>Read more</span>
					<svg width="15" height="14">
						<use xlink:href="#arr-right"></use>
					</svg>
				</a>
			</div>
		`;
		console.log(post);
	});

	container.innerHTML = html;
}


async function render() {
	const posts = await getPosts();
	parsePost(posts, '.blog-post');
}

render();


