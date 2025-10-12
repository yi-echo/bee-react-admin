import { HttpResponse, http } from "msw";
import { ResultStatus } from "@/types/enum";
import { convertFlatToTree } from "@/utils/tree";
import { DB_MENU } from "../assets_backup";

const menuList = http.get("/api/menu", async () => {
	const menuTree = convertFlatToTree(DB_MENU);
	return HttpResponse.json(
		{
			message: "",
			data: menuTree,
			code: ResultStatus.SUCCESS, // business status
		},
		{
			status: 200, // http status
		},
	);
});

export { menuList };
