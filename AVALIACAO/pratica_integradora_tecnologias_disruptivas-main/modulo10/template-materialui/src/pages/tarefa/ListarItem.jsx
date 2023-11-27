import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';

import AdicionarItem from './AdicionarItem';
import EditarItem from './EditarItem';

//A função abaixo é usada para criar o array contendo os dados iniciais da listagem de tarefas.
function createData(
  idItem,
  tituloItem,
  descricaoItem,
  inicioItem,
  fimItem,
  recursoItem,
  statusItem
) {
  return { idItem, tituloItem, descricaoItem, inicioItem, fimItem, statusItem, recursoItem };
}

//Definição do array contendo os dados iniciais da listagem de tarefas
const initialRows = [
  createData(1, 'Item 1', 'Descrição da Item 1', '2022-01-01', '2022-01-02', 'Concluída', 'Recurso 1'),
  createData(2, 'Item 2', 'Descrição da Item 2', '2022-01-03', '2022-01-04', 'Em Andamento', 'Recurso 2'),
  createData(3, 'Item 3', 'Descrição da Item 3', '2022-01-04', '2022-01-05', 'Em Andamento', 'Recurso 3'),
  createData(4, 'Item 4', 'Descrição da Item 4', '2022-01-05', '2022-01-06', 'Em Andamento', 'Recurso 4'),
  createData(5, 'Item 5', 'Descrição da Item 5', '2022-01-06', '2022-01-07', 'Em Andamento', 'Recurso 5'),
  createData(6, 'Item 6', 'Descrição da Item 6', '2022-01-07', '2022-01-08', 'Aguardando', 'Recurso 6'),
];

//Componente ListarTarefa
const ListarItem = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [itens, setItens] = useState([]);
  const [item, setItem] = useState();
  const [idItemSelecionado, setIdItemSelecionado] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  //O array definido acima é setado como conteúdo do state Tarefas na renderização inicial do componente.
  useEffect(() => {
    setItens(initialRows);
  },[]);

  const handleEditar = (id) => {
    setIdItemSelecionado(id);

    //Objeto local para armazenamento da tarefa filtrada de acordo com a seleção do usuário
    let itemParaEditar = itens.filter(obj => {
      return obj.idItem === id;
    })[0];

    //Atribuição do Objeto local, setado acima, ao state Tarefa
    setItem(itemParaEditar);

    //Seta como true o state responsável pela exibição do Model de Editar Tarefa
    setOpenEditar(true)
  };

  const handleDeletar = (id) => {
    setItens(current =>
      current.filter(item => {
        return item.idItem !== id;
      }),
    );
  };

    return(
    <>
    <Card>
        <CardHeader
          title="Itens"
          subheader="Listagem de Itens"
        /> 
        <CardContent>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Título</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Data de Início</TableCell>
                    <TableCell align="right">Data de Finalização</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Recurso</TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {itens.map((row, indice) => (
                    <TableRow
                    key={indice}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                          {row.idItem}
                      </TableCell>
                      <TableCell component="th" scope="row">
                          {row.tituloItem}
                      </TableCell>
                      <TableCell align="right">{row.descricaoItem}</TableCell>
                      <TableCell align="right">{row.inicioItem}</TableCell>
                      <TableCell align="right">{row.fimItem}</TableCell>
                      <TableCell align="right">{row.statusItem}</TableCell>
                      <TableCell align="right">{row.recursoItem}</TableCell>
                      <TableCell align="center">
                        <Button variant="contained" color="success" onClick={() => handleEditar(row.idItem)}><EditIcon fontSize="small" /></Button>            
                      </TableCell>
                      <TableCell align="center">
                        <Button variant="contained" color="error" onClick={() => handleDeletar(row.idItem)}><DeleteIcon fontSize="small" /></Button>            
                      </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </CardContent>
        <CardActions>
            <Button size="small" variant="contained" onClick={handleOpen}>Criar Tarefa</Button>
            <Button size="small" variant="outlined">Cancelar</Button>
      </CardActions> 
    </Card>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <AdicionarItem handleClose={handleClose} itens={itens} setItens={setItens} />
        </div>
      </Modal>  
    </div>
    <div>
      <Modal
        open={openEditar}
        onClose={handleCloseEditar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <EditarItem handleCloseEditar={handleCloseEditar} idItemSelecionado={idItemSelecionado} itens={itens} item={item} setItens={setItens} />
        </div>
      </Modal>  
    </div>
  </>    
 );
};
 
export default ListarItem;