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
                Sobre
            </Typography>

            
            <Typography variant="body1" sx={{ marginTop: 2, textAlign: 'justify' }}>
                No mundo digital de hoje, agilidade e eficiência são essenciais, e é exatamente isso que oferecemos. 
                O "1 faz tudo" é o seu portal completo, reunindo uma série de ferramentas práticas e intuitivas que 
                simplificam tarefas cotidianas. Se você precisa inverter textos para brincadeiras ou formatações especiais, 
                temos a solução em apenas um clique. Quer transformar seus vídeos favoritos do YouTube em MP3 para ouvir em 
                qualquer lugar? Nossa ferramenta de conversão é rápida e descomplicada. E se estiver planejando uma viagem, 
                fazendo compras internacionais, ou apenas curioso sobre a cotação atual, nosso conversor de moedas sempre 
                atualizado está aqui para ajudar.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1, textAlign: 'justify' }}>
                Além disso, trabalhamos constantemente para expandir nossa oferta de ferramentas, garantindo que você tenha 
                acesso a tudo o que precisa, em um único lugar. O "1 faz tudo" não é apenas um site, é um verdadeiro facilitador 
                da sua vida digital, projetado para ser acessível, eficiente e seguro. Descubra como podemos tornar suas tarefas 
                online mais rápidas, fáceis e descomplicadas.
            </Typography>
        </Box>
    )
}