/* eslint-disable @typescript-eslint/no-unused-vars */
import '@tanstack/react-table';

import {
  ClassNamesColumnDefProps,
  ClassNamesTableInstanceProps,
  ClassNamesTableOptions,
  ColumnWidthColumnDefProps,
  PopInColumnDefProps,
  PopInTableProps,
  PopInTableState,
  RowClickColumnDefProps,
  RowClickTableOptions,
} from '@value-experience-design/libella';
import { ComponentPropsWithoutRef } from 'react';

interface BaseElementProps {
  nodeProps?: ComponentPropsWithoutRef<'div'>;
}

declare module '@tanstack/react-table' {
  export interface GeneralRecord extends Record<string, unknown> {
    __headerTitle?: string;
    __isHeader?: boolean;
  }

  interface Table<TData extends GeneralRecord> extends PopInTableProps, ClassNamesTableInstanceProps {}
  interface TableOptionsResolved<TData extends GeneralRecord>
    extends RowClickTableOptions<D>,
      ClassNamesTableOptions<D> {}
  interface TableState extends PopInTableState {}
  interface TableSection<D extends GeneralRecord> {
    headerTitle: string;
    rows: D[];
  }

  interface HeaderGroup<TData extends GeneralRecord> extends BaseElementProps {}
  interface Header<TData extends GeneralRecord, TValue = unknown> extends BaseElementProps {}

  interface Column<TData extends GeneralRecord, TValue = unknown> extends BaseElementProps {}

  interface Row<TData extends GeneralRecord> extends BaseElementProps, RowClickRowProps {}

  interface Cell<TData extends GeneralRecord> extends BaseElementProps {}
}

declare module '@tanstack/table-core' {
  interface ColumnDefBase<TData extends GeneralRecord, TValue = unknown>
    extends PopInColumnDefProps<TData>,
      RowClickColumnDefProps,
      ColumnWidthColumnDefProps,
      ClassNamesColumnDefProps {}
}
