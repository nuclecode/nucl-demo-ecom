/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	webpack: (
		config,
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
	) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						configFile: path.resolve(__dirname, 'svgr.config.js')
					}
				}
			]
		});
		return config;
	},
	
};

module.exports = nextConfig;


