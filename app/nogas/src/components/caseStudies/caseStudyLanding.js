import {
  Grid,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function CaseStudyLanding(props) {
    const image = props.image
    const title = props.title
    const subtitle = props.subtitle
    const body = props.body 
    return (
      <Grid
        container
        xs={12}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100vw",
          // height: '90vh',
          // maxHeight: "100vh",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // marginBottom:'2em'
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: "left",
            paddingLeft: { xs: '2em', sm:'2em', md:'2em', lg: "5em" },
            paddingRight: {xs:'2em', lg:'0'},
            backgroundColor: "rgba(255,255,255,0.5)",
            marginTop: '5em',
            marginBottom:'2em'
          }}
        >
          <Typography variant="sectionTitle">{title}</Typography>
          <br></br>
          <Typography variant="sectionSubtitle">{subtitle}</Typography>
          <hr color="EC008C"></hr>
          {body.map((b) => (
            <div>
              <Typography variant="bodyBlack">{b}</Typography>
              <br></br>
              <br></br>
            </div>
          ))}
          {props.button ? (
            <Button>
              <a href={props.button.link} target="_blank">
                {props.button.text}
              </a>
            </Button>
          ) : null}
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
    );
}