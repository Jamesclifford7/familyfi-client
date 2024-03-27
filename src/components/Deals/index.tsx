import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar'
import { Header } from '../AccountOverview'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import styled from 'styled-components'
import axios from 'axios'
import { useUserContext, UserContextProps } from '../UserProvider'

interface DealCategory {
    category: Deal[],
}

interface Deal {
    position: number, 
    title: string, 
    link: string, 
    price: string, 
    old_price: string, 
    source: string, 
    thumbnail: string,
    extensions: string[]
}

export default function Marketplace() {
    const [category, setCategory] = useState<string | "">("")
    const [deals, setDeals] = useState<DealCategory[]>([])
    const user = useUserContext() as UserContextProps

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    useEffect(() => {
        // Fetch user information from API when component mounts
        const token = localStorage.getItem('user') || user.token;

        if (token) {
            axios({
                method: 'get', 
                url: `${process.env.REACT_APP_HEROKU_API_URL}/deals`, 
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${token}`, // Include JWT token in request headers
                }
            })
            .then((res) => {
                setDeals(res.data)
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching user information:', error);
            });
        }
    }, [user])

    const allDeals = deals.flatMap(category => {
        const categoryName = Object.keys(category)[0];
        const dealsArray = Object.values(category)[0] as Deal[]; 
        return dealsArray.map(deal => ({
          category: categoryName,
          deal: deal
        }));
      });

    const filteredDeals = allDeals.filter(deal => deal.category === category);

    if (deals.length === 0) {
        return <>...loading</>
    }

    return (
        <>
            <MobileTop>
                <NavBar />
                <StyledHeader>Marketplace Deals</StyledHeader>
                <p>*This page makes use of a free API - if no sale items are displayed it has already been maxed out this month by someone else</p>
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
                <Header>Marketplace Deals</Header>
                <p>*This page makes use of a free API - if no sale items are displayed it has already been maxed out this month by someone else</p>
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
                category === "" 
                ? allDeals.map((deal, idx) => {
                    return (
                        <Card key={idx}>
                            <a href={deal.deal.link} target="_blank" rel="noopener noreferrer">
                                <img src={deal.deal.thumbnail} alt={deal.deal.source} />
                            </a>
                            <h3>{deal.deal.title}</h3>
                            <h4>{deal.deal.price}</h4>
                            {deal.deal.old_price ? <h4>{deal.deal.old_price}</h4> : <span>{deal.deal.extensions}</span>}
                        </Card>
                    );
                })
                : filteredDeals.map((deal, idx) => {
                    return (
                        <Card key={idx}>
                            <a href={deal.deal.link} target="_blank" rel="noopener noreferrer">
                                <img src={deal.deal.thumbnail} alt={deal.deal.source} />
                            </a>
                            <h3>{deal.deal.title}</h3>
                            <h4>{deal.deal.price}</h4>
                            {deal.deal.old_price ? <h4>{deal.deal.old_price}</h4> : <span>{deal.deal.extensions}</span>}
                        </Card>
                    );
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

    p {
        font-style: italic; 
    }

    @media all and (min-width: 415px) {
        display: none; 
    }
`

const DesktopTop = styled.div`
    display: none; 

    p {
        font-style: italic; 
    }

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

const Card = styled.div`
    width: 100%; 
    border: solid 1px #000000; 
    border-radius: 20px; 
    background-color: #ffffff; 
    height: 400px; 
    margin-bottom: 25px; 

    img {
        max-height: 200px;
        height: auto; 
        width: 100%; 
        border-radius: 20px; 
    }

    h4:nth-child(3) {
        color: red; 
    }

    h4:nth-child(4) {
        text-decoration: line-through; 
    }

    @media all and (min-width: 800px) {
        width: 20%; 
    }

    @media all and (min-width: 415px) and (max-width: 800px) {
        width: 30%; 
    }
`
