import { Button, Icon, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const App = () => {
  return (
    <>
      {/* Buttons */}
      <div>
        <Button variant='contained' color='primary'>
          Este es un bóton
        </Button>
        <Button variant='outlined' color='secondary'>
          Hello
        </Button>
      </div>
      {/* Icons */}
      <div>
        <DeleteIcon color='primary' />
        <Icon>room</Icon>
        <Button variant='contained' color='default' endIcon={<DeleteIcon />}>
          Delete
        </Button>
        <IconButton aria-label='delete'>
          <DeleteIcon color='primary'></DeleteIcon>
        </IconButton>
      </div>
      {/* Typography */}
      <div>
        <Typography variant='h1' color='primary'>
          Título generico
        </Typography>
        {/* Con typography se puede dar margenes hacia abajo con gutterBottom =>
         (minor con medidas em) y paragraph (16px) */}
        <Typography
          variant='body1'
          color='secondary'
          align='center'
          gutterBottom
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          fugiat. Dignissimos quos optio adipisci iste similique quas maiores
          corrupti, impedit esse placeat neque at dolor ea, aliquam incidunt
          quis? Expedita.
        </Typography>
        <Typography variant='body1' color='primary' align='center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          fugiat. Dignissimos quos optio adipisci iste similique quas maiores
          corrupti, impedit esse placeat neque at dolor ea, aliquam incidunt
          quis? Expedita.
        </Typography>
      </div>
    </>
  );
};

export default App;
