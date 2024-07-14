import { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'


export default function Ratings() {
    const [test, setTest] = useState('');

    useEffect(() => {
        setTest('Hello')
    }, [test])

    return (
        <Container maxWidth="sm"> 
            <Button variant="contained">TODO: ratings setter page</Button>
        </Container>
    )
}