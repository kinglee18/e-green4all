"use client"
import {Typography, Container, Grid, Paper, Button, CardMedia, Box} from '@mui/material';
import {styled} from "@mui/system";


const ContainerWrapper = styled(Container)(({theme}) => ({
    marginTop: theme.spacing(4),
}));

const ProjectCard = () => {
    const CardWrapper = styled(Paper)(({theme}) => ({
        padding: theme.spacing(2),
    }));

    return (
        <CardWrapper>
            <CardMedia
                component="img"
                height="140"
                image="/planta.jpg"
                alt="Project Image"
            />
            <Typography variant="h6" gutterBottom>
                Project Title
            </Typography>
            <Typography variant="body1" gutterBottom>
                Project description
            </Typography>
            <Button variant="contained" color="primary" href={"/projects/3"}>
                View Details
            </Button>
        </CardWrapper>
    );
};
const ProjectList = () => {
    return (
        <ContainerWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard/>
                </Grid>
            </Grid>
        </ContainerWrapper>
    );
};

function Projects({Component, pageProps}) {
    return (
        <Box p={3}>
            <ProjectList/>
        </Box>
    );
}

export default Projects;
