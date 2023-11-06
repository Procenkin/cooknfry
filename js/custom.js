(function ($) {

    /*************************
     Predefined Variables
     *************************/
    var FOOD = {
            activeCategory: 1,
            nameActiveCategory: 'coldSnacks',
            menu: [
                {id: 1, description: 'Поздние завтраки', name: 'coldSnacks', target: 'coldSnacks', active: true},
                {id: 2, description: 'Холодные закуски', name: 'salads', target: 'salads', active: false},
                {id: 3, description: 'Салаты', name: 'salads', target: 'salads', active: false},
                {id: 4, description: 'Пасты', name: 'pastes', target: 'pastes', active: false},
                {id: 5, description: 'Супы', name: 'soups', target: 'soups', active: false},
                {id: 6, description: 'Основные блюда', name: 'main', target: 'main', active: false},
                {id: 7, description: 'Гарниры', name: 'garnish', target: 'garnish', active: false},
                {id: 8, description: 'Десерты', name: 'dessert', target: 'dessert', active: false},
                {id: 9, description: 'Молочные напитки', name: 'milk', target: 'milk', active: false},
                {id: 10, description: 'Напитки прохладительные', name: 'drink', target: 'drink', active: false},
                {id: 11, description: 'Дополнительно', name: 'more', target: 'more', active: false},
            ],
            catalog: [
                {
                    id: 10,
                    category: 1,
                    price: 259,
                    available: true,
                    positionLeft: true,
                    name: 'Домашние сырники с сметаной и вареньем',
                    description: 'Классические сырники из  творога с вареньем из томленой клубники и малины 160гр.'
                },
                {
                    id: 20,
                    category: 1,
                    price: 249,
                    available: true,
                    positionLeft: true,
                    name: 'Блины классические',
                    description: 'Подаются с сметаной 200гр.'
                },
                {
                    id: 30,
                    category: 1,
                    price: 299,
                    available: true,
                    positionLeft: true,
                    name: 'Блины с ветчиной и сыром',
                    description: 'Сытные и нежные блинчики 190гр.'
                },
                {
                    id: 40,
                    category: 1,
                    price: 309,
                    available: true,
                    positionLeft: 0,
                    name: 'Блины с жульеном из курицы и грибов',
                    description: 'Изысканное блюдо для гурманов 180гр.'
                },
                {
                    id: 50,
                    category: 1,
                    price: 229,
                    available: true,
                    positionLeft: true,
                    name: 'Сладкие блины с бананом',
                    description: 'Идеально для любителей сладких блинчиков 190гр.'
                },
                {
                    id: 60,
                    category: 1,
                    price: 209,
                    available: true,
                    positionLeft: 0,
                    name: 'Каша овсяная на молоке',
                    description: 'Классическая овсяная каша на молоке -идеально для детей и взрослых 240гр.'
                }, {
                    id: 70,
                    category: 1,
                    price: 209,
                    available: true,
                    positionLeft: 0,
                    name: 'Каша манная на молоке',
                    description: 'Отлично подходит для детей и взрослых 220гр.'
                }, {
                    id: 80,
                    category: 2,
                    price: 169,
                    available: true,
                    positionLeft: 0,
                    name: 'Сырная закуска с чесноком',
                    description: 'Сытная и вкусная закуска на скорую руку 100гр.'
                },
                {
                    id: 90,
                    category: 2,
                    price: 169,
                    available: true,
                    positionLeft: 0,
                    name: 'Сырная закуска с шампиньонами',
                    description: 'Легкая закуска из сыра и грибов,с отварным яйцом 100гр.'
                },
                {
                    id: 110,
                    category: 2,
                    price: 459,
                    available: true,
                    positionLeft: true,
                    name: 'Брускетта с ростбифом',
                    description: 'Популярная закуска из обжаренного хлеба и маринованного мяса Medium R\Well 120гр.'
                },
                {
                    id: 120,
                    category: 2,
                    price: 389,
                    available: true,
                    positionLeft: true,
                    name: 'Брускетта с лососем собственного посола',
                    description: 'Лосось собственного посола на сырном креме 125гр.'
                },
                {
                    id: 130,
                    category: 3,
                    price: 469,
                    available: true,
                    positionLeft: true,
                    name: 'Цезарь с курицей',
                    description: 'Всем знакомый салат,но с оригинальным соусом 180гр.'
                }, {
                    id: 140,
                    category: 3,
                    price: 569,
                    available: true,
                    positionLeft: true,
                    name: 'Цезарь с креветками',
                    description: 'Классический салат с оригинальным соусом 180гр.'
                }, {
                    id: 150,
                    category: 3,
                    price: 589,
                    available: true,
                    positionLeft: true,
                    name: 'Салат с ростбифом',
                    description: 'Сытный и яркий салат с медово-горчичной заправкой 155гр.'
                }, {
                    id: 160,
                    category: 3,
                    price: 599,
                    available: true,
                    positionLeft: true,
                    name: 'Салат с креветками и авокадо',
                    description: 'Любимая классика,но с авторским соусом(кисло-сладкий) 240гр.'
                }, {
                    id: 170,
                    category: 3,
                    price: 299,
                    available: true,
                    positionLeft: 0,
                    name: 'Овощной салат с сметаной/оливковым маслом',
                    description: 'Свежий огурец и помидор, заправленные по вашему предпочтению 200гр.'
                }, {
                    id: 180,
                    category: 3,
                    price: 209,
                    available: true,
                    positionLeft: 0,
                    name: 'Сельдь под шубой',
                    description: 'Классика 150гр.'
                }, {
                    id: 190,
                    category: 3,
                    price: 279,
                    available: true,
                    positionLeft: 0,
                    name: 'Салат курица с ананасом',
                    description: 'Отличный домашний салат 160гр.'
                }, {
                    id: 200,
                    category: 2,
                    price: 349,
                    available: true,
                    positionLeft: 0,
                    name: 'Сэндвич с курицей',
                    description: 'Сытный и сочный сэндвич 280гр.'
                }, {
                    id: 210,
                    category: 2,
                    price: 349,
                    available: true,
                    positionLeft: 0,
                    name: 'Сэндвич с ветчиной и сыром',
                    description: 'Альтернатива блинчикам 280гр.'
                }, {
                    id: 220,
                    category: 2,
                    price: 319,
                    available: true,
                    positionLeft: 0,
                    name: 'Сэндвич в яйце',
                    description: 'Как дома, но только вкуснее 260гр.'
                }, {
                    id: 230,
                    category: 2,
                    price: 369,
                    available: true,
                    positionLeft: 0,
                    name: 'Сэндвич с лососем собственного посола',
                    description: 'Гурманы оценят 170гр.'
                },
                {
                    id: 240,
                    category: 2,
                    price: 879,
                    available: true,
                    positionLeft: true,
                    name: 'Маринованный ростбиф',
                    description: 'Запеченая говяжья вырезка, выдержанная в маринаде из итальянских трав и оливкового масла 120гр.'
                },
                {
                    id: 250,
                    category: 2,
                    price: 529,
                    available: true,
                    positionLeft: true,
                    name: 'Лосось собственного посола',
                    description: 'Лосось в цитрусовом посоле 110г.'
                },
                {
                    id: 260,
                    category: 2,
                    price: 519,
                    available: true,
                    positionLeft: 0,
                    name: 'Тар-тар из лосося',
                    description: 'Лосось с авокадо в кисло-сладком соусе  110гр.'
                },
                {
                    id: 270,
                    category: 2,
                    price: 519,
                    available: true,
                    positionLeft: 1,
                    name: 'Тар-тар из говядины',
                    description: 'Классический тар-тар из говядины с каперсами 122гр.'
                },
                {
                    id: 280,
                    category: 2,
                    price: 519,
                    available: true,
                    positionLeft: true,
                    name: 'Карпаччо из говядины с кедровыми орехами и пармезаном',
                    description: 'Тонкие слайсы замаринованного мяса в итальянских травах 75гр.'
                }, {
                    id: 290,
                    category: 4,
                    price: 529,
                    available: true,
                    positionLeft: true,
                    name: 'Паста “Биск” с креветками',
                    description: 'Средиземноморский соус на основе креветок и томатов  320гр.'
                }, {
                    id: 300,
                    category: 4,
                    price: 499,
                    available: true,
                    positionLeft: true,
                    name: 'Паста с брокколи и лососем',
                    description: 'Любимое блюдо женской половины 320гр.'
                }, {
                    id: 310,
                    category: 4,
                    price: 299,
                    available: true,
                    positionLeft: 0,
                    name: 'Паста в соусе из томатов и базилика',
                    description: 'Классический томатный соус с базиликом и орегано 320гр.'
                }, {
                    id: 320,
                    category: 4,
                    price: 219,
                    available: true,
                    positionLeft: 0,
                    name: 'Детская паста с курицей',
                    description: 'Просто отварные спагетти с добавлением сливочного масла и обжаренной курочки 200гр.'
                },
                {
                    id: 340,
                    category: 5,
                    price: 239,
                    available: true,
                    positionLeft: true,
                    name: 'Крем-суп из грибов',
                    description: 'Нежный и легкий крем-суп с ноткой трюфеля черного сезонного 300гр.'
                }, {
                    id: 350,
                    category: 5,
                    price: 179,
                    available: true,
                    positionLeft: 0,
                    name: 'Крем-суп из брокколи ',
                    description: 'Легкий крем-суп 300гр.'
                }, {
                    id: 360,
                    category: 5,
                    price: 239,
                    available: true,
                    positionLeft: 0,
                    name: 'Борщ с чесноком и сметаной',
                    description: 'Король всех и вся...подается с каплей чесночного масла и сметаной 300гр.'
                }, {
                    id: 370,
                    category: 5,
                    price: 239,
                    available: true,
                    positionLeft: true,
                    name: 'Куриная лапша с фрикадельками из курицы',
                    description: 'Традиционный куриный суп,но с куриными фрикадельками 300гр.'
                },
                {
                    id: 390,
                    category: 6,
                    price: 529,
                    available: true,
                    positionLeft: 0,
                    name: 'Бефстроганов из говяжьей вырезки',
                    description: 'То самое мясо по-строганосвки,популярное в СССР 140гр'
                }, {
                    id: 400,
                    category: 6,
                    price: 669,
                    available: true,
                    positionLeft: 0,
                    name: 'Медальоны из говяжьей вырезки с соусом демиглясс',
                    description: 'Нежное мясо говядины с соусом демиглясс 120гр.'
                }, {
                    id: 410,
                    category: 6,
                    price: 379,
                    available: true,
                    positionLeft: 0,
                    name: 'Медальоны из свиной вырезки с кисло-сладким соусом',
                    description: 'Свиная вырезка в соусе кетчуп 150гр.'
                }, {
                    id: 420,
                    category: 6,
                    price: 549,
                    available: true,
                    positionLeft: 1,
                    name: 'Цыпленок Табака ',
                    description: 'Все в лучших традициях этого блюда 300гр.'
                }, {
                    id: 430,
                    category: 6,
                    price: 589,
                    available: true,
                    positionLeft: true,
                    name: 'Щечки говяжьи с соусом демиглясс',
                    description: 'Нежные томленые щечки телят 320гр.'
                }, {
                    id: 440,
                    category: 6,
                    price: 579,
                    available: true,
                    positionLeft: true,
                    name: 'Ребра свиные запеченые с темным пивом ',
                    description: 'Томленые в темном пиве с приправами свиные ребра,подпеченные с соусом демиглясс 300гр.'
                }, {
                    id: 450,
                    category: 6,
                    price: 369,
                    available: true,
                    positionLeft: true,
                    name: 'Морской язык в цитрусовой панировке',
                    description: 'Филе морского языка 210гр.'
                }, {
                    id: 460,
                    category: 6,
                    price: 569,
                    available: true,
                    positionLeft: 1,
                    name: 'Стейк из лосося с сливочно-лимонным соусом',
                    description: 'Сочный стейк с лимонно-сливочным соусом 150гр.'
                },
                {
                    id: 470,
                    category: 6,
                    price: 279,
                    available: true,
                    positionLeft: 1,
                    name: 'Горбуша под маринадом',
                    description: 'Известная с детства рыба из СССР  170гр.'
                },
                {
                    id: 480,
                    category: 6,
                    price: 779,
                    available: true,
                    positionLeft: 0,
                    name: 'Рулька свиная с толченным картофелем и квашенной капустой',
                    description: 'Медово-горчичная рулька на 2 человека 900гр.'
                },
                {
                    id: 490,
                    category: 7,
                    price: 110,
                    available: true,
                    positionLeft: 0,
                    name: 'Толченка из картофеля',
                    description: 'Альтернатива пюре 150гр.'
                },
                {
                    id: 500,
                    category: 7,
                    price: 110,
                    available: true,
                    positionLeft: 1,
                    name: 'Гречка',
                    description: 'Отварная 150гр.'
                },
                {
                    id: 510,
                    category: 7,
                    price: 110,
                    available: true,
                    positionLeft: 1,
                    name: 'Рис',
                    description: 'Отварной 150гр.'
                },
                {
                    id: 520,
                    category: 7,
                    price: 269,
                    available: true,
                    positionLeft: 0,
                    name: 'Овощи Гриль',
                    description: '160 гр.'
                },
                {
                    id: 530,
                    category: 8,
                    price: 279,
                    available: true,
                    positionLeft: 1,
                    name: 'Тирамису',
                    description: 'Классический яичный десерт с печеньем и эспрессо  120гр.'
                },
                {
                    id: 550,
                    category: 8,
                    price: 159,
                    available: true,
                    positionLeft: 0,
                    name: 'Трубочки с белковым кремом',
                    description: '2шт в порции 100гр.'
                },
                {
                    id: 560,
                    category: 8,
                    price: 219,
                    available: true,
                    positionLeft: 0,
                    name: 'Шарлотка домашняя',
                    description: 'Традиционный яблочный пирог 150гр.'
                },
                {
                    id: 570,
                    category: 10,
                    price: 339,
                    available: true,
                    positionLeft: 1,
                    name: 'Апельсиновый фреш',
                    description: '300мл.'
                },
                {
                    id: 580,
                    category: 10,
                    price: 379,
                    available: true,
                    positionLeft: 1,
                    name: 'Грейпфрутовый фреш ',
                    description: '300мл.'
                },
                {
                    id: 590,
                    category: 10,
                    price: 259,
                    available: true,
                    positionLeft: 1,
                    name: 'Яблочный фреш ',
                    description: '300мл.'
                },
                {
                    id: 600,
                    category: 10,
                    price: 179,
                    available: true,
                    positionLeft: 1,
                    name: 'Морковный фреш',
                    description: '300мл'
                },
                {
                    id: 610,
                    category: 10,
                    price: 319,
                    available: true,
                    positionLeft: 0,
                    name: 'Огуречный фреш',
                    description: '300мл.'
                },
                {
                    id: 620,
                    category: 10,
                    price: 319,
                    available: true,
                    positionLeft: 0,
                    name: 'Томатный фреш',
                    description: '300мл.'
                },
                {
                    id: 630,
                    category: 9,
                    price: 249,
                    available: true,
                    positionLeft: 1,
                    name: 'Молочный коктейль ванильный',
                    description: '250мл.'
                },
                {
                    id: 640,
                    category: 9,
                    price: 249,
                    available: true,
                    positionLeft: 1,
                    name: 'Молочный коктейль шоколадный',
                    description: '250мл.'
                },
                {
                    id: 650,
                    category: 9,
                    price: 249,
                    available: true,
                    positionLeft: 0,
                    name: 'Молочный коктейль банановый',
                    description: '250мл.'
                },
                {
                    id: 660,
                    category: 9,
                    price: 249,
                    available: true,
                    positionLeft: 0,
                    name: 'Молочный коктейль клубничный',
                    description: '250мл.'
                },
                {
                    id: 670,
                    category: 10,
                    price: 139,
                    available: true,
                    positionLeft: 0,
                    name: 'Морс клюквенный',
                    description: '300мл.'
                },
                {
                    id: 680,
                    category: 10,
                    price: 79,
                    available: true,
                    positionLeft: 0,
                    name: 'Вода в ассортименте',
                    description: '0.3/0.5'
                },
                {
                    id: 690,
                    category: 11,
                    price: 40,
                    available: true,
                    positionLeft: 1,
                    name: 'Гренки из белого хлеба',
                    description: '10гр.'
                },
                {
                    id: 700,
                    category: 11,
                    price: 129,
                    available: true,
                    positionLeft: 1,
                    name: 'Масло оливковое',
                    description: '20мл.'
                },
                {
                    id: 710,
                    category: 11,
                    price: 119,
                    available: true,
                    positionLeft: 1,
                    name: 'Огурцы маринованные',
                    description: '50гр.'
                },
                {
                    id: 720,
                    category: 11,
                    price: 129,
                    available: true,
                    positionLeft: 0,
                    name: 'Пармезан',
                    description: '30гр.'
                },
                {
                    id: 730,
                    category: 11,
                    price: 69,
                    available: true,
                    positionLeft: 0,
                    name: 'Соус-крем Бальзамик',
                    description: '20гр.'
                },
                {
                    id: 740,
                    category: 11,
                    price: 35,
                    available: true,
                    positionLeft: 0,
                    name: 'Хлеб',
                    description: '2 кусочка'
                },
            ]
        },
        ORDER = {
            id: null,
            createOrder: null,
            dishes: [],
            customer: {
                fierstName: null,
                lastName: null,
                adress: null
            },
            summ: 0
        },
        $window = $(window),
        $document = $(document),
        $body = $('body'),
        $progressBar = $('.progress-bar'),
        $countdownTimer = $('.countdown'),
        $counter = $('.counter');

    FOOD.catalog.forEach((item) => {
        if (item.category !== 10) item.price = Math.ceil(item.price - item.price / 10)
    })
    //Check if function exists
    $.fn.exists = function () {
        return this.length > 0;
    };

    /*************************
     Preloader
     *************************/
    FOOD.preloader = function () {
        //$("#load").fadeOut();
        $('#loading').delay(0).fadeOut('slow');
    };

    FOOD.onloadImage = function (src) {
        let img = document.createElement('img');
        img.src = src
        img.style.width = '100%'
        img.onload = function () {
            $('.modal-body-modal-food').prepend(img)
            $('#loading').hide()
            $('#modal-food').show()
        };

        img.onerror = function () {
            $('#loading').hide()
            $('#modal-food').show()
        };
    }

    FOOD.handInfoDish = function () {
        $('.btn-close-modal-food').click(() => {
            $('#modal-food').hide()
        })

        $('.hand-open-dishes').click((e) => {
            $('#loading').show()

            let id = e.currentTarget.getAttribute('data-param-id');
            let dish = FOOD.getDish(id)
            $('#modal-food').attr('data-param-id', id)
            $('.modal-title-modal-food').html(dish.name)
            $('.modal-body-modal-food').html(`                    
                    
                    <p>${dish.description}</p>
                    <p>Цена: ${dish.price} Р</p>
                    `)
            FOOD.onloadImage(`images/dish/low2/${id}-min.jpg`)
            // $('#imgModal').ready(function(){
            //     $('#loading').hide()
            //     $('#modal-food').show()
            // })
            $('.btn-close-modal-buy').off("click")
            $('.btn-close-modal-buy').click((e) => {
                FOOD.addToOrder(id)
                $('#modal-food').hide()
            })
        })
        $('.btn-modal-zone').click((e) => {
            let str = `
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A29e88dcf336d9dda5560d2f84add24314eaa7480096c9471ae6b15deba940538&amp;source=constructor"
                        width="${window.innerWidth - window.innerWidth * 0.05}" height="${window.innerHeight - window.innerHeight * 0.05}" frameborder="0"></iframe>
            `
            $('.modal-body-modal-zone').html(str)
            $('#modal-zone').show()

        })
        $('.btn-close-modal-zone').click(() => {
            $('#modal-zone').hide()
        })


    }
    FOOD.removeFromOrder = function (id) {
        let dish = FOOD.getDish(id)
        if (ORDER.dishes.find(x => x.id == id) !== undefined) {
            if (dish['count'] == 1) {
                let indx = ORDER.dishes.findIndex(x => x.id == id)
                ORDER.dishes.splice(indx)
            } else {
                dish['count'] = dish['count'] - 1
            }
        }
        FOOD.updateOrder()
    }

    FOOD.addToOrder = function (id) {
        let dish = FOOD.getDish(id)
        if (ORDER.dishes.find(x => x.id == id) !== undefined) {
            dish['count'] ? dish['count'] = dish['count'] + 1 : dish['count'] = 1
        } else {
            dish['count'] = 1
            ORDER.dishes.push(dish)
        }
        FOOD.updateOrder()
        let countDishes = 0;
        ORDER.dishes.forEach((item) => {
            countDishes += item.count
        })
        FOOD.renderBtnOrder()
        // FOOD.modalOrder()
    }

    FOOD.initEvents = function () {
        $('.btn-close-modal-order').click((e) => {
            $('#modal-order').hide()
        })

        $('.btn-modal-order').click((e) => {
            $('#modal-order').show()
            FOOD.renderModalOrder()
        })

        $('#modal-food').click(() => {
            // $('#modal-food').hide()
        })
    }

    FOOD.renderModalOrder = function () {
        let countDishes = 0;
        ORDER.dishes.forEach((item) => {
            countDishes += item.count
        })

        let str = '<div class="modal-order-list">'

            + '<div class="modal-order-count">' + countDishes + ' товара на ' + ORDER.summ + ' Р</div>'

        ORDER.dishes.forEach((item) => {
            let imgSrc = 'images/dish/low/' + item.id + '.jpg'
            str += '<div class="order-menu-list">\n' +
                '                    <div class="order-menu-item">\n' +
                '                    <img class="order-menu-item-img" src="' + imgSrc + '" alt="">' +
                '                    <div data-param-id="' + item.id + '" class="menu-title-js menu-title clearfix hand-open-dishes">\n' +
                '                        <h4>' + item.name + '</h4>\n' +
                '                    </div>\n' +
                '                    </div>\n' +
                '<div class="order-menu-item-footer">\n' +
                '                        <span class="order-menu-item-footer-price"> ' + item.price + ' Р</span>\n' +
                '<div class="order-menu-control"">' +
                ' <button class="decr btn-primary btn-set-count order-menu-control-left" prop-id="' + item.id + '">-</button> ' +
                '<div class="order-menu-control-count">' + item.count + '</div>' +
                '<button class="incr btn-primary btn-set-count order-menu-control-left" prop-id="' + item.id + '">+</button> ' +
                '</div>\n' +
                // '                      <div class="menu-description">\n' +
                // '                        <p> ' + item.description + '</p>\n ' +
                // '                      </div>\n' +
                '                    </div>\n' +
                '                  </div>'


            // str += '<div class="modal-order-list-row">'
            //     + '<div class="modal-order-list-product"> ' + item.name + ' </div>'
            //     + '<div class="modal-order-list-price"> ' + item.price * item.count + ' руб.</div>'
            //     + '<div class="modal-order-list-count">'
            //     + '<div class="modal-order-list-price"> <button class="decr btn-primary btn-set-count" prop-id="' + item.id + '">-</button> </div>'
            //     + '<div class="modal-order-list-price">' + item.count + '</div>'
            //     + '<div class="modal-order-list-price"> <button class="incr btn-primary btn-set-count" prop-id="' + item.id + '">+</button> </div>'
            //     + '</div>'
            //
            //     + '</div>'
        })
        str += '</div>'
        str += '<div class="order-menu-total"><div><b>Сумма заказа:</b></div><div class="order-menu-item-footer-price"> ' + ORDER.summ + ' Р</div></div>'
            + '<div><b>Адрес:</b> <input id="address_client" style="border:1px solid rgb(0 0 0 / 34%)" /></div>'
            + '<div><b>Номер телефона:</b> <input id="phone_client" style="border: 1px solid rgb(0 0 0 / 34%)" /></div>'
        $('.modal-body-modal-order').html(str)
        $("#address_client").suggestions({
            token: "5a40e0b55bc59eb7238208f41d2bfd8350b359f7",
            type: "ADDRESS",
            value: ORDER.customer.unrestricted_value,
            onSelect: function (suggestion) {
                $('#address_client').css("border", '1px solid #000')
                ORDER.customer.adress = suggestion.value;
                ORDER.customer['unrestricted_value'] = suggestion.unrestricted_value;
            }
        });
        let id = null
        $('.incr').click((event) => {
            id = event.target.getAttribute('prop-id')
            FOOD.updateOrderDishes(id, 1)
        })
        $('.decr').click((event) => {
            id = event.target.getAttribute('prop-id')
            FOOD.updateOrderDishes(id, -1)
        })

        $('.btn-order-submit').click(() => {
            FOOD.orderSubmit()
        })

        $('.btn-order-submit-whatsApp').off("click")
        $('.btn-order-submit-whatsApp').click(() => {
            FOOD.orderSubmit('whatsApp')
        })
    }

    FOOD.orderSubmit = function (who) {
        let validate = []
        if (ORDER.customer.adress === null) {
            validate.push('адрес')
            $('#address_client').css("border", '1px solid red')
            // return
        }
        let phone = $('#phone_client').val()
        if (!phone) {
            validate.push('номер телефона')
            $('#phone_client').css("border", '1px solid red')
            //  return
        }
        if (validate.length) {
            let errorMsg = 'Не указан ' + validate.join(' и ')
            $('.order-error').css("color", 'red')
            $('.order-error').css("padding", '0 16px')
            $('.order-error').html(errorMsg)
            return
        }


        let message = {
            'Номер заказа': '-',
            'Время создания заказа': new Date(),
            'Позиции': [],
            'Стоимость заказа': ORDER.summ + ' Р',
            'Телефон': phone,
            'Адрес': ORDER.customer.adress
        }

        ORDER.dishes.forEach((item) => {
            message['Позиции'].push({
                'Название': item.name,
                'Количество': item.count,
                'ИД': item.id,
                'Цена': item.price + ' Р',
            })
        })
        if (who !== 'whatsApp') {
            fetch('https://formspree.io/f/xvonberk', {
                method: 'POST',
                body: JSON.stringify(message),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    $('#modal-order').hide()
                    ORDER = {
                        id: null,
                        createOrder: null,
                        dishes: [],
                        customer: {
                            fierstName: null,
                            lastName: null,
                            adress: {
                                country: 'Russia',
                                street: null,
                                floor: null,
                                description: null
                            }
                        },
                        summ: 0
                    }
                    FOOD.updateOrder()
                    FOOD.renderBtnOrder()
                    console.log(response)
                } else {
                    response.json().then(data => {
                        console.log(data)
                    })
                }
            }).catch(error => {
                console.log(error)
            });
        } else {
            let msg = 'Здравствуйте, пишу вам с сайта.  \n Мой заказ: \n'
            ORDER.dishes.forEach((item, i) => {
                msg += i + 1 + '.' + ' ' + item.name + ' (' + item.count + ' шт.); \n'
            })

            msg += 'Адрес доставки: '
            msg += ORDER.customer.adress + '\n'
            msg += 'Номер телефона: '
            msg += phone + '\n'

            $('#modal-order').hide()
            ORDER = {
                id: null,
                createOrder: null,
                dishes: [],
                customer: {
                    fierstName: null,
                    lastName: null,
                    adress: {
                        country: 'Russia',
                        street: null,
                        floor: null,
                        description: null
                    }
                },
                summ: 0
            }
            FOOD.updateOrder()
            FOOD.renderBtnOrder()
            fetch('https://formspree.io/f/xvonberk', {
                method: 'POST',
                body: JSON.stringify({Сообщение: msg, Дата_Заказа: ORDER.createOrder}),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
            window.open("https://api.whatsapp.com/send?phone=79779310006&text=" + encodeURI(msg), '_blank')
        }
    }

    FOOD.updateOrderDishes = function (id, countFix) {
        ORDER.dishes.map((item) => {
            if (item.id == id) {
                item.count += countFix
                if (item.count < 0) item.count = 0
            }
            return item
        })

        FOOD.updateOrder()
        FOOD.renderModalOrder()
        FOOD.renderBtnOrder()
    }

    FOOD.renderBtnOrder = function () {
        if (ORDER.summ !== 0) {
            $('.btn-modal-order').show()
            $('.btn-modal-order').html(`<i class="fa fa-shopping-cart"></i> Корзина | ${ORDER.summ} Р`)
        } else {
            $('.btn-modal-order').hide()
        }
    }

    FOOD.updateOrder = function () {
        ORDER.summ = 0;
        ORDER.dishes.forEach((item) => {
            ORDER.summ = (item.price * item.count) + ORDER.summ
        })
        ORDER.createOrder = new Date()
    }

    FOOD.modalOrder = function () {
        // зкорзина
        $('.modal-food').show()

    }

    FOOD.getDish = function (id) {
        // достать из каталога товар по ID
        for (let i = 0; i < FOOD.catalog.length; i++) {
            if (FOOD.catalog[i].id == id) return FOOD.catalog[i]
        }
    }

    FOOD.menuRender = function () {
        let html = ''
        let tab = ''
        for (let i = 0; i < FOOD.menu.length; i++) {
            let active = FOOD.activeCategory === FOOD.menu[i].id ? ' active show ' : ' fade ';
            html += '<li class="nav-item" role="presentation">\n' +
                '              <button class="nav-link ';
            FOOD.activeCategory === FOOD.menu[i].id ? html += " active " : ""
            html += '" id="' + FOOD.menu[i].id + '" data-bs-toggle="tab" data-bs-target="' + FOOD.menu[i].target + '" type="button" role="tab" aria-controls="breakfast" aria-selected="true">' + FOOD.menu[i].description + '</button>\n' +
                '            </li>'

            tab +=
                '<div class="tab-pane ' + active + '" id="' + FOOD.menu[i].name + '" role="tabpanel" aria-labelledby="' + FOOD.menu[i].name + '">'
                + '<div class="row">'
                + '<div id="menu' + FOOD.menu[i].name + 'Left" class="col-lg-6 col-md-6"></div>'
                + '<div id="menu' + FOOD.menu[i].name + 'Right" class="col-lg-6 col-md-6"></div>'
                + '</div></div>'

        }

        $('#tabMenuHome').html(html)
        $('#tab-content-menu').html(tab)
        FOOD.changeTabMenu()
    }

    FOOD.menuCatalog = function () {
        // рендер позиций меню
        let htmlLeft = ''
        let htmlRight = ''
        let imgSrc = ''
        let filterCatalog = FOOD.catalog.filter(el => el.category == FOOD.activeCategory)
        for (let i = 0; i < filterCatalog.length; i++) {
            imgSrc = 'images/dish/low/' + filterCatalog[i].id + '.jpg'
            if (filterCatalog[i].positionLeft) {
                htmlLeft += '<div data-param-id="' + filterCatalog[i].id + '" class="menu-body menu-left">\n' +
                    '                    <div class="menu-thumbnail">\n' +
                    '                      <img data-param-id="' + filterCatalog[i].id + '" class="img-fluid center-block hand-open-dishes img-menu-dishes" src="' + imgSrc + '" alt="">\n' +
                    '                    </div>\n' +
                    '                    <div class="menu-details">\n' +
                    '                      <div data-param-id="' + filterCatalog[i].id + '" class="menu-title-js menu-title clearfix hand-open-dishes">\n' +
                    '                        <h4>' + filterCatalog[i].name + '</h4>\n' +
                    '                        <span class="price"> ' + filterCatalog[i].price + ' Р</span>\n' +
                    '                      </div>\n' +
                    '                      <div class="menu-description">\n' +
                    '                        <p> ' + filterCatalog[i].description + '</p>\n ' +
                    '                      </div>\n' +
                    '                    </div>\n' +
                    '                  </div>'
            } else {
                htmlRight += '<div data-param-id="' + filterCatalog[i].id + '" class="menu-body menu-left">\n' +
                    '                    <div class="menu-thumbnail">\n' +
                    '                      <img data-param-id="' + filterCatalog[i].id + '" class="img-fluid center-block hand-open-dishes img-menu-dishes" src="' + imgSrc + '" alt="">\n' +
                    '                    </div>\n' +
                    '                    <div class="menu-details">\n' +
                    '                      <div data-param-id="' + filterCatalog[i].id + '" class="menu-title-js menu-title clearfix hand-open-dishes">\n' +
                    '                        <h4>' + filterCatalog[i].name + '</h4>\n' +
                    '                        <span class="price"> ' + filterCatalog[i].price + ' Р</span>\n' +
                    '                      </div>\n' +
                    '                      <div class="menu-description">\n' +
                    '                        <p> ' + filterCatalog[i].description + '</p>\n ' +
                    '                      </div>\n' +
                    '                    </div>\n' +
                    '                  </div>'
            }
        }
        $(`#menu${FOOD.nameActiveCategory}Left`).html(htmlLeft)
        $(`#menu${FOOD.nameActiveCategory}Right`).html(htmlRight)

    }

    FOOD.changeTabMenu = function () {
        $('.nav-link').click((event) => {
            $('.tab-pane').removeClass('show')
            $('.tab-pane').removeClass('active')
            $('.tab-pane').addClass('fade')
            $(`#menu${FOOD.nameActiveCategory}Left`).empty();
            $(`#menu${FOOD.nameActiveCategory}Right`).empty();

            let paramId = event.target.getAttribute('id');
            let name = event.target.getAttribute('data-bs-target');
            if (paramId !== null) {
                FOOD.activeCategory = paramId
                FOOD.nameActiveCategory = name
                $(`#${FOOD.nameActiveCategory}`).removeClass('fade')
                $(`#${FOOD.nameActiveCategory}`).addClass('show active')
                FOOD.menuCatalog()
            }
            FOOD.handInfoDish()
        })
    }

    /*************************
     Mega menu
     *************************/
    FOOD.megaMenu = function () {
        $('#menu-1').megaMenu({
            // DESKTOP MODE SETTINGS
            logo_align: 'left',         // align the logo left or right. options (left) or (right)
            links_align: 'left',        // align the links left or right. options (left) or (right)
            socialBar_align: 'left',    // align the socialBar left or right. options (left) or (right)
            searchBar_align: 'right',   // align the search bar left or right. options (left) or (right)
            trigger: 'hover',           // show drop down using click or hover. options (hover) or (click)
            effect: 'fade',             // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
            effect_speed: 400,          // drop down show speed in milliseconds
            sibling: true,              // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
            outside_click_close: true,  // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
            top_fixed: false,           // fixed the menu top of the screen. options (true) or (false)
            sticky_header: true,       // menu fixed on top when scroll down down. options (true) or (false)
            sticky_header_height: 250,  // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
            menu_position: 'horizontal',    // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
            full_width: false,           // make menu full width. options (true) or (false)
            // MOBILE MODE SETTINGS
            mobile_settings: {
                collapse: true,    // collapse the menu on click. options (true) or (false)
                sibling: true,      // hide the others showing drop downs when click on current drop down. options (true) or (false)
                scrollBar: true,    // enable the scroll bar. options (true) or (false)
                scrollBar_height: 400,  // scroll bar height in px value. this option works if the scrollBar option true.
                top_fixed: false,       // fixed menu top of the screen. options (true) or (false)
                sticky_header: false,   // menu fixed on top when scroll down down. options (true) or (false)
                sticky_header_height: 200   // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
            }
        });
    }

    /*************************
     Back to top
     *************************/
    FOOD.goToTop = function () {
        var $goToTop = $('#back-to-top');
        $goToTop.hide();
        $window.scroll(function () {
            if ($window.scrollTop() > 100) $goToTop.fadeIn();
            else $goToTop.fadeOut();
        });
        $goToTop.on("click", function () {
            $('body,html').animate({scrollTop: 0}, 10);
            return false;
        });
    }

    /*************************
     Search
     *************************/
    FOOD.searchbar = function () {
        var $searchbar = $('.overlay-search');
        if ($searchbar.exists()) {
            $('.search-btn,.search-close').on("click", function () {
                $searchbar.toggleClass("open")
                return false;
            });
        }
    }

    /*************************
     owl-carousel
     *************************/
    FOOD.carousel = function () {
        $(".owl-carousel").each(function () {
            var $this = $(this),
                $items = ($this.data('items')) ? $this.data('items') : 1,
                $loop = ($this.data('loop')) ? $this.data('loop') : true,
                $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : false,
                $space = ($this.attr('data-space')) ? $this.data('space') : 30;
            $(this).owlCarousel({
                loop: $loop,
                items: $items,
                responsive: {
                    0: {items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                    480: {items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                    768: {items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                    992: {items: $this.data('md-items') ? $this.data('md-items') : 3},
                    1200: {items: $items}
                },
                dots: $navdots,
                margin: $space,
                nav: $navarrow,
                navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
                autoplay: $autoplay,
                autoplayHoverPause: true
            });
        });
    }

    /*************************
     Counter
     *************************/
    FOOD.counters = function () {
        if ($counter.exists()) {
            $counter.each(function () {
                var $elem = $(this);
                $elem.appear(function () {
                    $elem.find('.timer').countTo();
                });
            });
        }
    };

    /*************************
     Isotope
     *************************/
    FOOD.Isotope = function () {
        var $isotope = $(".isotope"),
            $itemElement = '.grid-item',
            $filters = $('.isotope-filters');
        if ($isotope.exists()) {
            $isotope.isotope({
                resizable: true,
                itemSelector: $itemElement,
                masonry: {
                    gutterWidth: 10
                }
            });
            $filters.on('click', 'button', function () {
                var $val = $(this).attr('data-filter');
                $isotope.isotope({filter: $val});
                $filters.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        }
    }

    // masonry
    FOOD.masonry = function () {
        var $masonry = $('.masonry-main .masonry'),
            $itemElement = '.masonry-main .masonry-item';
        if ($masonry.exists()) {
            $masonry.isotope({
                resizable: true,
                itemSelector: $itemElement,
                masonry: {
                    gutterWidth: 10
                }
            });
        }
    }

    /*************************
     Magnific Popup
     *************************/
    FOOD.mediaPopups = function () {
        if ($(".popup-gallery").exists()) {
            $('.popup-gallery').magnificPopup({
                delegate: 'a.portfolio-img',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });
        }
        if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }

    /*************************
     datetimepicker
     *************************/
    FOOD.caldatapicker = function () {
        var $datepicker = $("#datepicker"),
            $timepicker = $("#timepicker");
        if ($datepicker.exists()) {
            $('#datepicker').datetimepicker({
                pickTime: false
            });
            $('#timepicker').datetimepicker({
                pickDate: false
            });
        }
    };

    /*************************
     Burgermenu
     *************************/
    FOOD.burgermenu = function () {
        if ($("#menu-4").exists()) {
            $('#menu-4').megaMenu({
                menu_position: 'vertical-right',
                effect: 'expand-right'
            });
            $('#menu-icon').on("click", function () {
                $(this).toggleClass('open');
                $('#menu,#menu-toggle,#page-content,#menu-overlay').toggleClass('open');
                $('#menu li,.submenu-toggle').removeClass('open');
            });
        }
        ;
    }

    /*************************
     Accordion
     *************************/
    FOOD.accordion = function () {
        var $acpanel = $(".accordion .acd-group > .acd-des"),
            $acsnav = $(".accordion .acd-group > .acd-heading");

        $acpanel.hide().first().slideDown("easeOutExpo");
        $acsnav.first().addClass("acd-active");
        $acsnav.on('click', function () {
            var $this = $(this).next(".acd-des");
            $acsnav.parent().removeClass("acd-active");
            $(this).parent().addClass("acd-active");
            $acpanel.not($this).slideUp("easeInExpo");
            $(this).next().slideDown("easeOutExpo");
            return false;
        });
    }

    /*************************
     Progressbar
     *************************/
    FOOD.progressBar = function () {

        if ($progressBar.exists()) {
            $progressBar.each(function (i, elem) {
                var $elem = $(this),
                    percent = $elem.attr('data-percent') || "100",
                    delay = $elem.attr('data-delay') || "100",
                    type = $elem.attr('data-type') || "%";

                if (!$elem.hasClass('progress-animated')) {
                    $elem.css({
                        'width': '0%'
                    });
                }
                var progressBarRun = function () {
                    $elem.animate({
                        'width': percent + '%'
                    }, 'easeInOutCirc').addClass('progress-animated');

                    $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + '</span>');
                };
                $(elem).appear(function () {
                    setTimeout(function () {
                        progressBarRun();
                    }, delay);
                });
            });
        }
    };

    /*************************
     Countdown
     *************************/
    FOOD.countdownTimer = function () {
        if ($countdownTimer.exists()) {
            $countdownTimer.downCount({
                date: '10/05/2022 12:00:00',
                offset: 400
            });
        }
    };

    /*************************
     niceScroll
     *************************/
    FOOD.niceScroll = function () {
        var $niceScrolldiv = $(".book-content");
        if ($niceScrolldiv.exists()) {
            $(".book-content").niceScroll({
                scrollspeed: 150,
                mousescrollstep: 38,
                cursorwidth: 7,
                cursorborder: 0,
                cursorcolor: '#1e2327',
                autohidemode: true,
                zindex: 999999999,
                horizrailenabled: false,
                cursorborderradius: 0
            });
        }
    };

    /*************************
     PHP contact form
     *************************/
    FOOD.contactform = function () {
        var $contactform = $("#contactform");

        $contactform.submit(function (event) {
            $("#ajaxloader").show();
            $contactform.hide();
            // $.ajax({
            //   url:'php/contact-form.php',
            //   data:$(this).serialize(),
            //   type:'post',
            //   success:function(response){
            //     $("#ajaxloader").hide();
            //     $contactform.show();
            //     $contactform.find("input, textarea").val("");
            //     $("#formmessage").html(response).show().delay(2000).fadeOut('slow');
            //   }
            // });
            event.preventDefault();
        });
    }

//Window load functions
    window.onload = function () {
        FOOD.goToTop(),
            FOOD.menuRender(),
            FOOD.menuCatalog(),
            FOOD.handInfoDish(),
            FOOD.initEvents(),
            FOOD.preloader(),
            FOOD.Isotope(),
            FOOD.masonry(),
            FOOD.caldatapicker(),
            FOOD.progressBar();
    }

    //Document ready functions
    $document.ready(function () {
        FOOD.searchbar(),
            FOOD.megaMenu(),
            FOOD.counters(),
            FOOD.mediaPopups(),
            FOOD.carousel(),
            FOOD.burgermenu(),
            FOOD.accordion(),
            FOOD.countdownTimer(),
            FOOD.contactform(),
            FOOD.niceScroll();
    });
})(jQuery);

// Below code is not part of template
$(document).on('click', 'a.frame-close', function (e) {
    $('.header-preview').slideUp();
});
