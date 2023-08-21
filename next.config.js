/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	compress: false,
	distDir: 'dist',
	compiler: {
		removeConsole: true,
	},
}

module.exports = nextConfig