import React, {useState} from 'react'
import NavBar from '../NavBar'
import { Header } from '../AccountOverview'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import styled from 'styled-components'

export default function Marketplace() {
    const [category, setCategory] = useState<string | "">("")

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
      };

    return (
        <>
            <NavBar />
            <Header>Marketplace</Header>
            <StyledFormControl>
                <InputLabel id="category-select">Category</InputLabel>
                <Select
                    labelId="category-select"
                    id="category"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Diapers">Diapers</MenuItem>
                    <MenuItem value="Sports Equipment">Sports Equipment</MenuItem>
                    <MenuItem value="Clothes">Clothes</MenuItem>
                </Select>
            </StyledFormControl>
        </>
    )
}

const StyledFormControl = styled(FormControl)`
    width: 40%; 
`