import React from 'react';

export interface ISearch<T> {
  onChange?: (value: any) => void;
  onClick?: (value: any) => void;
  classNames?: string;
  placeholder?: string;
  onSearch?: (value: any) => void;
  name: string;
  onFinish?: (value: T) => void;
  formItems?: {
    name: keyof T;
    label: string;
    element: React.ReactNode;
    width?: 'w-50' | 'w-full';
  }[];
}
