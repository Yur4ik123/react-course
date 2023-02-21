import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {setEmail, setPassword, setRepeatPassword, setFirstName, setUsername, navigate} = props
    return (
        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign="center">Регистрация</Typography>
            <Typography variant="body1" fontFamily='Poppins' marginBottom={3} textAlign="center">Введите данные для
                регистрации</Typography>
            <TextField fullWidth={true} onChange={(e) => setFirstName(e.target.value)} margin='normal' label="Имя"
                       variant="outlined" placeholder="Введите ваше имя"/>
            <TextField fullWidth={true} onChange={(e) => setUsername(e.target.value)} margin='normal' label="Username"
                       variant="outlined"
                       placeholder="Введите ваш username"/>
            <TextField fullWidth={true} onChange={(e) => setEmail(e.target.value)} margin='normal' label="Email"
                       variant="outlined"
                       placeholder="Введите ваш email"/>
            <TextField fullWidth={true} onChange={(e) => setPassword(e.target.value)} margin='normal' type='password'
                       label="Password" variant="outlined"
                       placeholder="Введите ваш пароль"/>
            <TextField fullWidth={true} onChange={(e) => setRepeatPassword(e.target.value)} margin='normal'
                       type='password' label="Repeat password" variant="outlined"
                       placeholder="Повторите ваш пароль"/>
            <Button type="submit" sx={{fontFamily: 'Poppins', marginTop: 2, width: '60%', marginBottom: 2}}
                    variant="contained">Регистрация</Button>
            <Typography variant="body1" sx={{fontFamily: 'Poppins',}}>У есть аккаунта?<span
                className="incitingText" onClick={()=>navigate('/login')}>Авторизация</span></Typography>
        </>
    );
};
export default RegisterPage;