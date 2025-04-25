//shooting stars
let shootingStars = [];

function spawnShootingStar() {
  const startX = Math.random() * canvas.width;
  shootingStars.push({
    x: startX,
    y: 0,
    length: Math.random() * 80 + 50,
    speed: Math.random() * 8 + 4,
    alpha: 1,
    fade: 0.01
  });
}
// Mission data
const missions = [
    {
      name: "Apollo 11",
      date: "1969",
      objective: "First Moon Landing",
      crew: "Neil Armstrong, Buzz Aldrin, Michael Collins",
      description: "Apollo 11 was the first mission to land humans on the Moon and safely return to Earth. Launched in July 1969, it carried astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins. Armstrong and Aldrin walked on the lunar surface, collecting samples and deploying experiments.",
      image: "apollo.jpg"
    },
    {
      name: "Voyager 1",
      date: "1977",
      objective: "Explore Outer Planets & Interstellar Space",
      crew: "Uncrewed",
      description: "Voyager 1 launched in 1977 to study the outer planets and continues its journey through space. It became the first human-made object to enter interstellar space, far beyond Pluto. The spacecraft carries the Golden Record, a message from Earth to the cosmos. It still sends back data, acting as our distant ambassador in the universe.",
      image: "voyager1.jpg"
    },
    {
      name: "Artemis I",
      date: "2022",
      objective: "Moon-Orbit Test Flight",
      crew: "Uncrewed",
      description: "Artemis I launched in 2022 as the first mission of NASA's new lunar program. The uncrewed flight tested the SLS rocket and Orion capsule on a trip around the Moon. It demonstrated systems for future crewed Artemis missions targeting lunar exploration. The mission reignited interest in long-term human presence on the Moon and beyond.",
      image: "Artemis I.jpg"
    },
    {
      name: "Mars Perseverance",
      date: "2021",
      objective: "Explore Martian Surface & Collect Samples",
      crew: "Uncrewed",
      description: "Launched in 2020 and landed in 2021, Perseverance explores Mars' Jezero Crater. Its goals include studying Mars’ climate and geology to understand its habitability. It found evidence that Mars once had liquid water and a more hospitable environment. The rover's long-term mission continues to reveal the planet’s ancient secrets.",
      image: "mars_preserverance.jpg"
    },
    {
      name: "James Webb Space Telescope",
      date: "2021",
      objective: "Infrared Observation of Early Universe",
      crew: "Uncrewed",
      description: "JWST launched in 2021 as the most advanced space telescope ever built. With powerful infrared vision, it observes galaxies, stars, and planets in their earliest stages. Its golden mirrors unfold in space, allowing it to peer billions of years into the past. Webb is reshaping our understanding of cosmic origins and alien worlds.",
      image: "James_Webb.jpg"
    },
    {
      name: "ISS Expedition 1",
      date: "2000",
      objective: "Initiate Continuous Human Orbit Presence",
      crew: "Bill Shepherd, Yuri Gidzenko, Sergei Krikalev",
      description: "Expedition 1 began in November 2000, marking the start of permanent human life in orbit. The three-person crew activated the International Space Station's systems and facilities. Their mission laid the foundation for decades of continuous scientific research in space. It launched a new era of international cooperation aboard Earth’s orbital laboratory.",
      image: "ISS.jpg"
    },
    {
      name: "Curiosity Rover",
      date: "2012",
      objective: "Analyze Mars’ Climate & Geology",
      crew: "Uncrewed",
      description: "Curiosity landed on Mars in 2012 and has been exploring Gale Crater ever since. Its goals include studying Mars’ climate and geology to understand its habitability. It found evidence that Mars once had liquid water and a more hospitable environment. The rover's long-term mission continues to reveal the planet’s ancient secrets.",
      image: "Curiosity_Rover.jpg"
    },
    {
      name: "Chandrayaan-3",
      date: "2023",
      objective: "Soft-Land Near Lunar South Pole",
      crew: "Uncrewed",
      description: "India’s Chandrayaan-3 made a soft landing near the Moon’s south pole in 2023. It marked a major achievement in space exploration, especially for the lunar south region. This area is believed to hold water ice and other valuable resources. The mission demonstrated India’s growing capabilities in space science and engineering.",
      image: "chandrayaan3.jpg"
    },
    {
      name: "Hubble Space Telescope",
      date: "1990",
      objective: "Observe Deep Universe in Multiple Wavelengths",
      crew: "Uncrewed",
      description: "Launched in 1990, Hubble has provided breathtaking views of space for over 30 years. It has captured distant galaxies, nebulae, and supernovas in remarkable detail. Orbiting Earth, it observes in visible and ultraviolet light beyond atmospheric distortion. Hubble revolutionized astronomy and helped unlock the age and size of the universe.",
      image: "hubble.jpg"
    },
    {
      name: "SpaceX Crew-1",
      date: "2020",
      objective: "NASA-SpaceX Crewed Commercial Flight",
      crew: "Victor Glover, Mike Hopkins, Soichi Noguchi, Shannon Walker",
      description: "Crew-1 launched in 2020 aboard SpaceX’s Crew Dragon, marking a new era in spaceflight. It was the first commercial mission to carry astronauts to the ISS for NASA. The four-person crew spent over five months conducting science and maintenance in orbit. This mission proved private space travel could be both safe and reliable.",
      image: "spaceX.jpg"
    },
    {
      name: "Luna 2",
      date: "1959",
      objective: "Impact Moon Surface (First Time Ever)",
      crew: "Uncrewed",
      description: "Luna 2, launched by the Soviet Union in 1959, was the first probe to reach another world. It impacted the Moon, showing that deep space travel was possible with technology of the time. The mission symbolized a key moment in the early space race during the Cold War. Though short, it opened the door for more advanced lunar and planetary missions.",
      image: "luna2.jpg"
    },
    {
      name: "Tianwen-1",
      date: "2020",
      objective: "Orbiter, Lander & Rover on Mars",
      crew: "Uncrewed",
      description: "Tianwen-1, launched in 2020, was China’s first Mars mission and a major milestone. It successfully placed an orbiter, lander, and rover — Zhurong — on the Red Planet. The rover studies the surface and climate, contributing valuable data to planetary science. This mission showcased China’s rising leadership in space exploration.",
      image: "tianwen-1.jpg"
    },
    {
      name: "New Horizons",
      date: "2006",
      objective: "Flyby of Pluto & Kuiper Belt",
      crew: "Uncrewed",
      description: "New Horizons launched in 2006 and flew by Pluto in 2015, giving us our first close-up views. It revealed surprising features, including a heart-shaped plain and ice mountains. Now traveling through the Kuiper Belt, it continues exploring distant objects. The mission has expanded our knowledge of the solar system’s outer frontier.",
      image: "new-horizons.jpg"
    },
    {
      name: "Space Shuttle STS-1",
      date: "1981",
      objective: "First Space Shuttle Flight",
      crew: "John Young, Robert Crippen",
      description: "STS-1, flown by Columbia in 1981, was the first mission of NASA’s reusable space shuttle. It proved the shuttle could launch like a rocket and return like a plane. This innovation made space more accessible for satellites, telescopes, and station modules. STS-1 began a new chapter in space transportation history.",
      image: "spaceshuttle.png"
    },
    {
      name: "Skylab",
      date: "1973",
      objective: "First U.S. Space Station",
      crew: "Multiple Crews",
      description: "Skylab was the United States' first space station, launched in 1973. Astronauts lived aboard for up to 84 days, studying life in microgravity and solar science. It helped NASA understand how humans adapt to long-term space missions. Skylab paved the way for future orbital platforms like the ISS.",
      image: "skylab2.jpg"
    }
  ];
  
  

const container = document.getElementById("missions");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalCrew = document.getElementById("modal-crew");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("closeBtn");

// Render cards
missions.forEach((mission) => {
  const card = document.createElement("div");
  card.className = "mission-card";
  card.innerHTML = `
    <img src="${mission.image}" class="mission-img" alt="${mission.name}" />
    <div class="mission-info">
      <h3 class="mission-title">${mission.name}</h3>
      <p class="mission-date">${mission.date}</p>
      <p class="mission-objective">${mission.objective}</p>
    </div>
  `;
  card.addEventListener("click", () => {
    modalImg.src = mission.image;
    modalTitle.textContent = mission.name;
    modalDate.textContent = `🗓 Date: ${mission.date}`;
    modalCrew.textContent = `👨‍🚀 Crew: ${mission.crew}`;
    modalDesc.textContent = mission.description;
    modal.classList.remove("hidden");
    document.body.style.overflow = 'hidden';

  });
  container.appendChild(card);
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.style.overflow = '';


});
// Starfield falling animation
const canvas = document.getElementById("starfield-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.03 + 0.05
  });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    for (let star of stars) {
      // Twinkle effect
      const alpha = Math.sin(Date.now() * 0.002 + star.x) * 0.5 + 0.5;
  
      ctx.beginPath();
      ctx.globalAlpha = alpha; // star brightness
      ctx.fillStyle = "#fff";
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#fff";
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
  
      // Animate falling
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    }
  
    ctx.globalAlpha = 1; // reset alpha
    requestAnimationFrame(drawStars);
  }

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

//planet background
let planetAngle = 0;

function drawPlanets() {
  // Planet 1 - purple
  ctx.beginPath();
  const x1 = canvas.width / 2 + Math.cos(planetAngle) * 300;
  const y1 = canvas.height / 2 + Math.sin(planetAngle) * 100;
  ctx.arc(x1, y1, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#a66cff";
  ctx.shadowBlur = 20;
  ctx.shadowColor = "#a66cff";
  ctx.fill();

  // Planet 2 - green
  ctx.beginPath();
  const x2 = canvas.width / 2 + Math.sin(planetAngle * 0.5) * 400;
  const y2 = canvas.height / 2 + Math.cos(planetAngle * 0.5) * 150;
  ctx.arc(x2, y2, 15, 0, Math.PI * 2);
  ctx.fillStyle = "#00ffaa";
  ctx.shadowBlur = 20;
  ctx.shadowColor = "#00ffaa";
  ctx.fill();
}

function animate() {

    
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();
  drawPlanets();
  planetAngle += 0.001;

  // Update shooting stars
for (let i = shootingStars.length - 1; i >= 0; i--) {
    const star = shootingStars[i];
    ctx.beginPath();
    ctx.moveTo(star.x, star.y);
    ctx.lineTo(star.x + star.length, star.y + star.length * 0.3);
    ctx.strokeStyle = `rgba(255,255,255,${star.alpha})`;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#fff";
    ctx.stroke();
  
    star.x += star.speed;
    star.y += star.speed * 0.3;
    star.alpha -= star.fade;
  
    if (star.alpha <= 0) {
      shootingStars.splice(i, 1);
    }
  }
  
  // Occasionally spawn new shooting stars
  if (Math.random() < 0.01) {
    spawnShootingStar();
  }

// Rotating moon (white)
ctx.save();
ctx.translate(canvas.width / 4, canvas.height / 3);
ctx.rotate(planetAngle * 0.5); // Slow rotation
ctx.beginPath();
ctx.arc(0, 0, 18, 0, Math.PI * 2);
ctx.fillStyle = "#ddd";
ctx.shadowBlur = 12;
ctx.shadowColor = "#ccc";
ctx.fill();
ctx.restore();

  
  requestAnimationFrame(animate);
}

animate();


// Page Loading Animation 

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader-wrapper").style.display = "none";
  document.getElementById("body").style.display = "block";
  document.body.classList.remove("no-scroll"); // ✅ enable scrolling
}


         //   carousel

// Select DOM elements
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const carousel = document.querySelector(".carousel");
const list = document.querySelector(".list");
const items = Array.from(document.querySelectorAll(".item"));
const runningTimeBar = document.querySelector(".carousel .timeRunning");

// Timing configurations
const TIME_RUNNING = 1500; // Animation duration for the transition
const TIME_AUTO_NEXT = 3500; // Auto-slide duration

// Initialize timeout variables
let transitionTimeout;
let autoNextTimeout;

// Create and append the progress bar
const arrowsDiv = document.querySelector(".arrows");
const progressBarContainer = document.createElement("div");
progressBarContainer.className = "progress-bar-container";

const progressBar = document.createElement("div");
progressBar.className = "progress-bar";

progressBarContainer.appendChild(progressBar);
arrowsDiv.appendChild(progressBarContainer);

// Event listeners for navigation buttons
nextBtn.addEventListener("click", () => handleSliderNavigation("next"));
prevBtn.addEventListener("click", () => handleSliderNavigation("prev"));

// Add attribute to each item
items.forEach((item, index) => {
  item.querySelector(".title").setAttribute("data-item", index + 1);
});

// Automatically navigate to the next slide
autoNextTimeout = setTimeout(() => {
  nextBtn.click();
}, TIME_AUTO_NEXT);

// Start the initial running time animation and progress bar
resetAnimation();
afterSlideChange();

// Resets the running time animation
function resetAnimation() {
  runningTimeBar.style.animation = "none"; // Remove current animation
  runningTimeBar.offsetHeight; // Trigger reflow to restart animation
  runningTimeBar.style.animation = `runningTime ${
    TIME_AUTO_NEXT / 1000
  }s linear forwards`; // Restart animation
}

// Handles slider navigation (next/prev)
function handleSliderNavigation(direction) {
  const sliderItems = list.querySelectorAll(".item"); // Get all current items in the list

  if (direction === "next") {
    list.appendChild(sliderItems[0]); // Move the first item to the end of the list
    carousel.classList.add("next"); // Add the "next" class for transition
  } else if (direction === "prev") {
    list.prepend(sliderItems[sliderItems.length - 1]); // Move the last item to the start of the list
    carousel.classList.add("prev"); // Add the "prev" class for transition
  }

  afterSlideChange(); // Log the active slide index
}

// Logs the current active slide's original index
function afterSlideChange() {
  const slideNumberElement = document.querySelector(".slide-number");
  if (slideNumberElement) slideNumberElement.remove();

  const sliderItems = Array.from(list.querySelectorAll(".item")); // Get the current visible order of items
  const activeItem = parseInt(
    sliderItems[1].querySelector(".title").getAttribute("data-item")
  ); // The first visible item is the active one

  const activeIndex =
    activeItem < 10 ? `0${activeItem}` : activeItem.toString();

  const div = document.createElement("div");
  div.classList.add("slide-number");
  div.textContent = `${activeIndex}/${sliderItems.length}`;

  arrowsDiv.appendChild(div);

  console.log(`Current active slide original index: ${activeIndex}`);

  updateProgressBar();
  resetCarouselState();
}

// Updates the progress bar based on the active slide index
function updateProgressBar() {
  const totalSlides = items.length;

  const sliderItems = Array.from(list.querySelectorAll(".item")); // Get the current visible order of items
  const activeItem = parseInt(sliderItems[0].querySelector(".title").getAttribute("data-item")) + 1; // The first visible item is the active one

  const progressPercentage = (activeItem / totalSlides) * 100; // Calculate progress percentage
  progressBar.style.width = `${progressPercentage}%`; // Update the progress bar's width
}

// Resets the carousel state after navigation
function resetCarouselState() {
  // Clear existing timeouts for transitions and auto-slide
  clearTimeout(transitionTimeout);
  clearTimeout(autoNextTimeout);

  // Remove the transition class after the animation duration
  transitionTimeout = setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, TIME_RUNNING);

  // Restart the auto-slide timer
  autoNextTimeout = setTimeout(() => {
    nextBtn.click();
  }, TIME_AUTO_NEXT);

  // Reset the running time bar animation
  resetAnimation();
}

// scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // Remove if you only want it to trigger once
    }
  });
}, {
  threshold: 0.2 // 20% of the card is visible
});

document.querySelectorAll('.mission-card').forEach(card => {
  observer.observe(card);
});

