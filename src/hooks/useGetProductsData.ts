import { useEffect, useState } from "react";
import { PAGE_LIMIT } from "../utils/constants";
import type { sort, TProduct } from "../types/tablePagination";

const useGetProductsData = () => {
	const [products, setProducts] = useState<TProduct[]>();
	const [totalPages, setTotalPages] = useState<number>();
	const [pageNo, setPageNo] = useState<number>(1);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [sort, setSort] = useState<sort>();

	const fetchProductData = async (skip: number, sort?: sort | null) => {
		try {
			setIsLoading(true);
			const res = await fetch(
				`https://dummyjson.com/products?limit=${PAGE_LIMIT}&skip=${
					(pageNo - 1) * PAGE_LIMIT
				}&sortBy=${sort?.column}&order=${sort?.order ?? "asc"}`
			);
			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}
			const data = await res.json();
			setProducts(data?.products);
			const totalPages = Math.ceil(data?.total / PAGE_LIMIT);
			setTotalPages(totalPages);
		} catch (err) {
			console.log(err?.message);
			setError(err?.message as string);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchProductData(pageNo, sort);
	}, [pageNo, sort, sort?.column, sort?.order]);

	const updatePageNo = (val: number) => {
		setPageNo(val);
	};

	const updatesortBy = (sortBy: string) => {
		setSort((state) => {
			const newOrder =
				state?.column === sortBy && state?.order === "asc"
					? "desc"
					: "asc";
			const newState = {
				...state,
				column: sortBy,
				order: newOrder,
			};
			return newState;
		});
	};

	return {
		products,
		isLoading,
		error,
		totalPages,
		sort,
		pageNo,
		updatePageNo,
		updatesortBy,
	};
};

export default useGetProductsData;
