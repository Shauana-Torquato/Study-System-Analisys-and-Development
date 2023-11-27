import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

//Declaração do componente CriarTarefa, recebendo como props, do Componente ListarTarefa, os states handClose, tarefas e setTarefas
const AdicionarItem = ({handleClose, itens, setItens}) =>{
  const [idItem, setIdItem] = useState();
  const [tituloItem, setTituloItem] = useState('');
  const [descricaoItem, setDescricaoItem] = useState('');
  const [inicioItem, setInicioItem] = useState('');
  const [fimItem, setFimItem] = useState('');
  const [recursoItem, setRecursoItem] = useState('');
  const [statusItem, setStatusItem] = useState('');
  
  useEffect(() => {
    //Abaixo uma variável é declarada para armazenar o id da tarefa, somando 1 ao maior id existente atualmente no state Tarefas
    let proximoId = Math.max(...itens.map(item => item.idItem)) + 1;
    setIdItem(proximoId);
  },[]);

  const handleRecurso = (event) => {
    setRecursoItem(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusItem(event.target.value);
  };

  const handleSalvar = () => {
    //Para inspecionarmos nosso código, uma boa estratégia é utilizarmos o console.log.
    //  Com o console.log, podemos visualizar o seu conteúdo na aba Console, no inspecionador de elementos, na janela do navegador
    console.log(`id: ${idItem} \n titulo: ${tituloItem} \n descrição: ${descricaoItem} \n inicio: ${inicioItem} \n fim: ${fimItem} \n recurso: ${recursoItem} \n status: ${statusItem}`);

    setItens(
      [...itens, 
        {
          idItem,
          tituloItem,
          descricaoItem,
          inicioItem,
          fimItem,
          recursoItem,
          statusItem
        }
      ]);
    //console.log(`Tarefas: ` + JSON.stringify(tarefas));
    handleClose();
  };

  return(
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Item"
          subheader="Cadastro de Itens"
        /> 
        <CardContent sx={{
          width: '95%',
          maxWidth: '100%',
        }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="item_titulo" aria-describedby="item_titulo_helper_text" value={tituloItem} onChange={e => { setTituloItem(e.target.value) }} />
              <FormHelperText id="item_titulo_helper_text">Título do Item.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>  
            <FormControl fullWidth>
              <Input id="item_descricao" aria-describedby="item_descricao_helper_text" value={descricaoItem} onChange={e => { setDescricaoItem(e.target.value) }} />
              <FormHelperText id="item_descricao_helper_text">Descrição do Item.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={3}>  
              <FormControl>
                <Input id="item_inicio" type="date" aria-describedby="item_inicio_helper_text" value={inicioItem} onChange={e => { setInicioItem(e.target.value) }}
                  sx={{
                    color:'rgba(154, 16, 193, 0.8)',
                    fontWeight: 600,
                    paddingLeft:'15px'
                  }} 
                />
                <FormHelperText id="item_inicio_helper_text">Início da Item.</FormHelperText>
              </FormControl>
            </Grid>  
            <Grid item xs={3}>  
              <FormControl>
                <Input id="item_fim" type="date" aria-describedby="item_fim_helper_text" value={fimItem} onChange={e => { setFimItem(e.target.value) }}
                  sx={{
                    color:'rgba(193, 16, 154, 0.8)',
                    fontWeight: 600,
                    paddingLeft:'15px'
                  }} 
                />
                <FormHelperText id="item_fim_helper_text">Fim do Item.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>  
              <FormControl fullWidth>
                <InputLabel htmlFor="item_recurso">Recurso</InputLabel>
                <Select
                  id="item_recurso"
                  value={recursoItem}
                  label="Recurso"
                  onChange={handleRecurso}
                  size="small"
                  sx={{
                    color:'rgba(9, 102, 10, 0.8)',
                    fontWeight: 600,
                  }} 
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>  
              <FormControl fullWidth>
                <InputLabel htmlFor="item_recurso">Status</InputLabel>
                <Select
                  id="item_status"
                  value={statusItem}
                  label="Status"
                  onChange={handleStatus}
                  size="small"
                  sx={{
                    color:'rgba(9, 102, 10, 0.8)',
                    fontWeight: 600,
                  }} 
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={1}>
                <Button size="small" variant="contained" onClick={handleSalvar}>Salvar</Button>
              </Grid>  
              <Grid item xs={1}>  
                <Button size="small" variant="outlined" onClick={handleClose}>Cancelar</Button>  
              </Grid>
            </Grid>  
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default AdicionarItem;