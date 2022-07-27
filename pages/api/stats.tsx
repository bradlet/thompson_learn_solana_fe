// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TEST_STATS } from "../../helpers/fixtures";

export type IdlePlayerStats = {
    level: number;
    currentName: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IdlePlayerStats>
) {
    res.status(200).json(TEST_STATS);
}
