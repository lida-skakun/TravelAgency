import React from 'react';
import {render} from 'react-dom';
import Filter from './filter';
import TourList from './tour_list';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handlerFilterSubmit = this.handlerFilterSubmit.bind(this);
        this.callOnServerEmulation = this.callOnServerEmulation.bind(this);
        this.state = {
            toursData : [
                {
                    id: "1",
                    where: "Турция",
                    city: "Алания",
                    hotelName: "Hedef Beach Resort & Spa 5*",
                    hotel: "5",
                    feeding: "UAI",
                    location: "Отель расположен в 100 км от аэропорта г. Анталья.",
                    about: "Отель расположен в 10 км от г. Аланья, в поселке Конаклы, на берегу моря. Построен в 2012 году, общая площадь 25 000 м2. Благодаря инфраструктуре и услугам, которые оказываются в отеле, его оценят молодежь, семьи с детьми, влюбленные пары и пожилые люди.",
                    email: "info@hedefbeach.com",
                    website: "http://www.hedefbeach.com",
                    main_foto: "img/Hedef.jpg",
                    price: "93"
                },
                {
                    id: "2",
                    where: "Египет",
                    city: "Хургада",
                    hotelName: "Hawaii Le Jardin Aqua Park 5*",
                    hotel: "5",
                    feeding: "AI",
                    location: "В 20 км от аэропорта Хургады, в 7 км от центра Старого города.",
                    about: "Открытие отеля состоялось в 2008 году. Отель с небольшой зеленой территорией. Рекомендуем для семейного отдыха с детьми. Отель состоит из основного 5-этажного здания.",
                    email: "ahmed.amer@sunrisehotels-egypt.com",
                    website: "https://festivalhotels.direct-reservation.net/en/accommodation",
                    main_foto: "img/Hawaii.jpg",
                    price: "67"
                },
                {
                    id: "3",
                    where: "Тунис",
                    city: "Сусс",
                    hotelName: "Dreams Beach 3*",
                    hotel: "3",
                    feeding: "FB",
                    location: "в 143 км от аэропорта г. Туниса, в 26 км от аэропорта г. Монастир.",
                    about: "Отель расположен в 3,5 км от Порт Эль Кантауи, в 2,5 км от исторического центра г. Сусс. Отель построен в 1998 г.",
                    email: "dbeach.reservation@gnet.tn",
                    website: "http://www.dreamsbeach-tunisia.com",
                    main_foto: "img/Dreams.jpg",
                    price: "39"
                },
                {
                    id: "4",
                    where: "Тунис",
                    city: "Порт Эль Кантауи",
                    hotelName: "Golf Residence 4*",
                    hotel: "4",
                    feeding: "AI",
                    location: "Расстояние до аэропорта Монастир составляет 25 км.",
                    about: "Гостиница расположена в Порту Эль Кантауи, в 10 км от центра города Сусс. Отель был открыт в 1992 году, последняя реновация проводилась в 2008 году. Отсюда можно легко добраться до главных достопримечательностей региона. Поблизости расположено поле для гольфа, аквапарк и торгово-развлекательный центр. Отель подойдет для семейного отдыха с детьми.",
                    email: "golf.residence@gnet.tn",
                    website: "http://golfresidence.com/",
                    main_foto: "img/Golf.jpg",
                    price: "49"
                },
                {
                    id: "5",
                    where: "Тунис",
                    city: "Порт Эль Кантауи",
                    hotelName: "El Mouradi Palace 5*",
                    hotel: "5",
                    feeding: "AI",
                    location: "40 км от международного аэропорта Энфида, в 8 км от центра г. Сусс.",
                    about: "Отель построен в 1995 году. последний ремонт проводился в 2001 году. Общая площадь территории составляет 135 000 кв.м.",
                    email: "info.palace@elmouradi.com",
                    website: "http://www.elmouradi.com/index_en.aspx?ilng=2&curr=2&user=869",
                    main_foto: "img/El.jpg",
                    price: "72"
                },
                {
                    id: "6",
                    where: "Турция",
                    city: "Кемер",
                    hotelName: "Ares Hotel Kemer 3*",
                    hotel: "3",
                    feeding: "AI",
                    location: "В 50 км от аэропорта г. Анталья, в центре Кемера.",
                    about: "Построен в 2000 году, общая площадь 4000 кв.м, последняя реставрация сделана в 2013 году. Отель с небольшой территорией. Один из вариантов экономичного отдыха в этом регионе. Состоит из одного 4-этажного здания и четырех 3-этажных зданий Apartment.",
                    email: "areshotels@hotmail.com",
                    website: "http://www.areshotels.com.tr/",
                    main_foto: "img/Ares.jpg",
                    price: "62"
                },
                {
                    id: "7",
                    where: "Турция",
                    city: "Сиде",
                    hotelName: "Cinar Garden Apart Hotel 4*",
                    hotel: "4",
                    feeding: "UAI",
                    location: "2 км от центра г. Сиде. 5 км от центра г. Манавгат. 65 км от аэропорта. 76 км от центра Анталии.",
                    about: "Отель расположен на территории красивого зеленого сада в античном городе Сиде. Ближайшая автобусная остановка находится в пяти минутах ходьбы от отеля.",
                    email: "info@cinargarden.com",
                    website: "http://cinargarden.com/",
                    main_foto: "img/Cinar.jpg",
                    price: "68"
                },
                {
                    id: "8",
                    where: "Египет",
                    city: "Шарм эль Шейх",
                    hotelName: "Aqua Blu Sharm 4*",
                    hotel: "4",
                    feeding: "UAI",
                    location: "В 18 км от аэропорта, в 10 км от Наамы Бей.",
                    about: "Отель построен в августе 2007 года, состоит из одного главного 2-этажного здания и пяти одноэтажных бунгало.",
                    email: "albatrossharm@pickalbatros.com",
                    website: "http://www.pickalbatros.com/",
                    main_foto: "img/Aqua.jpg",
                    price: "52"
                },
                {
                    id: "9",
                    where: "Египет",
                    city: "Хургада",
                    hotelName: "Falcon Hills Hotel 3*",
                    hotel: "3",
                    feeding: "AI",
                    location: "20 км от аэропорта г. Хургада. 12 км от г. Хургада.",
                    about: "Отель расположен недалеко от пляжа в 12 километрах от Хургады. Выдержан в греческом стиле. Общая площадь территории отеля — 22 000 квадратных метров.",
                    email: "panorama@panorama-hrg.com",
                    website: "http://www.panoramabungalows.com",
                    main_foto: "img/Falcon.jpg",
                    price: "43"
                },
                {
                    id: "10",
                    where: "Болгария",
                    city: "София",
                    hotelName: "София Гранд-отель 5*",
                    hotel: "5",
                    feeding: "UAI",
                    location: "Аэропорт Софии находится в 11 км от отеля.",
                    about: "Пятизвездочный бизнес-отель находится в центре Софии, рядом с основными культурными и историческими достопримечательностями курорта, недалеко от бизнес-района. Гостиница была открыта в мае 2004 г. Национальный театр, болгарский Национальный банк и все государственные учреждения находятся всего в нескольких шагах от отеля, а ближайшая станция метро – в 5 минутах ходьбы. Отель подойдет для бизнес-поездок и экскурсионного отдыха.",
                    email: "reservations@grandhotelsofia.bg",
                    website: "http://www.grandhotelsofia.bg",
                    main_foto: "img/sofia.jpg",
                    price: "71"
                },
                {
                    id: "11",
                    where: "Болгария",
                    city: "Бургас",
                    hotelName: "Amfora Beach 3*",
                    hotel: "3",
                    feeding: "BB",
                    location: "В южной части курорта Солнечный Берег (в 1 км от г. Несебр), рядом с отелем Imperial 4*, в 100 м от песчаного пляжа (от пляжа отель отделяют песчаные дюны)",
                    about: "Экономичный отель с открытым бассейном, находящийся в южной части курорта Солнечный Берег и всего в 100 м от песчаного пляжа, предлагает отдых по системе Все включено. До Несебра отсюда - около 1 км.",
                    email: "info@anforabeach.bg",
                    website: "http://www.anforabeach@anforabeach.bg",
                    main_foto: "img/Amfora.jpg",
                    price: "32"
                },
                {
                    id: "12",
                    where: "Болгария",
                    city: "Варна",
                    hotelName: "Zlaten Rog 3*",
                    hotel: "3",
                    feeding: "OB",
                    location: "Отель расположен в окружении парка Золотые Пески, примерно в 600 м от пляжа и в 500 м от центра курорта. Недалеко от отеля находится автобусная остановка, откуда можно самостоятельно добраться до Варны или до соседних курортов Северного побережья Болгарии",
                    about: "Недорогой отель с открытым бассейном расположился в окружении парка Золотые Пески, примерно в 600 м от пляжа и в 500 м от центра курорта. Недалеко от отеля находится автобусная остановка, откуда можно добраться до Варны.",
                    email: "zlatenrog_varna@abv.bg",
                    website: "ttp://www.zlatenrog.com/bg",
                    main_foto: "img/Zlaten.jpg",
                    price: "29"
                }
            ]
        };
    }

    render() {

        return <div>
            <h1>ВЫБОР ТУРА</h1>
            <div id="options">
                <div id="hotels">
                    <div id="tourTable">
                        <Row className="show-grid">
                            <Col xs={12} sm={5} md={4} lg={4} id="filters">
                                <Filter submitHandler={this.handlerFilterSubmit}/>
                            </Col>
                            <Col xs={12} sm={6} md={7} lg={7} id="result">
                                <TourList toursData={this.state.toursData}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>;
    }

    handlerFilterSubmit(filterData) {
        this.state.toursData = this.callOnServerEmulation(filterData);
    }

    callOnServerEmulation(filterData) {
        var allTours = [
            {
                id: "1",
                where: "Турция",
                city: "Алания",
                hotelName: "Hedef Beach Resort & Spa 5*",
                hotel: "5",
                feeding: "UAI",
                location: "Отель расположен в 100 км от аэропорта г. Анталья.",
                about: "Отель расположен в 10 км от г. Аланья, в поселке Конаклы, на берегу моря. Построен в 2012 году, общая площадь 25 000 м2. Благодаря инфраструктуре и услугам, которые оказываются в отеле, его оценят молодежь, семьи с детьми, влюбленные пары и пожилые люди.",
                email: "info@hedefbeach.com",
                website: "http://www.hedefbeach.com",
                main_foto: "img/Hedef.jpg",
                price: "93"
            },
            {
                id: "2",
                where: "Египет",
                city: "Хургада",
                hotelName: "Hawaii Le Jardin Aqua Park 5*",
                hotel: "5",
                feeding: "AI",
                location: "В 20 км от аэропорта Хургады, в 7 км от центра Старого города.",
                about: "Открытие отеля состоялось в 2008 году. Отель с небольшой зеленой территорией. Рекомендуем для семейного отдыха с детьми. Отель состоит из основного 5-этажного здания.",
                email: "ahmed.amer@sunrisehotels-egypt.com",
                website: "https://festivalhotels.direct-reservation.net/en/accommodation",
                main_foto: "img/Hawaii.jpg",
                price: "67"
            },
            {
                id: "3",
                where: "Тунис",
                city: "Сусс",
                hotelName: "Dreams Beach 3*",
                hotel: "3",
                feeding: "FB",
                location: "в 143 км от аэропорта г. Туниса, в 26 км от аэропорта г. Монастир.",
                about: "Отель расположен в 3,5 км от Порт Эль Кантауи, в 2,5 км от исторического центра г. Сусс. Отель построен в 1998 г.",
                email: "dbeach.reservation@gnet.tn",
                website: "http://www.dreamsbeach-tunisia.com",
                main_foto: "img/Dreams.jpg",
                price: "39"
            },
            {
                id: "4",
                where: "Тунис",
                city: "Порт Эль Кантауи",
                hotelName: "Golf Residence 4*",
                hotel: "4",
                feeding: "AI",
                location: "Расстояние до аэропорта Монастир составляет 25 км.",
                about: "Гостиница расположена в Порту Эль Кантауи, в 10 км от центра города Сусс. Отель был открыт в 1992 году, последняя реновация проводилась в 2008 году. Отсюда можно легко добраться до главных достопримечательностей региона. Поблизости расположено поле для гольфа, аквапарк и торгово-развлекательный центр. Отель подойдет для семейного отдыха с детьми.",
                email: "golf.residence@gnet.tn",
                website: "http://golfresidence.com/",
                main_foto: "img/Golf.jpg",
                price: "49"
            },
            {
                id: "5",
                where: "Тунис",
                city: "Порт Эль Кантауи",
                hotelName: "El Mouradi Palace 5*",
                hotel: "5",
                feeding: "AI",
                location: "40 км от международного аэропорта Энфида, в 8 км от центра г. Сусс.",
                about: "Отель построен в 1995 году. последний ремонт проводился в 2001 году. Общая площадь территории составляет 135 000 кв.м.",
                email: "info.palace@elmouradi.com",
                website: "http://www.elmouradi.com/index_en.aspx?ilng=2&curr=2&user=869",
                main_foto: "img/El.jpg",
                price: "72"
            },
            {
                id: "6",
                where: "Турция",
                city: "Кемер",
                hotelName: "Ares Hotel Kemer 3*",
                hotel: "3",
                feeding: "AI",
                location: "В 50 км от аэропорта г. Анталья, в центре Кемера.",
                about: "Построен в 2000 году, общая площадь 4000 кв.м, последняя реставрация сделана в 2013 году. Отель с небольшой территорией. Один из вариантов экономичного отдыха в этом регионе. Состоит из одного 4-этажного здания и четырех 3-этажных зданий Apartment.",
                email: "areshotels@hotmail.com",
                website: "http://www.areshotels.com.tr/",
                main_foto: "img/Ares.jpg",
                price: "62"
            },
            {
                id: "7",
                where: "Турция",
                city: "Сиде",
                hotelName: "Cinar Garden Apart Hotel 4*",
                hotel: "4",
                feeding: "UAI",
                location: "2 км от центра г. Сиде. 5 км от центра г. Манавгат. 65 км от аэропорта. 76 км от центра Анталии.",
                about: "Отель расположен на территории красивого зеленого сада в античном городе Сиде. Ближайшая автобусная остановка находится в пяти минутах ходьбы от отеля.",
                email: "info@cinargarden.com",
                website: "http://cinargarden.com/",
                main_foto: "img/Cinar.jpg",
                price: "68"
            },
            {
                id: "8",
                where: "Египет",
                city: "Шарм эль Шейх",
                hotelName: "Aqua Blu Sharm 4*",
                hotel: "4",
                feeding: "UAI",
                location: "В 18 км от аэропорта, в 10 км от Наамы Бей.",
                about: "Отель построен в августе 2007 года, состоит из одного главного 2-этажного здания и пяти одноэтажных бунгало.",
                email: "albatrossharm@pickalbatros.com",
                website: "http://www.pickalbatros.com/",
                main_foto: "img/Aqua.jpg",
                price: "52"
            },
            {
                id: "9",
                where: "Египет",
                city: "Хургада",
                hotelName: "Falcon Hills Hotel 3*",
                hotel: "3",
                feeding: "AI",
                location: "20 км от аэропорта г. Хургада. 12 км от г. Хургада.",
                about: "Отель расположен недалеко от пляжа в 12 километрах от Хургады. Выдержан в греческом стиле. Общая площадь территории отеля — 22 000 квадратных метров.",
                email: "panorama@panorama-hrg.com",
                website: "http://www.panoramabungalows.com",
                main_foto: "img/Falcon.jpg",
                price: "43"
            },
            {
                id: "10",
                where: "Болгария",
                city: "София",
                hotelName: "София Гранд-отель 5*",
                hotel: "5",
                feeding: "UAI",
                location: "Аэропорт Софии находится в 11 км от отеля.",
                about: "Пятизвездочный бизнес-отель находится в центре Софии, рядом с основными культурными и историческими достопримечательностями курорта, недалеко от бизнес-района. Гостиница была открыта в мае 2004 г. Национальный театр, болгарский Национальный банк и все государственные учреждения находятся всего в нескольких шагах от отеля, а ближайшая станция метро – в 5 минутах ходьбы. Отель подойдет для бизнес-поездок и экскурсионного отдыха.",
                email: "reservations@grandhotelsofia.bg",
                website: "http://www.grandhotelsofia.bg",
                main_foto: "img/sofia.jpg",
                price: "71"
            },
            {
                id: "11",
                where: "Болгария",
                city: "Бургас",
                hotelName: "Amfora Beach 3*",
                hotel: "3",
                feeding: "BB",
                location: "В южной части курорта Солнечный Берег (в 1 км от г. Несебр), рядом с отелем Imperial 4*, в 100 м от песчаного пляжа (от пляжа отель отделяют песчаные дюны)",
                about: "Экономичный отель с открытым бассейном, находящийся в южной части курорта Солнечный Берег и всего в 100 м от песчаного пляжа, предлагает отдых по системе Все включено. До Несебра отсюда - около 1 км.",
                email: "info@anforabeach.bg",
                website: "http://www.anforabeach@anforabeach.bg",
                main_foto: "img/Amfora.jpg",
                price: "32"
            },
            {
                id: "12",
                where: "Болгария",
                city: "Варна",
                hotelName: "Zlaten Rog 3*",
                hotel: "3",
                feeding: "OB",
                location: "Отель расположен в окружении парка Золотые Пески, примерно в 600 м от пляжа и в 500 м от центра курорта. Недалеко от отеля находится автобусная остановка, откуда можно самостоятельно добраться до Варны или до соседних курортов Северного побережья Болгарии",
                about: "Недорогой отель с открытым бассейном расположился в окружении парка Золотые Пески, примерно в 600 м от пляжа и в 500 м от центра курорта. Недалеко от отеля находится автобусная остановка, откуда можно добраться до Варны.",
                email: "zlatenrog_varna@abv.bg",
                website: "ttp://www.zlatenrog.com/bg",
                main_foto: "img/Zlaten.jpg",
                price: "29"
            }
        ];
        var toursToReturn = [];
        for (var i = 0; i < allTours.length; i++) {
            if (filterData.To == allTours[i].where) {
                var stars = filterData.Stars;
                var food = filterData.Food;
                if (filterData.Children == "Нет" || filterData.Children == "initial") {
                    var duration = parseInt(filterData.Duration);
                    var costOfTour = Math.ceil(duration * allTours[i].price * filterData.Adults);
                } else {
                    var duration = parseInt(filterData.Duration);
                    var costOfTour = Math.ceil(duration * allTours[i].price * filterData.Adults + filterData.Children * allTours[i].price * 0.6);
                }
                if ((filterData.Stars == "initial" || stars.includes(allTours[i].hotel)) && (food == "initial" || food.includes(allTours[i].feeding))
                    && ((filterData.Lowest <= costOfTour && filterData.Highest >= costOfTour) || (filterData.Lowest <= costOfTour && filterData.Highest == "initial" ))) {
                    toursToReturn.push(allTours[i]);
                }
            }
        }
        this.state.toursData = toursToReturn;
        // это проверка что действиетльно d у меня 3 объекта
        console.log(this.state.toursData)
        return toursToReturn;


    }

};



