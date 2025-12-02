import useRealTimeData from "../../hooks/useRealTimeData";
import DashboardItem from "./DashboardItem";
import type { TDashoboadItem } from "../../types/dashboard";

const Dashboard = () => {
	const { data, updateCount } = useRealTimeData(1000);
	return (
		<div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
			<h1>Real Time Dashboard</h1>
			<p>Total records processed : {updateCount}</p>
			<div style={{ display: "flex", gap: "24px" }}>
				{data && data?.length
					? data?.map((dashboardItem: TDashoboadItem) => {
							return (
								<DashboardItem
									{...dashboardItem}
									key={dashboardItem?.id}
								/>
							);
					  })
					: null}
			</div>
		</div>
	);
};

export default Dashboard;
