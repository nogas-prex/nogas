import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import { EquinoxTheme } from '../Theme';
import LogoImage from '../img/nogas_logo.svg'
import backgroundImage from '../img/background-v2.jpg'
export default function PageTitle() {
    
  return (
    <div style={{ width: '100vw' }}>
      <Box
        xs={12}
        // md={12}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          marginTop: { xs: "5vh", md: "10vh" },
        }}
      >
        <Box
          sx={{
            // height: { xs: "50vh", sm: "100vh" },
            width: { xs: "90vw", md: "80vw" },
            paddingLeft: { xs: "5vw", md: "10vw" },
            alignItems: "center",
            padding: "2em",
          }}
        >
          <img src={LogoImage}></img>
          <br></br>
          <Typography variant="landingSubtitle">
            Next Optimized Generation of Autonomous Suburbs
          </Typography>
          <hr
            width="10%"
            color="00a360"
            style={{ borderBottomWidth: "15px" }}
          ></hr>
        </Box>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Box>
    </div>
  );
}