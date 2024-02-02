// Sample department data, you can replace this with your actual department data
const departments = [
	{
		name: "IVF",
		imageSrc: "/lmh/ivf-svg.svg",
		hoverImageSrc: "/lmh/ivf-svg.svg",
		link: "IVF.html",
	},
	{
		name: "Gynecology",
		imageSrc: "/lmh/gyno-png.png",
		hoverImageSrc: "/lmh/gyno-svg.svg",
		link: "Gynecology.html",
	},
	{
		name: "Obstetrics",
		imageSrc: "/lmh/neonatology.png",
		hoverImageSrc: "/lmh/neonatology.svg",
		link: "Obstetrics.html",
	},
	{
		name: "Radiology",
		imageSrc: "/lmh/radiology.png",
		hoverImageSrc: "/lmh/radiology.svg",
		link: "Radiology.html",
	},
	{
		name: "Orthopedics",
		imageSrc: "/lmh/orthopaedic.png",
		hoverImageSrc: "/lmh/orthopaedic.svg",
		link: "orthopedics.html",
	},
	{
		name: "Dermatology",
		imageSrc: "/lmh/dermatology.png",
		hoverImageSrc: "/lmh/dermatology.svg",
		link: "Dermatology.html",
	},
	{
		name: "Blood Bank",
		imageSrc: "/lmh/blood.png",
		hoverImageSrc: "/lmh/blood.png",
		link: "bloodBank.html",
	},
	{
		name: "Naturopathy",
		imageSrc: "/lmh/naturopathy.png",
		hoverImageSrc: "/lmh/naturopathy.png",
		link: "naturopathy.html",
	},
	{
		name: "Weight-Management",
		imageSrc: "/lmh/weight.png",
		hoverImageSrc: "/lmh/weight.png",
		link: "WeightManagement.html",
	},
	{
		name: "Laboratory",
		imageSrc: "/lmh/lab.png",
		hoverImageSrc: "/lmh/lab.png",
		link: "laboratory.html",
	},
	{
		name: "Insurance TPA & Panels",
		imageSrc: "/lmh/tpa.png",
		hoverImageSrc: "/lmh/tpa.png",
		link: "tpa.html",
	},
	// Add more departments following the same structure
];

/**
 /**
  * Updates the content of the carousel on the webpage.
  */
function updateCarousel() {
	const carouselInner = document
		.getElementById("departmentCarousel")
		.querySelector(".carousel-inner");
	carouselInner.innerHTML = "";

	// CSS media queries determine the number of departments to display
	// Default for small screens
	let departmentsPerSlide = 4;
	// Display 8 departments for desktop screens
	if (window.matchMedia("(min-width: 992px)").matches) {
		departmentsPerSlide = 8;
	}

	const departmentsLength = departments.length;
	for (let i = 0; i < departmentsLength; i += departmentsPerSlide) {
		const departmentSubset = departments.slice(i, i + departmentsPerSlide);

		const carouselItem = document.createElement("div");
		carouselItem.classList.add("carousel-item");

		const departmentContainer = document.createElement("div");
		departmentContainer.classList.add(
			"d-flex",
			"justify-content-around",
			"align-items-center",
			"w-100"
		);

		departmentSubset.forEach((department) => {
			const departmentHtml = `
          <div class="col-auto col-md-4 col-lg-auto text-xl-start">
            <div class="d-flex flex-column align-items-center">
              <div class="icon-box text-center">
                <a class="text-decoration-none" href="${department.link}">
                  <img class="mb-3 deparment-icon" src="${department.imageSrc}" alt="..." />
                  <img class="mb-3 deparment-icon-hover" src="${department.hoverImageSrc}" alt="..." />
                  <p class="fs-1 fs-xxl-2 text-center">${department.name}</p>
                </a>
              </div>
            </div>
          </div>
        `;

			departmentContainer.innerHTML += departmentHtml;
		});

		carouselItem.appendChild(departmentContainer);
		carouselInner.appendChild(carouselItem);

		// Highlight the first carousel item
		if (i === 0) {
			carouselItem.classList.add("active");
		}
	}
}

// Initial update of the carousel
updateCarousel();

// Set interval for automatic sliding every 1 second
setInterval(() => {
	$("#departmentCarousel").carousel("next");
}, 5000);

// Update carousel on window resize
window.addEventListener("resize", updateCarousel);

$(document).ready(function () {
	$("#submitButton").on("click", function () {
		// Get form values
		var name = $("#inputName").val();
		var phone = $("#inputPhone").val();
		var category = $("#inputCategory").val();
		var address = $("#Address").val();
		var message = $("#validationTextarea").val();

		// Construct WhatsApp link
		var whatsappLink =
			"https://wa.me/9466041913?text=" +
			encodeURIComponent("Name: " + name + "\n") +
			encodeURIComponent("Phone: " + phone + "\n") +
			encodeURIComponent("Category: " + category + "\n") +
			encodeURIComponent("Address: " + address + "\n") +
			encodeURIComponent("Message: " + message);

		// Open WhatsApp in a new tab
		window.open(whatsappLink, "_blank");
	});
});

// Hover Effect
document.addEventListener("DOMContentLoaded", function () {
	var myCarousel = new bootstrap.Carousel(
		document.getElementById("carouselExampleDark"),
		{
			interval: 1000, // Set the time interval in milliseconds (1 second in this example)
			wrap: true, // Set to false if you don't want it to wrap around
			keyboard: false, // Set to true if you want to enable keyboard navigation
		}
	);
});
