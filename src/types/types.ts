export type Id = number | string
export type Nullable<T> = T | null

export interface IPeople {
length?: number
[x: number]: Nullable<string>
  name: string
  height?: Nullable<string>
  mass?: Nullable<string>
  hair_color?: Nullable<string>
  url?: Nullable<string>
  gender?: Nullable<string>
  eye_color?: Nullable<string>
  skin_color?: Nullable<string>
}