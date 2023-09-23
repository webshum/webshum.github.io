function header() {
	const header = document.getElementById('header');
	const nav = document.querySelector('.wrap-nav');
	const btnNav = document.querySelector('.btn-nav');
	const linkAll = nav.querySelectorAll('a');

	document.addEventListener('scroll', (e) => {
		if (window.scrollY > 0) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	});

	document.querySelector('#nav').addEventListener('scroll', (e) => {
		console.log(document.querySelector('#nav').scrollTop);
		if (document.querySelector('#nav').scrollTop > 0) {
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	});

	btnNav.addEventListener('click', e => {
		console.log('click');
		document.documentElement.classList.toggle('open-nav');
	});

	linkAll.forEach(link => {
		link.addEventListener('click', e => {
			const parent = e.target.parentNode;

			if (parent.querySelector('.drop') != null) {
				e.preventDefault();
				parent.classList.toggle('open-drop');
			}
		});
	});
}

header();

if (document.querySelector('.company .splide') != null) {
	new Splide('.company .splide', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 3,
	    gap: 30,
	    mediaQuery: 'min',
	    autoScroll: {
	        speed: 0.5,
	    },
	    breakpoints: {
			900: {
		        destroy: true,
		    }
		}
	}).mount(window.splide.Extensions);
}

if (document.querySelector('.reviews-slider') != null) {
	new Splide('.reviews-slider', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 4,
	    gap: 24,
	    autoScroll: {
	        speed: 0.5,
	    },
	    breakpoints: {
			1200: {
		        perPage: 3,
		    },
		    900: {
		        perPage: 2,
		    },
		    900: {
		        perPage: 1,
		        gap: 10,
		    }
		}
	}).mount(window.splide.Extensions);
}

if (document.querySelector('.page-store .splide') != null) {
	new Splide('.page-store .splide', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 3,
	    gap: 20,
	    autoplay: true,
	    breakpoints: {
	    	700: {
	    		perPage: 2,
	    		gap: 7,
	    	}
	    }
	}).mount();
}

if (document.querySelector('.crm .splide-1') != null) {
	new Splide('.crm .splide', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 6,
	    gap: 20,
	    autoScroll: {
	        speed: 1,
	    },
	    breakpoints: {
	    	700: {
	    		gap: 13,
	    		perPage: 7,
	    	}
	    }
	}).mount(window.splide.Extensions);
}

if (document.querySelector('.crm .splide-2') != null) {
	new Splide('.crm .splide-2', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 6,
	    gap: 20,
	    autoScroll: {
	        speed: 0.5,
	    },
	    breakpoints: {
	    	700: {
	    		gap: 13,
	    		perPage: 7,
	    	}
	    }
	}).mount(window.splide.Extensions);
}

if (document.querySelector('.crm .splide-3') != null) {
	new Splide('.crm .splide-3', {
		type: 'loop',
	    drag: 'free',
	    focus: 'center',
	    arrows: false,
	    perPage: 3,
	    gap: 20,
	    autoScroll: {
	        speed: 0.3,
	    },
	    breakpoints: {
	    	700: {
	    		gap: 13,
	    		perPage: 4,
	    	}
	    }
	}).mount(window.splide.Extensions);
}

if (document.querySelector('.processing-card .splide') != null) {
	new Splide('.processing-card .splide', {
		type: 'loop',
		perPage: 1,
		mediaQuery: 'min',
		arrows: false,
		autoplay: true,
		breakpoints: {
			700: {
		        destroy: true,
		    }
		}
	}).mount();
}

if (document.querySelector('.blog-slider .splide') != null) {
	new Splide('.blog-slider .splide', {
		type: 'fade',
		rewind: true,
		perPage: 1,
		arrows: false
	}).mount();
}

if (document.querySelector('.categories .splide') != null) {
	new Splide('.categories .splide', {
		type: 'loop',
		mediaQuery: 'min',
		arrows: false,
		autoWidth: true,
		gap: 10,
		arrows: true,
		breakpoints: {
			900: {
		        destroy: true,
		    }
		}
	}).mount();
}

/* ANIMATION PAGE
---------------------------------------------------- */
function animScrollPage() {
    const elems = document.querySelectorAll('.animated');
    const options = {rootMargin: '0px'}
   
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            	entry.target.classList.add('show');

            	entry.target.addEventListener('transitionend', (e) => {
            		entry.target.classList.add('animated-end');
            	});
            }
        });
    }, options);
   
    elems.forEach(elem => {
        observer.observe(elem);
    });
}
   
animScrollPage();

/* ANIMATION SOLUTIONS 
---------------------------------------------------- */
function animSolutions() {
	const contentList = document.querySelectorAll('.processing-content .content');

	const observer = new IntersectionObserver(entries => {
		
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			} else {
				entry.target.classList.remove('show');
			}
		});
	}, {rootMargin: '-200px'});

	contentList.forEach(content => {
		observer.observe(content);
	});
}

animSolutions();

/* START ANIMATION ICON
----------------------------------- */
function animationIcon() {
    let icons = document.querySelectorAll('.icon');

    document.addEventListener('scroll', scrolling);
    document.addEventListener('DOMContentLoaded', scrolling);

    function scrolling() {
        icons.forEach(icon => {
            if (isFullyVisible(icon)) {
                if (icon.dataset.start == 'true') {                 
                    const animate = lottie.loadAnimation({
                        container: icon,
                        path: 'lottie/' + icon.dataset.src + '.json',
                        renderer: icon.dataset.render,
                        loop: (icon.dataset.loop) ? true : false,
                        autoplay: true
                    });

                    icon.dataset.start = false;
                }                
            }
        }); 
    }

    function isFullyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();
     
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
     
        return ((top >= 0) && (bottom <= window.innerHeight));
    }
}

animationIcon();

/* START ANIMATION HOVER
----------------------------------- */
function startAnimationHover() {
    let hoverAll = document.querySelectorAll('.icon-hover');
    let icons = document.querySelectorAll('.icon-hover .ic i');

    icons.forEach(icon => {
        const animate = lottie.loadAnimation({
            container: icon,
            path: 'lottie/' + icon.dataset.src + '.json',
            renderer: icon.dataset.render,
            loop: false,
            autoplay: true
        });

        if (icon.classList.contains('ic-tenancy')) {
			animate.addEventListener('DOMLoaded', function(){
		        var customStopFrame = 35;
		        animate.playSegments([0, customStopFrame], true);
		    });
		}
    });

	hoverAll.forEach(hover => {
		hover.addEventListener('mouseover', (e) => {
			if (window.innerWidth > 700) {
				let icon = hover.querySelector('.ic i');

	            if (icon.dataset.start == 'true') {
	                icon.querySelector('svg').remove();

	                let animate = lottie.loadAnimation({
	                    container: icon,
	                    path: 'lottie/' + icon.dataset.src + '.json',
	                    renderer: icon.dataset.render,
	                    loop: false,
	                    autoplay: true
	                });

	                icon.dataset.start = false;

	                animate.addEventListener('complete', (e) => {
		            	icon.dataset.start = true;
		            });

		            if (icon.classList.contains('ic-tenancy')) {
						animate.addEventListener('DOMLoaded', function(){
					        var customStopFrame = 35;
					        animate.playSegments([0, customStopFrame], true);
					    });
					}
	            } 
			}
        });
	});
}

startAnimationHover();

/* TAB
----------------------------------- */
function tab(tabCls, controlCls) {
	if (document.querySelector(tabCls) != null) {
		setInterval(() => {
			let tab = document.querySelector(tabCls);
			let tabActive = document.querySelector(tabCls + ' .icon-hover.active');
			let control = document.querySelector(controlCls);
			let controlActive = control.querySelector('.icon-hover.active');
			let content = tab.querySelectorAll('li');

			tab.querySelectorAll('.icon-hover').forEach(control => control.classList.remove('active'));
			control.querySelectorAll('.icon-hover').forEach(control => control.classList.remove('active'));
			
			if (controlActive.nextElementSibling != null) {
				tabActive.nextElementSibling.classList.add('active');
				controlActive.nextElementSibling.classList.add('active');
			} else {
				tabActive = document.querySelector(tabCls + ' .icon-hover:first-child').classList.add('active');
				controlActive = control.querySelector('.icon-hover:first-child').classList.add('active');
			}
		}, 5000);
	}
}

tab('.tab', '.tab-control');

/* ACCORDEON
------------------------------------ */
function accordeon() {
    let accordeon = document.querySelectorAll('.accordeon');
    let flag = true;

    if (accordeon != null) {
        for (var i = 0; i < accordeon.length; i++) {
            item = accordeon[i].querySelectorAll('.item-accordeon');

            for (var j = 0; j < item.length; j++) {
                let btn = item[j].querySelector('.btn-accordeon');
                
                btn.addEventListener('click', openAccordeon);

                if (item[j].classList.contains('active')) {
                    let content = item[j].querySelector('.content-accordeon');
                    let inner = item[j].querySelector('.inner-accordeon');
                    content.style.height = (inner.clientHeight + 2) + 'px';
                }
            }
        }
    }

    function openAccordeon(e) {
        let item = this.closest('.accordeon').querySelectorAll('.item-accordeon');
        let inner = this.parentNode.querySelector('.inner-accordeon');
        let content = this.parentNode.querySelector('.content-accordeon');  

        if (this.parentNode.classList.contains('active')) {            
            this.parentNode.classList.remove('active');
            content.removeAttribute('style');
        } else {    
            for (var i = 0; i < item.length; i++) {
                item[i].classList.remove('active');
                item[i].querySelector('.content-accordeon').removeAttribute('style');
            }

            this.parentNode.classList.add('active');
            content.style.height = (inner.clientHeight + 2) + 'px';
        }    
    }
}

accordeon();

/* GRID
---------------------------------------------------- */
function gridMain() {
	const gridAll = document.querySelectorAll('.grid-main');

	gridAll.forEach(grid => {
		const cell = grid.querySelectorAll('span');
		const random = Math.floor(Math.random() * cell.length);
		const random2 = Math.floor(Math.random() * cell.length);
		const random3 = Math.floor(Math.random() * cell.length);

		cell.forEach(cell => cell.classList.remove('glow'));

		cell[random].classList.add('glow');
		cell[random2].classList.add('glow');
		cell[random3].classList.add('glow');
	});

	setTimeout(() => {
		gridMain();
	}, 1000);
}

if (document.querySelectorAll('.grid-main') != null) {
	gridMain();
}

/* TYPER NUMBER
---------------------------------------------------- */
function typerNumber() {
	const typerAll = document.querySelectorAll('.typer-number');
	const options = {rootMargin: '0px'}
   
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            	if (!entry.target.classList.contains('finish')) {
            		const numberList = entry.target.querySelectorAll('span');

            		numberList.forEach(number => {
            			let min = Number(number.dataset.min);
            			let max = Number(number.dataset.max);
            			let time = Number(number.dataset.time);
            			let delay = Number(number.dataset.delay);

            			setTimeout(() => {
            				let interval = setInterval(() => {
            					if (number.dataset.reverse) {
            						max -= 1;
            						number.textContent = max;
	            					if (max <= min) {
	            						entry.target.classList.add('finish');
	            						clearInterval(interval);
	            					} 
            					} else {
            						min += 1;
            						number.textContent = min;
            						if (min >= max) {
            							entry.target.classList.add('finish');
            							clearInterval(interval);
            						} 
            					}
            				}, time);
            			}, delay);
            		});
            	}
            }
        });
    }, options);
   
    typerAll.forEach(elem => {
        observer.observe(elem);
    });
}

if (document.querySelectorAll('.typer-number') != null) {
	typerNumber();
}

/* TYPER
---------------------------------------------------- */
function typer() {
	var Typer = function(element) {
		this.element = element;
		var delim = element.dataset.delim || ",";
		var words = element.dataset.words || "override these,sample typing";
		this.words = words.split(delim).filter((v) => v); // non empty words
		this.delay = element.dataset.delay || 200;
		this.loop = element.dataset.loop || "true";
		if (this.loop === "false" ) { this.loop = 1 }
		this.deleteDelay = element.dataset.deletedelay || element.dataset.deleteDelay || 800;

		this.progress = { word: 0, char: 0, building: true, looped: 0 };
		this.typing = true;

		var colors = element.dataset.colors || "black";
		this.colors = colors.split(",");
		this.element.style.color = this.colors[0];
		this.colorIndex = 0;

		this.doTyping();
	};

	Typer.prototype.doTyping = function() {
		var e = this.element;
		var p = this.progress;
		var w = p.word;
		var c = p.char;
		var currentDisplay = [...this.words[w]].slice(0, c).join("");
		var atWordEnd;
		if (this.cursor) {
		    this.cursor.element.style.opacity = "1";
		    this.cursor.on = true;
		    clearInterval(this.cursor.interval);
		    this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400);
		}

	  	e.innerHTML = currentDisplay;

		if (p.building) {
		    atWordEnd = p.char === this.words[w].length;
		    if (atWordEnd) {
		    	p.building = false;
		    } else {
		    	p.char += 1;
		    }
		} else {
		    if (p.char === 0) {
		    	p.building = true;
		    	p.word = (p.word + 1) % this.words.length;
		    	this.colorIndex = (this.colorIndex + 1) % this.colors.length;
		    	this.element.style.color = this.colors[this.colorIndex];
		    } else {
		    	p.char -= 1;
		    }
		}

		if (p.word === this.words.length - 1) {
		    p.looped += 1;
		}

		if (!p.building && this.loop <= p.looped){
		    this.typing = false;
		}

		setTimeout(() => {
		    if (this.typing) { this.doTyping() };
		}, atWordEnd ? this.deleteDelay : this.delay);
	};

	function TyperSetup() {
		var typers = {};

		for (let e of document.getElementsByClassName("typer")) {
		    typers[e.id] = new Typer(e);
		}
	}

	TyperSetup();
}

if (document.querySelectorAll('.typer') != null) {
	typer();
}

/* GLOBAL
---------------------------------------------------- */
let globalFlag = true;
function global() {
	/* VARIABLES */
	var canvas, scene, renderer, data;

	// Cache DOM selectors
	var container = document.getElementsByClassName("js-globe")[0];

	// Object for country HTML elements and variables
	var elements = {};

	// Three group objects
	var groups = {
		main: null, // A group containing everything
		globe: null, // A group containing the globe sphere (and globe dots)
		globeDots: null, // A group containing the globe dots
		lines: null, // A group containing the lines between each country
		lineDots: null // A group containing the line dots
	};

	// Map properties for creation and rendering
	var props = {
		mapSize: {
			// Size of the map from the intial source image (on which the dots are positioned on)
			width: 2048 / 2,
			height: 1024 / 2
		},
		globeRadius: 200, // Radius of the globe (used for many calculations)
		dotsAmount: 20, // Amount of dots to generate and animate randomly across the lines
		startingCountry: "hongkong", // The key of the country to rotate the camera to during the introduction animation (and which country to start the cycle at)
		colours: {
			// Cache the colours
			globeDots: "rgb(255, 255, 255)", // No need to use the Three constructor as this value is used for the HTML canvas drawing 'fillStyle' property
			lines: new THREE.Color("#18FFFF"),
			lineDots: new THREE.Color("#18FFFF")
		},
		alphas: {
			// Transparent values of materials
			globe: 0.7,
			lines: 0.5
		}
	};

	// Angles used for animating the camera
	var camera = {
		object: null, // Three object of the camera
		controls: null, // Three object of the orbital controls
		angles: {
			// Object of the camera angles for animating
			current: {
				azimuthal: null,
				polar: null
			},
			target: {
				azimuthal: null,
				polar: null
			}
		}
	};

	// Booleans and values for animations
	var animations = {
		finishedIntro: false, // Boolean of when the intro animations have finished
		dots: {
			current: 0, // Animation frames of the globe dots introduction animation
			total: 170, // Total frames (duration) of the globe dots introduction animation,
			points: [] // Array to clone the globe dots coordinates to
		},
		globe: {
			current: 0, // Animation frames of the globe introduction animation
			total: 80 // Total frames (duration) of the globe introduction animation,
		},
		countries: {
			active: false, // Boolean if the country elements have been added and made active
			animating: false, // Boolean if the countries are currently being animated
			current: 0, // Animation frames of country elements introduction animation
			total: 120, // Total frames (duration) of the country elements introduction animation
			selected: null, // Three group object of the currently selected country
			index: null, // Index of the country in the data array
			timeout: null, // Timeout object for cycling to the next country
			initialDuration: 5000, // Initial timeout duration before starting the country cycle
			duration: 2000 // Timeout duration between cycling to the next country
		}
	};

	// Boolean to enable or disable rendering when window is in or out of focus
	var isHidden = false;

	/* SETUP */

	function getData() {
		var request = new XMLHttpRequest();
		request.open(
			"GET",
			"https://s3-us-west-2.amazonaws.com/s.cdpn.io/617753/globe-points.json",
			true
		);

		request.onload = function () {
			if (request.status >= 200 && request.status < 400) {
				data = JSON.parse(request.responseText);
				setupScene();
			} else {
				showFallback();
			}
		};

		request.onerror = showFallback;

		request.send();
	}

	function showFallback() {
		/*
	    This function will display an alert if WebGL is not supported.
	  */

		alert("WebGL not supported. Please use a browser that supports WebGL.");
	}

	function setupScene() {
		canvas = container.getElementsByClassName("js-canvas")[0];

		scene = new THREE.Scene();
		renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true,
			alpha: true,
			shadowMapEnabled: false
		});
		
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		renderer.setPixelRatio(1);
		renderer.setClearColor(0x000000, 0);

		// Main group that contains everything
		groups.main = new THREE.Group();
		groups.main.name = "Main";

		// Group that contains lines for each country
		groups.lines = new THREE.Group();
		groups.lines.name = "Lines";
		groups.main.add(groups.lines);

		// Group that contains dynamically created dots
		groups.lineDots = new THREE.Group();
		groups.lineDots.name = "Dots";
		groups.main.add(groups.lineDots);

		// Add the main group to the scene
		scene.add(groups.main);

		// Render camera and add orbital controls
		addCamera();
		addControls();

		// Render objects
		addGlobe();

		// Start the requestAnimationFrame loop
		render();
		animate();

		var canvasResizeBehaviour = function () {
			container.width = window.innerWidth;
			container.height = window.innerHeight;
			container.style.width = window.innerWidth + "px";
			container.style.height = window.innerHeight + "px";

			camera.object.aspect = container.offsetWidth / container.offsetHeight;
			camera.object.updateProjectionMatrix();
			renderer.setSize(container.offsetWidth, container.offsetHeight);
		};

		window.addEventListener("resize", canvasResizeBehaviour);
		window.addEventListener("orientationchange", function () {
			setTimeout(canvasResizeBehaviour, 0);
		});
		canvasResizeBehaviour();
	}

	/* CAMERA AND CONTROLS */

	function addCamera() {
		camera.object = new THREE.PerspectiveCamera(
			60,
			canvas.clientWidth / canvas.clientHeight,
			1,
			10000
		);
		camera.object.position.z = props.globeRadius * 2.8;
	}

	function addControls() {
		camera.controls = new OrbitControls(camera.object, canvas);
		camera.controls.enableKeys = false;
		camera.controls.enablePan = false;
		camera.controls.enableZoom = false;
		camera.controls.enableDamping = false;
		camera.controls.enableRotate = false;

		// Set the initial camera angles to something crazy for the introduction animation
		camera.angles.current.azimuthal = -Math.PI;
		camera.angles.current.polar = 180;
	}

	/* RENDERING */

	function render() {
		renderer.render(scene, camera.object);
	}

	if ("hidden" in document) {
		document.addEventListener("visibilitychange", onFocusChange);
	} else if ("mozHidden" in document) {
		document.addEventListener("mozvisibilitychange", onFocusChange);
	} else if ("webkitHidden" in document) {
		document.addEventListener("webkitvisibilitychange", onFocusChange);
	} else if ("msHidden" in document) {
		document.addEventListener("msvisibilitychange", onFocusChange);
	} else if ("onfocusin" in document) {
		document.onfocusin = document.onfocusout = onFocusChange;
	} else {
		window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onFocusChange;
	}

	function onFocusChange(event) {
		var visible = "visible";
		var hidden = "hidden";
		var eventMap = {
			focus: visible,
			focusin: visible,
			pageshow: visible,
			blur: hidden,
			focusout: hidden,
			pagehide: hidden
		};

		event = event || window.event;

		if (event.type in eventMap) {
			isHidden = true;
		} else {
			isHidden = false;
		}
	}

	function animate() {
		if (isHidden === false) {
			requestAnimationFrame(animate);
		}

		if (groups.globeDots) {
			introAnimate();
		}

		if (animations.finishedIntro === true) {
			animateDots();
		}

		if (animations.countries.animating === true) {
			animateCountryCycle();
		}

		camera.controls.setAzimuthalAngle(Math.cos(Date.now() * 0.0000005) * -360);
		camera.controls.setPolarAngle(1);

		camera.controls.update();

		render();
	}

	/* GLOBE */

	function addGlobe() {
		var textureLoader = new THREE.TextureLoader();
		textureLoader.setCrossOrigin(true);

		var radius = props.globeRadius - props.globeRadius * 0.02;
		var segments = 64;
		var rings = 64;

		// Make gradient
		var canvasSize = 128;
		var textureCanvas = document.createElement("canvas");
		textureCanvas.width = canvasSize;
		textureCanvas.height = canvasSize;
		var canvasContext = textureCanvas.getContext("2d");
		canvasContext.rect(0, 0, canvasSize, canvasSize);
		var canvasGradient = canvasContext.createLinearGradient(0, 0, 0, canvasSize);
		canvasGradient.addColorStop(1, "rgba(0,0,0,0.02)");
		canvasGradient.addColorStop(1, "rgba(0,0,0,0.02)");
		canvasGradient.addColorStop(1, "rgba(0,0,0,0.02)");
		canvasContext.fillStyle = canvasGradient;
		canvasContext.fill();

		// Make texture
		var texture = new THREE.Texture(textureCanvas);
		texture.needsUpdate = true;

		var geometry = new THREE.SphereGeometry(radius, segments, rings);
		var material = new THREE.MeshBasicMaterial({
			map: texture,
			transparent: true,
			opacity: 0
		});
		globe = new THREE.Mesh(geometry, material);

		groups.globe = new THREE.Group();
		groups.globe.name = "Globe";

		groups.globe.add(globe);
		groups.main.add(groups.globe);

		addGlobeDots();
	}

	function addGlobeDots() {
		var geometry = new THREE.Geometry();

		// Make circle
		var canvasSize = 16;
		var halfSize = canvasSize / 2;
		var textureCanvas = document.createElement("canvas");
		textureCanvas.width = canvasSize;
		textureCanvas.height = canvasSize;
		var canvasContext = textureCanvas.getContext("2d");
		canvasContext.beginPath();
		canvasContext.arc(halfSize, halfSize, halfSize, 0, 2 * Math.PI);
		canvasContext.fillStyle = props.colours.globeDots;
		canvasContext.fill();

		// Make texture
		var texture = new THREE.Texture(textureCanvas);
		texture.needsUpdate = true;

		var material = new THREE.PointsMaterial({
			map: texture,
			size: props.globeRadius / 200
		});

		var addDot = function (targetX, targetY) {
			// Add a point with zero coordinates
			var point = new THREE.Vector3(0, 0, 0);
			geometry.vertices.push(point);

			// Add the coordinates to a new array for the intro animation
			var result = returnSphericalCoordinates(targetX, targetY);
			animations.dots.points.push(new THREE.Vector3(result.x, result.y, result.z));
		};

		for (var i = 0; i < data.points.length; i++) {
			addDot(data.points[i].x, data.points[i].y);
		}

		for (var country in data.countries) {
			addDot(data.countries[country].x, data.countries[country].y);
		}

		// Add the points to the scene
		groups.globeDots = new THREE.Points(geometry, material);
		groups.globe.add(groups.globeDots);
	}

	/* COUNTRY LINES AND DOTS */

	function addLineDots() {
		/*
	    This function will create a number of dots (props.dotsAmount) which will then later be
	    animated along the lines. The dots are set to not be visible as they are later
	    assigned a position after the introduction animation.
	  */

		var radius = props.globeRadius / 120;
		var segments = 32;
		var rings = 32;

		var geometry = new THREE.SphereGeometry(radius, segments, rings);
		var material = new THREE.MeshBasicMaterial({
			color: props.colours.lineDots
		});

		// Returns a sphere geometry positioned at coordinates
		var returnLineDot = function () {
			var sphere = new THREE.Mesh(geometry, material);
			return sphere;
		};

		for (var i = 0; i < props.dotsAmount; i++) {
			// Get the country path geometry vertices and create the dot at the first vertex
			var targetDot = returnLineDot();
			targetDot.visible = false;

			// Add custom variables for custom path coordinates and index
			targetDot._pathIndex = null;
			targetDot._path = null;

			// Add the dot to the dots group
			groups.lineDots.add(targetDot);
		}
	}

	function assignDotsToRandomLine(target) {
		// Get a random line from the current country
		var randomLine =
			Math.random() * (animations.countries.selected.children.length - 1);
		randomLine = animations.countries.selected.children[randomLine.toFixed(0)];

		// Assign the random country path to the dot and set the index at 0
		target._path = randomLine._path;
	}

	function reassignDotsToNewLines() {
		for (var i = 0; i < groups.lineDots.children.length; i++) {
			var target = groups.lineDots.children[i];
			if (target._path !== null && target._pathIndex !== null) {
				assignDotsToRandomLine(target);
			}
		}
	}

	function animateDots() {
		// Loop through the dots children group
		for (var i = 0; i < groups.lineDots.children.length; i++) {
			var dot = groups.lineDots.children[i];

			if (dot._path === null) {
				// Create a random seed as a pseudo-delay
				var seed = Math.random();

				if (seed > 0.99) {
					assignDotsToRandomLine(dot);
					dot._pathIndex = 0;
				}
			} else if (dot._path !== null && dot._pathIndex < dot._path.length - 1) {
				// Show the dot
				if (dot.visible === false) {
					dot.visible = true;
				}

				// Move the dot along the path vertice coordinates
				dot.position.x = dot._path[dot._pathIndex].x;
				dot.position.y = dot._path[dot._pathIndex].y;
				dot.position.z = dot._path[dot._pathIndex].z;

				// Advance the path index by 1
				dot._pathIndex++;
			} else {
				// Hide the dot
				dot.visible = false;

				// Remove the path assingment
				dot._path = null;
			}
		}
	}

	/* ELEMENTS */

	var list;

	function positionElements() {
		var widthHalf = canvas.clientWidth / 2;
		var heightHalf = canvas.clientHeight / 2;

		// Loop through the elements array and reposition the elements
		for (var key in elements) {
			var targetElement = elements[key];

			var position = getProjectedPosition(
				widthHalf,
				heightHalf,
				targetElement.position
			);

			// Construct the X and Y position strings
			var positionX = position.x + "px";
			var positionY = position.y + "px";

			// Construct the 3D translate string
			var elementStyle = targetElement.element.style;
			elementStyle.webkitTransform =
				"translate3D(" + positionX + ", " + positionY + ", 0)";
			elementStyle.WebkitTransform =
				"translate3D(" + positionX + ", " + positionY + ", 0)"; // Just Safari things (capitalised property name prefix)...
			elementStyle.mozTransform =
				"translate3D(" + positionX + ", " + positionY + ", 0)";
			elementStyle.msTransform =
				"translate3D(" + positionX + ", " + positionY + ", 0)";
			elementStyle.oTransform =
				"translate3D(" + positionX + ", " + positionY + ", 0)";
			elementStyle.transform =
				"translate3D(" + positionX + ", " + positionY + ", 0)";
		}
	}

	/* INTRO ANIMATIONS */

	// Easing reference: https://gist.github.com/gre/1650294

	var easeInOutCubic = function (t) {
		return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
	};

	var easeOutCubic = function (t) {
		return --t * t * t + 1;
	};

	var easeInOutQuad = function (t) {
		return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	};

	function introAnimate() {
		if (animations.dots.current <= animations.dots.total) {
			var points = groups.globeDots.geometry.vertices;
			var totalLength = points.length;

			for (var i = 0; i < totalLength; i++) {
				// Get ease value
				var dotProgress = easeInOutCubic(
					animations.dots.current / animations.dots.total
				);

				// Add delay based on loop iteration
				dotProgress = dotProgress + dotProgress * (i / totalLength);

				if (dotProgress > 1) {
					dotProgress = 1;
				}

				// Move the point
				points[i].x = animations.dots.points[i].x * dotProgress;
				points[i].y = animations.dots.points[i].y * dotProgress;
				points[i].z = animations.dots.points[i].z * dotProgress;

				// Animate the camera at the same rate as the first dot
				if (i === 0) {
					var azimuthalDifference =
						(camera.angles.current.azimuthal - camera.angles.target.azimuthal) *
						dotProgress;
					azimuthalDifference = camera.angles.current.azimuthal - azimuthalDifference;
					camera.controls.setAzimuthalAngle(azimuthalDifference);

					var polarDifference =
						(camera.angles.current.polar - camera.angles.target.polar) * dotProgress;
					polarDifference = camera.angles.current.polar - polarDifference;
					//camera.controls.setPolarAngle(polarDifference);
				}
			}

			animations.dots.current++;

			// Update verticies
			groups.globeDots.geometry.verticesNeedUpdate = true;

			document.querySelector(".svg-wrapper").classList.add("active");
		}

		if (
			animations.dots.current >= animations.dots.total * 0.65 &&
			animations.globe.current <= animations.globe.total
		) {
			var globeProgress = easeOutCubic(
				animations.globe.current / animations.globe.total
			);
			globe.material.opacity = props.alphas.globe * globeProgress;

			animations.globe.current++;
		}

		if (
			animations.countries.active === true &&
			animations.finishedIntro === false
		) {
			animations.finishedIntro = true;
			// Start country cycle
			animations.countries.timeout = setTimeout(
				showNextCountry,
				animations.countries.initialDuration
			);
			addLineDots();
		}
	}

	/* COUNTRY CYCLE */

	function changeCountry(key, init) {
		if (animations.countries.selected !== undefined) {
			animations.countries.selected.visible = false;
		}

		for (var name in elements) {
			if (name === key) {
				elements[name].element.classList.add("active");
			} else {
				elements[name].element.classList.remove("active");
			}
		}

		// Show the select country lines
		animations.countries.selected = groups.lines.getObjectByName(key);
		animations.countries.selected.visible = true;

		if (init !== true) {
			camera.angles.current.azimuthal = camera.controls.getAzimuthalAngle();
			camera.angles.current.polar = camera.controls.getPolarAngle();

			var targetAngles = returnCameraAngles(
				data.countries[key].x,
				data.countries[key].y
			);
			camera.angles.target.azimuthal = targetAngles.azimuthal;
			camera.angles.target.polar = targetAngles.polar;

			animations.countries.animating = true;
			reassignDotsToNewLines();
		}
	}

	function animateCountryCycle() {
		if (animations.countries.current <= animations.countries.total) {
			var progress = easeInOutQuad(
				animations.countries.current / animations.countries.total
			);

			var azimuthalDifference =
				(camera.angles.current.azimuthal - camera.angles.target.azimuthal) *
				progress;
			azimuthalDifference = camera.angles.current.azimuthal - azimuthalDifference;
			camera.controls.setAzimuthalAngle(azimuthalDifference);

			var polarDifference =
				(camera.angles.current.polar - camera.angles.target.polar) * progress;
			polarDifference = camera.angles.current.polar - polarDifference;
			//camera.controls.setPolarAngle(polarDifference);

			animations.countries.current++;
		} else {
			animations.countries.animating = false;
			animations.countries.current = 0;

			animations.countries.timeout = setTimeout(
				showNextCountry,
				animations.countries.duration
			);
		}
	}

	function showNextCountry() {
		animations.countries.index++;

		if (animations.countries.index >= Object.keys(data.countries).length) {
			animations.countries.index = 0;
		}

		var key = Object.keys(data.countries)[animations.countries.index];
		changeCountry(key, false);
	}

	/* COORDINATE CALCULATIONS */

	// Returns an object of 3D spherical coordinates
	function returnSphericalCoordinates(latitude, longitude) {
		// Convert latitude and longitude on the 90/180 degree axis
		latitude = ((latitude - props.mapSize.width) / props.mapSize.width) * -180;
		longitude = ((longitude - props.mapSize.height) / props.mapSize.height) * -90;

		// Calculate the projected starting point
		var radius = Math.cos((longitude / 180) * Math.PI) * props.globeRadius;
		var targetX = Math.cos((latitude / 180) * Math.PI) * radius;
		var targetY = Math.sin((longitude / 180) * Math.PI) * props.globeRadius;
		var targetZ = Math.sin((latitude / 180) * Math.PI) * radius;

		return {
			x: targetX,
			y: targetY,
			z: targetZ
		};
	}

	// Reference: https://codepen.io/ya7gisa0/pen/pisrm?editors=0010
	function returnCurveCoordinates(latitudeA, longitudeA, latitudeB, longitudeB) {
		// Calculate the starting point
		var start = returnSphericalCoordinates(latitudeA, longitudeA);

		// Calculate the end point
		var end = returnSphericalCoordinates(latitudeB, longitudeB);

		// Calculate the mid-point
		var midPointX = (start.x + end.x) / 2;
		var midPointY = (start.y + end.y) / 2;
		var midPointZ = (start.z + end.z) / 2;

		// Calculate the distance between the two coordinates
		var distance = Math.pow(end.x - start.x, 2);
		distance += Math.pow(end.y - start.y, 2);
		distance += Math.pow(end.z - start.z, 2);
		distance = Math.sqrt(distance);

		// Calculate the multiplication value
		var multipleVal = Math.pow(midPointX, 2);
		multipleVal += Math.pow(midPointY, 2);
		multipleVal += Math.pow(midPointZ, 2);
		multipleVal = Math.pow(distance, 2) / multipleVal;
		multipleVal = multipleVal * 0.7;

		// Apply the vector length to get new mid-points
		var midX = midPointX + multipleVal * midPointX;
		var midY = midPointY + multipleVal * midPointY;
		var midZ = midPointZ + multipleVal * midPointZ;

		// Return set of coordinates
		return {
			start: {
				x: start.x,
				y: start.y,
				z: start.z
			},
			mid: {
				x: midX,
				y: midY,
				z: midZ
			},
			end: {
				x: end.x,
				y: end.y,
				z: end.z
			}
		};
	}

	// Returns an object of 2D coordinates for projected 3D position
	function getProjectedPosition(width, height, position) {
		position = position.clone();
		var projected = position.project(camera.object);

		return {
			x: projected.x * width + width,
			y: -(projected.y * height) + height
		};
	}

	// Returns an object of the azimuthal and polar angles of a given map latitude and longitude
	function returnCameraAngles(latitude, longitude) {
		var targetAzimuthalAngle =
			((latitude - props.mapSize.width) / props.mapSize.width) * Math.PI;
		targetAzimuthalAngle = targetAzimuthalAngle + Math.PI / 2;
		targetAzimuthalAngle = targetAzimuthalAngle + 0.1; // Add a small offset

		var targetPolarAngle = (longitude / (props.mapSize.height * 2)) * Math.PI;

		return {
			azimuthal: targetAzimuthalAngle,
			polar: targetPolarAngle
		};
	}

	/* INITIALISATION */

	if (!window.WebGLRenderingContext) {
		showFallback();
	} else {
		getData();
	}
}

if (document.querySelector('.js-globe') != null) {
	new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				if (globalFlag) {
					global();
					globalFlag = false;
				}
			}
		});
	}).observe(document.querySelector('.js-globe'));
}