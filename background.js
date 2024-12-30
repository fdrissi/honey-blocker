// Block new tabs opened by the Honey extension
chrome.tabs.onCreated.addListener((tab) => {
	// Check if the pending URL starts with the targeted Honey URL
	if (
		tab.pendingUrl &&
		tab.pendingUrl.startsWith('https://o.honey.io/store/')
	) {
		chrome.tabs.remove(tab.id) // Block the new tab
		console.log(`Blocked new tab with pending URL: ${tab.pendingUrl}`)
	} else {
		console.log('No action needed for this tab.')
	}
})
