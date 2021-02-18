import { BigNumber } from "@ethersproject/bignumber";

export interface BoardData {
    leaderBoardPositions: LeaderBoardPosition[];
}
export interface MarketPosition {
    market: {
        id?: string;
        outcomeTokenPrices: string[];
        conditions?: {
            payouts: string[];
        }[];
    };
    user: {
        id: string;
        transactions: {
            timestamp: string;
        }
    }
    outcomeIndex: string;
    quantityBought: string;
    netQuantity: string;
    valueBought: string;
    valueSold: string;
    netValue?: string;
}
export interface LeaderBoardPosition {
    trades: number;
    user: string;
    invested: string;
    earnings: string;
    roi: number;
}
export interface RedisLeaderBoardPositions extends BoardData {
    lastUpdate: number;
}

