'use client';

import { getCountries, getIndustries, getLeads } from '@/src/@pi/leadApi';
import ClientContainer from '@/src/components/ClientContainer';
import Input from '@/src/components/input/Input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table';
import getErrorMessage from '@/src/lib/getErrorMessage';
import { MoreIcon } from '@/src/lib/shreIcon';
import { ApiResponse } from '@/src/types/init';
import { LeadAlphabetType, LeadContactType } from '@/src/types/lead';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

const LeadCollections = () => {
  const { data: session } = useSession();

  const [leads, setLeads] = useState<ApiResponse<
    LeadAlphabetType[] | LeadContactType[]
  > | null>(null);

  const [countries, setCountries] = useState<any>([]);
  const [industries, setIndustries] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>({
    open: false,
    search: '',
    industry_id: 0,
    country_id: 0,
  });

  useEffect(() => {
    console.log(filterData.industry_id);
    if (session?.user?.token) {
      const token = session?.user?.token;
      fetchLeads(token);
      if (!filterData.open) {
        fetchCountries(token);
        fetchIndustries(token);
      }
    }
  }, [
    session,
    filterData.search,
    filterData.industry_id,
    filterData.country_id,
  ]);

  const fetchLeads = async (token: string) => {
    try {
      const params = {
        search: filterData.search,
        industry_id: filterData.industry_id,
        country_id: filterData.country_id,
      };

      const res = await getLeads(token, params);
      const data = { error: false, data: res?.data?.data, message: '' };
      console.log(data);
      setLeads(data);
    } catch (err) {
      console.error(err);
      const data = { error: true, data: null, message: getErrorMessage(err) };
      setLeads(data);
    }
  };

  const fetchCountries = async (token: string) => {
    try {
      const res = await getCountries(token);
      setCountries(res?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchIndustries = async (token: string) => {
    try {
      const res = await getIndustries(token);
      setIndustries(res?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilter = (type: string, value: string | number) => {
    setFilterData({ ...filterData, [type]: value, open: true });
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterData({ ...filterData, search: e.target.value, open: true });
  };

  return (
    <ClientContainer>
      <div className="flex justify-between mb-5">
        <div className="w-[300px]">
          <Input
            name="search"
            value={filterData.search}
            type="text"
            placeholder="search..."
            classes="border border-gray-500"
            callBack={handleSearch}
          />
        </div>
        <Select>
          <SelectTrigger className="w-[180px] h-[50px]">
            <SelectValue placeholder="Select a Job Title" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(e) => {
            handleFilter('industry_id', e);
          }}
        >
          <SelectTrigger className="w-[180px] h-[50px]">
            <SelectValue placeholder="Select a Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Industries</SelectLabel>
              {industries.length > 0 &&
                industries.map((industry: any) => (
                  <SelectItem value={industry.id} key={industry.id}>
                    {industry.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] h-[50px]">
            <SelectValue placeholder="Select a Lead's Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(e) => {
            handleFilter('country_id', e);
          }}
        >
          <SelectTrigger className="w-[180px] h-[50px]">
            <SelectValue placeholder="Select a Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Countries</SelectLabel>
              {countries.length > 0 &&
                countries.map((country: any) => (
                  <SelectItem value={country.id} key={country.id}>
                    {country.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
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
        {leads !== null &&
          !leads?.error &&
          leads?.data?.map((data: any) => (
            <TableBody key={data.first_letter} className="w-[inherit]">
              <p className="py-3 block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                {data.first_letter}
              </p>

              {data.contacts.map((contact: LeadContactType, i: number) => (
                <TableRow
                  className="bg-white rounded-md row-auto border-b-[20px] border-[#f7f7f7]"
                  key={i}
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Image
                        width={48}
                        height={48}
                        src={contact.profile || '/default_profile.png'}
                        alt={contact.name}
                        style={{
                          height: '48px',
                          pointerEvents: 'none',
                        }}
                        className="relative inline-block  !rounded-full border border-blue-gray-50 bg-blue-gray-50/50 object-cover object-center p-1"
                      />
                      <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                        {contact.name}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {contact.email}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {contact.phone}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {contact.industry}
                    </p>
                    {/* <div className="w-max">
                      <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                        <span className="">{contact.industry}</span>
                      </div>
                    </div> */}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
                        {/* <img
                          src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg"
                          alt="visa"
                          className="relative inline-block h-full w-full !rounded-none  object-contain object-center p-1"
                        /> */}
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
              ))}
            </TableBody>
          ))}
      </Table>
    </ClientContainer>
  );
};

export default LeadCollections;

{
  /* {!leads.error &&
            leads?.data?.map((data: any, i) => (
              <TableRow
                className="bg-white rounded-md row-auto border-b-[15px] border-[#f7f7f7]"
                key={i}
              >
                <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                  {data.first_letter}
                </p>
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
            ))} */
}
