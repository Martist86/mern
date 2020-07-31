import LocalizedStrings from 'react-localization';
let lclzStor: any = new LocalizedStrings({
    "ua" : {
        password: "Пароль",
        confirmPassword: "Повторити пароль",
        firstName: "Ім'я",
        lastName: "Прізвище",
        email: "email",
        login: "Зайти",
        haveAnAccount: "Маєш аккаунт",
        passwordsDoNotMatch: "Паролі не однакові",
        register: "Зареєструватись",
        makeAccount: "створити аккаунт"

    },
    "ru": {
        password: "Пароль",
        confirmPassword: "Повторить пароль",
        firstName: "Имя",
        lastName: "Фамилия",
        email: "email",
        login: "Войти",
        haveAnAccount: "Есть акаунт",
        passwordsDoNotMatch: "Пароли не одинаковые",
        register: "Зарегестрироваться",
        makeAccount: "создать аккаунт"

    }
});
export default lclzStor;
