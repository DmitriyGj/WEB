
function vyvod()
{
   /* Уважаемый отправитель!
    Ваше сообщение: « Текст сообщения »  на тему « Тема »  отправлено по адресу « E-mail ».
    Получение подтверждено (если Флаг отмечен).
    (Текст и тему выделить жирным шрифтом красного цвета, Е-mail – синим курсивом)*/
    let anketa = document.anketa;
    let email = anketa.email_field.value;
    let topic = anketa.topic_field.value;
    let message = anketa.message_field.value;
    let confirm = anketa.confirm_flag.checked;
    document.write('<link rel = "stylesheet" href="stylesheet.css">')
    document.write('<body class="result">')
    document.write('<p>Уважаемый отправитель!</p>')
    document.write(`<p> Ваше сообщение: <span id="mt">${message}</span> на тему <span id="mt">${topic}</span>  отправлено по адресу 
        <span id="email">${email}</span>.</p>`);
    if(confirm) document.write('<p>Получение подтверждено</p>');
}