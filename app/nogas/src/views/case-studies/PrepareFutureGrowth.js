import {
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";

import ResponsiveAppBar from "../../components/AppBar";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";


import ImageSlider from "../../components/ImageSlider";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Carousel from "react-material-ui-carousel";
import { ImageItem } from "../../components/ImageCarousel";

import headerImage from "../../img/4_Case Study 02_ Preparing for Future Growth/0_Cover/1.png";
import backgroundImage from "../../img/4_Case Study 02_ Preparing for Future Growth/2_Background/0_Cover/1.jpg";
import beforeImage from '../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Slider_Before.png'
import afterImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Slider_After.png";
import densityImage from '../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Smart Density.png'
import vehUsageImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Vehicle Usage.png";
import envPerfImage from "../../img/4_Case Study 02_ Preparing for Future Growth/3_Vision/Better Envir-performance.png";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";

import carImage from '../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Vehicle Trips.png'
import pedImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Pedestrian Accessibility.png";
import permImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Permeable.png";
import canopyImage from "../../img/4_Case Study 02_ Preparing for Future Growth/1_Metrics/Canopy.png";

import existingImg from '../../img/4_Case Study 02_ Preparing for Future Growth/5_Compatible Residential/00_SFH_EXISTING.png'
import sfhImg from "../../img/4_Case Study 02_ Preparing for Future Growth/5_Compatible Residential/01_SFH_AD1.png";
import sfh2Img from "../../img/4_Case Study 02_ Preparing for Future Growth/5_Compatible Residential/02_SFH_AD2.png";
import sfhAD2 from "../../img/4_Case Study 02_ Preparing for Future Growth/5_Compatible Residential/03_SFH_AD2_TREE.png";
import mditem from "../../img/4_Case Study 02_ Preparing for Future Growth/4_Land Use Compatibility/Panel Place Holder.png";

export default function PrepareFutureGrowth() {
    const carouselItems = [
      { name: "Existing", img: existingImg },
      { name: "Optimized Scenario", img: sfhImg },
      { name: "Proximity Analysis", img: sfh2Img },
      { name: "Mobility Image", img: sfhAD2 },
    ];
    return (
      <div>
        <ResponsiveAppBar />
        <CaseStudyLanding
          image={headerImage}
          title="PREPARING FOR FUTURE GROWTH"
          subtitle="Single Family Residential Land Use Optimization"
          body={[
            `Today, around 75 percent of residential suburban areas are zoned for single-family 
                housing. This has resulted in highly standardized, car-dependent districts, and exclusive 
                enclaves comprised of large contiguous residential islands with minimal distribution of 
                public open space, bounded by high-volume, commercial and retail corridors. This configuration 
                increases the burden on municipal infrastructure and often requires the construction of 
                costly transportation systems and other utilities to support population growth. `,
            `Three major forces are determining the need for radically new types of suburban form: the 
                proliferation of alternative energy vehicles, the rapid adoption of post-COVID-19 work-from-home 
                scenarios, and the massive population of new millennial homebuyers. Together, these three forces 
                are likely to upend many of the fundamental assumptions that have guided suburban land use planning 
                over the past century. New residential planning principles aimed at increasing social equity, 
                environmental performance, health benefits, and overall access to new mobility paradigms are desperately needed. 
            `,
          ]}
        />
        <CaseStudyBackground
          title="BACKGROUND"
          subtitle="Car-based Single Family Residential"
          image={backgroundImage}
          body={[
            `On average, vehicular surfaces (roadways, driveways,
                parking areas, etc.) account for almost 30% of singlefamily
                residential areas. Amenities like retail centers
                and public open space areas are often located outside
                of residential districts, which forces residents to make
                multiple daily household trips for shopping, errands, and
                other recreational purposes. This car-dependency puts
                disproportionate burden on working-class households
                and disabled residents.`,
          ]}
          stats={[
            { pct: "1876", text: "Anual Household Vehicle Trips" },
            {
              pct: "25%+",
              text: "Residential Land Devoted to Vehicular Surfaces",
            },
            { pct: "35%+", text: "GHG Emissions Reduction Potential" },
          ]}
        />
        <Grid
          container
          sx={{ width: "100vw", height: "70vh", overflowY: "hidden" }}
        >
          <ImageSlider leftImage={beforeImage} rightImage={afterImage} />{" "}
        </Grid>{" "}
        <CaseStudyVision
          title="VISION"
          subtitle="The Future of Autonomous Suburbs"
          body={[
            `In the near term, a more integrative approach to zoning can help redistribute 
                smaller commercial clusters and increase park space throughout residential neighborhoods, 
                allowing a finer-grained suburban fabric to emerge that caters more explicitly to a mix 
                of pedestrians and microtransit users. This atomization of residential islands, when applied 
                to greenfield development, can facilitate a significant reduction of long-distance vehicular 
                trips by clustering land uses together within a much smaller walkshed. It can also increase 
                the environmental benefits of heterogeneity by expanding access to public open space, which 
                proved to be one of the most valuable neighborhood public health assets during the COVID-19 pandemic.  `,
            `A transition from traditional car-based urbanism to autonomous, on-demand mobility paradigms will 
                further support a shift towards finer-grained land use planning by leveraging micromobility options 
                to grant residents greater access to services and amenities.`,
          ]}
          icons={[
            { img: densityImage, alt: "", label: "Smart Density" },
            { img: vehUsageImage, alt: "", label: "Reduced Vehicle Usage" },
            {
              img: envPerfImage,
              alt: "",
              label: "Better Environmental Performance",
            },
          ]}
        />
        {/* <div> custom stuff </div> */}
        <Grid container direction="column" sx={{ marginTop: "7vh" }}>
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={0} md={6}>
                {" "}
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ padding: "7em", textAlign: "left" }}
              >
                <Typography variant="sectionTitle">
                  {" "}
                  LAND USE COMPATIBILITY{" "}
                </Typography>
                <br></br>
                <Typography variant="sectionSubtitle">
                  Neighborhood Optimization with OASIS
                </Typography>
                <hr color="EC008C"></hr>
                <Typography variant="bodyBlack">
                  OASIS is a parametric toolbox that can help planners and
                  developers optimize neighborhood-scale land use and mobility
                  frameworks. The land use compatibility optimization tool of
                  OASIS toolbox can analyze and optimize compatibility index of
                  given land use plan to generate the optimal scenario for the
                  future growth.
                </Typography>
                <br></br>
                <br></br>
                <Button
                  variant="outlined"
                  style={{
                    color: "#EC008C",
                    borderColor: "#EC008C",
                    marginTop: "3em",
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Learn more about OASIS
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={0} md={2} />
            <Grid item xs={12} md={8}>
              <img src={mditem} style={{ width: "100%" }} />
              <Typography>
                The land use compatibility optimization tool of OASIS can
                optimize a typical neighborhood-scale suburban district made up
                of multiple land uses. Slide the objective control bars above
                (top-right), to negotiate between various trade-offs and
                determine the most strategic outcome.
              </Typography>
            </Grid>
            <Grid item xs={0} md={2} />
          </Grid>
          <Grid container direction="row">
            <Grid
              item
              xs={12}
              md={6}
              sx={{ padding: "7em", textAlign: "left" }}
            >
              <Typography variant="sectionTitle">
                {" "}
                COMPATIBLE RESIDENTIAL{" "}
              </Typography>
              <br></br>
              <Typography variant="sectionSubtitle">
                Block Optimization with MIRAGE
              </Typography>
              <hr color="EC008C"></hr>
              <Typography variant="bodyBlack">
                MIRAGE is a parametric toolbox that can help planners and
                developers optimize block-scale configurations. The block layout
                optimization tool of MIRAGE toolbox can optimize residential
                block layout to accommodate essential infrastructures and land
                covers for the future growth, such as passenger loading zone,
                micro-mobility corridor, and larger public open space, etc.
              </Typography>
              <br></br>
              <br></br>
              <Button
                variant="outlined"
                style={{
                  color: "#EC008C",
                  borderColor: "#EC008C",
                  marginTop: "3em",
                }}
                endIcon={<ArrowForwardIcon />}
              >
                Learn more about MIRAGE
              </Button>
            </Grid>
            <Grid item xs={0} md={6}>
              {" "}
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            direction="column"
            sx={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
          >
            <Grid item xs={12} md={6} elevation={5}>
              <Carousel
                navButtonsAlwaysVisible={true}
                sx={{ maxWidth: "750px" }}
              >
                {carouselItems.map((img, i) => (
                  <ImageItem key={i} image={img.img} name={img.name} />
                ))}
              </Carousel>
            </Grid>{" "}
            <Grid item xs={0} sm={3}>
              {" "}
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                Click through the various scenarios above to see how block
                layout optimization tool can transform an existing single-family
                residential block to be compatible with the autonomous needs of
                the future.
              </Typography>
            </Grid>{" "}
            <Grid item xs={0} sm={3}>
              {" "}
            </Grid>
          </Grid>
        </Grid>
        <CaseStudySummary
          text={``}
          icons={[
            { img: carImage, pct: "50%", text: "Reduction of vehicle tripps" },
            {
              img: pedImage,
              pct: "60%",
              text: "Increase in pedestrian accessibility",
            },
            {
              img: permImage,
              pct: "80%",
              text: "Reduction of impervious surface cover",
            },
            { img: canopyImage, pct: "60%", text: "Increase in tree canopy" },
          ]}
        />{" "}
      </div>
    );
}