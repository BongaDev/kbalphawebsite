export interface DealDto {
    properties: Properties;
}

export interface Properties {
    amount: string;
    closedate: Date;
    dealname: string;
    dealstage: string;
    hubspot_owner_id: string;
    pipeline: string;
}