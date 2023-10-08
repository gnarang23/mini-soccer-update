export interface BaseResponse<T> {
    get: string;
    parameters: {
      league?: string;
      season?: string;
      team?: string;
      last?: string
    };
    errors: [];
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response : T[]
}
