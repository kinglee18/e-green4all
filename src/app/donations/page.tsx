"use client"
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {makeStyles} from '@mui/styles';

export default function Donations({Component, pageProps}) {
    return (
        <>
            <Box>
                <Typography variant="h4" component="h1" gutterBottom>Donations</Typography>
                <DonationsTable/>
            </Box>
        </>
    );
}

const useStyles = makeStyles({
    tableContainer: {
        maxWidth: 500,
        margin: '0 auto',
    },
});

interface Donation {
    id: number;
    date: string;
    amount: number;
    donor: string;
}

const DonationsTable = (props) => {
    const classes = useStyles();
    let donations = [
        {id: 1, date: '2021-10-01', amount: 100, donor: 'John Doe'},
    ]
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Donor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {donations.map((donation) => (
                        <TableRow key={donation.id}>
                            <TableCell>{donation.date}</TableCell>
                            <TableCell>${donation.amount}</TableCell>
                            <TableCell>{donation.donor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
