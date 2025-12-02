interface PaginationFooterProps {
	totalPages?: number;
	currentPage: number;
	handlePageChange: any;
}
const PaginationFooter = (props: PaginationFooterProps) => {
	const { totalPages, currentPage, handlePageChange } = props;

	return (
		<div
			style={{
				display: "flex",
				gap: "12px",
				alignItems: "center",
			}}
		>
			<button
				disabled={currentPage == 1}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				Prev
			</button>
			<p>{currentPage + " of " + totalPages}</p>
			<button
				disabled={currentPage === totalPages}
				onClick={() => handlePageChange(currentPage + 1)}
			>
				Next
			</button>
		</div>
	);
};

export default PaginationFooter;
