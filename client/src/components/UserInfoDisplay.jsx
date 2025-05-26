import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import MapIcon from "@mui/icons-material/Map";
import PersonIcon from "@mui/icons-material/Person";
import DomainIcon from "@mui/icons-material/Domain";
import WorkIcon from "@mui/icons-material/Work";

const businessTypes = [
  { value: "1", label: "Bransch 1" },
  { value: "2", label: "Bransch 2" },
  { value: "3", label: "Bransch 3" },
  { value: "4", label: "Bransch 4" },
  { value: "7", label: "Återvinning" },
  { value: "8", label: "Annat" },
  { value: "9", label: "Bransch 5" },
  { value: "10", label: "Bransch 6" },
  { value: "11", label: "Bransch 7" },
];

const getBranschLabel = (role) => {
  const found = businessTypes.find((b) => b.value === String(role));
  return found ? found.label : role;
};

const FieldDisplay = ({ icon, label, value }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mx: 1 }}>
    <Avatar
      sx={{ bgcolor: "primary.main", width: 32, height: 32, fontSize: 18 }}
    >
      {icon}
    </Avatar>
    <Box>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="subtitle2" fontWeight={600}>
        {value || "–"}
      </Typography>
    </Box>
  </Box>
);

function UserInfoDisplay({ Mstate }) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 3,
      
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
        minHeight: 0,
        height: "100%",
      }}
    >
      <FieldDisplay icon={<PersonIcon />} label="Namn" value={Mstate.Namn} />
      <FieldDisplay icon={<MapIcon />} label="Adress" value={Mstate.Adress} />
      <FieldDisplay
        icon={<WorkIcon />}
        label="Bransch"
        value={getBranschLabel(Mstate.Role)}
      />
      <FieldDisplay
        icon={<LocationCityIcon />}
        label="Postnummer"
        value={Mstate.Postnr}
      />
      <FieldDisplay icon={<DomainIcon />} label="Ort" value={Mstate.Ort} />
      <FieldDisplay
        icon={<PublicIcon />}
        label="Hemsida"
        value={Mstate.Hemsida}
      />
    </Paper>
  );
}

export default UserInfoDisplay;
