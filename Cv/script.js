const book = document.getElementById("book");
const leftContent = document.getElementById("left-content");
const rightContent = document.getElementById("right-content");

const data = {
  about: {
    title: "About Me",
    text: "I'm an engineering student focused on web development. Through various projects, I've learned to work under pressure, analyzing problems from multiple perspectives to find efficient solutions. I enjoy teamwork and collaborative learning, as I believe sharing knowledge strengthens both individual growth and the success of a project.",
    images: ["yooo.jpg"]
  },
  rally: {
    title: "Innovation Rally / Latin America",
    text: "Participated in an international Latin American innovation competition focused on solving real-world problems. Our project addressed fire prevention in small and remote villages with limited access to technology.The solution used low-cost sensors to detect gases produced by fires, sending real-time alerts with location data to authorities while activating local alarms in the village. Each prototype cost approximately 300–600 MXN.I worked as a full-stack developer, contributing to the application, system design, prototyping, and technical documentation. The project was awarded first place for its social impact and feasibility.",
    images: ["rally.png", "RALLY.png"]
  },
  animal: {
  title: "Animal Care Website",
  text: "Developed an informational website focused on pet care and responsible ownership. The platform provides practical articles on topics such as harmful foods, behavioral issues, and identifying when veterinary attention is necessary.The website also included an Amazon affiliate section featuring recommended products related to pet health and care. I was responsible for the full development of the site, including structure, design, and deployment using Hostinger.",
  images: ["Hostinger.jpg"]
}
,
  energy: {
    title: "Energy Consumption App",
    text: "Developed a web application to monitor and analyze electrical energy consumption. The platform allows users to register household devices such as air conditioners, refrigerators, and screens, recording daily usage in hours to calculate consumption.The application includes data visualization through interactive charts, PDF report export, dark mode, and a tiered system with Free, Pro, and Enterprise plans. I was responsible for the complete development of the project, from functionality and UI/UX to data handling and feature integration.",
    images: ["moo.png", "consu.png"]
  }
};

function openProject(id) {
  const item = data[id];

  if (id === 'about') {
    leftContent.innerHTML = `
      <img src="${item.images[0]}" class="profile-img" onerror="this.src='https://via.placeholder.com/150'">
      <h2>${item.title}</h2>
      <p>${item.text}</p>
    `;
    rightContent.innerHTML = `<p style="margin-top: 100px; font-style: italic; opacity: 0.5;">"I build solutions that combine software, systems thinking, and real-world usability.I enjoy taking ownership of projects from concept to deployment, handling architecture, design, and implementation."</p>`;
  } 
  else if (id === 'animal') {
    leftContent.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.text}</p>
    `;
    rightContent.innerHTML = `
      <div class="single-img">
        <img src="${item.images[0]}" onerror="this.src='https://via.placeholder.com/700x450'">
      </div>
    `;
  } 
  else {
    leftContent.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.text}</p>
    `;
    rightContent.innerHTML = `
      <div class="img-grid">
        <img src="${item.images[0]}" onerror="this.src='https://via.placeholder.com/400x200'">
        <img src="${item.images[1]}" onerror="this.src='https://via.placeholder.com/400x200'">
      </div>
    `;
  }

  book.classList.add("open");
}


function closeBook() {
  book.classList.remove("open");
}

function toggleBook() {
  if (!book.classList.contains("open")) {
    openProject('about');
  }
}