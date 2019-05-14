module.exports = {
	chainWebpack: config => {
		config.module.rule('sss')
			.use('postcss-loader')
				.loader('postcss-loader')
				.tap(opts => {
					opts.plugins.push(
						// in some order you want
						require('postcss-preset-env')({
							"stage": 0,
							"browsers": "last 2 versions"
						}),
						require('postcss-nested')
					);

					// You can change or set any property
					// opts.parser = 'sugarss';

					return opts;
				});
	}
}