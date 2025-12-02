import useGetProductsData from "../../hooks/useGetProductsData";
import { COLUMNS } from "../../utils/constants";
import PaginationFooter from "./PaginationFooter";
import TableHeader from "./TableHeader";

const TablePagination = () => {
	const {
		products,
		isLoading,
		error,
		sort,
		pageNo,
		totalPages,
		updatesortBy,
		updatePageNo,
	} = useGetProductsData();

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>{error}</div>;
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "12px",
			}}
		>
			<h2>Products</h2>
			<table>
				<thead>
					<tr>
						{COLUMNS?.map((col) => (
							<TableHeader
								key={col?.key}
								column={col}
								currentSortBy={sort}
								handleSort={updatesortBy}
							/>
						))}
					</tr>
				</thead>
				<tbody>
					{products && products
						? products?.map((product) => (
								<tr key={product?.id}>
									<td>{product?.id}</td>
									<td>{product?.title}</td>
									<td>{product?.price}</td>
								</tr>
						  ))
						: null}
				</tbody>
			</table>
			<PaginationFooter
				totalPages={totalPages}
				currentPage={pageNo}
				handlePageChange={updatePageNo}
			/>
		</div>
	);
};

export default TablePagination;
