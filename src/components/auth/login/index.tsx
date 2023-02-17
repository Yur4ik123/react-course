import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";

const LoginPage = (props: any) => {
    const {setPassword, setEmail} = props
    return (
        <>
            <Typography variant="h2" fontFamily='Popins' textAlign="center">Авторизация</Typography>
            <Typography variant="body1" fontFamily='Popins' marginBottom={3} textAlign="center">Введите ваш логин и
                пароль</Typography>
            <TextField onChange={(e) => setEmail(e.target.value)} fullWidth={true} margin='normal' label="Email" variant="outlined"
                       placeholder="Введите ваш email"/>
            <TextField onChange={(e) => setPassword(e.target.value)} fullWidth={true} margin='normal' type='password' label="Password"
                       variant="outlined" placeholder="Введите ваш пароль"/>
            <Button type="submit" sx={{fontFamily: 'Popins', marginTop: 2, width: '60%', marginBottom: 2}}
                    variant="contained">Войти</Button>
            <Typography variant="body1" sx={{fontFamily: 'Popins',}}>У вас нет аккаунта?<span
                className="incitingText">Регистрация</span></Typography>

        </>
    );
};

export default LoginPage;