# Test info

- Name: Вход и выход >> Проверка выхода
- Location: /Users/darinchik/Downloads/mailru-playwright/e2e/login.spec.ts:208:7

# Error details

```
Error: locator.click: Test timeout of 120000ms exceeded.
Call log:
  - waiting for getByText('Sign in').first()
    - locator resolved to <span class="vkuiButton__content">Sign in</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    - waiting for" https://auth.mail.ru/api/v1/vkid_auth/by_silent_token?state=AG_V1jK6fLHZiLU2B9fzqZPl01&silent_token=YNe2483yttUj4uWRB4Fi5Ax-gyQRk-MY0v0sF2aI7EHNTBsYUDGd1JtO0aYkgVHMK3NZIuKbFlk0cJcXuZIVlSiIOLHb2b8ZFiE…" navigation to finish...
    - navigated to "https://e.mail.ru/inbox?authid=mc22mlfw.qhn&autologin=no&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1"
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - waiting for" https://e.mail.ru/inbox?authid=mc22mlfw.qhn&autologin=no&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1" navigation to finish...
    - navigated to "https://e.mail.ru/inbox?authid=mc22mlfw.qhn&autologin=no&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1"

    at /Users/darinchik/Downloads/mailru-playwright/e2e/login.spec.ts:195:47
```

# Page snapshot

```yaml
- link "Перейти на версию для людей с ограниченными возможностями.":
  - /url: //r.mail.ru/n373730784
- link "Mail":
  - /url: https://mail.ru/
  - img "Mail"
- navigation "Проекты":
  - list:
    - listitem:
      - link "Главная":
        - /url: https://mail.ru/?utm_source=portal&utm_medium=logo_portal_navigation&utm_campaign=mail.ru&mt_link_id=o4lsx4&mt_sub1=e.mail.ru&mt_sub5=674
    - listitem:
      - link "Почта 999+":
        - /url: https://e.mail.ru/?utm_source=portal&utm_medium=portal_navigation_under_search_exp&utm_campaign=e.mail.ru&mt_link_id=jlsxn4&mt_sub1=e.mail.ru&mt_sub3=174499333&mt_sub4=413305&mt_sub5=674
    - listitem:
      - link "Облако":
        - /url: https://cloud.mail.ru/?utm_source=portal_navigation_under_search_exp&utm_medium=link&utm_campaign=portal_navi&mt_link_id=f0dxi9&mt_sub1=e.mail.ru&mt_sub5=674
    - listitem:
      - link "Календарь":
        - /url: https://calendar.mail.ru/?utm_source=portal&utm_medium=portal_navigation_under_search_exp&utm_campaign=calendar.mail.ru&mt_link_id=wim9e3&mt_sub1=e.mail.ru&mt_sub5=674
  - button "Все проекты":
    - text: Все проекты
    - img
- text: Поиск по почте
- img
- iframe
- img "chernyshovde2015@mail.ru"
- link "Написать письмо":
  - /url: /compose/
- img
- navigation:
  - link "Входящие 999+":
    - /url: /inbox/?
    - img
    - text: Входящие 999+
  - link "Социальные сети 37":
    - /url: /social/?
    - img
    - text: Социальные сети 37
  - link "Рассылки 999+":
    - /url: /newsletters/?
    - img
    - text: Рассылки 999+
  - link "Госписьма 135":
    - /url: /official/?
    - img
    - text: Госписьма 135
  - link "Новости":
    - /url: /news/?
    - img
    - text: Новости
  - link "Чеки 544":
    - /url: /receipts/?
    - img
    - text: Чеки 544
  - link "Учёба 141":
    - /url: /study/?
    - img
    - text: Учёба 141
  - link "Игры":
    - /url: /games/?
    - img
    - text: Игры
  - link "Письма себе 12":
    - /url: /tomyself/?
    - img
    - text: Письма себе 12
  - link "Дельные письма":
    - /url: /1/?
    - img
    - text: Дельные письма
  - link "Отправленные":
    - /url: /sent/?
    - img
    - text: Отправленные
  - link "Черновики":
    - /url: /drafts/?
    - img
    - text: Черновики
  - link "Спам":
    - /url: /spam/?
    - img
    - text: Спам
  - link "Корзина":
    - /url: /trash/?
    - img
    - text: Корзина
  - img
  - text: Новая папка
- img
- text: Настройки Реклама 12+
- img "Х"
- 'link "Театр Эстрады им. Аркадия Райкина Италия в Санкт-Петербурге! Этим летом на сцене Театра Эстрады состоится настоящий Венецианский карнавал с авторской музыкой, хореографией и эффектными декорациями. История о поиске счастья, любви или смысла жизни — если угодно — родится прямо на глазах публики в Театре Эстрады. Все это в пьесе «Три апельсина. Карнавал». Покупайте билеты на официальном сайте: cсылка Перейти"':
  - /url: https://away.vk.com/away.php?mrrto=https%3A%2F%2Fclck.ru%2F3MY3E6&clk=NCmv5WQH7COP6vSvBxI7AulM14Yg0QLOtBxjxDZlX1iFaM1Ennxn5xPQdkbww/H8Oyt0qF0v4il384cCj2hYRtLwlny8YMSdLTZKbrBVIJAxBLzK6/sv4eWojXMTjff4hqlz7OXUB5ed20TAO4jWQa8HN/Gds5j0euuW3ERwanyWPZQKNnADPPXdml*fqXon/yUugSU0IcDNtlYYw5yCIXMHN39gkXhswWCcDxYnXn0V01RJ7pm*GbRIRSGfFEb*JgcfL0WxLfXhr0AB0azu*RytjaVUohmnf2uUe1pF*7ZFAmMyHcX1GUjhN3QfSLru9ZkrkTmsUCtfuKWn2XKtrX3fLKhtY2heLhTsFI4QdwQtyhF*frNSBYHwwuRKo6G9DLZzKToc5zGIfvlKVr3ZBxSgnrpLWm4yJsBew*5*BxXSvUz6cSKtPafV/FIe262DVAD08pFkMRLvevxv6vmzXNtrqqyyQq/DSHQCHbazp3075p65PZUJGUiYaf4k20LZOnbjDTwl3PG/HwqwvVad8WTpnqFnUxQyv*7MB9r8*FJj26hrTn1C/TbLRz1Kfggwt2l5SBIyjxvjLPI3z28sqvj86RyS07GGyUPKNYU8RqQQywxkzjJ/3oUJuxkF6Q*XvjsXSaJARbBOG9LFTpMbVoqIGaH3ETsO9F2ph/s8k9zBk5rQMewiiWWIBErjbbPirnHRxhDmDI8PwiTgEyXtLbppMLsvMy8msqIlAQn18eJ4NfX7Tsmq4hjnI868Q6XgudgjmmQTGYKlfw2Y8gLenrl1JWSq3sSKALh77jlwlR*QTwg*yBvPSe6MGi46hL*2FclGtLGFuv0VSdA9kxoFvQ--&cp=aes128:95bcbd2c8960634054305b1aa76e3dc7cfd3cfccd0d67e1a5a240b19a8323ac1&sp=aes128:18533f1a5982adab0b3c2fc86c527575e3af23301832f381a803aa1fddca0869&ai=8dee66c6c48975a431e51cfe48828750
  - text: "Театр Эстрады им. Аркадия Райкина Италия в Санкт-Петербурге! Этим летом на сцене Театра Эстрады состоится настоящий Венецианский карнавал с авторской музыкой, хореографией и эффектными декорациями. История о поиске счастья, любви или смысла жизни — если угодно — родится прямо на глазах публики в Театре Эстрады. Все это в пьесе «Три апельсина. Карнавал». Покупайте билеты на официальном сайте:"
  - link "cсылка":
    - /url: https://away.vk.com/away.php?mrrto=https%3A%2F%2Fclck.ru%2F3MY3E6&clk=NCmv5WQH7COP6vSvBxI7AulM14Yg0QLOtBxjxDZlX1iFaM1Ennxn5xPQdkbww/H8Oyt0qF0v4il384cCj2hYRtLwlny8YMSdLTZKbrBVIJAxBLzK6/sv4eWojXMTjff4hqlz7OXUB5ed20TAO4jWQa8HN/Gds5j0euuW3ERwanyWPZQKNnADPPXdml*fqXon/yUugSU0IcDNtlYYw5yCIXMHN39gkXhswWCcDxYnXn0V01RJ7pm*GbRIRSGfFEb*JgcfL0WxLfXhr0AB0azu*RytjaVUohmnf2uUe1pF*7ZFAmMyHcX1GUjhN3QfSLru9ZkrkTmsUCtfuKWn2XKtrX3fLKhtY2heLhTsFI4QdwQtyhF*frNSBYHwwuRKo6G9DLZzKToc5zGIfvlKVr3ZBxSgnrpLWm4yJsBew*5*BxXSvUz6cSKtPafV/FIe262DVAD08pFkMRLvevxv6vmzXNtrqqyyQq/DSHQCHbazp3075p65PZUJGUiYaf4k20LZOnbjDTwl3PG/HwqwvVad8WTpnqFnUxQyv*7MB9r8*FJj26hrTn1C/TbLRz1Kfggwt2l5SBIyjxvjLPI3z28sqvj86RyS07GGyUPKNYU8RqQQywxkzjJ/3oUJuxkF6Q*XvjsXSaJARbBOG9LFTpMbVoqIGaH3ETsO9F2ph/s8k9zBk5rQMewiiWWIBErjbbPirnHRxhDmDI8PwiTgEyXtLbppMLsvMy8msqIlAQn18eJ4NfX7Tsmq4hjnI868Q6XgudgjmmQTGYKlfw2Y8gLenrl1JWSq3sSKALh77jlwlR*QTwg*yBvPSe6MGi46hL*2FclGtLGFuv0VSdA9kxoFvQ--&cp=aes128:95bcbd2c8960634054305b1aa76e3dc7cfd3cfccd0d67e1a5a240b19a8323ac1&sp=aes128:18533f1a5982adab0b3c2fc86c527575e3af23301832f381a803aa1fddca0869&ai=8dee66c6c48975a431e51cfe48828750
  - text: Перейти
- img
- text: Выделить все
- img
- text: Отметить все прочитанными Фильтр
- img
- grid "grid":
  - rowgroup:
    - heading "Сегодня" [level=4]
    - link "Рассылки New Т-Банк, USmall, Университет ИТМО, Спортмастер, МФТИ, Petshop.ru зоомагазин, Randewoo.ru, Ozon Банк, Мне по силам, Город в Т-Банке, Т-Образование, Steady Hands, Geekboards Team, Учебный центр студенческой науки, конференций и выставок Университета ИТМО, Акселератор ИТМО, Факультет технологического менеджмента и инноваций ИТМО, Zapomni, ТВОЕ, Центр научной коммуникации Университета ИТМО, Библиотека Университета ИТМО, Физико-технический мегафакультет ИТМО Настроить 16:47":
      - /url: /newsletters/?
      - button:
        - img
      - text: Рассылки New Т-Банк, USmall, Университет ИТМО, Спортмастер, МФТИ, Petshop.ru зоомагазин, Randewoo.ru, Ozon Банк, Мне по силам, Город в Т-Банке, Т-Образование, Steady Hands, Geekboards Team, Учебный центр студенческой науки, конференций и выставок Университета ИТМО, Акселератор ИТМО, Факультет технологического менеджмента и инноваций ИТМО, Zapomni, ТВОЕ, Центр научной коммуникации Университета ИТМО, Библиотека Университета ИТМО, Физико-технический мегафакультет ИТМО
      - button "Настроить"
      - text: 16:47
    - link "Чеки New Ozon, Яндекс.ОФД, OFD.RU, CloudKassir, Apple, Платформа ОФД, Saby Настроить 0:26":
      - /url: /receipts/?
      - button:
        - img
      - text: Чеки New Ozon, Яндекс.ОФД, OFD.RU, CloudKassir, Apple, Платформа ОФД, Saby
      - button "Настроить"
      - text: 0:26
    - heading "Неделя" [level=4]
    - 'link "Пометить прочитанным Виктория Бабан через ИСУ ИТМО ИСУ ИТМО - Сообщение - Опрос в рамках ВКРДарина Денисовна, уведомление о новом сообщении в ИСУ ИТМО. От: Виктория Бабан Тема: Опрос в рамках 16 июн"':
      - /url: /inbox/0:17501015821349857500:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button
      - text: Виктория Бабан через ИСУ ИТМО
      - button "Пометить флажком":
        - img
      - text: "ИСУ ИТМО - Сообщение - Опрос в рамках ВКРДарина Денисовна, уведомление о новом сообщении в ИСУ ИТМО. От: Виктория Бабан Тема: Опрос в рамках 16 июн"
    - link "Пометить прочитанным Ozon 2 Поделитесь впечатлениемВам понравился заказ? 16 июн":
      - /url: /inbox/2:0f28798b095b8e8a:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button:
        - img
      - text: Ozon
      - button "Пометить флажком":
        - img
      - text: 2 Поделитесь впечатлениемВам понравился заказ?
      - img
      - text: 16 июн
    - link "Пометить прочитанным Ozon Часть заказа доставлена в пункт OzonЗаберите её до 21:00 понедельника, 30 июня. 16 июн":
      - /url: /inbox/2:665c38390f11929a:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button:
        - img
      - text: Ozon
      - button "Пометить флажком":
        - img
        - img
      - text: Часть заказа доставлена в пункт OzonЗаберите её до 21:00 понедельника, 30 июня.
      - img
      - text: 16 июн
    - link "Пометить прочитанным Ozon 2 Поделитесь впечатлениемВам понравился заказ? 14 июн":
      - /url: /inbox/2:dddcee398ce65bc7:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button:
        - img
      - text: Ozon
      - button "Пометить флажком":
        - img
      - text: 2 Поделитесь впечатлениемВам понравился заказ?
      - img
      - text: 14 июн
    - 'link "Пометить прочитанным agent@isu.ifmo.ru ИСУ - ваша заявка на бронирование согласованаДарина Денисовна, заявка на помещение согласована Дата обработки: 13.06.2025 09:24 Помещение: Перего 13 июн"':
      - /url: /inbox/0:17497958780870174930:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button
      - text: agent@isu.ifmo.ru
      - button "Пометить флажком":
        - img
      - text: "ИСУ - ваша заявка на бронирование согласованаДарина Денисовна, заявка на помещение согласована Дата обработки: 13.06.2025 09:24 Помещение: Перего 13 июн"
    - link "Госписьма New Госуслуги, Наш Санкт-Петербург Настроить 11 июн":
      - /url: /official/?
      - button:
        - img
      - text: Госписьма New Госуслуги, Наш Санкт-Петербург
      - button "Настроить"
      - text: 11 июн
    - heading "Июнь 2025" [level=4]
    - link "Пометить прочитанным iCloud Хранилище iCloud заполненоХранилище iCloud заполнено. Вы уже используете все пространство в хранилище, поэтому создание резерв 10 июн":
      - /url: /inbox/0:17495734490676001270:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button:
        - img
      - text: iCloud
      - button "Пометить флажком":
        - img
        - img
      - text: Хранилище iCloud заполненоХранилище iCloud заполнено. Вы уже используете все пространство в хранилище, поэтому создание резерв
      - img
      - text: 10 июн
    - link "Пометить прочитанным Ozon 3 Поделитесь впечатлениемВам понравился заказ? 10 июн":
      - /url: /inbox/2:84324240b85c1969:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button:
        - img
      - text: Ozon
      - button "Пометить флажком":
        - img
      - text: 3 Поделитесь впечатлениемВам понравился заказ?
      - img
      - text: 10 июн
    - link "Пометить прочитанным Ozon 3 Поделитесь впечатлениемВам понравился заказ? 10 июн":
      - /url: /inbox/2:05aa7ddc2e2020aa:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button:
        - img
      - text: Ozon
      - button "Пометить флажком":
        - img
      - text: 3 Поделитесь впечатлениемВам понравился заказ?
      - img
      - text: 10 июн
    - link "Пометить прочитанным Ozon 3 Поделитесь впечатлениемВам понравился заказ? 10 июн":
      - /url: /inbox/2:5a6e07760d1cfb05:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button:
        - img
      - text: Ozon
      - button "Пометить флажком":
        - img
      - text: 3 Поделитесь впечатлениемВам понравился заказ?
      - img
      - text: 10 июн
    - link "Пометить непрочитанным USmall Задержка доставкиИз-за отмены рейсов Одежда Бельё Обувь Аксессуары Распродажа Из-за атаки дронов московские аэропорты 9 июн":
      - /url: /inbox/0:17494950081903222229:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить непрочитанным"
      - button
      - text: USmall
      - button "Пометить флажком":
        - img
      - text: Задержка доставкиИз-за отмены рейсов Одежда Бельё Обувь Аксессуары Распродажа Из-за атаки дронов московские аэропорты 9 июн
    - link "Айтишники Реклама Кто такие и как ими стать Перейти":
      - /url: https://r.mail.ru/redir/AACC_AEq5lFNczS4TILkKmKwYerRY96KWi2oUPaqZfbC30Pj4NAps41ExWwudhHHBzyXaRdQ8r6WvqXfajsnrjqS-HJW2mgTJf4aw7LOBCOHZqRuCO2RV_j4h71kUEAMwQNlxrHEOg31jdc3T12lVrL9h4MeOPTqCKeG0MlsfTxpCGf6b5jGigmcAQAAKswdGLAeTK0V1mpsq5DoUdsQHeJLs7JP8mW7DsNm9efC1xlATM_pZ0593_MzDzeHIFmxX2OYk63RfWAPLVxr51Rp8gmwYNw598mWHOGp1JerbCSkizJ8EekJ9Wl1Jn8mMTBdHEWjS4Qv7wgWX-dMG3KKC7hHoANiJpQG5ltiS-tgY842A9ETN-C44gSUe9ToWM6sY8rxJYqj4YuYp1POLgJRN9TClUhxN08kMw9wtDOmEsQhVdv8GhP3bAxNm8X0wItKNHUvOjSjAtzWI5yezi3y1VjwkKI-JEGK0_lARLOmqJBFV6w22uvIRMkv2Ij8VvT2tvliNtPn5sR6xdeQTv2DWu9YkZKeVd_1R9N5HXathBN_R0rJ-JyZ8iecQFfk7Xdr-pukUvljPa0AClafq2HtDxo10F-5ICzGzcoelkisexeKm3vs1vCJeiDb83nJZra7i_kisg47VGz_-2S_l2aRUuDE5BjQARfYfenucDsBouEpormKG71RXEUML5TDVZPnQo4rai7H0DwIg3AerPlumBfq0SDJ8lpNvG6QQzY
    - link "Учёба New Stepik Team, Лекториум, Основы Linux Настроить 6 июн":
      - /url: /study/?
      - button:
        - img
      - text: Учёба New Stepik Team, Лекториум, Основы Linux
      - button "Настроить"
      - text: 6 июн
    - link "Пометить прочитанным Служба рассылки Boxberry 2 Информация по доставке 0000610444563Информация о вашей посылке и другие полезные предложения Посылка поступила в отделение Заказ № 1P000 5 июн":
      - /url: /inbox/2:0ff2d0d28dff7a6a:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button:
        - img
      - text: Служба рассылки Boxberry
      - button "Пометить флажком":
        - img
      - text: 2 Информация по доставке 0000610444563Информация о вашей посылке и другие полезные предложения Посылка поступила в отделение Заказ № 1P000
      - img
      - text: 5 июн
    - link "Пометить прочитанным USmall 10 Заказ №1362863 доставлен!Спасибо за покупку Оформление Отправление Таможня Получение Дарина, ваш заказ №1362863 доставлен! Не Отписаться 4 июн":
      - /url: /inbox/2:4ea213303c4814cb:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button
      - text: USmall
      - button "Пометить флажком":
        - img
      - text: 10 Заказ №1362863 доставлен!Спасибо за покупку Оформление Отправление Таможня Получение Дарина, ваш заказ №1362863 доставлен! Не Отписаться
      - img
      - text: 4 июн
    - 'link "Пометить непрочитанным Документооборот ИСУ ИТМО ИСУ ИТМО - Новые документыВам предоставлен доступ к нескольким новым документам, а именно: 1. Приказы по основной деятельности 4 июн"':
      - /url: /inbox/0:17490404610397317451:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить непрочитанным"
      - button
      - text: Документооборот ИСУ ИТМО
      - button "Пометить флажком":
        - img
      - text: "ИСУ ИТМО - Новые документыВам предоставлен доступ к нескольким новым документам, а именно: 1. Приказы по основной деятельности 4 июн"
    - link "Пометить прочитанным Дистанционное обучение ИТМО ИСУ ИТМО - Дистанционное обучениеИнформируем Вас, что Консультация к экзамену по дисциплине Философия, преподаватель Погребняк А.А., 4 июн":
      - /url: /inbox/0:17490395940619204815:0/?authid=mc22mlfw.qhn&back=1&dwhsplit=s10273.b1s&from=login&x-login-auth=1
      - complementary "Пометить прочитанным"
      - button
      - text: Дистанционное обучение ИТМО
      - button "Пометить флажком":
        - img
      - text: ИСУ ИТМО - Дистанционное обучениеИнформируем Вас, что Консультация к экзамену по дисциплине Философия, преподаватель Погребняк А.А., 4 июн
- img
- button "Убрать рекламу за 1 ₽"
- img
- img
- text: "Лжи пришёл конец! Глава разведки США заявила: на Украине создавали биооружие! Перейти newskiev.ru"
- img
- text: Реклама 18+
- img
- text: Реклама
- img
- img
- text: Гарантии по пунктам Россия предложила прочный мир - разбираем меморандум РФ Перейти ria.ru
- img
- text: Реклама 18+
- img
- textbox
- img
- img
- text: Сколтех 25 июня подключайтесь к онлайн-трансляции Дня открытых дверей магистратуры Сколтеха. Зарегистрироваться
- img
- text: student.skoltech.ru
- img
- img
- text: Реклама 0+
- img
- iframe
```

# Test source

```ts
   95 | //     const loginButtons = page.locator('button:has-text("Войти"), button:has-text("Sign in")');
   96 | //     const count = await loginButtons.count();
   97 | //
   98 | //     if (count === 0) {
   99 | //       throw new Error('Не найдено ни одной кнопки входа');
  100 | //     }
  101 | //
  102 | //     // Выбираем последнюю кнопку (обычно это основная)
  103 | //     await loginButtons.nth(count - 1).click();
  104 | //     await page.waitForTimeout(3000);
  105 | //
  106 | //     // 6. Проверка на капчу
  107 | //     const captcha = await page.getByText(/Капча|Captcha|Подтвердите/).isVisible().catch(() => false);
  108 | //     if (captcha) {
  109 | //       await page.screenshot({ path: 'captcha.png' });
  110 | //       console.log('⚠️ Обнаружена капча! Требуется ручной ввод');
  111 | //       await page.pause();
  112 | //       return;
  113 | //     }
  114 | //
  115 | //     // 7. Ожидание поля пароля с несколькими стратегиями
  116 | //     const passwordField = page.locator('input[name="password"], input[type="password"]');
  117 | //     const isPasswordVisible = await passwordField.isVisible().catch(() => false);
  118 | //
  119 | //     if (!isPasswordVisible) {
  120 | //       // Попытка альтернативного пути входа
  121 | //       try {
  122 | //         await page.getByText(/Другой способ|Try another way/).click({ timeout: 5000 });
  123 | //         await page.waitForTimeout(1000);
  124 | //         await page.getByText(/Пропустить|Skip/).click({ timeout: 5000 });
  125 | //         await page.waitForTimeout(1000);
  126 | //       } catch {
  127 | //         console.log('Альтернативный путь входа не доступен');
  128 | //       }
  129 | //     }
  130 | //
  131 | //     // Ожидаем появление поля пароля
  132 | //     await passwordField.waitFor({ state: 'visible', timeout: 30000 });
  133 | //
  134 | //     // 8. Ввод пароля
  135 | //     await passwordField.fill('darishka-Cher0928', {
  136 | //       delay: 30 + Math.floor(Math.random() * 70),
  137 | //       force: true
  138 | //     });
  139 | //     await page.waitForTimeout(1000);
  140 | //
  141 | //     // 9. Клик по кнопке подтверждения
  142 | //     const submitButtons = page.locator('button:has-text("Войти"), button:has-text("Sign in")');
  143 | //     await submitButtons.last().click();
  144 | //
  145 | //     // 10. Проверка успешного входа
  146 | //     await page.waitForURL(/inbox/, { timeout: 60000 });
  147 | //     await page.locator('[aria-label="Входящие"]').waitFor({ state: 'visible', timeout: 30000 });
  148 | //
  149 | //     console.log('✅ Успешный вход в почту');
  150 | //   } catch (error) {
  151 | //     // Попытка сделать скриншот перед закрытием страницы
  152 | //     try {
  153 | //       await page.screenshot({ path: `error-${Date.now()}.png` });
  154 | //     } catch (screenshotError) {
  155 | //       console.error('Не удалось сделать скриншот:', screenshotError);
  156 | //     }
  157 | //
  158 | //     console.error('❌ Ошибка:', error);
  159 | //     throw error;
  160 | //   }
  161 | // });
  162 |
  163 | import { test, expect } from '@playwright/test';
  164 |
  165 |
  166 | test.describe('Вход и выход', () =>
  167 | {
  168 |
  169 |   test.beforeEach(async ({page}) => {
  170 |
  171 |       // await page.goto('https://account.mail.ru/login?page=https%3A%2F%2Fe.mail.ru%2Finbox%3Fautologin%3Dno&allow_external=1&from=octavius');
  172 |       await page.goto('https://e.mail.ru');
  173 |       // await page.context().clearCookies();
  174 |       // await page.addInitScript(() =>{
  175 |       //     window.localStorage.clear();
  176 |       //     window.sessionStorage.clear();
  177 |       // })
  178 |
  179 |
  180 |       await page.getByText('Other').nth(1);
  181 |       await page.getByRole('textbox', {name: 'Account name'}).fill('chernyshovde2015@mail.ru');
  182 |
  183 |       await page.locator('[data-test-id="login-form-type-default"]').getByRole('button', {name: 'Sign in'}).click();
  184 |       // await page.locator('[test-id="continue-button"]').getByRole('button', {name: 'Continue'}).click();
  185 |
  186 |
  187 |       await page.locator('[data-test-id="bind-screen-vkid-change-restore-type-btn"]').click();
  188 |       await page.locator('[data-test-id="vkid-bind-extra-screen-vkid_is_not_vkontakte-cancel"]').click();
  189 |
  190 |       // await page.locator('input[name="password"]').fill('darishka-Cher0928');
  191 |       await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').click();
  192 |       await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').fill('darishka-Cher0928');
  193 |       await page.locator('[data-test-id="submit"]').click();
  194 |
> 195 |       await page.getByText('Sign in').first().click();
      |                                               ^ Error: locator.click: Test timeout of 120000ms exceeded.
  196 |   })
  197 |
  198 |   test('Проверка входа', async ({ page }) => {
  199 |
  200 |       await expect(page).toHaveURL(/inbox/, { timeout: 150000 });
  201 |
  202 |     const inboxLocator = page.locator('[data-testid="whiteline-account"]');
  203 |     await expect(inboxLocator).toBeVisible({ timeout: 15000 });
  204 |
  205 |     console.log('При входе вы успешно зашли');
  206 |   });
  207 |
  208 |   test('Проверка выхода', async ({ page }) => {
  209 |
  210 |       await page.locator('[data-test-id="bind-screen-vkid-change-restore-type-btn"]').click();
  211 |     await page.locator('[data-test-id="vkid-bind-extra-screen-vkid_is_not_vkontakte-cancel"]').click();
  212 |
  213 |     await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').click();
  214 |     await page.locator('[data-test-id="password-iframe"]').contentFrame().locator('[data-test-id="vkid-password-input"]').fill('darishka-Cher0928');
  215 |
  216 |     await page.locator('[data-test-id="submit"]').click();
  217 |     await page.getByRole('img', { name: 'chernyshovde2015@mail.ru' }).click();
  218 |
  219 |     await page.getByText('Log out').click();
  220 |
  221 |       const inboxLocator = page.locator('[data-testid="whiteline-account"]');
  222 |       await expect(inboxLocator).toBeVisible({ timeout: 15000 });
  223 |
  224 |       console.log('При выходе вы успешно вышли');
  225 |   });
  226 | }
  227 | )
```