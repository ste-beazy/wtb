(function() {
	const root = document.getElementsByTagName('body')[0]
	document.addEventListener('click', (e) => {
		if (root.clientWidth > 900) return
		if (e.target.id !== 'logo') return
	
		const isOpen = e.target.classList.value.indexOf('active') >= 0
		if (isOpen) {
			close()
			e.target.classList -= ' active'
		} else {
			e.target.classList += ' active'
			open()
		}
	})

	function close() {
		const menu = document.getElementById('mobile-nav')
		menu.style.display = 'none'
	}

	function open() {
		const { style } = document.getElementById('mobile-nav')
		style.display = 'flex'
		style.flexDirection = 'column'
		style.alignItems = 'center'
		style.position = 'fixed'
		style.top = '7em'
		style.width = '100%'
		style.height = '25em'
	}
})()