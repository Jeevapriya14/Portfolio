document.addEventListener('DOMContentLoaded', function () {
    // Update skills dynamically
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
    const skillsList = document.getElementById('skillsList');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill;
        skillsList.appendChild(li);
    });

    // Update project details dynamically
    const projects = [
        { title: 'Project 1', description: 'Description of Project 1.', link: '#' },
        { title: 'Project 2', description: 'Description of Project 2.', link: '#' }
    ];
    projects.forEach((project, index) => {
        const projectDiv = document.getElementById(`project${index + 1}`);
        projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><a href="${project.link}">View Project</a>`;
    });

    // Update contact email dynamically
    document.getElementById('contactEmail').innerText = 'your.email@example.com';
});
