//your code here
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort((band1, band2) => {
	band1 = removeArticle(band1);
	band2 = removeArticle(band2);
	
    return band1 > band2 ? 1 : -1;
})

function removeArticle(band) {
	const regex = /\b(a|an|the)\b/ig;
	return band.toLowerCase().replace(regex, '').trim();
}
let html = '';
bands.forEach(band => html += `<li>${band}</li>`);
// console.log(html);
document.querySelector('ul').innerHTML = html;