'use client'
import { Box, Button, Divider, List, ListItem, TextField, Typography } from "@mui/material";

export default function inverterTexto() {
    
    const inverterString = () => {
        const textoEntrada = document.getElementById('input-text')
        const textoSaida = document.getElementById('output-text')

        textoSaida.value = textoEntrada?.value.split('').reverse().join('');
    }
    
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>

            <Typography variant="h1" sx={{ fontSize: '3rem' }} gutterBottom>
                Inverter texto
            </Typography>

            <TextField
                id="input-text"
                label="Digite o texto de entrada"
                multiline
                rows={10}
            />

            <Button variant="contained" onClick={inverterString} sx={{ display: 'flex', width: 100, backgroundColor: 'black', borderRadius: 0 }}>Inverter</Button>

            <Typography variant="h2" sx={{fontSize: '1.5rem', marginBottom: 0, marginTop: 2}}>
                Resultado
            </Typography>

            <TextField
                id="output-text"
                multiline
                rows={10}
            />
            
            <Divider sx={{ marginTop: 4, marginBottom: 4 }}/>

            <Typography variant="h3" sx={{ fontSize: '1.25rem', marginBottom: 0}} gutterBottom>
                O que é e para que serve o inverter texto
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 0, textAlign: 'justify' }}>
                A ferramenta "Inverter Texto" do 1 Faz Tudo é uma solução simples e eficaz para reverter a ordem 
                dos caracteres de qualquer texto. Ao digitar um texto no campo de entrada e clicar no botão "Inverter", 
                a ferramenta processa instantaneamente o conteúdo e exibe o resultado no campo de saída, com os caracteres 
                dispostos na ordem inversa.
                Seja para uso prático ou para diversão, a ferramenta de inverter texto do 1 Faz Tudo é uma maneira rápida 
                e eficiente de alterar a ordem de qualquer texto com apenas um clique.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 0, textAlign: 'justify' }}>
                <b>Para que serve a ferramenta:</b> A ferramenta de inverter texto pode ser útil em diversas situações, como:
            </Typography>
            <List>
                <ListItem sx={{ display: 'list-item', padding: 0 }}>
                    <b>Criptografia básica:</b> Embora não seja um método avançado de segurança, inverter o texto pode ser uma forma rápida 
                    de "ocultar" uma mensagem de forma divertida e simples.
                </ListItem>
                <ListItem sx={{ display: 'list-item', padding: 0 }}>
                    <b>Exercícios mentais:</b> Ler ou escrever textos invertidos pode ser uma boa prática para treinar o cérebro e melhorar habilidades cognitivas.
                </ListItem>
                <ListItem sx={{ display: 'list-item', padding: 0 }}>
                    <b>Formatar conteúdos criativos:</b> Em contextos de design ou criação de conteúdo, textos invertidos podem ser usados para criar efeitos visuais
                    interessantes e criativos.
                </ListItem>
                <ListItem sx={{ display: 'list-item', padding: 0 }}>
                    <b>Curiosidade e diversão:</b> É uma ferramenta popular para brincar com textos em redes sociais, criando uma forma inusitada de exibir palavras e frases.
                </ListItem>
            </List>
        </Box>
    )
}