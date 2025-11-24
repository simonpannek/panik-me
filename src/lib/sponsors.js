const sponsorList = [
	{ name: 'Marius Gugat', sponsorLevel: 7 },
	{
		name: 'Christian Femers',
		sponsorLevel: 6,
		url: 'https://www.linkedin.com/in/christian-femers/'
	},
	{ name: 'Simon Pannek', sponsorLevel: 5, url: 'https://pannek.dev' },
	{ name: 'Nils Harmsen', sponsorLevel: 4 },
	{ name: 'Tim Schumacher', sponsorLevel: 4 },
	{
		name: 'Nicolas Hohaus',
		sponsorLevel: 3,
		url: 'https://www.linkedin.com/in/nhohaus/'
	},
	{
		name: 'Manuel-Nacim Kour',
		sponsorLevel: 3,
		url: 'https://www.linkedin.com/in/manuel-nacim-kour-044138217/'
	},
	{ name: 'Marius De Kuthy Meurers', sponsorLevel: 2 },
	{ name: 'Daniel Pavlov', sponsorLevel: 2, url: 'https://pvlov.de' },
	{
		name: 'Jakob Fuchs',
		sponsorLevel: 2,
		url: 'https://www.linkedin.com/in/ja-fuchs/'
	},
	{
		name: 'Marc Roig Kunzmann',
		sponsorLevel: 2,
		url: 'https://www.linkedin.com/in/marc-roig-kunzmann-1448b5184/'
	},
	{
		name: 'Rico Finkbeiner',
		sponsorLevel: 2,
		url: 'https://www.linkedin.com/in/rico-finkbeiner/'
	},
	{ name: 'Gereon Elvers', sponsorLevel: 1 }
];

export const sponsors = sponsorList.sort((a, b) => {
	// Sort by sponsor level first (descending)
	if (a.sponsorLevel !== b.sponsorLevel) {
		return b.sponsorLevel - a.sponsorLevel;
	}
	// Then sort alphabetically by name
	return a.name.localeCompare(b.name);
});
