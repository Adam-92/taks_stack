import { Pagination } from '@mui/material';
import { Table} from './components/Table/Table';
import { useTable } from './components/Table/useTable';
import { TextFieldRows } from './components/TextFieldRows/TextFieldRows';
import { StyledBox } from './components/Table/styles';

const  App = () => {
  const { params, onChangePage } = useTable()

  return (
    <StyledBox>
      <TextFieldRows />
      <Table  />
      <Pagination 
        count={25} 
        shape="rounded" 
        page={parseInt(params.page, 10)} 
        onChange={onChangePage}
        sx={{ml: 'auto'}}
      />
    </StyledBox>
  );
}

export default App;


