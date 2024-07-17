import { ReactNode } from "react";

export type TMode = 'Add' | 'Edit';

export interface IComponent<T = ReactNode> {
  children?: T
  className?: string;
}