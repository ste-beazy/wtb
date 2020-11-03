(function () {
	const all_seasons = {
		exclusive: [
			{
				src: 'https://www.youtube.com/embed/PaOLJWFZmEY',
				title: 'Black Excellence! Music Industry Mogul/Legend Jojo Brim'
			}
		],
		s1: [
			{
				src: 'https://www.youtube.com/embed/ZbGC9Dw-j-I',
				title: 'These Dealz'
			},
			{
				src: 'https://www.youtube.com/embed/md3BO85TX5Y',
				title: 'Dave The Legend & T.E.D.'
			},
			{
				src: 'https://www.youtube.com/embed/0FwRC00C9aM',
				title: 'Chicken Heads'
			},
			{
				src: 'https://www.youtube.com/embed/nGBcEqgTQeI',
				title: 'Daria Love'
			},
			{
				src: 'https://www.youtube.com/embed/JGooiNRsIXk',
				title: 'Trey Hope'
			},
			{
				src: 'https://www.youtube.com/embed/Djsv46CqV0E',
				title: 'Bella Sorella'
			}
		],
		s2: [
			{
				src: 'https://www.youtube.com/embed/z6sHhV_W0Ww',
				title: 'Dayton Young Black Professionals'
			},
			{
				src: 'https://www.youtube.com/embed/csnaSFz8r4g',
				title: 'Third Perk Coffeehouse and Wine Bar'
			},
			{
				src: 'https://www.youtube.com/embed/8u3QKBaaRJ4',
				title: 'The Chipmunk Chronicles'
			},
			{
				src: 'https://www.youtube.com/embed/Du0CJeDRHUY',
				title: 'Puff Apothecary'
			},
			{
				src: 'https://www.youtube.com/embed/5UjoUxQESdY',
				title: 'B.B. & Co. Cupcakery'
			},
			{
				src: 'https://www.youtube.com/embed/W5J-5_AuSxM',
				title: 'Entrepreneur’s Marketplace Youtube Promotion'
			},
			{
				src: 'https://www.youtube.com/embed/5NhgocU84y4',
				title: 'Ashley Scott Community Healing'
			},
			{
				src: 'https://www.youtube.com/embed/eIQnZo9k4I0',
				title: 'Army of Dreamers Media Group'
			},
			{
				src: 'https://www.youtube.com/embed/sMkEoz2CovI',
				title: 'Taste-T Love Baby Food'
			},
		],
		s3: [
			{},
			{
				src: 'https://www.youtube.com/embed/oVrt309tWC8',
				title: 'Meltz - Cerenity'
			},
			{
				src: 'https://www.youtube.com/embed/b3ef7x3KexQ',
				title: 'Royalty Realty Investments'
			},
			{
				src: 'https://www.youtube.com/embed/-kX7RW4rvxk',
				title: 'Jazzi Delights - Jasmine Brown'
			},
			{
				src: 'https://www.youtube.com/embed/w3p1eNKfKX4',
				title: 'Simply Savory by Rachel - Rachel Blanks'
			},
			{
				src: 'https://www.youtube.com/embed/LcDbOaxSVGE',
				title: 'Haus Essentials by Dolly Addison'
			},
			{
				src: 'https://www.youtube.com/embed/ZpfoLp33t2o',
				title: 'Daytonian Beard Company'
			},
			{
				src: 'https://www.youtube.com/embed/HqmBc-b0QJg',
				title: 'Picture Perfect Paint Parties'
			},
			{
				src: 'https://www.youtube.com/embed/zPa5KO3Rvh4',
				title: 'GigMerge'
			},
			{
				src: 'https://www.youtube.com/embed/paru3uNA45s',
				title: 'Klubhouse Brand'
			}
		]
	}

	const allVideos = document.getElementsByClassName('video__preview')
	const iframe = document.createElement('iframe')
	iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
	iframe.allowFullscreen = true
	const text = document.getElementById('featured-video__title')
	const defaultDisplay = document.getElementById('featured-video__default')
	let running = false
	for (let i = 0; i < allVideos.length; i++) {
		if (running) return
		running = true
		document.addEventListener('click', (e) => {
			e.stopPropagation()
			if (e.target.classList.value.indexOf('video__preview') < 0) return

			const completeId = e.target.id
			const [season, episode] = completeId.split('-')
			const video = all_seasons[season][episode - 1]
			if (!video.src) return

			const { style } = defaultDisplay
			const [ featuredVideo ] = document.getElementsByClassName('featured-video')
			if (style.display !== 'none') {
				style.display = 'none'
			}
			const [, hasClassName] = e.target.classList.value.split(' ')
			if (hasClassName) return

			if (featuredVideo) {
				featuredVideo.classList.remove('featured-video')
			}

			e.target.classList += ' featured-video'
			const frame = document.getElementById('billboard')
			const previousFrame = document.getElementById('featured-video__default')
			previousFrame.src = undefined
			iframe.src = video.src
			text.innerHTML = season.toUpperCase() + ' Ep. ' + episode + ': ' + video.title
			frame.appendChild(iframe)
			window.scrollTo(0, 0)
		})
	}
})()