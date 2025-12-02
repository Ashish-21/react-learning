import { useEffect, useState } from "react";

const INITIAL_DATA = [
	{ id: 1, name: "MSFT", price: 401.0, change: 0 },
	{ id: 2, name: "AAPL", price: 170.5, change: 0 },
	{ id: 3, name: "GOOG", price: 150.25, change: 0 },
	{ id: 4, name: "TSLA", price: 175.75, change: 0 },
	{ id: 5, name: "TSW", price: 125.75, change: 0 },
	{ id: 6, name: "TSP", price: 185.75, change: 0 },
	{ id: 7, name: "TSU", price: 145.75, change: 0 },
];

const useRealTimeData = (delay: number = 50) => {
	const [data, setData] = useState(INITIAL_DATA);
	const [updateCount, setUpdateCount] = useState(0);
	useEffect(() => {
		const updateData = () => {
			setUpdateCount((prevCount) => prevCount + 1);
			const tempData = [...data];
			const randomIndex = Math.floor(Math.random() * tempData?.length);
			const item = tempData[randomIndex];
			const newPrice = item?.price + Math.floor(Math.random() - 0.5);
			tempData[randomIndex] = {
				...item,
				price: newPrice,
				change: newPrice - item?.price,
			};
			setData(tempData);
		};
		const intervalId = setInterval(updateData, delay);
		return () => clearInterval(intervalId);
	}, [data, delay]);

	return { data, updateCount };
};

export default useRealTimeData;
