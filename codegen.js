module.exports = {
	schema: [
	    {
		'https://graphql.fauna.com/graphql': {
		    headers: {
			'authorization': 'Bearer fnAENeRZx7ACRQZrmiPnchOz5RteM5mfGSEgHAN2',
		    },
		},
	    },
	],
	documents: ['./src/**/*.tsx', './src/**/*.ts'],
	overwrite: true,
	generates: {
	    './src/generated/graphql.tsx': {
		plugins: [
		    'typescript',
		    'typescript-operations',
		    'typescript-react-apollo',
		],
	    },
	    './graphql.schema.json': {
		plugins: ['introspection'],
	    },
	},
    };