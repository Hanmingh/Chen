import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Papa from 'papaparse';
import { useEffect, useState } from "react";

interface pri_info {
  Date: string;
  Presenter: string;
  Title: string;
}

const Pri = () => {
  const [info, setInfo] = useState<pri_info[]>([])

  useEffect(() => {
    const csvUrl = 
      'https://docs.google.com/spreadsheets/d/1W6D6HGo3xqrj2203KmKpisbVc9oUukE08Vy53bpkVJE/export?format=csv&gid=0'

    Papa.parse<pri_info>(csvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setInfo(result.data)
      },
    })
  }, [])

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
            {info.map((item) => (
              <TableRow key={item.Date + item.Presenter}>
                <TableCell>{item.Date}</TableCell>
                <TableCell>{item.Presenter}</TableCell>
                <TableCell className="font-medium">{item.Title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </section>
  )
}

export default Pri