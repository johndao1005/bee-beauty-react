import { Container, FormControl, FormLabel, Grid, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

function Filter(props) {
  const { filter, handleFilterChange, } = props
  return (
    <Container maxWidth='lg'>
      <Typography
        variant="h1"
        sx={{
          ml: 3,
          my: 3,
          fontSize: 50,
          fontFamily: 'monospace',
          fontWeight: 1000,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
          textAlign: 'center'
        }}
      >
        Blog
      </Typography>
      <Grid container item lg={12} columnGap={3} justifyContent='center' alignContent='center' >
        <FormControl>
          <FormLabel>Filter</FormLabel>
          <Select
            name="os"
            value={filter}
            onChange={handleFilterChange}
            sx={{ display: 'flex', minWidth: '280px' }}
          >
            <MenuItem key="mac" value="mac">
              Mac
            </MenuItem>
            <MenuItem key="windows" value="windows">
              Windows
            </MenuItem>
            <MenuItem key="linux " value="linux">
              Linux
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Sort</FormLabel>
          <Select
            name="os"
            value={filter}
            onChange={handleFilterChange}
            sx={{ display: 'flex', minWidth: '280px' }}
          >
            <MenuItem key="mac" value="mac">
              Mac
            </MenuItem>
            <MenuItem key="windows" value="windows">
              Windows
            </MenuItem>
            <MenuItem key="linux " value="linux">
              Linux
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
     
    </Container>
  )
}

export default Filter