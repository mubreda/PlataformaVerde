import React from 'react';
import Logo from '../src/theme/Logo';
import Box from '../src/components/foundation/layout/Box';
import Grid from '../src/components/foundation/layout/Grid';
import FormCadastro from '../src/components/forms/FormCadastro';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row
          justifyContent="center"
        >
          <Logo />
        </Grid.Row>
        <FormCadastro />
      </Grid.Container>
    </Box>
  );
}
