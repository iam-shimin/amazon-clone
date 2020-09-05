export default function apiMock(responseToMock) {
	return new Promise(resolve => {
		const randomDelay = Math.floor(Math.random() * 5000);
		setTimeout(() => resolve(responseToMock), randomDelay);
	});
}