import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default Dashboard;
