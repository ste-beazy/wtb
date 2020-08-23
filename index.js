(function() {
	const desktopMenu = document.getElementById('navigation-wrapper')
	if (!desktopMenu) {
		document.addEventListener('click', (e) => {
			e.stopPropagation()
			if (e.target.id !== 'logo') return
			const isOpen = e.target.classList.value.indexOf('active') >= 0
			console.log({ isOpen })
			if (isOpen) {
				close()
				e.target.classList -= ' active'
			} else {
				e.target.classList += ' active'
				open()
			}
		})
	}

	function close() {
		const menu = document.getElementById('mobile-nav')
		menu.style.opacity = '0'
		menu.style.transition = 'opacity .75s ease'
		menu.style.display = 'none'
	}

	function open() {
		const { style } = document.getElementById('mobile-nav')
		style.display = 'flex'
		style.flexDirection = 'column'
		style.alignItems = 'center'
		style.opacity = '1'
		style.transition = 'opacity .75s ease'
		style.position = 'fixed'
		style.top = '7em'
		style.width = '100%'
		style.height = '40%'
	}
})()