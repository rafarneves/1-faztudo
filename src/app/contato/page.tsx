'use client'
import { Box, Button, Divider, List, ListItem, TextField, Typography } from "@mui/material";

export default function inverterTexto() {
    
    const inverterString = () => {
        const textoEntrada = document.getElementById('input-text')
        const textoSaida = document.getElementById('output-text')
        if(textoEntrada && textoEntrada.value !== '') {
            textoSaida.value = textoEntrada.value.split('').reverse().join('');
        }
    }
    
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>

            <Typography variant="h1" sx={{ fontSize: '3rem' }} gutterBottom>
                Contato
            </Typography>
        </Box>
    )
}