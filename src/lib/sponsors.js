const currentSponsorList = [
	{ name: 'Marius Gugat', sponsorLevel: 8 },
	{
		name: 'Christian Femers',
		sponsorLevel: 5,
		url: 'https://www.linkedin.com/in/christian-femers/'
	},
	{ name: 'Simon Pannek', sponsorLevel: 7, url: 'https://pannek.dev' },
	{ name: 'Nicolas Hohaus', sponsorLevel: 4, url: 'https://www.linkedin.com/in/nhohaus/' },
	{ name: 'Daniel Pavlov', sponsorLevel: 3, url: 'https://pvlov.de' },
	{ name: 'Nils Harmsen', sponsorLevel: 3 },
	{
		name: 'Manuel-Nacim Kour',
		sponsorLevel: 2,
		url: 'https://www.linkedin.com/in/manuel-nacim-kour-044138217/'
	},
	{ name: 'Rico Finkbeiner', sponsorLevel: 1, url: 'https://www.linkedin.com/in/rico-finkbeiner/' },
	{ name: 'Jakob Fuchs', sponsorLevel: 1, url: 'https://www.linkedin.com/in/ja-fuchs/' },
	{ name: 'Tim Schumacher', sponsorLevel: 6 }
];

const pastSponsorList = [
	{ name: 'Marius De Kuthy Meurers' },
	{
		name: 'Marc Roig Kunzmann',
		url: 'https://www.linkedin.com/in/marc-roig-kunzmann-1448b5184/'
	},
	{ name: 'Gereon Elvers' }
];

function sortSponsorsByLevel(sponsors) {
	return sponsors.toSorted((a, b) => {
		if (a.sponsorLevel !== b.sponsorLevel) {
			return b.sponsorLevel - a.sponsorLevel;
		}

		return a.name.localeCompare(b.name);
	});
}

function sortSponsorsByName(sponsors) {
	return sponsors.toSorted((a, b) => a.name.localeCompare(b.name));
}

export const currentSponsors = sortSponsorsByLevel(currentSponsorList);
export const pastSponsors = sortSponsorsByName(pastSponsorList);
