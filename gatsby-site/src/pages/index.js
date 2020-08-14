import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
  colors,
} from "@material-ui/core"
import Page from "../components/Page";
import clsx from "clsx";
import EubaLogo from "../components/EubaLogo";
import global from "../styles/global.css";
import Roboto from "../styles/roboto.css";

const useStyles = makeStyles({
  root: {
    backgroundImage: "url(/eubabackground.png)",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  centerBox: {
    height: "400px",
    width: "400px",
    padding: "20px",
  },
  centerBox: {
    backgroundColor: colors.grey[900],
    borderRadius: "10px",
    width: "400px",
    padding: "20px",
  },
  titleTypography: {
    fontFamily: Roboto,
    fontWeight: 500,
    fontSize: 36,
    color: colors.blueGrey[200],
  },
  bodyTypography: {
    fontFamily: Roboto,
    fontWeight: 400,
    fontSize: 16,
    color: colors.blueGrey[300],
  },
  centerText: {
    textAlign: "center"
  }
})

const talkingPoints = [
  "Data-Driven Dashboard for Overseeing Team Productivity",
  "Capacious Inventory Management System",
  "Intuitive Finance Tracking for your Treasurer or Booster Club",
  "Complex Timeline Feature with Milestones for Impressive Organization",
  "Student Clock-In & Clock-Out Tracking for Easy Attendance Coverage",
  "Ability to Track and Manage Upcoming Events, Matches, and More",
  "Discord Bot to Easily Manage Permissions and Encourage Team Communication",
  "Full-Featured Theming Engine to Personalize Project Euba to Your Team Colors",
  "And Much More!",
]

export default function Home() {
  let classes = useStyles()
  return (
    <Page title="Project Euba">
      <Box className={classes.root}>
        <Container maxWidth="md" className={classes.centerBox}>
          <Typography className={clsx(classes.titleTypography, classes.centerText)}>
            {" "}
            Under Construction!{" "}
          </Typography>
          <Typography className={clsx(classes.bodyTypography, classes.centerText)}>
            Project Euba is a student-led non-profit software association
            looking to help your robotics team stay organized as effortlessly as
            possible. We're in the process of building an extensive robotics
            club management suite with comprehensive features such as:
          </Typography>
          <List style={{marginLeft: 10}}>
            {talkingPoints.map(talkingPoint => (
                <Typography className={classes.bodyTypography}> • {talkingPoint}</Typography>
            ))}
          </List>
          <Typography className={clsx(classes.bodyTypography, classes.centerText)}>
            Expected Media and Prototypes:
          </Typography>
          <Typography className={clsx(classes.bodyTypography, classes.centerText)}>
            End of September, 2020
          </Typography>
        </Container>
      </Box>
    </Page>
  )
}
