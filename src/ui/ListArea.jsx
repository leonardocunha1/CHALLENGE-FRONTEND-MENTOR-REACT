import Grid from "@mui/material/Unstable_Grid2";
import DataJson from "../../data.json";
import Item from "./Item";

// console.log(DataJson);

function ListArea() {
  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold text-primary-950">Desserts</h1>
      <div className="max-w-2xl">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {DataJson.map((data, i) => (
            <Grid xs={12} sm={4} md={4} key={i}>
              <Item data={data} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default ListArea;
