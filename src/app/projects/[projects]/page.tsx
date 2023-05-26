"use client"


import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Chip,
    LinearProgress, linearProgressClasses,
    Paper,
    Stack,
    styled,
    Typography
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function Project({Component, pageProps}) {
    return (
        <Stack direction={"row"} justifyContent={"space-around"} p={5} gap={3}>
            <Card>
                <CardMedia
                    sx={{height: 540}}
                    image="/planta.jpg"
                    title="solar"
                />
                <CardContent>
                    <Stack direction={'row'}>
                        <Typography gutterBottom variant="h5" component="div">
                            Planta solar 1
                        </Typography>
                        <Chip color={'success'} label={'Active'}/>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                        The photovoltaic solar project for industrial self-consumption in Bocanegra, located in Burgos,
                        is a
                        viable and profitable investment to generate electricity sustainably. The system
                        it will have a generating capacity of 290 kW and will avoid the emission of around 65 tons
                        of CO2 per year, which is equivalent to the emissions of a car that travels about 380,000 km per
                        year.
                        year or to the CO2 absorption of about 3,000 trees per year.

                        In addition, the installation of this industrial self-consumption solar system will contribute
                        significantly to the reduction of greenhouse gas emissions in the region,
                        which represents a great step towards the mitigation of climate change and the protection of the
                        environment.

                        Since the project is in the study phase, the data may be altered. In the case of
                        have made the payment in the pre-sale phase, if the project data is modified, the
                        investor may request the return of the investment
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant={"contained"}>Business plan</Button>
                    <Button size="small" variant={"contained"}>Etherscan</Button>
                </CardActions>
            </Card>
            <Card sx={{height: 'fit-content', minWidth: '41rem'}} p={3}>
                <Grid2 container spacing={2} p={2}>
                    <Grid2 xs={6}>
                        <Item>
                            <h3>PROJECT LIFETIME</h3>
                            <h2>25 years</h2>
                        </Item>
                    </Grid2>
                    <Grid2 xs={6}>
                        <Item>
                            <h3>Capacity</h3>
                            <h2>290 kW</h2>
                        </Item>
                    </Grid2>
                    <Grid2 xs={6}>
                        <Item>
                            <h3>PROJECT LIFETIME</h3>
                            <h2>25 years</h2>
                        </Item>
                    </Grid2>
                    <Grid2 xs={6}>
                        <Item>
                            <h3>PROJECT LIFETIME</h3>
                            <h2>25 years</h2>
                        </Item>
                    </Grid2>
                </Grid2>
                <Box p={2}>
                    <Grid2 container>
                        <Stack direction={'row'} width={'50%'} justifyContent={'space-around'}>
                            <Typography variant={"h6"}>Have</Typography>

                            <Typography variant={"h5"}>0 tokens</Typography>
                        </Stack>
                        <Stack direction={'row'} width={'50%'} justifyContent={'space-around'}>
                            <Typography variant={"h6"}>Goal</Typography>

                            <Typography variant={"h5"}>100 tokens</Typography>
                        </Stack>
                    </Grid2>

                    <BorderLinearProgress variant="determinate" value={50}/>
                </Box>
            </Card>
        </Stack>
    );
}


const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));
const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default Project;
