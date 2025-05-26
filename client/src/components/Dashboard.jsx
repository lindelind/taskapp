import React from "react";
import { Paper, Box } from "@mui/material";
import { StatsCard } from "./StatsCard";
import { Assignment } from "@mui/icons-material";
import UserInfoDisplay from "./UserInfoDisplay";
import { useTaskContext } from "../context/TaskContext";

const Dashboard = () => {
  const { tasks } = useTaskContext();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.done).length;
  const ongoingTasks = tasks.filter((task) => !task.done).length;
  const overdueTasks = tasks.filter((task) => {
    if (!task.dueDate) return false;
    return !task.done && new Date(task.dueDate) < new Date();
  }).length;

  const stats = {
    Totalt: totalTasks,
    Klara: completedTasks,
    Pågående: ongoingTasks,
    Förfallna: overdueTasks,
  };

  const sharedChartData = [
    { value: stats.Pågående },
    { value: stats.Klara },
    { value: stats.Förfallna },
    { value: stats.Totalt },
  ];
  

  //   const mockUser = {
  //     Namn: "John Doe",
  //     Adress: "123 Main St",
  //     Role: 2,
  //     Postnr: "12345",
  //     Ort: "Stockholm",
  //     Hemsida: "www.example.com",
  //   };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <h1>Task Dashboard</h1>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          gap: 3,
          alignItems: "stretch",
        }}
      >
        {/* <Box
          sx={{
            flex: "0 0 340px",
            minWidth: 280,
            maxWidth: 400,
            mb: { xs: 2, md: 0 },
          }}
        >
          <UserInfoDisplay Mstate={mockUser} />
        </Box> */}
        <Box
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            gap: 2,
            minWidth: 0,
            alignItems: "stretch",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", md: "flex-start" },
          }}
        >
          {/* <StatsCard
            title="Uppgifter"
            icon={Assignment}
            data={{ Totalt: stats.Totalt }}
            color="primary"
            customColor="#c157d4"
            sx={{ maxWidth: 160, minWidth: 120, flex: "1 1 120px" }}
          />
          <StatsCard
            title="Ej klara"
            icon={Assignment}
            data={{ "Ej klara": stats.Pågående }}
            color="warning"
            customColor="#ffd966"
            sx={{ maxWidth: 160, minWidth: 120, flex: "1 1 120px" }}
          />
          <StatsCard
            title="Klara"
            icon={Assignment}
            data={{ Klara: stats.Klara }}
            color="success"
            customColor="#a4d457"
            sx={{ maxWidth: 160, minWidth: 120, flex: "1 1 120px" }}
          />
          <StatsCard
            title="Förfallna"
            icon={Assignment}
            data={{ Förfallna: stats.Förfallna }}
            color="error"
            customColor="#e63e3e"
            sx={{ maxWidth: 160, minWidth: 120, flex: "1 1 120px" }}
          /> */}
          <StatsCard
            title="Totalt"
            value={stats.Totalt}
            chartData={sharedChartData}
            icon={Assignment}
            gradientFrom="#c157d4"
            gradientTo="#40108f"
            unit="+"
          />

          <StatsCard
            title="Ej klara"
            value={stats.Pågående}
            chartData={[{ value: stats.Pågående }, { value: stats.Totalt }]}
            icon={Assignment}
            gradientFrom="#ffd966"
            gradientTo="#f57411"
            unit=""
          />

          <StatsCard
            title="Klara"
            value={stats.Klara}
            chartData={[{ value: stats.Klara }, { value: stats.Totalt }]}
            icon={Assignment}
            gradientFrom="#a4d457"
            gradientTo="#264503"
            unit=""
          />

          <StatsCard
            title="Förfallna"
            value={stats.Förfallna}
            chartData={[{ value: stats.Förfallna }, { value: stats.Totalt }]}
            icon={Assignment}
            gradientFrom="#e63e3e"
            gradientTo="#730e05"
            unit=""
          />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
