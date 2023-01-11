export interface Result {
    symbol: string;
    name: string;
    reportDate: string;
    fiscalDateEnding: string;
    estimate: string;
    currency: string;
}

export interface Earnings {
    result: Result[];
    id: number;
    exception?: any;
    status: number;
    isCanceled: boolean;
    isCompleted: boolean;
    isCompletedSuccessfully: boolean;
    creationOptions: number;
    asyncState?: any;
    isFaulted: boolean;
}