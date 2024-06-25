'use client';

import { getCountries, getIndustries, getLeads } from '@/@pi/leadApi';
import Button from '@/components/button/Button';
import ClientContainer from '@/components/ClientContainer';
import InputRef from '@/components/input/InputRef';
import SelectDemo from '@/components/select/SelectDemo';
import Text from '@/components/typography/Text';
import { SelectItem } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import getErrorMessage from '@/lib/getErrorMessage';
import { LoadingIcon, MoreIcon } from '@/lib/shreIcon';
import { debounce } from '@/lib/utils';
import { ApiResponse } from '@/types/init';
import {
  CountryType,
  IndustryType,
  LeadAlphabetType,
  LeadContactType,
} from '@/types/lead';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type FilterDataType = {
  open: boolean;
  search: string;
  sort: string;
  industry_id: number;
  company_id: number;
  job_id: number;
  country_id: number;
};

const initFilterData = {
  open: false,
  search: '',
  sort: 'az',
  industry_id: 0,
  company_id: 0,
  job_id: 0,
  country_id: 0,
};

const LeadCollections = () => {
  const { data: session } = useSession();

  const [leads, setLeads] = useState<ApiResponse<
    LeadAlphabetType[] | LeadContactType[]
  > | null>(null);

  const [loading, setLoading] = useState(true);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [industries, setIndustries] = useState<IndustryType[]>([]);
  const [filterData, setFilterData] = useState<FilterDataType>(initFilterData);

  useEffect(() => {
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
    filterData.sort,
    filterData.industry_id,
    filterData.country_id,
  ]);

  const fetchLeads = async (token: string) => {
    try {
      setLoading(true);
      const params = {
        search: filterData.search,
        sort: filterData.sort === 'az' ? '' : filterData.sort,
        industry_id: +filterData.industry_id,
        country_id: +filterData.country_id,
      };

      const res = await getLeads(token, params);
      const data = { error: false, data: res?.data?.data, message: '' };
      setLeads(data);
      setLoading(false);
    } catch (err) {
      const data = { error: true, data: null, message: getErrorMessage(err) };
      setLeads(data);
      setLoading(false);
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

  const handleSearch = () => {
    if (searchRef?.current?.value !== null) {
      setFilterData({
        ...filterData,
        search: searchRef?.current?.value || '',
        open: true,
      });
    }
  };

  const handleReset = () => {
    if (searchRef?.current?.value) {
      searchRef.current.value = '';
    }
    setFilterData(initFilterData);
  };

  const debounceSearch = debounce(handleSearch, 1000);

  // if (loading) {
  //   return (

  //   );
  // }

  const renderTableContact = (contact: LeadContactType, i: number) => {
    return (
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
    );
  };

  return (
    <ClientContainer>
      <div className="flex flex-col gap-[30px]">
        <div className="flex justify-between items-center">
          <Text label="Lead Collections" />
          <SelectDemo
            label="Sorts"
            value={filterData.sort}
            placeHolder="Sorts By :"
            callBack={(e) => {
              handleFilter('sort', e);
            }}
          >
            <SelectItem value="az">A-Z</SelectItem>
            <SelectItem value="recent">Recent</SelectItem>
          </SelectDemo>
        </div>
        <div className="flex gap-5 mb-5 pb-8 border-b border-gray-200">
          <div className="w-[300px]">
            <InputRef
              refObj={searchRef}
              callBack={debounceSearch}
              placeHolder={'search...'}
            />
          </div>
          <SelectDemo
            placeHolder="Select a Job Title"
            value={filterData.job_id.toString()}
            label="Jobs"
            callBack={(e) => {
              handleFilter('job', e);
            }}
          >
            <SelectItem value={'0'}>Select a Job Title</SelectItem>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectDemo>

          <SelectDemo
            placeHolder="Select a Industry"
            label="Industries"
            value={filterData.industry_id.toString()}
            callBack={(e) => {
              handleFilter('industry_id', e);
            }}
          >
            <SelectItem value={'0'}>Select a Industry</SelectItem>
            {industries.length > 0 &&
              industries.map((industry: any) => (
                <SelectItem value={industry.id.toString()} key={industry.id}>
                  {industry.name}
                </SelectItem>
              ))}
          </SelectDemo>

          <SelectDemo
            placeHolder="Select a Lead's Company"
            label="Lead companies"
            value={filterData.company_id.toString()}
            callBack={(e) => {
              'apple';
              handleFilter('company', e);
            }}
          >
            <SelectItem value="0">{"Select a Lead's Company"}</SelectItem>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectDemo>

          <SelectDemo
            placeHolder="Select a Country"
            label="Countries"
            value={filterData.country_id.toString()}
            callBack={(e) => {
              handleFilter('country_id', e);
            }}
          >
            <SelectItem value="0">Select a Country</SelectItem>
            {countries.length > 0 &&
              countries.map((country: any) => (
                <SelectItem value={country.id.toString()} key={country.id}>
                  {country.name}
                </SelectItem>
              ))}
          </SelectDemo>
          {filterData.open && (
            <Button
              label="Reset"
              callBack={() => {
                handleReset();
              }}
            />
          )}
        </div>
      </div>
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

        {loading && (
          <TableRow>
            <TableCell colSpan={6} className="pt-[50px] font-medium w-full">
              <div className=" flex justify-center items-center text-center ">
                <LoadingIcon />
              </div>
            </TableCell>
          </TableRow>
        )}

        {!loading && leads?.data?.length === 0 && (
          <TableRow>
            <TableCell
              colSpan={6}
              className="pt-[50px] text-center font-medium"
            >
              Not Found !
            </TableCell>
          </TableRow>
        )}

        {!loading &&
          leads !== null &&
          filterData.sort === 'recent' &&
          !leads?.error && (
            <TableBody className="w-[inherit]">
              {leads?.data?.map((contact: LeadContactType | any, i: number) =>
                renderTableContact(contact, i)
              )}
            </TableBody>
          )}

        {!loading &&
          leads !== null &&
          filterData.sort === 'az' &&
          !leads?.error &&
          leads?.data?.map((data: LeadAlphabetType | LeadContactType | any) => (
            <TableBody key={data?.first_letter} className="w-[inherit]">
              <p className="py-3 block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                {data?.first_letter}
              </p>

              {data?.contacts?.map((contact: LeadContactType, i: number) =>
                renderTableContact(contact, i)
              )}
            </TableBody>
          ))}
      </Table>
    </ClientContainer>
  );
};

export default LeadCollections;
