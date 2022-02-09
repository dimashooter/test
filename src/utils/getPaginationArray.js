export const getPaginationArray = totalPages => {
	let arr = [];
	for (let i = 1; i <= totalPages; i++) {
		arr.push(i);
	}
	return arr;
};
