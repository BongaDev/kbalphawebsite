export class Cpi {
    name: string;
    interval: string;
    unit: string;
    data: Datum[];
}

export class Datum {
    date: string;
    value: string;
}