enyo.kind({
	name: "Main",
	kind: enyo.VFlexBox,
	components: [
		{kind: "PageHeader", components: [
			{content: "IPKG Feed Manager"}
		]},
		{kind: "Scroller", flex: 1, components: [
    {kind: "Input", flex: 1, hint: "App ID"},
    {kind: "Input", flex: 1, hint: "App Version"},
    {kind: "Input", flex: 1, hint: "Section (e.g. Social Networks, Productivity, etc.)"},
    {kind: "Input", flex: 1, hint: "Architecture (e.g. All, ARMV7, ARMV6)"},
    {kind: "Input", flex: 1, hint: "Maintainer (e.g. link to developers requested home page)"},
    {kind: "Input", flex: 1, hint: "Size (in bytes)"},
    {kind: "Input", flex: 1, hint: "File Name (e.g. com.webosroundup.feedmanager_0.0.1_all.ipk)"},
    {kind: "Input", flex: 1, hint: "Description (e.g. apps name)"},
	{content: "Feed name:" + " webOSroundup"},
	{content: "Type:" + " Application"},
    {kind: "Input", flex: 1, hint: "Category (same as Section that you defined above)"},
    {kind: "Input", flex: 1, hint: "Last Updated (e.g. the unix timestamp of when you are adding the application right now)"},
    {kind: "Input", flex: 1, hint: "Title (applications name"},
    {kind: "Input", flex: 1, hint: "Full Description (the applications full description given by the developer)"},
    {kind: "Input", flex: 1, hint: "Homepage (e.g. the developers specified support link"},
    {kind: "Input", flex: 1, hint: "Icon (e.g. the link to the icon URL)"},
    {kind: "Group", caption: "Screenshots (max 5)", components: [
    {kind: "Input", flex: 1, hint: "Screenshot URL"},
    {kind: "Input", flex: 1, hint: "Screenshot URL"},
    {kind: "Input", flex: 1, hint: "Screenshot URL"},
    {kind: "Input", flex: 1, hint: "Screenshot URL"},
    {kind: "Input", flex: 1, hint: "Screenshot URL"},
]},
{kind: "Input", flex: 1, hint: "License (e.g. GPLv3, Closed Source, etc."},
{kind: "Input", flex: 1, hint: "Mimimum webOS Version (e.g. 1.4.5)"},
  ]},
    

		{kind: "Toolbar", components: [
{kind: "Button", caption: "Update Packages File", className: "enyo-button-affirmative"}
		]}
	]
});
