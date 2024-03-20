import React, {useState} from 'react'
import NavBar from '../NavBar'
import { Header } from '../AccountOverview'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import styled from 'styled-components'
import { useMarketplaceContext } from '../MarketplaceProvider'

export default function Marketplace() {
    const [category, setCategory] = useState<string | "">("")

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const marketplaceBusinesses = useMarketplaceContext()
    console.log(marketplaceBusinesses)

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
                    <MenuItem value="Baby">Baby</MenuItem>
                    <MenuItem value="Clothes">Clothes</MenuItem>
                    <MenuItem value="Education">Education and School Supplies</MenuItem>
                    <MenuItem value="Extracurricular">Extracurricular Activities</MenuItem>
                    <MenuItem value="Home">Home, Bath, and Body</MenuItem>
                    <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
                </Select>
            </StyledFormControl>
            <Body>
                {
                    marketplaceBusinesses.map((business) => {
                        return <Card key={business.id} href={business.url} target="_blank" rel="noopener noreferrer">
                            <img src={business.logo} alt={business.name} />
                        </Card>
                    })
                }
            </Body>
        </>
    )
}

const StyledFormControl = styled(FormControl)`
    width: 40%; 
`

const Body = styled.div`
    width: 90%; 
    margin: 0 auto; 
    margin-top: 50px; 
    display: flex; 
    flex-wrap: wrap; 
    flex-direction: row; 
    justify-content: space-between; 
`

const Card = styled.a`
    width: 30%; 
    border: solid 1px #000000; 
    border-radius: 20px; 
    background-color: #ffffff; 
    height: 200px; 
    margin-bottom: 25px; 

    img {
        height: 100%; 
        width: 100%; 
        border-radius: 20px; 
    }
`