export type ODataListResponse<T> = {
  '@odata.context': string;
  '@odata.count'?: number;
  value: T[];
};

export type PartialWithRequiredFields<D, I extends keyof D> = Partial<D> & Required<Pick<D, I>>;

export type BasePersona = {
  firstName: string;
  lastName: string;
  role: string;
  imageSrc: string;
};
