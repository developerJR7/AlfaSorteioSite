import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { motion } from 'framer-motion'

const generateRandomId = () => Math.random().toString(36).substring(2, 15)

const generateKey = (prefix: string, id: string, keySet?: string) =>
  keySet
    ? `${prefix}-${id}_${keySet}_${generateRandomId()}`
    : `${prefix}-${id}_${generateRandomId()}`

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  keySet?: string
  classMotion?: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  keySet,
  classMotion
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <motion.div
      initial={{ opacity: 0, x: '300px' }}
      animate={{ opacity: 1, x: '0' }}
      className={cn(
        'w-full max-w-[1330px] self-center rounded-lg bg-white',
        classMotion
      )}
    >
      <div className="md:w-full md:overflow-x-auto">
        <Table>
          <TableHeader className="text-xs text-colorPrimary-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={generateKey('header', headerGroup.id, keySet)}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={generateKey('header-item', header.id, keySet)}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={generateKey('row', row.id, keySet)}
                  data-state={row.getIsSelected() ? 'selected' : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={generateKey('cell', cell.id, keySet)}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-20 p-2 text-center text-lg"
                >
                  Sem resultado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  )
}
