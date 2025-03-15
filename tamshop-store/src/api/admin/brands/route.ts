import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { z } from "zod";
import { createBrandWorkflow } from "../../../workflows/create-brand";
import { PostAdminCreateBrand } from "./validators";

type PostAdminCreateBrandType = z.infer<typeof PostAdminCreateBrand>;

export const POST = async (req: MedusaRequest<PostAdminCreateBrandType>, res: MedusaResponse) => {
	const { result } = await createBrandWorkflow(req.scope).run({
		input: req.validatedBody,
	});

	res.json({ brand: result });
};
