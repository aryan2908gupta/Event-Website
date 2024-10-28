
const events = [
    {
      id: 1,
      name: "Dil-Luminati Tour - India",
      date: "2024-11-05",
      location: "New Delhi",
      description: "For the first time ever, global music icon Diljit Dosanjh brings his blockbuster Dil-Luminati Tour to 11 cities across India! ",
      image: "diljit-delhi-concert.jpg"
    },
    {
      id: 2,
      name: "Chandigarh Lalit Kala Akademi",
      date: "2024-12-10",
      location: "Chandigarh",
      description: "Explore modern art from renowned artists around the world.",
      image: "art.jpg"
    },
    {
      id: 3,
      name: "Food Carnival",
      date: "2024-12-20",
      location: "Mumbai",
      description: "Taste a variety of cuisines at the city's famous Food Carnival.",
      image: "food.jpg"
    },
    {
        id: 4,
        name: "Comedy Shows",
        date: "2024-11-03",
        location: "Kolkata",
        description: "Get ready to laugh till your sides hurt at Kolkata's funniest comedy showdown!",
        image: "comedy.jpg"
      },
      {
        id: 5,
        name: "Green Marathon",
        date: "2024-12-10",
        location: "Chandigarh",
        description: "Join us for the Green Marathon and run for a cleaner, greener future!",
        image: "green.jpg"
      },
      {
        id: 6,
        name: "Amusement Park",
        date: "2024-11-19",
        location: "Jaipur",
        description: "Step right up for thrills and laughter at the ultimate amusement park adventure!",
        image: "a.jpg"
      },
  
    {
        id: 6,
        name: "Health Camp",
        date: "2024-11-19",
        location: "Mohali",
        description: "JOIN US FOR A HEALTH CAMP TO EMPOWER YOUR WELL-BEING AND REVITALIZE YOUR LIFE!",
        image: "health.jpg"
      },

      {
        id: 6,
        name: "Mystery Room",
        date: "2024-11-19",
        location: "Chandigarh",
        description: "ENTER IF YOU DARE: UNRAVEL THE SECRETS IN OUR MYSTERY ROOM EXPERIENCE!" ,
        image: "m.jpg"
      },

];
  
  const eventList = document.getElementById("event-list");
  
  function renderEvents(events) {
    eventList.innerHTML = "";
    events.forEach(event => {
      const eventCard = document.createElement("div");
      eventCard.classList.add("event-card");
      eventCard.innerHTML = `
        <h2>${event.name}</h2>
        <p>${event.date}</p>
        <p>${event.location}</p>
      `;
      eventCard.addEventListener("click", () => openModal(event));
      eventList.appendChild(eventCard);
    });
  }
  

  document.getElementById("search-bar").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredEvents = events.filter(event =>
      event.name.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query)
    );
    renderEvents(filteredEvents);
  });
  

  const modal = document.getElementById("event-modal");
  const closeModalBtn = document.querySelector(".close-btn");
  
  function openModal(event) {
    document.getElementById("modal-title").textContent = event.name;
    document.getElementById("modal-date").textContent = event.date;
    document.getElementById("modal-location").textContent = event.location;
    document.getElementById("modal-description").textContent = event.description;
    document.getElementById("modal-image").src = event.image;
    modal.style.display = "flex";
  }
  
  function closeModal() {
    modal.style.display = "none";
  }
  
  closeModalBtn.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  

  renderEvents(events);
  