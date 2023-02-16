import React from 'react';
import {Button, TextField, Typography} from "@mui/material";

const RegisterPage = () => {
    return (
        <>
            <Typography variant="h2" fontFamily='Popins' textAlign="center">Регистрация</Typography>
            <Typography variant="body1" fontFamily='Popins' marginBottom={3} textAlign="center">Введите данные для регистрации</Typography>
            <TextField fullWidth={true} margin='normal'  label="Имя" variant="outlined" placeholder="Введите ваше имя" />
            <TextField fullWidth={true} margin='normal'  label="Username" variant="outlined" placeholder="Введите ваш username" />
            <TextField fullWidth={true} margin='normal'  label="Email" variant="outlined" placeholder="Введите ваш email" />
            <TextField fullWidth={true} margin='normal' type='password' label="Password" variant="outlined" placeholder="Введите ваш пароль" />
            <TextField fullWidth={true} margin='normal' type='password' label="Repeat password" variant="outlined" placeholder="Повторите ваш пароль" />
            <Button sx={{fontFamily:'Popins', marginTop:2, width:'60%', marginBottom:2 }}  variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily:'Popins', }} >У есть аккаунта?<span className="incitingText">Авторизация</span></Typography>
        </>
    );
};
export default RegisterPage;