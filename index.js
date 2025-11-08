// const addTaskBtn = document.querySelector(".add-task");
// const addTaskForm = document.getElementById("add-task-form");
// const cancelBtn = document.getElementById("cancel-btn");

// // Вибір кольору
// let selectedColor = 'blue';

// document.querySelectorAll('.color-option').forEach(option => {
//     option.addEventListener('click', () => {
//         document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
//         option.classList.add('selected');
//         selectedColor = option.dataset.color;
//     });
// });

// addTaskBtn.addEventListener("click", () => {
//     addTaskForm.style.display = "block";
//     addTaskBtn.style.display = "none";
// });

// cancelBtn.addEventListener("click", () => {
//     addTaskForm.reset();
//     addTaskForm.style.display = "none";
//     addTaskBtn.style.display = "block";
//     document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
//     document.querySelector('.color-option.blue').classList.add('selected');
//     selectedColor = 'blue';
// });

// addTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
    
//     const name = document.getElementById("task-name").value.trim();
//     const descr = document.getElementById("task-descr").value.trim();
    
//     if (!name) return;
    
//     const newTask = document.createElement("div");
//     newTask.className = `task color-${selectedColor}`;
//     newTask.innerHTML = `
//         <h2 class="task-name">${name}</h2>
//         <p class="task-descr">${descr || ''}</p>
//     `;
    
//     const wrapper = document.querySelector(".tasks-wrapper");
//     wrapper.appendChild(newTask);
    
//     addTaskForm.reset();
//     addTaskForm.style.display = "none";
//     addTaskBtn.style.display = "block";
    
//     document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
//     document.querySelector('.color-option.blue').classList.add('selected');
//     selectedColor = 'blue';
    
//     updateTasks();
//     saveTasks();
// });

// function saveTasks() {
//     const allTasks = document.querySelectorAll(".task");
//     const tasksData = Array.from(allTasks).map(task => {
//         let color = 'blue';
//         if (task.classList.contains('color-orange')) color = 'orange';
//         else if (task.classList.contains('color-green')) color = 'green';
        
//         return {
//             title: task.querySelector(".task-name").textContent.trim(),
//             description: task.querySelector(".task-descr").textContent.trim(),
//             color: color
//         };
//     });
//     localStorage.setItem('tasks', JSON.stringify(tasksData));
// }

// function loadTasks() {
//     const saved = localStorage.getItem('tasks');
//     if (!saved) return;
    
//     const tasksData = JSON.parse(saved);
//     const wrapper = document.querySelector(".tasks-wrapper");
//     wrapper.innerHTML = '';
    
//     tasksData.forEach(data => {
//         const newTask = document.createElement("div");
//         newTask.className = `task color-${data.color || 'blue'}`;
//         newTask.innerHTML = `
//             <h2 class="task-name">${data.title || ''}</h2>
//             <p class="task-descr">${data.description || ''}</p>
//         `;
//         wrapper.appendChild(newTask);
//     });
// }

// function updateTasks() {
//     const allTasks = document.querySelectorAll(".task");
//     allTasks.forEach((task, index) => {
//         task.setAttribute("draggable", true);
//         task.dataset.index = index;
//         if (!task.dataset.listeners) {
//             task.addEventListener("dragstart", dragstartHandler);
//             task.addEventListener("dragover", dragoverHandler);
//             task.addEventListener("drop", dropHandler);
//             task.addEventListener("dragend", dragendHandler);
//             task.dataset.listeners = 'true';
//         }
//     });
// }

// let draggedIndex = null;

// function dragstartHandler(e) {
//     draggedIndex = +e.currentTarget.dataset.index;
//     e.dataTransfer.effectAllowed = "move";
//     e.currentTarget.classList.add('dragging');
// }

// function dragoverHandler(e) {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = "move";
// }

// function dropHandler(e) {
//     e.preventDefault();
//     const targetIndex = +e.currentTarget.dataset.index;
//     if (draggedIndex === targetIndex) return;
    
//     const draggedTask = document.querySelector(`[data-index="${draggedIndex}"]`);
//     if (!draggedTask) return;
    
//     if (draggedTask.parentNode) {
//         draggedTask.remove();
//     }
    
//     const parent = e.currentTarget.parentNode;
//     let insertBeforeElem;
//     if (draggedIndex < targetIndex) {
//         insertBeforeElem = e.currentTarget.nextSibling;
//     } else {
//         insertBeforeElem = e.currentTarget;
//     }
//     parent.insertBefore(draggedTask, insertBeforeElem);
    
//     updateTasks();
//     saveTasks();
//     draggedIndex = null;
// }

// function dragendHandler(e) {
//     e.currentTarget.classList.remove('dragging');
//     draggedIndex = null;
//     const trashbox = document.querySelector(".trashbox");
//     trashbox.classList.remove("drag-over");
// }

// loadTasks();
// updateTasks();

// const wrapper = document.querySelector(".tasks-wrapper");
// wrapper.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = "move";
// });

// wrapper.addEventListener("drop", (e) => {
//     e.preventDefault();
//     if (draggedIndex === null) return;
    
//     const dropY = e.clientY;
//     const currentTasks = document.querySelectorAll(".task");
//     let targetIndex = currentTasks.length;
    
//     currentTasks.forEach((task, index) => {
//         const rect = task.getBoundingClientRect();
//         if (dropY < rect.top + rect.height / 2) {
//             targetIndex = index;
//             return;
//         }
//     });
    
//     const draggedTask = document.querySelector(`[data-index="${draggedIndex}"]`);
//     if (!draggedTask || targetIndex === draggedIndex) return;
    
//     if (draggedTask.parentNode) {
//         draggedTask.remove();
//     }
    
//     if (targetIndex > draggedIndex) {
//         targetIndex--;
//     }
    
//     const updatedTasks = document.querySelectorAll(".task");
//     const targetTask = updatedTasks[targetIndex] || null;
//     wrapper.insertBefore(draggedTask, targetTask);
    
//     updateTasks();
//     saveTasks();
//     draggedIndex = null;
// });

// const trashbox = document.querySelector(".trashbox");
// trashbox.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = "move";
// });

// trashbox.addEventListener("dragenter", (e) => {
//     e.preventDefault();
//     trashbox.classList.add("drag-over");
// });

// trashbox.addEventListener("dragleave", (e) => {
//     if (!trashbox.contains(e.relatedTarget)) {
//         trashbox.classList.remove("drag-over");
//     }
// });

// trashbox.addEventListener("drop", (e) => {
//     e.preventDefault();
//     if (draggedIndex === null) return;
    
//     const draggedTask = document.querySelector(`[data-index="${draggedIndex}"]`);
//     if (draggedTask && draggedTask.parentNode) {
//         draggedTask.remove();
//         updateTasks();
//         saveTasks();
//     }
//     draggedIndex = null;
//     trashbox.classList.remove("drag-over");
// });

// trashbox.addEventListener("click", (e) => {
//     if (draggedIndex !== null) return;
    
//     const allTasks = document.querySelectorAll(".task");
//     if (allTasks.length === 0) {
//         alert("Всі задачі видалено!");
//         return;
//     }
    
//     const confirmDelete = confirm("Видалити всі задачі?");
//     if (confirmDelete) {
//         allTasks.forEach(task => task.remove());
//         updateTasks();
//         saveTasks();
//         draggedIndex = null;
//     }
// });











import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    deleteDoc, 
    doc,
    writeBatch
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// ==========================================
// FIREBASE КОНФІГУРАЦІЯ
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyBUix4eNeQySyIqHDCxmfLA6atpdTWoVEU",
    authDomain: "assigno-6c970.firebaseapp.com",
    projectId: "assigno-6c970",
    storageBucket: "assigno-6c970.firebasestorage.app",
    messagingSenderId: "668037214564",
    appId: "1:668037214564:web:32de21baeee037884f0a71"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ==========================================
// ГЛОБАЛЬНІ ЗМІННІ
// ==========================================
let selectedColor = 'blue';
let draggedIndex = null;
let tasksCache = [];

// ==========================================
// ЕЛЕМЕНТИ DOM
// ==========================================
const addTaskBtn = document.querySelector(".add-task");
const addTaskForm = document.getElementById("add-task-form");
const cancelBtn = document.getElementById("cancel-btn");
const wrapper = document.querySelector(".tasks-wrapper");
const trashbox = document.querySelector(".trashbox");

// ==========================================
// ВИБІР КОЛЬОРУ
// ==========================================
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
        selectedColor = option.dataset.color;
    });
});

// ==========================================
// ФОРМА - Показати/Сховати
// ==========================================
addTaskBtn.addEventListener("click", () => {
    addTaskForm.style.display = "block";
    addTaskBtn.style.display = "none";
});

cancelBtn.addEventListener("click", () => {
    addTaskForm.reset();
    addTaskForm.style.display = "none";
    addTaskBtn.style.display = "block";
    document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
    document.querySelector('.color-option.blue').classList.add('selected');
    selectedColor = 'blue';
});

// ==========================================
// ДОДАТИ TASK (Firebase)
// ==========================================
addTaskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("task-name").value.trim();
    const descr = document.getElementById("task-descr").value.trim();

    if (!name) return;

    try {
        // Додаємо в Firestore
        const docRef = await addDoc(collection(db, "tasks"), {
            title: name,
            description: descr,
            color: selectedColor,
            order: tasksCache.length,
            createdAt: new Date().toISOString()
        });

        console.log("✅ Task added to Firestore with ID:", docRef.id);

        // Оновлюємо інтерфейс
        await loadTasks();

        // Скидаємо форму
        addTaskForm.reset();
        addTaskForm.style.display = "none";
        addTaskBtn.style.display = "block";
        document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
        document.querySelector('.color-option.blue').classList.add('selected');
        selectedColor = 'blue';
    } catch (error) {
        console.error("❌ Error adding task:", error);
        alert("Помилка при додаванні задачі!");
    }
});

// ==========================================
// ЗАВАНТАЖИТИ TASKS з Firebase
// ==========================================
async function loadTasks() {
    try {
        wrapper.innerHTML = '<p style="text-align:center; color:#999;">Завантаження...</p>';

        const querySnapshot = await getDocs(collection(db, "tasks"));
        
        tasksCache = [];
        querySnapshot.forEach((docSnap) => {
            tasksCache.push({
                id: docSnap.id,
                ...docSnap.data()
            });
        });

        // Сортуємо за порядком
        tasksCache.sort((a, b) => (a.order || 0) - (b.order || 0));

        // Відображаємо
        wrapper.innerHTML = '';
        if (tasksCache.length === 0) {
            wrapper.innerHTML = '<p style="text-align:center; color:#999; grid-column: 1/-1;">Немає задач. Додайте першу!</p>';
        } else {
            tasksCache.forEach(data => {
                const newTask = document.createElement("div");
                newTask.className = `task color-${data.color || 'blue'}`;
                newTask.dataset.id = data.id;
                newTask.innerHTML = `
                    <h2 class="task-name">${data.title || ''}</h2>
                    <p class="task-descr">${data.description || ''}</p>
                `;
                wrapper.appendChild(newTask);
            });
        }

        updateTasks();
        console.log("📥 Tasks loaded from Firestore:", tasksCache.length);
    } catch (error) {
        console.error("❌ Error loading tasks:", error);
        wrapper.innerHTML = '<p style="text-align:center; color:red;">Помилка завантаження!</p>';
    }
}

// ==========================================
// ОНОВИТИ ПОРЯДОК в Firebase
// ==========================================
async function saveOrder() {
    try {
        const batch = writeBatch(db);
        const currentTasks = document.querySelectorAll(".task");

        currentTasks.forEach((task, index) => {
            const taskId = task.dataset.id;
            if (taskId) {
                const taskRef = doc(db, "tasks", taskId);
                batch.update(taskRef, { order: index });
            }
        });

        await batch.commit();
        console.log("✅ Order saved to Firestore");
    } catch (error) {
        console.error("❌ Error saving order:", error);
    }
}

// ==========================================
// DRAG & DROP ФУНКЦІЇ
// ==========================================
function updateTasks() {
    const allTasks = document.querySelectorAll(".task");
    allTasks.forEach((task, index) => {
        task.setAttribute("draggable", true);
        task.dataset.index = index;
        if (!task.dataset.listeners) {
            task.addEventListener("dragstart", dragstartHandler);
            task.addEventListener("dragover", dragoverHandler);
            task.addEventListener("drop", dropHandler);
            task.addEventListener("dragend", dragendHandler);
            task.dataset.listeners = 'true';
        }
    });
}

function dragstartHandler(e) {
    draggedIndex = +e.currentTarget.dataset.index;
    e.dataTransfer.effectAllowed = "move";
    e.currentTarget.classList.add('dragging');
}

function dragoverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
}

function dropHandler(e) {
    e.preventDefault();
    const targetIndex = +e.currentTarget.dataset.index;
    if (draggedIndex === targetIndex) return;

    const draggedTask = document.querySelector(`[data-index="${draggedIndex}"]`);
    if (!draggedTask) return;

    const parent = e.currentTarget.parentNode;
    let insertBeforeElem;
    if (draggedIndex < targetIndex) {
        insertBeforeElem = e.currentTarget.nextSibling;
    } else {
        insertBeforeElem = e.currentTarget;
    }

    parent.insertBefore(draggedTask, insertBeforeElem);

    updateTasks();
    saveOrder(); // Зберігаємо новий порядок у Firebase
    draggedIndex = null;
}

function dragendHandler(e) {
    e.currentTarget.classList.remove('dragging');
    draggedIndex = null;
    trashbox.classList.remove("drag-over");
}

// ==========================================
// DROP В ПРОМІЖКИ (wrapper)
// ==========================================
wrapper.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
});

wrapper.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const dropY = e.clientY;
    const currentTasks = document.querySelectorAll(".task");
    let targetIndex = currentTasks.length;

    currentTasks.forEach((task, index) => {
        const rect = task.getBoundingClientRect();
        if (dropY < rect.top + rect.height / 2) {
            targetIndex = index;
            return;
        }
    });

    const draggedTask = document.querySelector(`[data-index="${draggedIndex}"]`);
    if (!draggedTask || targetIndex === draggedIndex) return;

    if (draggedTask.parentNode) {
        draggedTask.remove();
    }

    if (targetIndex > draggedIndex) {
        targetIndex--;
    }

    const updatedTasks = document.querySelectorAll(".task");
    const targetTask = updatedTasks[targetIndex] || null;
    wrapper.insertBefore(draggedTask, targetTask);

    updateTasks();
    saveOrder();
    draggedIndex = null;
});

// ==========================================
// TRASHBOX - Видалення
// ==========================================
trashbox.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
});

trashbox.addEventListener("dragenter", () => {
    trashbox.classList.add("drag-over");
});

trashbox.addEventListener("dragleave", (e) => {
    if (!trashbox.contains(e.relatedTarget)) {
        trashbox.classList.remove("drag-over");
    }
});

// Видалення ОДНІЄЇ задачі (drag)
trashbox.addEventListener("drop", async (e) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const draggedTask = document.querySelector(`[data-index="${draggedIndex}"]`);
    if (draggedTask) {
        const taskId = draggedTask.dataset.id;
        
        try {
            // Видаляємо з Firestore
            await deleteDoc(doc(db, "tasks", taskId));
            console.log("🗑️ Task deleted from Firestore:", taskId);

            // Видаляємо з DOM
            draggedTask.remove();
            updateTasks();
            saveOrder();
        } catch (error) {
            console.error("❌ Error deleting task:", error);
            alert("Помилка при видаленні задачі!");
        }
    }

    trashbox.classList.remove("drag-over");
    draggedIndex = null;
});

// Видалення ВСІХ задач (клік)
trashbox.addEventListener("click", async () => {
    if (draggedIndex !== null) return;

    const allTasks = document.querySelectorAll(".task");
    if (allTasks.length === 0) {
        alert("Всі задачі вже видалено!");
        return;
    }

    const confirmDelete = confirm("Видалити ВСІ задачі?");
    if (confirmDelete) {
        try {
            const batch = writeBatch(db);
            allTasks.forEach(task => {
                const taskId = task.dataset.id;
                if (taskId) {
                    batch.delete(doc(db, "tasks", taskId));
                }
            });
            await batch.commit();
            
            console.log("🗑️ All tasks deleted from Firestore");
            await loadTasks();
        } catch (error) {
            console.error("❌ Error deleting all tasks:", error);
            alert("Помилка при видаленні задач!");
        }
    }
});

// ==========================================
// ІНІЦІАЛІЗАЦІЯ
// ==========================================
console.log("🚀 Initializing Assigno with Firebase...");
loadTasks();