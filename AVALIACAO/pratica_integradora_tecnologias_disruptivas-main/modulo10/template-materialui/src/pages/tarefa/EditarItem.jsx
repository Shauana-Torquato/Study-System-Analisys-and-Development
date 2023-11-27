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

//Declaração do componente EditarTarefa, recebendo como props, do Componente ListarTarefa, os states handCloseEditar,
// idTarefaSelecionada, tarefas, tarefa e setTarefas
const EditarItem = ({handleCloseEditar, idItemSelecionado, itens, item, setItens}) =>{
  const [idItem, setIdItem] = useState();
  const [tituloItem, setTituloItem] = useState('');
  const [descricaoItem, setDescricaoItem] = useState('');
  const [inicioItem, setInicioItem] = useState('');
  const [fimItem, setFimItem] = useState('');
  const [recursoItem, setRecursoItem] = useState('');
  const [statusItem, setStatusItem] = useState('');

  //Abaixo setamos os valores dos states (que popularão o formulário mais abaixo) com os valores do state Tarefa,
  //  recebido como props do componente ListarTarefa.
  useEffect(() => {
    //console.log('Tarefa selecionada: ' + JSON.stringify(tarefa));
    setIdItem(idItemSelecionado);
    setTituloItem(item.tituloItem);
    setDescricaoItem(item.descricaoItem);
    setInicioItem(item.inicioItem);
    setFimItem(item.fimItem);
    setRecursoItem(item.recursoItem);
    setStatusItem(item.statusItem);
  },[]);

  const handleRecurso = (event) => {
    setRecursoItem(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusItem(event.target.value);
  };

  const handleEditar = () => {
    //console.log(`id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa} \n inicio: ${inicioTarefa} \n fim: ${fimTarefa} \n recurso: ${recursoTarefa} \n status: ${statusTarefa}`);
    //console.log('idTarefaSelecionada: ' + idTarefaSelecionada);
    setItens(current =>
      current.map(obj => {
        if (obj.idItem === idItemSelecionado) {
          console.log('obj: ' + JSON.stringify(obj));          
          return {...obj, 
              idItem:idItemSelecionado,
              tituloItem:tituloItem,
              descricaoItem:descricaoItem,
              inicioItem:inicioItem,
              fimItem:fimItem,
              recursoItem:recursoItem,
              statusItem:statusItem
          };
        }

        return obj;
      }),
    );

    //console.log(`Tarefas Editadas: ` + JSON.stringify(tarefas));
    handleCloseEditar();
  };

  return(
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Itens"
          subheader="Edição de Itens"
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
              <FormHelperText id="tarefa_descricao_helper_text">Descrição da Tarefa.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={3}>  
              <FormControl>
                <Input id="item_inicio" type="date" aria-describedby="item_inicio_helper_text" value={inicioItem} onChange={e => { setInicioItem(e.target.value) }}
                  sx={{
                    color:'rgba(44, 43, 200, 0.8)',
                    fontWeight: 500,
                    paddingLeft:'15px'
                  }} 
                />
                <FormHelperText id="item_inicio_helper_text">Início do Item.</FormHelperText>
              </FormControl>
            </Grid>  
            <Grid item xs={3}>  
              <FormControl>
                <Input id="item_fim" type="date" aria-describedby="item_fim_helper_text" value={fimItem} onChange={e => { setFimItem(e.target.value) }}
                  sx={{
                    color:'rgba(44, 43, 200, 0.8)',
                    fontWeight: 500,
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
                  id="tarefa_item"
                  value={recursoItem}
                  label="Recurso"
                  onChange={handleRecurso}
                  size="small"
                  sx={{
                    color:'rgba(198, 83, 102, 0.8)',
                    fontWeight: 400,
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
                    color:'rgba(198, 83, 102, 0.8)',
                    fontWeight: 400,
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
                <Button size="small" variant="contained" onClick={handleEditar}>Salvar</Button>
              </Grid>  
              <Grid item xs={1}>  
                <Button size="small" variant="outlined" onClick={handleCloseEditar}>Cancelar</Button>  
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

export default EditarItem;