import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";

const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
    }
}));

export default function Notification()
{
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: "매장정보", path: "/material" }, { name: "점포 일람" }]} />
            </Box>

            <Stack spacing={3}>
                <SimpleCard title="점포 페이지">

                </SimpleCard>



            </Stack>
        </Container>
    );
}
