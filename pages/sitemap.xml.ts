import type { GetServerSideProps } from 'next'

const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts'

const generateSiteMap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
			 <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
			 <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     ${posts
				.map(({ id }) => {
					return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
			 		 <lastmod>${new Date().toISOString()}</lastmod>
       </url>
     `
				})
				.join('')}
   </urlset>
 `

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	// We make an API call to gather the URLs for our site
	const request = await fetch(EXTERNAL_DATA_URL)
	const posts = await request.json()

	// We generate the XML sitemap with the posts data
	const sitemap = generateSiteMap(posts)

	res.setHeader('Content-Type', 'text/xml')
	// we send the XML to the browser
	res.write(sitemap)
	res.end()

	return {
		props: {},
	}
}

export default SiteMap
