// full_menu.js – барная карта с полным сторителлингом
// Версия 3.0. Все разделы из таблицы, продажные цены из меню, скрипты из пособия.

const BAR_MENU = [
    // ========== МИНЕРАЛЬНАЯ ВОДА ==========
    { id: 1, name: "Байкал газ.", volume: "530 мл", price: 0, category: "mineral_water", shortDesc: "Мягкая столовая вода", fullDesc: "Байкал газированная. Подаётся в охлаждённом хайболе, открывается при госте.", story: "«Мягкая столовая вода — отлично утоляет жажду».", tags: ["вода"], allergens: [] },
    { id: 2, name: "Байкал не газ.", volume: "530 мл", price: 0, category: "mineral_water", shortDesc: "Негазированная", fullDesc: "Байкал негазированная. Подаётся в охлаждённом хайболе.", story: "«Негазированная — для тех, кто не любит пузырьки».", tags: ["вода"], allergens: [] },
    { id: 3, name: "Недра газ.", volume: "750 мл", price: 0, category: "mineral_water", shortDesc: "Премиальная российская вода", fullDesc: "Недра газированная. Добывается в Новгородской области.", story: "«Премиальная российская вода из Новгородской области».", tags: ["вода"], allergens: [] },
    { id: 4, name: "Недра не газ.", volume: "750 мл", price: 0, category: "mineral_water", shortDesc: "Негазированная", fullDesc: "Недра негазированная. Мягкий вкус.", story: "«Негазированная премиум-вода».", tags: ["вода"], allergens: [] },
    { id: 5, name: "Боржоми", volume: "500 мл", price: 0, category: "mineral_water", shortDesc: "Легендарная грузинская вода", fullDesc: "Боржоми, стекло. Помогает пищеварению.", story: "«Легендарная грузинская вода, помогает пищеварению».", tags: ["вода"], allergens: [] },

    // ========== БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ (соки, газировка, морсы, квас, медовуха) ==========
    { id: 6, name: "Сок ВИЗ апельсин", volume: "0.2 л", price: 0, category: "soft_drinks", shortDesc: "Апельсиновый сок", fullDesc: "Сок ВИЗ апельсиновый. Пастеризованный. Подаётся в хайболе с трубочкой.", story: "«Классический апельсиновый сок — любимый с детства».", tags: ["сок"], allergens: [] },
    { id: 7, name: "Сок ВИЗ яблоко", volume: "0.2 л", price: 0, category: "soft_drinks", shortDesc: "Яблочный сок", fullDesc: "Сок ВИЗ яблочный. Прямой отжим.", story: "«Прямой отжим — максимум пользы».", tags: ["сок"], allergens: [] },
    { id: 8, name: "Сок ВИЗ томат", volume: "0.2 л", price: 0, category: "soft_drinks", shortDesc: "Томатный сок", fullDesc: "Сок ВИЗ томатный. Подаётся с солью/перцем по желанию.", story: "«Отлично утоляет жажду и подходит для кровавой Мэри».", tags: ["сок"], allergens: [] },
    { id: 9, name: "Сок ВИЗ вишня", volume: "0.2 л", price: 0, category: "soft_drinks", shortDesc: "Вишнёвый сок", fullDesc: "Сок ВИЗ вишнёвый.", story: "«Вишнёвый сок — кисло-сладкий, как лето».", tags: ["сок"], allergens: [] },
    { id: 10, name: "Свежевыжатый апельсин", volume: "0.2 л", price: 0, category: "fresh_juices", shortDesc: "Фреш из апельсина", fullDesc: "Свежевыжатый апельсиновый сок.", story: "«Выжимаем по заказу — максимум витаминов».", tags: ["фреш"], allergens: [] },
    { id: 11, name: "Свежевыжатый грейпфрут", volume: "0.2 л", price: 0, category: "fresh_juices", shortDesc: "Фреш из грейпфрута", fullDesc: "Свежевыжатый грейпфрутовый сок.", story: "«Лёгкая горчинка для бодрого утра».", tags: ["фреш"], allergens: [] },
    { id: 12, name: "Свежевыжатое яблоко", volume: "0.2 л", price: 0, category: "fresh_juices", shortDesc: "Яблочный фреш", fullDesc: "Свежевыжатый яблочный сок.", story: "«Натуральный яблочный сок без сахара».", tags: ["фреш"], allergens: [] },
    { id: 13, name: "Свежевыжатая морковь", volume: "0.2 л", price: 0, category: "fresh_juices", shortDesc: "Морковный фреш", fullDesc: "Свежевыжатый морковный сок.", story: "«Полезно для глаз и иммунитета».", tags: ["фреш"], allergens: [] },
    { id: 14, name: "Кока-Кола", volume: "0.25 л", price: 0, category: "soft_drinks", shortDesc: "Классическая газировка", fullDesc: "Coca-Cola. Подаётся в охлаждённом хайболе.", story: "«Вечная классика — освежает в любую погоду».", tags: ["газировка"], allergens: [] },
    { id: 15, name: "Фанта", volume: "0.25 л", price: 0, category: "soft_drinks", shortDesc: "Апельсиновая газировка", fullDesc: "Fanta апельсин.", story: "«Солнечный вкус апельсина».", tags: ["газировка"], allergens: [] },
    { id: 16, name: "Спрайт", volume: "0.25 л", price: 0, category: "soft_drinks", shortDesc: "Лимонно-лаймовая газировка", fullDesc: "Sprite.", story: "«Лимонно-лаймовая свежесть».", tags: ["газировка"], allergens: [] },
    { id: 17, name: "Тоник классический", volume: "0.25 л", price: 0, category: "tonic", shortDesc: "Хинный тоник", fullDesc: "Индиан тоник. Подаётся охлаждённым.", story: "«Идеально к джину».", tags: ["тоник"], allergens: [] },
    { id: 18, name: "Тоник имбирный", volume: "0.25 л", price: 0, category: "tonic", shortDesc: "Имбирный эль", fullDesc: "The Gardenist Имбирный эль. Пикантный, жгучий.", story: "«Пикантный, жгучий. Идеально к джину».", tags: ["тоник"], allergens: [] },
    { id: 19, name: "Морс смородина", volume: "0.25 л", price: 0, category: "mors", shortDesc: "Домашний морс из чёрной смородины", fullDesc: "Морс смородиновый. Состав: ягоды, сахар, вода.", story: "«Домашний морс из настоящих ягод».", tags: ["морс"], allergens: [] },
    { id: 20, name: "Морс клюква", volume: "0.25 л", price: 0, category: "mors", shortDesc: "Клюквенный морс", fullDesc: "Морс клюквенный.", story: "«Клюква — природный антиоксидант».", tags: ["морс"], allergens: [] },
    { id: 21, name: "Морс облепиха", volume: "0.25 л", price: 0, category: "mors", shortDesc: "Облепиховый морс", fullDesc: "Морс облепиховый.", story: "«Витаминная бомба».", tags: ["морс"], allergens: [] },
    { id: 22, name: "Квас домашний", volume: "0.25 л", price: 0, category: "kvass", shortDesc: "Живой, нефильтрованный", fullDesc: "Квас домашний на сусле. Состав: вода, сусло (ячмень), сахар, дрожжи, изюм.", story: "«Наш квас — живой, нефильтрованный, с хлебным ароматом».", tags: ["квас"], allergens: ["глютен"] },
    { id: 23, name: "Квас домашний вишнёвый", volume: "0.25 л", price: 0, category: "kvass", shortDesc: "Квас с вишней", fullDesc: "Квас вишнёвый. Состав: сусло, вишня, сахар, дрожжи.", story: "«Тот же квас с вишней — чуть слаще».", tags: ["квас"], allergens: ["глютен"] },
    { id: 24, name: "Медовуха", volume: "0.25 л", price: 0, category: "mead", shortDesc: "Старинный напиток на мёду", fullDesc: "Медовуха домашняя. Состав: мёд, дрожжи, изюм, вода.", story: "«Старинный напиток на мёду — пьётся легко».", tags: ["медовуха"], allergens: ["мёд"] },

    // ========== ДОМАШНИЕ ЛИМОНАДЫ (цены из меню 460 руб.) ==========
    { id: 25, name: "Райхон", volume: "300 мл", price: 460, category: "lemonades", shortDesc: "Фиолетовый базилик", fullDesc: "Лимонад «Райхон». Состав: настой фиолетового базилика, сахар, лимонная кислота, газировка.", story: "«С ароматом свежего базилика» — очень фотогеничный.", tags: ["лимонад"], allergens: [] },
    { id: 26, name: "Тархун", volume: "300 мл", price: 460, category: "lemonades", shortDesc: "Эстрагон, лайм", fullDesc: "Лимонад «Тархун». Состав: экстракт эстрагона, лимон, лайм, сахар, газировка.", story: "«Натуральный тархун — вкус из детства».", tags: ["лимонад"], allergens: [] },
    { id: 27, name: "Мандариновый", volume: "300 мл", price: 460, category: "lemonades", shortDesc: "Мандарин, юдзу", fullDesc: "Лимонад «Мандариновый». Состав: пюре мандаринов, юдзу, фруктозный сироп, газировка, мармеладные шарики.", story: "«Солнечный, с кислинкой юдзу».", tags: ["лимонад"], allergens: [] },
    { id: 28, name: "Имбирь мёд лимон", volume: "300 мл", price: 460, category: "lemonades", shortDesc: "Имбирный с мёдом", fullDesc: "Лимонад «Имбирь, мёд, лимон». Состав: имбирный сок, мёд, лайм, газировка.", story: "«Имбирный лимонад с мёдом — согревает».", tags: ["лимонад"], allergens: ["мёд"] },
    { id: 29, name: "Смородина иван-чай", volume: "300 мл", price: 460, category: "lemonades", shortDesc: "Чёрная смородина, иван-чай", fullDesc: "Лимонад «Смородина иван-чай». Состав: пюре чёрной смородины, отвар иван-чая, газировка, свежие ягоды.", story: "«Таёжный вкус: ягоды + травы».", tags: ["лимонад"], allergens: [] },
    { id: 30, name: "Манго маракуйя кокос", volume: "300 мл", price: 460, category: "lemonades", shortDesc: "Тропический микс", fullDesc: "Лимонад «Манго маракуйя кокос». Состав: пюре манго, маракуйя, кокосовое молоко, газировка, мармеладные шарики.", story: "«Тропический взрыв — самый популярный».", tags: ["лимонад"], allergens: ["кокос"] },
    { id: 31, name: "Огурец и мята", volume: "300 мл", price: 460, category: "lemonades", shortDesc: "Огурец, мята, лайм", fullDesc: "Лимонад «Огурец и мята». Состав: огуречный сок, мята, лайм, газировка.", story: "«Лёгкий, как глоток родниковой воды».", tags: ["лимонад"], allergens: [] },
    { id: 32, name: "Лимонад в графине", volume: "800 мл", price: 0, category: "lemonades", shortDesc: "На компанию", fullDesc: "Лимонад в графине (800 мл). Любой вкус на выбор.", story: "«На компанию выгоднее графин».", tags: ["лимонад"], allergens: [] },

    // ========== СМУЗИ / МИЛКШЕЙКИ (цены из меню) ==========
    { id: 33, name: "Смузи манговый урбеч", volume: "290 мл", price: 460, category: "smoothies", shortDesc: "Манго, банан, урбеч, мёд", fullDesc: "Смузи «Манговый урбеч». Состав: манго, банан, урбеч из тыквенных семечек, мёд, кокосовое молоко.", story: "«Полезный заряд энергии».", tags: ["смузи"], allergens: ["мёд", "кокос", "семечки"] },
    { id: 34, name: "Смузи яблоко банан", volume: "290 мл", price: 380, category: "smoothies", shortDesc: "Яблоко, банан, мёд", fullDesc: "Смузи «Яблоко банан». Состав: яблоко, банан, мёд, зелёные мармеладные шарики.", story: "«Банановая нежность и яблочная свежесть».", tags: ["смузи"], allergens: ["мёд"] },
    { id: 35, name: "Молочный коктейль ванильный", volume: "290 мл", price: 360, category: "milkshakes", shortDesc: "Мороженое, молоко, банан", fullDesc: "Милкшейк ванильный. Состав: мороженое пломбир, молоко, ванильный сироп, взбитые сливки, банан.", story: "«Нежный, воздушный».", tags: ["милкшейк"], allergens: ["молоко"] },
    { id: 36, name: "Молочный коктейль ягодный", volume: "290 мл", price: 370, category: "milkshakes", shortDesc: "Ягодный микс", fullDesc: "Милкшейк ягодный. Состав: мороженое, молоко, ягодный топпинг, банан.", story: "«Ягодный микс».", tags: ["милкшейк"], allergens: ["молоко"] },
    { id: 37, name: "Молочный коктейль шоколадный", volume: "290 мл", price: 400, category: "milkshakes", shortDesc: "Шоколад, орехи, банан", fullDesc: "Милкшейк шоколадный. Состав: мороженое, молоко, шоколадный топпинг, банан, ореховый сироп.", story: "«Шоколадно-ореховое удовольствие».", tags: ["милкшейк"], allergens: ["молоко", "орехи"] },
    { id: 38, name: "Айс латте банан карамель", volume: "290 мл", price: 370, category: "coffee", shortDesc: "Кофе с бананом и карамелью", fullDesc: "Айс латте банан карамель. Состав: эспрессо, молоко, банановый сироп, карамель, взбитые сливки, лёд.", story: "«Кофе с бананом и карамелью — десерт в стакане».", tags: ["кофе"], allergens: ["молоко"] },

    // ========== ВЗВАРЫ (цены из меню 650 руб.) ==========
    { id: 39, name: "Мандарин белый кардамон", volume: "500 мл", price: 650, category: "herbal_tea", shortDesc: "Пряный, согревающий", fullDesc: "Взвар «Мандарин белый кардамон». Состав: мандариновый сок, цедра, кардамон, кипяток.", story: "«Пряный, согревающий».", tags: ["взвар"], allergens: [] },
    { id: 40, name: "Яблоко корица османтус", volume: "500 мл", price: 650, category: "herbal_tea", shortDesc: "Аромат яблочного пирога", fullDesc: "Взвар «Яблоко корица османтус». Состав: яблоко, корица, чай османтус, мёд, кипяток.", story: "«Аромат яблочного пирога».", tags: ["взвар"], allergens: ["мёд"] },
    { id: 41, name: "Смородина иван-чай", volume: "500 мл", price: 650, category: "herbal_tea", shortDesc: "Ягодно-травяной", fullDesc: "Взвар «Смородина иван-чай». Состав: пюре чёрной смородины, лимон, иван-чай, мята, кипяток.", story: "«Ягодно-травяной».", tags: ["взвар"], allergens: [] },
    { id: 42, name: "Груша имбирь мёд", volume: "500 мл", price: 650, category: "herbal_tea", shortDesc: "Имбирно-грушевый", fullDesc: "Взвар «Груша имбирь мёд». Состав: груша, имбирь, лайм, мята, мёд, кипяток.", story: "«Имбирно-грушевый согревающий».", tags: ["взвар"], allergens: ["мёд"] },
    { id: 43, name: "Облепиха корица", volume: "500 мл", price: 650, category: "herbal_tea", shortDesc: "Витаминная бомба", fullDesc: "Взвар «Облепиха корица». Состав: облепиха, корица, ванильный сироп, лимон, кипяток.", story: "«Витаминная бомба».", tags: ["взвар"], allergens: [] },
    { id: 44, name: "Глинтвейн безалкогольный", volume: "500 мл", price: 650, category: "herbal_tea", shortDesc: "Пряная альтернатива кофе", fullDesc: "Взвар «Глинтвейн безалкогольный». Состав: пряный сироп на виноградном соке, корица, апельсин, яблоко, кипяток.", story: "«Пряная альтернатива кофе».", tags: ["взвар"], allergens: [] },

    // ========== ЧАЙ КЛАССИЧЕСКИЙ И ТРАВЯНОЙ ==========
    { id: 45, name: "Чай Ассам", volume: "800 мл", price: 600, category: "black_tea", shortDesc: "Крепкий, медовый", fullDesc: "Чай Ассам чёрный.", story: "«Крепкий, медовый вкус».", tags: ["чай"], allergens: [] },
    { id: 46, name: "Чай Эрл Грей", volume: "800 мл", price: 600, category: "black_tea", shortDesc: "Чёрный с бергамотом", fullDesc: "Чай Эрл Грей.", story: "«Бергамот придаёт изысканный аромат».", tags: ["чай"], allergens: [] },
    { id: 47, name: "Чай Сенча", volume: "800 мл", price: 600, category: "green_tea", shortDesc: "Зелёный чай", fullDesc: "Чай Сенча.", story: "«Травянистый, с горчинкой».", tags: ["чай"], allergens: [] },
    { id: 48, name: "Молочный Улун", volume: "800 мл", price: 600, category: "oolong_tea", shortDesc: "Зелёный улун со сливочным ароматом", fullDesc: "Молочный улун.", story: "«Молочный улун — наш бестселлер, у него кремовый вкус».", tags: ["чай"], allergens: [] },
    { id: 49, name: "Полевой сбор алтайских трав", volume: "800 мл", price: 600, category: "herbal_tea", shortDesc: "Успокаивающий", fullDesc: "Иван-чай, таволга, лист берёзы, эхинацея, душица.", story: "«Успокаивающий сбор для вечернего отдыха».", tags: ["травяной"], allergens: [] },
    { id: 50, name: "Таёжный сбор с молодыми шишками", volume: "800 мл", price: 600, category: "herbal_tea", shortDesc: "Согревающий, смолистый", fullDesc: "Иван-чай, душица, кедровая хвоя, шиповник, шишки.", story: "«Согревающий, смолистый — аромат сибирского леса».", tags: ["травяной"], allergens: [] },
    { id: 51, name: "Горный сбор кавказских трав", volume: "800 мл", price: 600, category: "herbal_tea", shortDesc: "Тонизирующий", fullDesc: "Чабрец, зверобой, душица, мята.", story: "«Тонизирующий кавказский чай».", tags: ["травяной"], allergens: [] },
    { id: 52, name: "Иван-чай", volume: "800 мл", price: 600, category: "herbal_tea", shortDesc: "Мягкий, слегка сладковатый", fullDesc: "Кипрей.", story: "«Мягкий, слегка сладковатый».", tags: ["травяной"], allergens: [] },
    { id: 53, name: "Саган-дайля (шаманский чай)", volume: "800 мл", price: 600, category: "herbal_tea", shortDesc: "Бодрит сильнее кофе", fullDesc: "Рододендрон Адамса.", story: "«Саган-дайля — шаманский чай из Бурятии. Бодрит, но давление не скачет».", tags: ["травяной"], allergens: [] },
    { id: 54, name: "Ромашка с мятой", volume: "800 мл", price: 600, category: "herbal_tea", shortDesc: "Спокойный, успокаивающий", fullDesc: "Цветки ромашки + листья мяты.", story: "«Спальный, успокаивающий».", tags: ["травяной"], allergens: [] },
    { id: 55, name: "Липовый с османтусом и апельсином", volume: "800 мл", price: 600, category: "herbal_tea", shortDesc: "Медово-цитрусовый", fullDesc: "Липа, османтус, цедра апельсина.", story: "«Медово-цитрусовый аромат».", tags: ["травяной"], allergens: [] },

    // Добавки к чаю
    { id: 56, name: "Мята (добавка)", volume: "10 г", price: 160, category: "tea_addons", shortDesc: "Свежая мята", fullDesc: "Добавка к чаю.", story: "«Освежает и успокаивает».", tags: ["добавка"], allergens: [] },
    { id: 57, name: "Чабрец (добавка)", volume: "10 г", price: 160, category: "tea_addons", shortDesc: "Тимьян", fullDesc: "Добавка к чаю.", story: "«Пряный аромат чабреца».", tags: ["добавка"], allergens: [] },
    { id: 58, name: "Липа (добавка)", volume: "10 г", price: 160, category: "tea_addons", shortDesc: "Цветки липы", fullDesc: "Добавка к чаю.", story: "«Липовый цвет — мягкое тепло».", tags: ["добавка"], allergens: [] },
    { id: 59, name: "Корень имбиря (добавка)", volume: "10 г", price: 160, category: "tea_addons", shortDesc: "Свежий имбирь", fullDesc: "Добавка к чаю.", story: "«Имбирь согревает и бодрит».", tags: ["добавка"], allergens: [] },
    { id: 60, name: "Лимон (добавка)", volume: "10 г", price: 160, category: "tea_addons", shortDesc: "Долька лимона", fullDesc: "Добавка к чаю.", story: "«Кислинка лимона».", tags: ["добавка"], allergens: [] },
    { id: 61, name: "Мёд (добавка)", volume: "10 г", price: 160, category: "tea_addons", shortDesc: "Натуральный мёд", fullDesc: "Добавка к чаю.", story: "«Натуральный мёд — природная сладость».", tags: ["добавка"], allergens: ["мёд"] },

    // ========== КОФЕ (цены из меню) ==========
    { id: 62, name: "Эспрессо", volume: "30 мл", price: 300, category: "coffee", shortDesc: "Классический эспрессо", fullDesc: "Эспрессо на 100% арабике (Lavazza Tierra).", story: "«Классический ритуал — с бокалом воды».", tags: ["кофе"], allergens: [] },
    { id: 63, name: "Двойной эспрессо", volume: "60 мл", price: 350, category: "coffee", shortDesc: "Двойная порция", fullDesc: "Двойной эспрессо (16 г кофе).", story: "«Для настоящих кофеманов».", tags: ["кофе"], allergens: [] },
    { id: 64, name: "Американо", volume: "200 мл", price: 300, category: "coffee", shortDesc: "Эспрессо + вода", fullDesc: "Американо: эспрессо + 170 мл воды.", story: "«Лёгкий и ароматный».", tags: ["кофе"], allergens: [] },
    { id: 65, name: "Капучино", volume: "200 мл", price: 360, category: "coffee", shortDesc: "С молочной пеной", fullDesc: "Капучино: эспрессо + взбитое молоко.", story: "«Плотная пенка и насыщенный вкус».", tags: ["кофе"], allergens: ["молоко"] },
    { id: 66, name: "Двойной капучино", volume: "350 мл", price: 400, category: "coffee", shortDesc: "Увеличенная порция", fullDesc: "Двойной капучино: двойной эспрессо + 350 мл молока.", story: "«Большая порция для долгого удовольствия».", tags: ["кофе"], allergens: ["молоко"] },
    { id: 67, name: "Латте макиато", volume: "350 мл", price: 370, category: "coffee", shortDesc: "Слоёный кофе с молоком", fullDesc: "Латте макиато: молоко, затем эспрессо.", story: "«Красивая слоистая текстура».", tags: ["кофе"], allergens: ["молоко"] },
    { id: 68, name: "Раф с карамелью", volume: "350 мл", price: 460, category: "coffee", shortDesc: "Кофе со сливками и карамелью", fullDesc: "Раф с карамелью: эспрессо, молоко, сливки, карамельный сироп.", story: "«Нежная карамельная нотка».", tags: ["кофе"], allergens: ["молоко", "сливки"] },
    { id: 69, name: "Флэт уайт", volume: "200 мл", price: 360, category: "coffee", shortDesc: "Двойной эспрессо с микропеной", fullDesc: "Флэт уайт: двойной эспрессо + тонкий слой микропены.", story: "«Австралийская классика».", tags: ["кофе"], allergens: ["молоко"] },
    { id: 70, name: "Капучино на альтернативном молоке", volume: "200 мл", price: 450, category: "coffee", shortDesc: "На кокосовом, миндальном или банановом", fullDesc: "Капучино на альтернативном молоке.", story: "«У нас есть кокосовое, миндальное и банановое молоко — для тех, кто не пьёт обычное».", tags: ["кофе"], allergens: ["кокос", "орехи"] },
    { id: 71, name: "Латте на альтернативном молоке", volume: "350 мл", price: 450, category: "coffee", shortDesc: "На кокосовом, миндальном или банановом", fullDesc: "Латте на альтернативном молоке.", story: "«Нежный и полезный».", tags: ["кофе"], allergens: ["кокос", "орехи"] },
    { id: 72, name: "Матча латте", volume: "350 мл", price: 600, category: "coffee", shortDesc: "Чай матча с молоком", fullDesc: "Матча латте: порошок матча, кипяток, взбитое молоко.", story: "«Японский антиоксидантный напиток».", tags: ["матча"], allergens: ["молоко"] },
    { id: 73, name: "Какао с маршмеллоу", volume: "270 мл", price: 600, category: "coffee", shortDesc: "Горячее какао с зефиром", fullDesc: "Какао с маршмеллоу.", story: "«Детство в чашке — горячий шоколад с зефиром».", tags: ["какао"], allergens: ["молоко"] },
    { id: 74, name: "Сироп в ассортименте", volume: "10 мл", price: 120, category: "coffee_addons", shortDesc: "Добавка в кофе", fullDesc: "Сироп на выбор: ваниль, карамель, лесной орех, кокос.", story: "«Персонализируйте свой кофе».", tags: ["добавка"], allergens: [] },

    // ========== ПИВО И СИДР (цены не указаны в меню, ставим 0) ==========
    { id: 75, name: "Перони Настро Адзурро", volume: "330 мл", price: 0, category: "beer", shortDesc: "Итальянский пилснер", fullDesc: "Peroni Nastro Azzurro.", story: "«Итальянский стиль — лёгкий и освежающий».", tags: ["пиво"], allergens: ["глютен"] },
    { id: 76, name: "Аингер Байриш Пилс", volume: "500 мл", price: 0, category: "beer", shortDesc: "Немецкий пилс", fullDesc: "Ayinger Bayerisch Pils.", story: "«Немецкая чистота и хмелевая горечь».", tags: ["пиво"], allergens: ["глютен"] },
    { id: 77, name: "Корона Экстра", volume: "355 мл", price: 0, category: "beer", shortDesc: "С лаймом", fullDesc: "Corona Extra.", story: "«Подаётся с лаймом — мексиканская классика».", tags: ["пиво"], allergens: ["глютен"] },
    { id: 78, name: "Циндао Витбир", volume: "330 мл", price: 0, category: "beer", shortDesc: "Пшеничное нефильтрованное", fullDesc: "Циндао Витбир.", story: "«Китайское пшеничное — мягкое и ароматное».", tags: ["пиво"], allergens: ["глютен"] },
    { id: 79, name: "Клаусталер б/а", volume: "330 мл", price: 0, category: "beer", shortDesc: "Безалкогольное", fullDesc: "Clausthaler.", story: "«Безалкогольное, но со вкусом настоящего пива».", tags: ["пиво"], allergens: ["глютен"] },
    { id: 80, name: "Раденберг", volume: "330 мл", price: 0, category: "beer", shortDesc: "Немецкий пилснер", fullDesc: "Radeberger Pilsner.", story: "«Классический немецкий пилс».", tags: ["пиво"], allergens: ["глютен"] },
    { id: 81, name: "Сидр Дальняя Дача сухой", volume: "330 мл", price: 0, category: "cider", shortDesc: "Яблочный сухой", fullDesc: "Сидр сухой.", story: "«Сухой, бодрящий яблочный сидр».", tags: ["сидр"], allergens: ["сульфиты"] },
    { id: 82, name: "Сидр Дальняя Дача полусухой", volume: "330 мл", price: 0, category: "cider", shortDesc: "Яблочный полусухой", fullDesc: "Сидр полусухой.", story: "«Баланс сладости и кислинки».", tags: ["сидр"], allergens: ["сульфиты"] },
    { id: 83, name: "Бланш Де Брюселль", volume: "300 мл", price: 0, category: "draft_beer", shortDesc: "Пшеничное разливное", fullDesc: "Blanche de Bruxelles 0.3.", story: "«Бельгийское пшеничное — освежает».", tags: ["пиво"], allergens: ["глютен"] },
    { id: 84, name: "Бланш Де Брюселль", volume: "500 мл", price: 0, category: "draft_beer", shortDesc: "Пшеничное разливное", fullDesc: "Blanche de Bruxelles 0.5.", story: "«Та же свежесть, но большая порция».", tags: ["пиво"], allergens: ["глютен"] },
    { id: 85, name: "Штигль Гольдбрау", volume: "300 мл", price: 0, category: "draft_beer", shortDesc: "Светлый лагер", fullDesc: "Stiegl Goldbräu 0.3.", story: "«Австрийский лагер — золотистый и хмельной».", tags: ["пиво"], allergens: ["глютен"] },
    { id: 86, name: "Штигль Гольдбрау", volume: "500 мл", price: 0, category: "draft_beer", shortDesc: "Светлый лагер", fullDesc: "Stiegl Goldbräu 0.5.", story: "«Большая кружка для большой компании».", tags: ["пиво"], allergens: ["глютен"] },

    // ========== КОКТЕЙЛИ (составы из ТТК и пособия, полный сторителлинг) ==========
    { id: 87, name: "Сарти спритц", volume: "200 мл", price: 0, category: "cocktails", shortDesc: "Аперитив с ликёром", fullDesc: "Состав: ликёр Дорагросса Аперитиво, вермут, клубничный ликёр.", story: "«Венецианский аперитив с ягодными нотами».", tags: ["коктейль"], allergens: [] },
    { id: 88, name: "Кампари спритц", volume: "200 мл", price: 0, category: "cocktails", shortDesc: "Горький аперитив", fullDesc: "Кампари, игристое вино, содовая, апельсин.", story: "«Тот самый красный аперитив — горьковато-сладкий».", tags: ["коктейль"], allergens: ["сульфиты"] },
    { id: 89, name: "Лавандовый джин-тоник", volume: "250 мл", price: 0, category: "cocktails", shortDesc: "Фиолетовый, ароматный", fullDesc: "Джин, лавандовый сироп, тоник, джусболы.", story: "«Самый красивый коктейль в нашем меню — фиолетовое облако».", tags: ["коктейль"], allergens: [] },
    { id: 90, name: "Дайкири банан", volume: "200 мл", price: 0, category: "cocktails", shortDesc: "Кисло-сладкий с бананом", fullDesc: "Ром, банановый сироп, лайм, свежий банан, карамелизованный банан.", story: "«Кисло-сладкий сбалансированный коктейль с поджаренным бананом».", tags: ["коктейль"], allergens: [] },
    { id: 91, name: "Гранат смородина розовый брют", volume: "200 мл", price: 0, category: "cocktails", shortDesc: "Ягодное игристое", fullDesc: "Гранатовый и смородиновый сок, розовое игристое.", story: "«Ягодное игристое с зернами граната».", tags: ["коктейль"], allergens: ["сульфиты"] },
    { id: 92, name: "Апероль спритц", volume: "200 мл", price: 0, category: "cocktails", shortDesc: "Апельсиновый аперитив", fullDesc: "Апероль, игристое вино, содовая, апельсин.", story: "«Венецианский аперитив — горьковато-апельсиновый с пузырьками».", tags: ["коктейль"], allergens: ["сульфиты"] },
    { id: 93, name: "Абрикосовый сауэр", volume: "200 мл", price: 0, category: "cocktails", shortDesc: "Кисло-сладкий с пеной", fullDesc: "Абрикосовый ликёр, водка, лимон, яичный белок, персик.", story: "«Кисло-сладкий с пеной. Без трубочки».", tags: ["коктейль"], allergens: ["яйцо"] },
    { id: 94, name: "Огурец женевер лайм", volume: "250 мл", price: 0, category: "cocktails", shortDesc: "Можжевеловый огурец", fullDesc: "Джин Боббис Схидам, огуречный лимонад, огурец, мята.", story: "«Свежий как огурец, пряный как можжевельник».", tags: ["коктейль"], allergens: [] },
    { id: 95, name: "Базиликовый джин", volume: "250 мл", price: 0, category: "cocktails", shortDesc: "Очень зелёный, свежий", fullDesc: "Джин, молочно-кислый кордиал, свежий базилик.", story: "«Очень зелёный, свежий — буквально куст базилика в стакане».", tags: ["коктейль"], allergens: [] },
    { id: 96, name: "Берёзовый виски коллинз", volume: "300 мл", price: 0, category: "cocktails", shortDesc: "Наша гордость", fullDesc: "Бурбон, сироп берёза-душица-квас, розмарин, содовая.", story: "«На берёзовом соке — наша гордость. Необычно и очень по-русски».", tags: ["коктейль"], allergens: [] },
    { id: 97, name: "Негрони", volume: "100 мл", price: 0, category: "cocktails", shortDesc: "Для ценителей горького", fullDesc: "Джин, Кампари, красный вермут.", story: "«Для ценителей горького баланса — джин, Кампари, вермут».", tags: ["коктейль"], allergens: ["сульфиты"] },
    { id: 98, name: "Манго маракуйя", volume: "200 мл", price: 0, category: "cocktails", shortDesc: "Тропический сауэр", fullDesc: "Пюре манго и маракуйи, лайм, яичный белок, свежая маракуйя.", story: "«Тропический сауэр — взрыв вкуса».", tags: ["коктейль"], allergens: ["яйцо"] },
    { id: 99, name: "Смородиновый мул", volume: "300 мл", price: 0, category: "cocktails", shortDesc: "Русский Moscow Mule", fullDesc: "Настойка чёрной смородины, имбирный эль, лайм, ягоды, мята.", story: "«Русский Moscow Mule — смородина + имбирный эль».", tags: ["коктейль"], allergens: [] },
    { id: 100, name: "Киви крыжовник смэш", volume: "200 мл", price: 0, category: "cocktails", shortDesc: "Кисло-зелёный с матча", fullDesc: "Крыжовник, киви, лайм, яичный белок, матча.", story: "«Кисло-зелёный с матча — свежий и терпкий».", tags: ["коктейль"], allergens: ["яйцо"] },

    // ========== АВТОРСКИЕ НАСТОЙКИ ==========
    { id: 101, name: "Северная морошка", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Яркий ягодный вкус", fullDesc: "Настойка на водке с морошкой.", story: "«Северная ягода — кисло-сладкая, как полярное лето».", tags: ["настойка"], allergens: [] },
    { id: 102, name: "Сливянка", volume: "50 мл", price: 0, category: "infusions", shortDesc: "На тёмном роме, слива", fullDesc: "Ром, слива, кизил, пряности.", story: "«Кисло-сладкая, согревающая».", tags: ["настойка"], allergens: [] },
    { id: 103, name: "Гранатовая", volume: "50 мл", price: 0, category: "infusions", shortDesc: "На водке, гранат", fullDesc: "Водка, гранат, наршараб, вермут.", story: "«Яркая, терпкая, как гранатовый сок».", tags: ["настойка"], allergens: [] },
    { id: 104, name: "Жимолость", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Лесная ягода", fullDesc: "Водка, жимолость, ликёр фиалка, вермут.", story: "«Нежная лесная жимолость с цветочным оттенком».", tags: ["настойка"], allergens: [] },
    { id: 105, name: "Пряная груша", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Груша, корица, гвоздика", fullDesc: "Водка, груша, корица, гвоздика.", story: "«Сладкая, пряная — как глинтвейн без вина».", tags: ["настойка"], allergens: [] },
    { id: 106, name: "Малина тархун", volume: "50 мл", price: 0, category: "infusions", shortDesc: "На роме, малина, эстрагон", fullDesc: "Ром, малина, тархун, каркаде.", story: "«Фруктово-травяная — малина и тархун».", tags: ["настойка"], allergens: [] },
    { id: 107, name: "Грейпфрут и роза", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Цитрус и цветы", fullDesc: "Водка, грейпфрут, бутоны роз, каркаде.", story: "«Цитрусово-розовый аромат — для романтиков».", tags: ["настойка"], allergens: [] },
    { id: 108, name: "Лимончелло", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Цитрусовая свежесть", fullDesc: "Водка, лимонная цедра, ванильный сироп.", story: "«Освежающая цитрусовая — итальянский шарм».", tags: ["настойка"], allergens: [] },
    { id: 109, name: "Клюквенная", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Клюква на водке", fullDesc: "Водка, клюква, чернослив, вермут.", story: "«Тартовая клюква с лёгкой сладостью».", tags: ["настойка"], allergens: [] },
    { id: 110, name: "Сезонный крыжовник", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Крыжовник на водке", fullDesc: "Водка, крыжовник, кордиал.", story: "«Кисло-сладкий крыжовник — лето в рюмке».", tags: ["настойка"], allergens: [] },
    { id: 111, name: "Клубника лемонграсс", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Клубника, лемонграсс", fullDesc: "Текила, водка, клубника, лемонграсс.", story: "«Клубничная сладость с травянистой ноткой».", tags: ["настойка"], allergens: [] },
    { id: 112, name: "Красная смородина перец", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Смородина с перцем", fullDesc: "Водка, красная смородина, чёрный перец, Апероль.", story: "«Фруктово-пряная, с перчинкой».", tags: ["настойка"], allergens: [] },
    { id: 113, name: "Хреновуха", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Острая, пряная", fullDesc: "Водка, хрен, горчица, тмин, мёд.", story: "«Острая, пряная — для любителей погорячее».", tags: ["настойка"], allergens: ["мёд"] },
    { id: 114, name: "Перцовка", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Жгучий перец", fullDesc: "Водка, красный перец, душица, мёд.", story: "«Жгучая, как сибирский мороз».", tags: ["настойка"], allergens: [] },
    { id: 115, name: "Вишнёвая на джине", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Джин, вишня", fullDesc: "Джин, водка, вишня, сироп вишни.", story: "«С можжевеловым оттенком — вишня по-взрослому».", tags: ["настойка"], allergens: [] },
    { id: 116, name: "Черноплодная рябина", volume: "50 мл", price: 0, category: "infusions", shortDesc: "Терпкая, с горчинкой", fullDesc: "Водка, черноплодка, ликёр Чинотото, вермут.", story: "«Терпкая, с горчинкой — как осенний лес».", tags: ["настойка"], allergens: [] },
    { id: 117, name: "Сет настоек топ 8", volume: "400 мл", price: 0, category: "infusions", shortDesc: "8 разных настоек", fullDesc: "Набор из 8 авторских настоек (состав обновляется).", story: "«Попробуйте сразу несколько — сет выгоднее и интереснее».", tags: ["настойка", "сет"], allergens: [] },

    // ========== НАСТОЙКИ NIKI PURE ==========
    { id: 118, name: "Кавказский кизил (Niki Pure)", volume: "50 мл", price: 0, category: "premium_infusions", shortDesc: "Кизил на Niki Pure", fullDesc: "Водка Niki Pure, кизил, чёрная смородина, вермут.", story: "«Густой кизил с терпкостью — элитный вкус».", tags: ["настойка"], allergens: [] },
    { id: 119, name: "Брусника саган-дайля (Niki Pure)", volume: "50 мл", price: 0, category: "premium_infusions", shortDesc: "Брусника и шаманский чай", fullDesc: "Водка Niki Pure, брусника, саган-дайля, розовый перец.", story: "«Кисло-сладкая с хвойно-цветочным оттенком».", tags: ["настойка"], allergens: [] },
    { id: 120, name: "Черника вороника (Niki Pure)", volume: "50 мл", price: 0, category: "premium_infusions", shortDesc: "Черника с пряностями", fullDesc: "Водка Niki Pure, черника, конфитюр, вермут.", story: "«Бархатистая черника с лёгкой терпкостью».", tags: ["настойка"], allergens: [] },
    { id: 121, name: "Чёрная смородина (Niki Pure)", volume: "50 мл", price: 0, category: "premium_infusions", shortDesc: "Смородина на Niki Pure", fullDesc: "Водка Niki Pure, чёрная смородина, вермут.", story: "«Интенсивный ягодный вкус на идеальной водке».", tags: ["настойка"], allergens: [] },

    // ========== ЛИКЁРЫ ==========
    { id: 122, name: "Кампари", volume: "50 мл", price: 0, category: "liqueurs", shortDesc: "Цитрусовый, сладкий", fullDesc: "Итальянский горький ликёр.", story: "«Кампари — главный ингредиент Негрони».", tags: ["ликёр"], allergens: ["сульфиты"] },
    { id: 123, name: "Фернет Бранка", volume: "50 мл", price: 0, category: "liqueurs", shortDesc: "Мятно-пряный биттер", fullDesc: "Ликёр на 27 травах.", story: "«Мятно-пряный биттер — помогает пищеварению».", tags: ["ликёр"], allergens: [] },
    { id: 124, name: "Егермейстер", volume: "50 мл", price: 0, category: "liqueurs", shortDesc: "Травяной биттер", fullDesc: "Немецкий травяной ликёр (56 трав).", story: "«Охотничий ликёр — пьётся ледяным».", tags: ["ликёр"], allergens: [] },

    // ========== ВИСКИ ==========
    { id: 125, name: "Глен Мори 12 лет", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Односолодовый, цветочно-фруктовый", fullDesc: "Glen Moray 12 yo Single Malt.", story: "«Спейсайд, цветочно-фруктовый».", tags: ["виски"], allergens: ["глютен"] },
    { id: 126, name: "Джим Бим бурбон", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Американский бурбон", fullDesc: "Jim Beam.", story: "«Классический бурбон — кукурузная сладость».", tags: ["виски"], allergens: ["глютен"] },
    { id: 127, name: "Джек Дэниелс", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Теннессийский виски", fullDesc: "Jack Daniel's Old No.7.", story: "«Бурбон с карамелью и дубом».", tags: ["виски"], allergens: ["глютен"] },
    { id: 128, name: "Чивас Ригал 12 лет", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Купажированный, мёд, яблоко", fullDesc: "Chivas Regal 12 yo.", story: "«Классика, мёд, яблоко».", tags: ["виски"], allergens: ["глютен"] },
    { id: 129, name: "Омар Сингл Мальт", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Тайваньский, изюм, апельсин", fullDesc: "Omar Single Malt.", story: "«Экзотический тайваньский виски».", tags: ["виски"], allergens: ["глютен"] },

    // ========== РОМ ==========
    { id: 130, name: "Матусалем Инсолито Вайн Каск", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Травянистый, для коктейлей", fullDesc: "Matusalem Wine Kask.", story: "«Лёгкий травянистый ром».", tags: ["ром"], allergens: [] },
    { id: 131, name: "Санто Доминго Гран Антано Ресерва", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Золотой, ванильно-фруктовый", fullDesc: "Santo Domingo Gran Añejo.", story: "«Ваниль и тропические фрукты».", tags: ["ром"], allergens: [] },
    { id: 132, name: "Матусалем Гран Резерва 15 лет", volume: "50 мл", price: 0, category: "spirits", shortDesc: "15-летний, карамель, изюм", fullDesc: "Matusalem Gran Reserva 15 yo.", story: "«Выдержанный ром для медитации».", tags: ["ром"], allergens: [] },

    // ========== КОНЬЯК ==========
    { id: 133, name: "Коньяк Камю ВСОП", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Французский VSOP", fullDesc: "Camus VSOP.", story: "«Французский VSOP — изысканный и мягкий».", tags: ["коньяк"], allergens: [] },
    { id: 134, name: "Коньяк Арарат 7 лет", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Армянский 7-летний", fullDesc: "Ararat 7 years.", story: "«Армянский коньяк — проверенный временем».", tags: ["коньяк"], allergens: [] },
    { id: 135, name: "Коньяк Эйч-Би Хайн ВСОП", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Премиум VSOP", fullDesc: "H by Hine VSOP.", story: "«Элегантный коньяк из региона Гранд-Шампань».", tags: ["коньяк"], allergens: [] },

    // ========== ДЖИН / ТЕКИЛА ==========
    { id: 136, name: "Джин Боббис Схидам", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Классический женевер", fullDesc: "Bobbis Schiedam.", story: "«Голландский женевер — прародитель джина».", tags: ["джин"], allergens: ["глютен"] },
    { id: 137, name: "Джин Хопперс Мандарин и Розмарин", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Мандарин, розмарин", fullDesc: "Hoppers Mandarin & Rosemary.", story: "«Средиземноморский джин для коктейлей».", tags: ["джин"], allergens: ["глютен"] },
    { id: 138, name: "Текила Лей 925 Даймонд Бланко", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Невыдержанная, дымная", fullDesc: "Ley 925 Diamante Blanco.", story: "«Невыдержанная, дымная. Подаётся с сангритой».", tags: ["текила"], allergens: [] },
    { id: 139, name: "Текила Лей 925 Даймонд Репосадо", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Выдержанная, мягкая", fullDesc: "Ley 925 Reposado.", story: "«Премиальная выдержанная текила».", tags: ["текила"], allergens: [] },

    // ========== ВОДКА ==========
    { id: 140, name: "Ники Пьюр", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Солодовый спирт Альфа", fullDesc: "Niki Pure.", story: "«Солодовый спирт Альфа, очень мягкая».", tags: ["водка"], allergens: ["глютен"] },
    { id: 141, name: "Арктика", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Органическая водка", fullDesc: "Arctica organic.", story: "«Органическая из пшеницы и ржи».", tags: ["водка"], allergens: ["глютен"] },
    { id: 142, name: "Онегин", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Первая органик-водка России", fullDesc: "Onegin organic.", story: "«Первая российская органическая водка».", tags: ["водка"], allergens: ["глютен"] },
    { id: 143, name: "Царская Золотая", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Нотки мёда и орешков", fullDesc: "Tsarskaya Zolotaya.", story: "«С нотками липового мёда и кедровых орешков».", tags: ["водка"], allergens: ["глютен"] },

    // ========== ДИСТИЛЛЯТЫ ==========
    { id: 144, name: "Кальвадос Морин ВСОП", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Яблочный бренди", fullDesc: "Calvados Morin VSOP.", story: "«Яблочный кальвадос — аромат нормандских садов».", tags: ["кальвадос"], allergens: [] },
    { id: 145, name: "Полба на колосках ручного сбора", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Дистиллят из полбы", fullDesc: "Polba handcraft.", story: "«Ручной сбор — дистиллят из древней полбы».", tags: ["дистиллят"], allergens: ["глютен"] },
    { id: 146, name: "Полугар №1 Рожь и Пшеница", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Хлебное вино", fullDesc: "Polugar Rye & Wheat.", story: "«Исторический русский напиток — хлебное вино».", tags: ["дистиллят"], allergens: ["глютен"] },
    { id: 147, name: "Полугар №3 Бородинский с тмином", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Аромат бородинского хлеба", fullDesc: "Polugar Borodinsky.", story: "«Аромат бородинского хлеба и тмина».", tags: ["дистиллят"], allergens: ["глютен"] },
    { id: 148, name: "Чача Фанагория 10 лет", volume: "50 мл", price: 0, category: "spirits", shortDesc: "Виноградная чача", fullDesc: "Chacha Fanagoria 10 yo.", story: "«Виноградная чача с выдержкой 10 лет».", tags: ["чача"], allergens: [] }
];

const categories = {
    mineral_water: "💧 Минеральная вода",
    soft_drinks: "🥤 Безалкогольные напитки",
    fresh_juices: "🍊 Свежевыжатые соки",
    tonic: "🍹 Тоники",
    mors: "🍒 Морсы",
    kvass: "🍞 Квас",
    mead: "🍯 Медовуха",
    lemonades: "🍋 Домашние лимонады",
    smoothies: "🍌 Смузи",
    milkshakes: "🥛 Милкшейки",
    herbal_tea: "🌿 Взвары и травяные чаи",
    black_tea: "🖤 Чёрный чай",
    green_tea: "💚 Зелёный чай",
    oolong_tea: "🍃 Молочный улун",
    tea_addons: "🌱 Добавки к чаю",
    coffee: "☕ Кофе",
    coffee_addons: "🍬 Сиропы",
    beer: "🍺 Пиво бутылочное",
    draft_beer: "🍻 Пиво разливное",
    cider: "🍎 Сидр",
    cocktails: "🍸 Коктейли",
    infusions: "🏺 Авторские настойки",
    premium_infusions: "✨ Настойки Niki Pure",
    liqueurs: "🍾 Ликёры",
    spirits: "🥃 Крепкий алкоголь"
};
