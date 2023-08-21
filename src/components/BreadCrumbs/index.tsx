import { Breadcrumbs as MUIBreadcrumbs, Typography} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

interface BreadCrumbProps {
}

const BreadCrumbs = ({
}): BreadCrumbProps => {
    const pathnames = ["Page", "Detail"];

    return (
      <MUIBreadcrumbs separator="›" aria-label="breadcrumb">
        <Typography
          style={{ display: "flex", color: "inherit", cursor: "pointer" }}
        >
          <HomeOutlinedIcon />
        </Typography>
        {pathnames.map((pathname, i) => {
          const first = i === 0;
          const last = i === pathnames.length - 1;

          if (first) {
            return (
              <Typography key={i} style={{ cursor: "pointer" }}>
                {pathname}
              </Typography>
            );
          }

          if (last) {
            return (
              <Typography key={i} style={{ cursor: "pointer" }}>
                {pathname}
              </Typography>
            );
          }

          return <a>{pathname}</a>;
        })}
      </MUIBreadcrumbs>
    );
};

export default BreadCrumbs;
