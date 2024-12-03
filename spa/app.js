const host = "http://xxxxxx-m2.domain.ru/"; // Замените соответствующим адресом API
const appDiv = document.getElementById('app');

function renderPage(page) {
    appDiv.innerHTML = '';

    switch(page) {
        case 'register':
            renderRegister();
            break;
        case 'login':
            renderLogin();
            break;
        case 'upload':
            renderUpload();
            break;
        case 'edit':
            renderEdit();
            break;
        case 'permissions':
            renderPermissions();
            break;
        case 'userFiles':
            renderUserFiles();
            break;
        case 'accessibleFiles':
            renderAccessibleFiles();
            break;
        default:
            renderLogin();
            break;
    }
}

// Регистрация
function renderRegister() {
    appDiv.innerHTML += `
        <h1>Регистрация</h1>
        <form id="registerForm">
            <input type="text" placeholder="Имя" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Пароль" required>
            <button type="submit">Зарегистрироваться</button>
        </form>
    `;

    document.getElementById('registerForm').onsubmit = async (e) => {
        e.preventDefault();
        // Логика для регистрации пользователя
    };
}

// Вход в систему
function renderLogin() {
    appDiv.innerHTML += `
        <h1>Вход</h1>
        <form id="loginForm">
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Пароль" required>
            <button type="submit">Войти</button>
        </form>
    `;

    document.getElementById('loginForm').onsubmit = async (e) => {
        e.preventDefault();
        // Логика для входа в систему
    };
}

// Загрузка файлов
function renderUpload() {
    appDiv.innerHTML += `
        <h1>Загрузка файлов</h1>
        <form id="uploadForm">
            <input type="file" required>
            <button type="submit">Загрузить</button>
        </form>
    `;

    document.getElementById('uploadForm').onsubmit = async (e) => {
        e.preventDefault();
        // Логика для загрузки файлов
    };
}

// Редактирование файла
function renderEdit() {
    appDiv.innerHTML += `
        <h1>Редактирование файла</h1>
        <form id="editForm">
            <input type="text" placeholder="Новое название файла" required>
            <button type="submit">Сохранить изменения</button>
        </form>
    `;

    document.getElementById('editForm').onsubmit = async (e) => {
        e.preventDefault();
        // Логика для редактирования файла
    };
}

// Права доступа
function renderPermissions() {
    appDiv.innerHTML += `
        <h1>Права доступа</h1>
        <form id="permissionsForm">
            <input type="email" placeholder="Email пользователя" required>
            <select >
                <option value="read">Чтение</option>
                <option value="write">Запись</option>
                <option value="admin">Администратор</option>
            </select>
            <button type="submit">Установить права</button>
        </form>
    `;

    document.getElementById('permissionsForm').onsubmit = async (e) => {
        e.preventDefault();
        // Логика для установки прав доступа
    };
}

// Список файлов пользователя
function renderUserFiles() {
    appDiv.innerHTML += `
        <h1>Список моих файлов</h1>
        <div id="filesList"></div>
    `;
    // Функция для получения и отображения файлов пользователя
}

// Список файлов, к которым пользователь имеет доступ
function renderAccessibleFiles() {
    appDiv.innerHTML += `
        <h1>Список доступных файлов</h1>
        <div id="accessibleFilesList"></div>
    `;
    // Функция для получения и отображения доступных файлов
}

// Начальная загрузка
renderPage('login');

async function registerUser(event) {
    const form = event.target;
    const data = new FormData(form);
    const response = await fetch(`${host}register`, {
        method: 'POST',
        body: data
    });
    // Обработка ответа
}