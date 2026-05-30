// main.js – логика фильтрации, модальные окна, тест с 40 вопросами

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
    // Вешаем обработчики на карточки
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            const id = parseInt(card.dataset.id);
            const item = BAR_MENU.find(i => i.id === id);
            if (item) openModal(item);
        });
    });
}

// Модальное окно
function openModal(item) {
    document.getElementById('modalTitle').innerText = item.name;
    let desc = item.fullDesc || item.shortDesc;
    let extra = '';
    if (item.allergens && item.allergens.length) extra += `⚠️ Аллергены: ${item.allergens.join(', ')}\n`;
    if (item.volume) extra += `📏 Объём: ${item.volume}\n`;
    if (item.price && item.price !== 0) extra += `💰 Цена: ${item.price} ₽\n`;
    document.getElementById('modalDescription').innerHTML = desc.replace(/\n/g, '<br>');
    document.getElementById('modalExtra').innerHTML = extra ? `<strong>Детали:</strong><br>${extra.replace(/\n/g, '<br>')}` : '';
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

// ТЕСТ: 40 вопросов с юмором
const quizData = [
    { question: "Сколько мл в стандартном эспрессо?", options: ["30 мл", "50 мл", "100 мл"], correct: 0, joke: "Правильно! 30 мл. А если попросили «покрепче», то два эспрессо в одной чашке — это уже двойной." },
    { question: "Что означает фраза «Корона подаётся с лаймом»?", options: ["Так сложилось исторически", "Чтобы улучшить вкус дешёвого пива", "Лайм маскирует запах стеклянной бутылки"], correct: 0, joke: "Верно, традиция! Лайм действительно приятно оттеняет вкус Corona, но главное — это классика." },
    { question: "Какой чай бодрит сильнее кофе и называется «шаманским»?", options: ["Молочный улун", "Саган-дайля", "Эрл Грей"], correct: 1, joke: "Да, Саган-дайля! Говорят, после него и столбы сами пляшут. Но давление не скачет, проверено." },
    { question: "Что такое сангрита и к чему её подают?", options: ["Томатный соус с халапеньо к текиле", "Фруктовый смузи к рому", "Пряный сироп к виски"], correct: 0, joke: "Сангрита — это томатный сок с лаймом, апельсином, халапеньо и сельдереем. К текиле, разумеется." },
    { question: "В каком коктейле есть яичный белок?", options: ["Апероль спритц", "Абрикосовый сауэр", "Дайкири"], correct: 1, joke: "Абрикосовый сауэр! Яичный белок даёт пенку. Без трубочки, пьётся мелкими глотками." },
    { question: "Какой объём у лимонада в графине (на компанию)?", options: ["300 мл", "800 мл", "1,5 л"], correct: 1, joke: "800 мл. Выгоднее, чем по стаканам, и хватит на 2-3 персоны." },
    { question: "Что значит надпись «Beer with gluten»?", options: ["Пиво содержит глютен", "Пиво без глютена", "Пиво низкокалорийное"], correct: 0, joke: "Все классические сорта пива (ячмень, пшеница) содержат глютен. Безалкогольное тоже содержит следы." },
    { question: "Какой ингредиент в смузи «Манговый урбеч»?", options: ["Кокосовое молоко", "Паста из тыквенных семечек", "Соевый соус"], correct: 1, joke: "Урбеч — это паста из семечек. В нашем случае из тыквенных. Очень полезно." },
    { question: "При какой температуре подаётся взвар?", options: ["75±5°C", "Комнатная", "Лёд"], correct: 0, joke: "Горячий, но не обжигающий. 75 градусов — идеально." },
    { question: "Почему к текиле не подают дольку лайма? (шутка)", options: ["Потому что сангрита лучше", "Потому что лайм испортит вековые традиции", "Потому что Мексика не одобряет"], correct: 0, joke: "На самом деле можно и лайм, но в нашем баре к текиле подают сангриту — так интереснее." },
    { question: "Как правильно произнести «Peroni»?", options: ["Перони", "Пэрони", "Пирони"], correct: 0, joke: "Перони! Итальянское пиво." },
    { question: "Что означает слово «Draft beer»?", options: ["Разливное пиво", "Бутылочное", "Безалкогольное"], correct: 0, joke: "Draft — разливное из кеги." },
    { question: "Какой ликёр входит в состав Негрони?", options: ["Кампари", "Фернет Бранка", "Егермейстер"], correct: 0, joke: "Кампари, джин и красный вермут." },
    { question: "Что такое «джусболы»?", options: ["Жевательные шарики с соком", "Стеклянные шары", "Название коктейля"], correct: 0, joke: "Мармеладные шарики, которые лопаются во рту. Украшение для коктейлей." },
    { question: "Какой коктейль подаётся в медной кружке?", options: ["Смородиновый мул", "Мохито", "Дайкири"], correct: 0, joke: "Смородиновый мул — русская версия Moscow Mule." },
    { question: "Что такое «сторителлинг» для официанта?", options: ["Короткая продающая фраза о напитке", "Длинная лекция", "Сказка на ночь"], correct: 0, joke: "«Это наш берёзовый виски коллинз — мы смешали бурбон с сиропом из берёзового сока и кваса. Очень необычно, попробуйте». Запомнили?" },
    { question: "Сколько мл в стандартной порции настойки?", options: ["30 мл", "50 мл", "100 мл"], correct: 1, joke: "50 мл. Сет «Топ 8» — 8 по 50." },
    { question: "Что такое «полугар»?", options: ["Хлебное вино (напиток)", "Напиток из полбы", "Крепкий квас"], correct: 0, joke: "Полугар — исторический русский напиток, хлебное вино. У нас есть Полугар №1 Рожь и Пшеница, №3 Бородинский." },
    { question: "Какой сироп используется в рафе с карамелью?", options: ["Карамельный", "Ванильный", "Ореховый"], correct: 0, joke: "Карамельный. Раф взбивается паром." },
    { question: "Что означает «ручка чашки, ложечка, сахар — параллельно»?", options: ["Сервировка эспрессо", "Правила игры в бильярд", "Порядок в баре"], correct: 0, joke: "Правило 4 часов: ручка чашки, ложечка и сахарница должны быть выстроены в одну линию. Эстетика." },
    { question: "Какой напиток бодрит сильнее кофе, но не поднимает давление?", options: ["Саган-дайля", "Матча", "Энергетик"], correct: 0, joke: "Саган-дайля! Шаманский чай, бодрит, но давление не скачет." },
    { question: "Что такое «хреновуха»?", options: ["Настойка на хрене с горчицей", "Горькая водка", "Квас"], correct: 0, joke: "Острая настойка на водке, хрене и горчице. Для смелых." },
    { question: "Какой коктейль имеет зелёный цвет из-за матча?", options: ["Киви крыжовник смэш", "Мохито", "Базиликовый джин"], correct: 0, joke: "Киви крыжовник смэш — с матча порошком сверху." },
    { question: "Что общего у коктейлей с яйцом?", options: ["Они подаются без трубочки", "Они всегда с ромом", "Они горячие"], correct: 0, joke: "Коктейли с яичным белком подаются без трубочки, чтобы пить мелкими глотками." },
    { question: "Какой лимонад самый фотогеничный?", options: ["Райхон (фиолетовый)", "Тархун", "Мандариновый"], correct: 0, joke: "Фиолетовый Райхон — инстаграм-звезда." },
    { question: "Что такое «милкшейк шоколадный» дополнительно содержит?", options: ["Ореховый сироп", "Корицу", "Мороженое"], correct: 0, joke: "Ореховый сироп! Шоколад + орехи." },
    { question: "Какой напиток имеет состав «сусло, вишня, сахар, дрожжи»?", options: ["Квас вишнёвый", "Медовуха", "Морс"], correct: 0, joke: "Квас домашний вишнёвый. Аллергены: глютен." },
    { question: "С чем подаётся бурбон в коктейле «Берёзовый виски коллинз»?", options: ["С сиропом из берёзового сока и кваса", "С колой", "С тоником"], correct: 0, joke: "Сироп берёза-душица-квас — наша гордость." },
    { question: "Что такое «сет настоек Топ 8»?", options: ["8 разных настоек", "8 порций одной настойки", "8 ликёров"], correct: 0, joke: "8 разных настоек, состав обновляется еженедельно. Выгоднее и интереснее." },
    { question: "Какой чай называют «молочным»?", options: ["Молочный улун", "Иван-чай", "Чай с молоком"], correct: 0, joke: "Молочный улун — зелёный чай со сливочным ароматом. Никакого молока в составе нет." },
    { question: "Сколько граммов кофе идёт на двойной эспрессо?", options: ["16 г", "11 г", "8 г"], correct: 0, joke: "16 г. Для одинарного — 11 г." },
    { question: "Какой аллерген содержится в пиве и виски?", options: ["Глютен", "Молоко", "Орехи"], correct: 0, joke: "Глютен (ячмень, пшеница)." },
    { question: "Как называется русский аналог Moscow Mule?", options: ["Смородиновый мул", "Русский мул", "Ямской мул"], correct: 0, joke: "Смородиновый мул! На смородиновой настойке и имбирном эле." },
    { question: "Что такое «стир» в барной терминологии?", options: ["Аккуратное перемешивание льда и напитка", "Встряхивание в шейкере", "Фильтрация"], correct: 0, joke: "Стир (stir) — перемешивание барной ложкой. Для коктейлей, где не нужна аэрация." },
    { question: "Какой объём у молочного улуна в заварнике?", options: ["800 мл", "500 мл", "350 мл"], correct: 0, joke: "800 мл. Стандартная чайная порция." },
    { question: "Что означает «выжимаем по заказу — максимум витаминов» для соков?", options: ["Свежевыжатый сок", "Концентрированный", "Пастеризованный"], correct: 0, joke: "Фреш." },
    { question: "Какую водку рекламируют как «солодовый спирт Альфа, очень мягкая»?", options: ["Niki Pure", "Царская Золотая", "Арктика"], correct: 0, joke: "Niki Pure — премиум." },
    { question: "Что такое «кордиал» в рецептуре коктейлей?", options: ["Кисло-сладкий сироп", "Сок", "Горькая настойка"], correct: 0, joke: "Кордиал — сироп на основе молочной кислоты и фруктозы, используется во многих коктейлях (например, «Базиликовый джин»)." },
    { question: "Что такое «хард-шейк»?", options: ["Интенсивное взбивание со льдом", "Обычное взбалтывание", "Сухой шейк без льда"], correct: 0, joke: "Хард-шейк — когда шейкер сильно трясут, чтобы напиток охладился и насытился пузырьками." },
    { question: "Зачем официанту знать сторителлинг?", options: ["Продавать напитки интереснее", "Чтобы занять гостя", "По приказу шефа"], correct: 0, joke: "Правильно, продажи растут, когда ты увлечённо рассказываешь про напиток." }
];

let quizRendered = false;

function renderQuiz() {
    if (quizRendered) return;
    const container = document.getElementById('quizQuestions');
    if (!container) return;
    let html = '';
    quizData.forEach((q, idx) => {
        html += `
            <div class="question" data-qidx="${idx}">
                <p>${idx+1}. ${escapeHtml(q.question)}</p>
                <div class="options">
                    ${q.options.map((opt, optIdx) => `
                        <label>
                            <input type="radio" name="q${idx}" value="${optIdx}">
                            ${escapeHtml(opt)}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    quizRendered = true;
}

document.getElementById('submitQuiz')?.addEventListener('click', () => {
    let score = 0;
    for (let i = 0; i < quizData.length; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === quizData[i].correct) {
            score++;
        }
    }
    const percent = Math.round((score / quizData.length) * 100);
    let message = '';
    if (percent === 100) message = '🎉 Идеально! Шеф плачет от счастья. Ты — легенда бара!';
    else if (percent >= 80) message = '👍 Отлично! Но пару раз ты ошибся. Перечитай пособие, будет полезно.';
    else if (percent >= 60) message = '🤔 Неплохо, но есть пробелы. Загляни в карточки напитков ещё раз.';
    else message = '😱 Ой-ой! Похоже, ты вообще не учил. Бегом читать барную карту!';
    document.getElementById('quizResult').innerHTML = `Твой результат: ${score} из ${quizData.length} (${percent}%). ${message}`;
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    if (typeof BAR_MENU === 'undefined') {
        console.error('BAR_MENU не загружен');
        document.getElementById('menuGrid').innerHTML = '<p style="color:red;">Ошибка загрузки данных. Проверьте full_menu.js</p>';
        return;
    }
    renderCategories();
    // По умолчанию показываем первую категорию (минеральная вода)
    const firstCat = Object.keys(categories)[0];
    const defaultItems = BAR_MENU.filter(item => item.category === firstCat);
    renderMenu(defaultItems);
    const firstBtn = document.querySelector('.cat-btn');
    if (firstBtn) firstBtn.classList.add('active');
    // Тест подгрузится при переключении на вкладку
});
