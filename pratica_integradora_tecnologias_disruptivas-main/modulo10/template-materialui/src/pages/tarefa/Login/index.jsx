import React, {useState} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Select, MenuItem } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState ('');
    const [role, setRole] = useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel htmlFor="login_nome">Nome de usuário</InputLabel>
                <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} 
                onChange={e => { setLogin(e.target.value) }} />
                <FormHelperText id="login_nome_helper_text">Insira seu nome de usuário.</FormHelperText>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="role-label">Função</InputLabel>
                <Select
                    labelId="role-label"
                    id="role"
                    value={role}
                    label="Função"
                    onChange={handleChange}
                >
                    <MenuItem value={'user'}>Usuário</MenuItem>
                    <MenuItem value={'admin'}>Administrador</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default Login;