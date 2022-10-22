import { FormControl, FormLabel, Grid, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

function Filter(props) {
  const { filter, handleFilterChange, sort, handleSoftChange } = props

  const filterField = () => {
    return (
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
    )
  }

  const sortField = () => {
    return (
      <FormControl>
        <FormLabel>Sort</FormLabel>
        <Select
          name="os"
          value={sort}
          onChange={handleSoftChange}
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
    )
  }
  return (
    <Grid container justifyContent="center">
      <Typography
        variant="header"
        align="center"
        color="secondary"
        sx={{
          my: 3,
          width: "100%"
        }}
      >
        Blog
      </Typography>
      {/* <Grid container item lg={12} columnGap={3} justifyContent='center' alignContent='center' >
        {filterField()}
        {sortField()}
      </Grid> */}
    </Grid>
  )
}

export default Filter