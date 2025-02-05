alert("Sizda hozir random sonlar chiqishni boshlaydi");
let num = Math.round(Math.random() * 100);
alert(`Random orqali chiqqan son : ${num}`);
confirm("Biz random sonni 5 ga kopaytirmoqchi va bo'lmoqchimiz !");
alert(`Random orqali chiqqan son: ${num} edi,
    Biz uni 4 ga ko'paytirib: ${num * 2} sonini chiqardik,
    va shu sonni 7 ga bo'lib: ${num / 2} sonini chiqardik,
    va shu sonni 8 ga bolgandagi qoldiq: ${num % 3} sonini chiqardik`
)