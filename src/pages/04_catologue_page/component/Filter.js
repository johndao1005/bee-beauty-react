import { FormControl, FormLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function Filter({filter, handleFilterChange}) {
  return (
    <FormControl>
          <FormLabel>Topic</FormLabel>
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
