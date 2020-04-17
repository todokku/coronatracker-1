import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import axios from "axios";
import {
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HeatMap from "./HeatMap";
import HeatMapButtons from "./HeatMapButtons";
import HeatMapLegend from "./HeatMapLegend";
import { FETCH_URL } from "../../helpers/misc";

const useStyle = makeStyles({
  root: {
    marginTop: 25,
    marginBottom: 30
  }
})

export default function HeatMapContainer() {
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  const classes = useStyle();

  useEffect(() => {
    axios.get(FETCH_URL).then(res => {
      setData(res.data);
    });
  }, []);

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  function handleReCenter() {
    setPosition({ coordinates: [0, 0], zoom: 1 });
  }

  return (
    <Grid container className={classes.root} direction="row" justify="center">
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginBottom: 20 }}>
        <Typography align="center" variant="h4">
          COVID-19 HeatMap
        </Typography>
      </Grid>
      <Grid item xs={4} sm={5} md={5} lg={5} />
      <Grid item xs={4} sm={2} md={2} lg={2} align="center">
        <HeatMapButtons
          handleReCenter={handleReCenter}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
        />
      </Grid>
      <Grid item xs={4} sm={5} md={5} lg={5} />
      <Grid item md={1} lg={1} />
      <Grid item xs={12} sm={12} md={10} lg={10}>
        <HeatMap
          data={data}
          position={position}
          handleMoveEnd={handleMoveEnd}
          setContent={setContent}
        />
        <ReactTooltip>{content}</ReactTooltip>
      </Grid>
      <Grid item md={1} lg={1} />
      <HeatMapLegend />
    </Grid>
  );
};
