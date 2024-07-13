import { Stack, Typography, Card, CardContent, CardMedia } from "@mui/material";


export default function Content({ options = [] }) {
  return (
    <Stack direction="row" flexWrap="wrap" useFlexGap spacing={"1rem"}>
      {options.map((v, index) => (
        <Card sx={{ width: "20rem", height: "25rem" }} key={index}>
          <CardMedia sx={{ height: "80%" }} image={v.image} title={v.label} />
          <CardContent>
            <Typography variant="h5" component="div">
              {v.label}
            </Typography>
            <Typography variant="caption">{v.caption}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
