import { z } from "zod";


export const exampleSchema: any = z.object({
	name: z.string({
		"required_error": ""
	}).min(2, {
		"message": ""
	}),
	mail: z.string({
		"required_error": "",
		"invalid_type_error": ""
	}).email({
		"message": ""
	}),
	message: z.optional(z.string({
		"invalid_type_error": ""
	})),
});
