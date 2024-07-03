import toggleTheme from './theme';
import { addProjectPopup } from './addProjectPopup.js';
import { openNav } from './hamburgerNav.js';
import { projectPreview } from './projectPreview';

// Function to show alerts on reload if the flag is not set
function showAlertIfNoProjectCreated() {
    // Check if the flag is set
    if (!sessionStorage.getItem('projectCreated')) {
        alert('Welcome to the 1-3-5 Todo List App! This is a task management application designed to help you prioritize and focus on your daily tasks. Based on the 1-3-5 rule and the Effective Engineer by Edmond Lau, this app encourages you to allocate one large task, three medium tasks, and five small tasks to tackle within a day, ensuring you make consistent progress without feeling overwhelmed. To get started, click the "Add Project" button. Once your projects are added, select a project to add tasks and manage your schedule. You can also use the Four Default Projects to filter and view all your tasks. Enjoy managing your work flow more efficiently!');
        alert('Keep Going...🍊🌊');
    } else {
        // Remove the flag so alerts will show on next page load
        sessionStorage.removeItem('projectCreated');
    }
}

// Wrapped all the initialization code inside a DOMContentLoaded event listener to ensure the DOM is fully loaded before accessing elements.
document.addEventListener('DOMContentLoaded', () => {
    showAlertIfNoProjectCreated(); // Call the alert function here

    // Element references
    const themeSelect = document.getElementById("theme-select");
    const addProjectBtn = document.getElementById("button-add-project");
    const openNavButton = document.getElementById('button-dropdown-nav');
    const projectsList = document.getElementById('projects-list');
    const defaultProjects = document.getElementById('default-projects-list');

    // Event listeners
    themeSelect.addEventListener('change', toggleTheme);
    addProjectBtn.addEventListener('click', addProjectPopup);
    openNavButton.addEventListener('click', openNav);

    projectsList.addEventListener('click', handleProjectClick);
    defaultProjects.addEventListener('click', handleDefaultProjectClick);

    document.addEventListener('click', handleTaskOrAddTaskClick);

    // Initialize project preview
    projectPreview.initialize(projectsList);
    // projectPreview.initialize(defaultProjects);

    // Load user project tasks
    const userProjects = document.querySelectorAll('.button-project');
    userProjects.forEach((projectButton) => {
        const projectId = projectButton.dataset.projectId;
        projectPreview.loadProjectTasks(projectId);
    });

    // Load default project tasks
    const defaultProjectIds = ['default-inbox', 'default-today', 'default-this-week', 'default-brag-notes'];
    defaultProjectIds.forEach(projectId => {
        projectPreview.loadProjectTasks(projectId);
    });

    // Initial load of the default project ("All Tasks Inbox")
    projectPreview.displaySelectedProject("All Tasks Inbox", 'default-inbox', true);

    function handleProjectClick(event) {
        const clickedElement = event.target.closest('.button-project');
        if (clickedElement) {
            const projectId = clickedElement.dataset.projectId;
            selectUserProject(clickedElement, projectId);
        }
    }

    function selectUserProject(projectButton, projectId) {
        const projectName = projectButton.querySelector('span').textContent;
        projectPreview.displaySelectedProject(projectName, projectId);
        projectPreview.highlightSelectedProjectButton(projectButton);
        projectPreview.loadProjectTasks(projectId);
    }

    function handleDefaultProjectClick(event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('button-default-project')) {
            const projectId = clickedElement.dataset.projectId; // Fetches the project ID
            const projectName = clickedElement.textContent.trim(); // Fetches the project name
            projectPreview.displaySelectedProject(projectName, projectId, true); // Displays the selected default project
            projectPreview.highlightSelectedProjectButton(clickedElement); // Highlights the selected project button
        }
    }

    function handleTaskOrAddTaskClick(event) {
        if (event.target.classList.contains('button-add-task')) {
            const projectId = event.target.dataset.projectId;
            projectPreview.addTask(projectId);
        } else if (event.target.closest('.task')) {
            projectPreview.handleTaskActions(event);
        }
    }
});
