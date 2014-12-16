var fleecy = require('fleecy');

new fleecy({
        inputPath:'./test/Basic_Shading.as',
        compilerOptions: {
        	'source-paths': [
        		'./node_modules/away3d-core-fp11/src'
        	],
        	// debug: true,
        	incremental: true,
        	'static-link-runtime-shared-libraries': true 
        },
		embedOptions: {
			params: {
				wmode: 'direct'
			}
		}
    });
