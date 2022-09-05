module.exports ={
	login:{
		type:"String",
		maxLength:99,
		minLength:3,
		orign:"User Generated"
	},
	id:{
		type:"Big Int",
		maxLength:null,
		minLength:null,
		origin:"Computed / Incremented"
	},
	node_id:{
		type:"Hex Key",
		maxLength:null,
		minLength:null,
		origin:"Random Hex Generated"
	},
	avatar_url:{
		type:"Path destination",
		pathPrefix:"https://github.com/images/error/",
		pathSufix:[
			".gif",
			".ping",
			".jpg",
			".jpeg"
		],
		origin:"System Defined"
	},
	gravatar_id:{
		type:"Path destination",
		maxLength:null,
		minLength:null,
		origin:"User Defined / User Permitted"
	},
	url:{
		type:"Path destination",
		pathPrefix:"https://api.github.com/users/",
		origin:"System Defined"
	},
	html_url:{
		type:"Path destination",
		pathPrefix:"https://github.com/",
		pathSufix:"{login}",
		origin:"System Defined"
	},
	followers_url:
	{
		type:"Path destination",
		pathPrefix:"https://api.github.com/users/",
		pathSufix:"/followers",
		origin:"System Defined"
	},
	following_url:{
		type:"Path destination",
		pathPrefix:"https://api.github.com/users/",
		pathSufix:"/following{/other_user}",
		origin:"System Defined"
	},
	gists_url:{
		type:"Path destination",
		pathPrefix:"https://api.github.com/users/",
		pathSufix:"/gists",
		pathSufix:"{/gist_id}",
		origin:"System Defined"
	},
	starred_url:{
		type:"Path destination",
		pathPrefix:"https://api.github.com/users/",
		pathSufix:"/starred{/owner}{/repo}",
		origin:"System Defined"
	},
	subscriptions_url:{
		type:"Path destination",
		pathPrefix:"https://api.github.com/users/",
		pathSufix:"/subscriptions",
		origin:"System Defined"
	},
	organizations_url:{
		type:"Path destination",
		pathPrefix:"https://api.github.com/users/",
		pathSufix:"/orgs",
		origin:"System Defined"
	},
	repos_url:{
		type:"Path destination",
		pathPrefix:"https://api.github.com/users/",
		pathSufix:"/repos",
		origin:"System Defined"
	},
	events_url:{
		type:"Path destination",
		pathPrefix:"https://api.github.com/users/",
		pathSufix:"/events{/privacy}",
		origin:"System Defined"
	},
	received_events_url:{
		type:"Path destination",
		pathPrefix:"https://api.github.com/users/",
		pathSufix:"/received_events",
		origin:"System Defined"
	},
	type:{
		type:"Permission",
		origin:"System Defined",
		expectations:[
			"root",
			"base",
			"create",
			'write',
			"delete",
		],
		origin:"System Defined"
	},
	site_admin:{
		type:"Boolean",
		origin:"Admin Defined"
	},
	name:{
		type:"String",
		maxLength:99,
		minLength:3,
		orign:"User Generated"
	},
	company:{
		type:"String",
		maxLength:99,
		minLength:3,
		orign:"User Generated"
	},
	blog:"https://github.com/blog",
	location:{
		type:"String",
		maxLength:99,
		minLength:3,
		orign:"User Generated"
	},
	email:{
		type:"Email",
		maxLength:99,
		minLength:3,
		orign:"User Generated"
	},
	hireable:{
		type:"Boolean",
		origin:"Admin Defined"
	},
	bio:{
		type:"String",
		maxLength:99,
		minLength:3,
		orign:"User Generated"
	},
	twitter_username:{
		type:"String",
		maxLength:99,
		minLength:3,
		orign:"User Generated"
	},
	public_repos:{
		type:"Int",
		maxLength:null,
		minLength:null,
		origin:"Calculated"
	},
	public_gists:{
		type:"Int",
		maxLength:null,
		minLength:null,
		origin:"Calculated"
	},
	followers:{
		type:"Int",
		maxLength:null,
		minLength:null,
		origin:"Calculated"
	},
	following:{
		type:"Int",
		maxLength:null,
		minLength:null,
		origin:"Calculated"
	},
	created_at:"2008-01-14T04:33:35Z",
	updated_at:"2008-01-14T04:33:35Z",
	private_gists:{
		type:"Int",
		maxLength:null,
		minLength:null,
		origin:"Calculated"
	},
	total_private_repos:{
		type:"Int",
		maxLength:null,
		minLength:null,
		origin:"Calculated"
	},
	owned_private_repos:{
		type:"Int",
		maxLength:null,
		minLength:null,
		origin:"Calculated"
	},
	disk_usage:{
		type:"Int",
		maxLength:null,
		minLength:null,
		origin:"Calculated"
	},
	collaborators:{
		type:"Int",
		maxLength:null,
		minLength:null,
		origin:"Calculated"
	},
	two_factor_authentication:{
		type:"Boolean",
		origin:"Admin Defined"
	},
	plan:{
		type:"Array",
		maxLength:4,
		minLength:4,
		orign:"System Defined",
		objects:[
			"name",
			"space",
			"private_repos",
			"collaborators"
		]
	}
}