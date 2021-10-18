# Lineate Offer Day. Задание - React

## Приложение
Перед вами код приложения, которое отображает список книг из открытого источника
на основе введенного значения.

### Функциональность
1. Введите целиком или частично название книги на английском языке
2. Дождитесь ответа от API. Под элементом поиска отобразится общее количество найденных книг по названию или автору.
3. По умолчанию, приложение загружает первые 10 записей. Если общее количество больше 10, внизу страницы
отображается кнопка "Load More Books". После нажатия на кнопку, загружаются следующие 10 записей и так далее.

### Оффлайн режим
Если вы увидите сообщение об ошибке на стороне API - нажмите чекбокс, чтобы перейти в Оффлайн режим.
Оффлайн режим ограничивает функциональность приложения и включается только если API не отвечает (появляется сообщение об ошибке):
 
- не отображается поисковая строка
- используются Mock данные 
- кнопка "Load More Books" отображается всегда
- общее число записей статично

Однако, эти ограничения не препятствуют выполнению задания.

## Задания

### Задание №1
Требуется изменить функционал подгрузки записей, в случае если их общее число превышает 10.

- Удалить кнопку "Load More Books"
- Реализовать поведение, при котором записи автоматически будут подгружаться когда юзер
доскроллил до последней из тех, что уже отображаются.

### Задание №2
Props пробрасываются через множество компонентов. Необходимо решить эту проблему, не прибегая к сторонним библиотекам


### Задание №3
Предполагается, что Задание №1 выполнено. Требуется реализовать следующий функционал:

- "Честный" скроллбар, который напрямую зависит от общего количества записей.
Размер скроллбара не должен меняться по мере загрузки новых записей, 
а изначально должен отражать общее количество записей.
- При прокрутке страницы вниз пользователь должен видеть "заготовки" под загружаемые записи
- Пример подобной реализации можно посмотреть [здесь](https://find-a-book-566a0.web.app/)

## Примечания

- Если вам хочется что-то где-то отрефакторить или переделать - это только приветствуется, действуйте!
- Оформление заданий отдельными осмысленными коммитами также приветствуется, но это опционально

## Как оформить решение
Решением должна быть ссылка на публичный репозиторий с выполненными заданиями. Алгоритм действий такой:

1. Скачать исходный код этого репозитория (пожалуйста, **НЕ делайте fork**, иначе ваше решение будет видно всем кандидатам)
2. Выполнить задания
3. Загрузить код на любую удобную платформу (Github, Bitbucket, etc.), не забудьте сделать репозиторий публичным
4. Отправить ссылку на репозиторий в форме на странице события
