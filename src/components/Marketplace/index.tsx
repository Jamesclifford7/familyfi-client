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
            <h3>Total Rewards Balance: $100.00</h3>
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
                    <MenuItem value="Clothes">Clothes</MenuItem>
                    <MenuItem value="School Supplies">School Supplies</MenuItem>
                    <MenuItem value="Sports Equipment">Sports Equipment</MenuItem>
                    <MenuItem value="Home Goods">Home Goods</MenuItem>
                    <MenuItem value="Tutoring and Education">Tutoring and Education</MenuItem>
                </Select>
            </StyledFormControl>
        </>
    )
}

const StyledFormControl = styled(FormControl)`
    width: 40%; 
`