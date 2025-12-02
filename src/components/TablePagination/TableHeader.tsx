import type { sort, TColumnType } from "../../types/tablePagination";

interface TableHeaderProps {
	handleSort: any;
	column?: TColumnType;
	currentSortBy?: sort;
}

const TableHeader = (props: TableHeaderProps) => {
	const { handleSort, column, currentSortBy } = props;
	const isSorted =
		currentSortBy?.column === column?.key && currentSortBy?.order === "asc"
			? "up"
			: "down";

	return (
		<th
			onClick={() => handleSort(column?.key)}
			style={{
				cursor: "pointer",
			}}
		>
			{column?.label}
			{isSorted}
		</th>
	);
};

export default TableHeader;
