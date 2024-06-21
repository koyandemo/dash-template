import ClientContainer from '@/components/ClientContainer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { leadCollectionDatas } from '@/utils/initData';
import { MoreIcon } from '@/utils/shreIcon';

const LeadCollections = () => {
  return (
    <ClientContainer>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Profile</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Socials</TableHead>
            <TableHead className="text-right">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leadCollectionDatas.map((data, i) => (
            <>
              <TableRow className="bg-white rounded-md">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <img
                      src={data.profile}
                      alt={data.name}
                      className="relative inline-block h-12 w-12 !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-cover object-center p-1"
                    />
                    <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                      {data.name}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {data.email}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {data.phone_number}
                  </p>
                </TableCell>
                <TableCell>
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                      <span className="">{data.industry}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                      <img
                        src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                        alt="visa"
                        className="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
                        visa 1234
                      </p>
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                        06/2026
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <MoreIcon />
                    </span>
                  </button>
                </TableCell>
              </TableRow>
              <div className="mt-3" />
            </>
          ))}
        </TableBody>
      </Table>
    </ClientContainer>
  );
};

export default LeadCollections;
