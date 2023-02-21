import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin):JSX.Element => {
    const {setPassword, setEmail, navigate} = props
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign="center">Авторизация</Typography>
            <Typography variant="body1" fontFamily='Poppins' marginBottom={3} textAlign="center">Введите ваш логин и
                пароль</Typography>
            <TextField onChange={(e) => setEmail(e.target.value)} fullWidth={true} margin='normal' label="Email" variant="outlined"
                       placeholder="Введите ваш email"/>
            <TextField onChange={(e) => setPassword(e.target.value)} fullWidth={true} margin='normal' type='password' label="Password"
                       variant="outlined" placeholder="Введите ваш пароль"/>
            <Button type="submit" sx={{fontFamily: 'Poppins', marginTop: 2, width: '60%', marginBottom: 2}}
                    variant="contained">Войти</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins',}}>У вас нет аккаунта?<span
                className="incitingText" onClick={()=>navigate('/register')} >Регистрация</span></Typography>

        </>
    );
};

export default LoginPage;