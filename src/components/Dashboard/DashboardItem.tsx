import React from "react";

interface DashboardItemProps {
	id: number;
	name: string;
	price: number;
	change: number;
}

const DashboardItem = React.memo(
	({ name, price, change }: DashboardItemProps) => {
		const changed = change > 0 ? "up" : change < 0 ? "down" : "neutral";
		console.log(`RENDERED: ${name} - Price: ${price.toFixed(2)}`);
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
				}}
			>
				<p>{name}</p>
				<p>{price}</p>
				<p>{changed}</p>
			</div>
		);
	}
);

export default DashboardItem;
