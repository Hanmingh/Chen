import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { pri } from "@/data/pri";

const Pri = () => {
  return (
    <section className="py-10">
      <div>
        <h2 className="my-6 font-bold text-pretty mb-10 items-center text-center">
          PRIVATISSIMUM
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[140px]">Date</TableHead>
              <TableHead>Presenter</TableHead>
              <TableHead>Title</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pri.map((item) => (
              <TableRow key={item.date + item.presenter}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.presenter}</TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </section>
  )
}

export default Pri