const validPassword = 'sortudo'
const validUserName = 'Eddie'
const noUserNameLoginBody = {username: '', password: validPassword}
const validLoginBody = {username: validUserName, password: validPassword}

const existingUser = {
    id: 1,
    username: 'Eddie',
    vocation: 'Guerreiro',
    level: 8,
    password: 'sortudo',
}

export default {
    noUserNameLoginBody,
    validLoginBody,
    existingUser
}