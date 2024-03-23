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
    
        // Filter the marketplace businesses based on the selected category
    const filteredBusinesses = category
        ? marketplaceBusinesses.filter((business) => business.category === category)
        : marketplaceBusinesses;

    return (
        <>
            <MobileTop>
                <NavBar />
                <StyledHeader>Marketplace</StyledHeader>
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
            </MobileTop>
            <DesktopTop>
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
            </DesktopTop>
            <Body>
                {
                    filteredBusinesses.map((business) => {
                        return <Card key={business.id} href={business.url} target="_blank" rel="noopener noreferrer">
                            <img src={business.logo} alt={business.name} />
                        </Card>
                    })
                }
            </Body>
        </>
    )
}

const StyledHeader = styled(Header)`
    margin: 0; 
    padding: 25px; 

    @media all and (min-width: 415px) {
        margin: auto; 
    }
`

const MobileTop = styled.div`
    display: inherit; 
    position: fixed; 
    border-bottom: solid 0.5px #000000; 
    z-index: 1; 
    margin: 0 auto; 
    top: 0; 
    left: 0; 
    width: 100%; 
    background-color: inherit; 
    padding-bottom: 20px; 

    @media all and (min-width: 415px) {
        display: none; 
    }
`

const DesktopTop = styled.div`
    display: none; 

    @media all and (min-width: 415px) {
        display: inherit; 
    }
`

const StyledFormControl = styled(FormControl)`
    width: 80%; 

    @media all and (min-width: 415px) {
        width: 40%; 
    }
`

const Body = styled.div`
    width: 90%; 
    margin: 0 auto; 
    margin-top: 250px; 
    display: flex; 
    flex-wrap: wrap; 
    flex-direction: column; 
    justify-content: space-between; 
    

    @media all and (min-width: 415px) {
     flex-direction: row;  
     margin-top: 50px;  
    }
`

const Card = styled.a`
    width: 100%; 
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

    @media all and (min-width: 800px) {
        width: 20%; 
    }

    @media all and (min-width: 415px) and (max-width: 800px) {
        width: 30%; 
    }
`