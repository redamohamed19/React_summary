export interface Istate {
  value: number;
}

export interface Iaction {
  type: String;
  payload: number;
}

export interface IGstate {
  counter: Istate;
  counter2: Istate;
}
export interface Istore {
  store: IGstate;
}
