export const getTotalCount = (totalCount, limit) => {
	return Math.ceil(Number(totalCount) / Number(limit));
};
