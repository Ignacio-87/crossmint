export interface RequestParam extends RequestPoint {
  candidateId: string;
}

export interface RequestPoint {
  row: number;
  column: number;
}
