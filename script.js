const username = "your-github-username"; // Replace with your GitHub username

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    const reposContainer = document.getElementById("repos");
    data.forEach(repo => {
      const repoEl = document.createElement("div");
      repoEl.className = "repo";
      repoEl.innerHTML = `
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p>${repo.description || "No description provided."}</p>
      `;
      reposContainer.appendChild(repoEl);
    });
  })
  .catch(error => {
    document.getElementById("repos").innerHTML = "<p>Failed to load repositories.</p>";
    console.error("Error fetching repos:", error);
  });
