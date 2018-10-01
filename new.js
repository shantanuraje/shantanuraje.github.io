fetch('projects.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        let projects = myJson;
        console.log(myJson);
        professionalProjects(projects['projects']['professional']);
        academicProjects(projects['projects']['academic']);
        personalProjects(projects['projects']['personal']);
    })


// function updateUI(projects) {
//     let projectsDiv = document.getElementById('projects');
//     for (const type in projects['projects']) {
//         if (projects['projects'].hasOwnProperty(type)) {
//             const element = projects['projects'][type];
//             let temp = document.createTextNode(type);
//             let tempH1 = document.createElement('h1');
//             tempH1.appendChild(temp);
//             projectsDiv.appendChild(tempH1)
//             console.log(type);
//         }
//     }
// }

function professionalProjects(projects) {
    let projectsDiv = document.getElementById("projects");
    let titleHeading = document.createElement('h1');
    let titleText = document.createTextNode("Professional");
    titleHeading.appendChild(titleText);
    projectsDiv.appendChild(titleHeading);
    for (const project in projects) {
        if (projects.hasOwnProperty(project)) {
            const tempProject = projects[project];
            let projectDiv = document.createElement('div');
            projectDiv.classList.add('project')

            //get name, company, url, github, technologies[], languages[], description
            let nameElement = document.createElement('h2');
            let nameText = document.createTextNode(tempProject['name']);
            nameElement.appendChild(nameText);
            projectDiv.appendChild(nameElement);

            let companyElement = document.createElement('p');
            let companyText = document.createTextNode(tempProject['company']);
            companyElement.appendChild(companyText);
            projectDiv.appendChild(companyElement);
            

            let urlElement = document.createElement('p');
            let urlText = document.createTextNode(tempProject['url']);
            urlElement.appendChild(urlText);
            projectDiv.appendChild(urlElement);
            
            let githubElement = document.createElement('p');
            let githubText = document.createTextNode(tempProject['github']);
            githubElement.appendChild(githubText);
            projectDiv.appendChild(githubElement);
            
            let technologiesElement = document.createElement('p')
            let technologiesText = document.createTextNode(tempProject['technologies'].toString())
            technologiesElement.appendChild(technologiesText);
            projectDiv.appendChild(technologiesElement);
            
            let languagesElement = document.createElement('p');
            let languagesText = document.createTextNode(tempProject['languages'].toString());
            languagesElement.appendChild(languagesText);
            projectDiv.appendChild(languagesElement);
            
            let descriptionElement = document.createElement('p');
            let descriptionText = document.createTextNode(tempProject['description'].toString());
            descriptionElement.appendChild(descriptionText);
            projectDiv.appendChild(descriptionElement);

            projectsDiv.appendChild(projectDiv);
            console.log(tempProject);
        }
    }
}

function academicProjects(projects) {
    let projectsDiv = document.getElementById("projects");
    let titleHeading = document.createElement('h1');
    let titleText = document.createTextNode("Academic");
    titleHeading.appendChild(titleText);
    projectsDiv.appendChild(titleHeading);
    for (const project in projects) {
        if (projects.hasOwnProperty(project)) {
            const tempProject = projects[project];
            let projectDiv = document.createElement('div');
            projectDiv.classList.add('project')

            //get name, company, url, github, technologies[], languages[], description
            let nameElement = document.createElement('h2');
            let nameText = document.createTextNode(tempProject['name']);
            nameElement.appendChild(nameText);
            projectDiv.appendChild(nameElement);

            let courseElement = document.createElement('p');
            let courseText = document.createTextNode(tempProject['course']);
            courseElement.appendChild(courseText);
            projectDiv.appendChild(courseElement);
            

            let urlElement = document.createElement('p');
            let urlText = document.createTextNode(tempProject['url']);
            urlElement.appendChild(urlText);
            projectDiv.appendChild(urlElement);
            
            let githubElement = document.createElement('p');
            let githubText = document.createTextNode(tempProject['github']);
            githubElement.appendChild(githubText);
            projectDiv.appendChild(githubElement);
            
            let technologiesElement = document.createElement('p')
            let technologiesText = document.createTextNode(tempProject['technologies'].toString())
            technologiesElement.appendChild(technologiesText);
            projectDiv.appendChild(technologiesElement);
            
            let languagesElement = document.createElement('p');
            let languagesText = document.createTextNode(tempProject['languages'].toString());
            languagesElement.appendChild(languagesText);
            projectDiv.appendChild(languagesElement);
            
            let descriptionElement = document.createElement('p');
            let descriptionText = document.createTextNode(tempProject['description'].toString());
            descriptionElement.appendChild(descriptionText);
            projectDiv.appendChild(descriptionElement);

            projectsDiv.appendChild(projectDiv);
            console.log(tempProject);
        }
    }    
}

function personalProjects(projects) {
    let projectsDiv = document.getElementById("projects");
    let titleHeading = document.createElement('h1');
    let titleText = document.createTextNode("Personal");
    titleHeading.appendChild(titleText);
    projectsDiv.appendChild(titleHeading);
    for (const project in projects) {
        if (projects.hasOwnProperty(project)) {
            const tempProject = projects[project];
            let projectDiv = document.createElement('div');
            projectDiv.classList.add('project')

            //get name, company, url, github, technologies[], languages[], description
            let nameElement = document.createElement('h2');
            let nameText = document.createTextNode(tempProject['name']);
            nameElement.appendChild(nameText);
            projectDiv.appendChild(nameElement);

            let forElement = document.createElement('p');
            let forText = document.createTextNode(tempProject['for']);
            forElement.appendChild(forText);
            projectDiv.appendChild(forElement);
            

            let urlElement = document.createElement('p');
            let urlText = document.createTextNode(tempProject['url']);
            urlElement.appendChild(urlText);
            projectDiv.appendChild(urlElement);
            
            let githubElement = document.createElement('p');
            let githubText = document.createTextNode(tempProject['github']);
            githubElement.appendChild(githubText);
            projectDiv.appendChild(githubElement);
            
            let technologiesElement = document.createElement('p')
            let technologiesText = document.createTextNode(tempProject['technologies'].toString())
            technologiesElement.appendChild(technologiesText);
            projectDiv.appendChild(technologiesElement);
            
            let languagesElement = document.createElement('p');
            let languagesText = document.createTextNode(tempProject['languages'].toString());
            languagesElement.appendChild(languagesText);
            projectDiv.appendChild(languagesElement);
            
            let descriptionElement = document.createElement('p');
            let descriptionText = document.createTextNode(tempProject['description'].toString());
            descriptionElement.appendChild(descriptionText);
            projectDiv.appendChild(descriptionElement);

            projectsDiv.appendChild(projectDiv);
            console.log(tempProject);
        }
    }    
}