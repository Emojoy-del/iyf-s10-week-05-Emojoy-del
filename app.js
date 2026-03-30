// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const totalCount = document.getElementById("totalCount");
const activeCount = document.getElementById("activeCount");
const completedCount = document.getElementById("completedCount");
const emptyState = document.getElementById("emptyState");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const filterButtons = document.querySelectorAll(".filter-btn");

// App state
let tasks = [];
let currentFilter = "all";

// ==========================
// Local Storage Functions
// ==========================
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

// ==========================
// Render Functions
// ==========================
function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    if (filteredTasks.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-item";

        li.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""}>
            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>
            <button class="delete-btn">❌</button>
        `;

        // Toggle complete
        li.querySelector("input").addEventListener("change", () => {
            task.completed = !task.completed;
            saveTasks();
            updateUI();
        });

        // Delete task
        li.querySelector(".delete-btn").addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            updateUI();
        });

        taskList.appendChild(li);
    });

    updateStats();
}

// ==========================
// Stats
// ==========================
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;

    totalCount.textContent = total;
    activeCount.textContent = active;
    completedCount.textContent = completed;
}

// ==========================
// Main UI Update
// ==========================
function updateUI() {
    renderTasks();
}

// ==========================
// Add Task
// ==========================
function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const newTask = {
        id: Date.now(),
        text,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";

    saveTasks();
    updateUI();
}

// ==========================
// Clear Completed
// ==========================
function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    updateUI();
}

// ==========================
// Filter Handling
// ==========================
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;

        filterButtons.forEach(b => b.classList.remove("filter-btn-active"));
        btn.classList.add("filter-btn-active");

        renderTasks();
    });
});

// ==========================
// Event Listeners
// ==========================
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

clearCompletedBtn.addEventListener("click", clearCompleted);

// ==========================
// Initialize App
// ==========================
loadTasks();
updateUI();