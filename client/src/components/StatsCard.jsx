// import React from "react";
// import { Box, Typography, Paper, Avatar } from "@mui/material";

// export const StatsCard = ({
//   title,
//   icon: Icon,
//   data,
//   color = "primary",
//   sx,
//   customColor, // ny prop
// }) => {
//   const isSingleValue = Object.keys(data).length === 1;
//   const total =
//     data.Totalt ||
//     (isSingleValue
//       ? Object.values(data)[0]
//       : Object.values(data).reduce(
//           (sum, val) => sum + (typeof val === "number" ? val : 0),
//           0
//         ));

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         p: 2,
//         flex: "1 1 120px",
//         minWidth: "120px",
//         borderRadius: 4,
//         position: "relative",
//         overflow: "hidden",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         ...sx,
//       }}
//     >
//       {/* Färgad topplinje */}
//       <Box
//         sx={{
//           height: "6px",
//           width: "100%",
//           backgroundColor: customColor
//             ? customColor
//             : (theme) => theme.palette[color].main,
//           position: "absolute",
//           top: 0,
//           left: 0,
//         }}
//       />
//       {/* Ikon och titel */}
//       <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
//         <Avatar
//           sx={{
//             bgcolor: customColor
//               ? customColor
//               : (theme) => theme.palette[color].main,
//             width: 32,
//             height: 32,
//           }}
//         >
//           <Icon sx={{ color: "#fff" }} />
//         </Avatar>
//         <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
//           {title}
//         </Typography>
//       </Box>

//       {/* Totalen */}
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 700,
//           color: customColor ? customColor : `${color}.main`,
//         }}
//       >
//         {total}
//       </Typography>

//       {/* Subdata */}
//       {!isSingleValue &&
//         Object.entries(data).map(([key, value]) =>
//           key !== "Totalt" ? (
//             <Typography
//               key={key}
//               variant="body2"
//               sx={{ mt: 0.5, color: "text.secondary" }}
//             >
//               <strong>{value}</strong> {key}
//             </Typography>
//           ) : null
//         )}

//       {/* Enkel fake-bar-chart längst ner */}
//       <Box
//         sx={{
//           mt: 1,
//           display: "flex",
//           alignItems: "flex-end",
//           gap: 0.5,
//           height: "24px",
//         }}
//       >
//         <Box
//           sx={{
//             width: "20%",
//             height: "60%",
//             bgcolor: customColor
//               ? customColor
//               : (theme) => theme.palette[color].main,
//             borderRadius: 1,
//             opacity: 0.5,
//           }}
//         />
//         <Box
//           sx={{
//             width: "20%",
//             height: "90%",
//             bgcolor: customColor
//               ? customColor
//               : (theme) => theme.palette[color].main,
//             borderRadius: 1,
//             opacity: 0.8,
//           }}
//         />
//         <Box
//           sx={{
//             width: "20%",
//             height: "40%",
//             bgcolor: customColor
//               ? customColor
//               : (theme) => theme.palette[color].main,
//             borderRadius: 1,
//             opacity: 0.4,
//           }}
//         />
//       </Box>
//     </Paper>
//   );
// };

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // eller valfri ikon

export const StatsCard = ({
  title = "Daily Traffic",
  value = 756,
  chartData = [],
  gradientFrom = "#9c27b0",
  gradientTo = "#ce93d8",
  icon: Icon = TrendingUpIcon,
  unit = "+",
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        background: `linear-gradient(145deg, ${gradientFrom}, ${gradientTo})`,
        color: "#fff",
        p: 2,
        height: 160,
        width: 200,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{ position: "absolute", top: 10, left: 10, right: 10, height: 110 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#ffffff"
              strokeWidth={2}
              fillOpacity={0}
              dot={false}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: 16,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {value}
          {unit}
        </Typography>
        <Typography variant="body2">{title}</Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
      >
        <Icon sx={{ fontSize: 20, color: "#fff", opacity: 0.7 }} />
      </Box>
    </Paper>
  );
};
