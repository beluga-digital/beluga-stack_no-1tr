export const metaTitleGenerator = (preffix: string, parent?: string) => {
	if (parent) {
		return (preffix + ' – ' + parent + ' | beluga')
	}
	return (preffix + ' | beluga')
}
