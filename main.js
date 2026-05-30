// main.js – логика фильтрации, модальное окно с выделенным сторителлингом

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Отрисовка карточек
function renderMenu(items) {
    const container = document.getElementById('menuGrid');
    if (!items || items.length === 0) {
        container.innerHTML = '<p style="text-align:center;">😕 Ничего не найдено. Выберите категорию.</p>';
        return;
    }
    let html = '';
    items.forEach(item => {
        const priceDisplay = (item.price === 0 || item.price === undefined) ? '—' : `${item.price} ₽`;
        html += `
            <div class="card" data-id="${item.id}">
                <div class="card-header">
                    <h3>${escapeHtml(item.name)}</h3>
                    <span class="price">${priceDisplay}</span>
                </div>
                <div class="volume">${escapeHtml(item.volume)}</div>
                <div class="desc">${escapeHtml(item.shortDesc)}</div>
                ${item.tags ? `<div class="tags">${item.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>` : ''}
                ${item.allergens && item.allergens.length ? `<div class="allergens">⚠️ Аллергены: ${item.allergens.join(', ')}</div>` : ''}
            </div>
        `;
    });
    container.innerHTML = html;
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            const id = parseInt(card.dataset.id);
            const item = BAR_MENU.find(i => i.id === id);
            if (item) openModal(item);
        });
    });
}

function openModal(item) {
    document.getElementById('modalTitle').innerText = item.name;
    // Основное описание (состав, подача)
    let mainDesc = item.fullDesc || item.shortDesc;
    // Сторителлинг (если есть)
    let storyHtml = '';
    if (item.story) {
        storyHtml = `
            <div class="story-block">
                <div class="story-label">📢 Сторителлинг для официанта:</div>
                ${escapeHtml(item.story)}
            </div>
        `;
    }
    // Дополнительная информация
    let extraHtml = '';
    if (item.allergens && item.allergens.length) extraHtml += `<div>⚠️ Аллергены: ${item.allergens.join(', ')}</div>`;
    if (item.volume) extraHtml += `<div>📏 Объём: ${item.volume}</div>`;
    if (item.price && item.price !== 0) extraHtml += `<div>💰 Цена: ${item.price} ₽</div>`;
    
    document.getElementById('modalDescription').innerHTML = `<div class="modal-section"><strong>Состав / Описание:</strong><br>${escapeHtml(mainDesc).replace(/\n/g, '<br>')}</div>`;
    document.getElementById('modalStory').innerHTML = storyHtml;
    document.getElementById('modalExtra').innerHTML = extraHtml ? `<div class="modal-section"><strong>Детали:</strong><br>${extraHtml}</div>` : '';
    document.getElementById('modal').style.display = 'flex';
}

// Закрытие модалки
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

// Категории
function renderCategories() {
    const nav = document.getElementById('categoriesNav');
    if (!nav) return;
    let btns = '';
    for (let [key, label] of Object.entries(categories)) {
        btns += `<button class="cat-btn" data-cat="${key}">${escapeHtml(label)}</button>`;
    }
    nav.innerHTML = btns;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            const filtered = BAR_MENU.filter(item => item.category === cat);
            renderMenu(filtered);
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// Переключение вкладок
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (tabId === 'menu') {
            document.getElementById('menuTab').classList.add('active');
        } else if (tabId === 'quiz') {
            document.getElementById('quizTab').classList.add('active');
            renderQuiz();
        }
    });
});

// ТЕСТ (40 вопросов) – оставьте ваш текущий код без изменений
// ... (здесь должен быть ваш существующий код теста)

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    if (typeof BAR_MENU === 'undefined') {
        console.error('BAR_MENU не загружен');
        document.getElementById('menuGrid').innerHTML = '<p style="color:red;">Ошибка загрузки данных. Проверьте full_menu.js</p>';
        return;
    }
    renderCategories();
    const firstCat = Object.keys(categories)[0];
    const defaultItems = BAR_MENU.filter(item => item.category === firstCat);
    renderMenu(defaultItems);
    const firstBtn = document.querySelector('.cat-btn');
    if (firstBtn) firstBtn.classList.add('active');
});
