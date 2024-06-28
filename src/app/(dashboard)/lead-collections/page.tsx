'use client';

import { getLeadFilterData, getLeads, getLeadsExport } from '@/@pi/leadApi';
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
import { useRouter } from 'next/navigation';
import { MultiSelect } from 'primereact/multiselect';
import { useEffect, useRef, useState } from 'react';

type FilterDataType = {
  open: boolean;
  search: string;
  sort: string;
  industry_id: number[];
  company: number[];
  job_title: number[];
  country_id: number[];
};

const initFilterData = {
  open: false,
  search: '',
  sort: 'az',
  industry_id: [],
  company: [],
  job_title: [],
  country_id: [],
};

const LeadCollections = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [companies, setCompanies] = useState([]);
  const [jobeTitles, setJobeTitles] = useState([]);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [industries, setIndustries] = useState<IndustryType[]>([]);
  const [filterData, setFilterData] = useState<FilterDataType>(initFilterData);
  const [leads, setLeads] = useState<ApiResponse<
    LeadAlphabetType[] | LeadContactType[]
  > | null>(null);

  useEffect(() => {
    if (session?.user?.token) {
      const token = session?.user?.token;
      fetchLeads(token);
      if (!filterData.open) {
        // fetchCountries(token);
        // fetchIndustries(token);
        fetchLeadFilterData(token);
      }
    }
  }, [
    session,
    filterData.search,
    filterData.sort,
    filterData.job_title,
    filterData.company,
    filterData.industry_id,
    filterData.country_id,
  ]);

  const fetchLeads = async (token: string) => {
    try {
      setLoading(true);
      const params = {
        search: filterData.search,
        sort: filterData.sort === 'az' ? '' : filterData.sort,
        company: filterData.company.join(),
        job_title: filterData.job_title.join(),
        industry_id: filterData.industry_id.join(),
        country_id: filterData.country_id.join(),
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

  const fetchLeadFilterData = async (token: string) => {
    try {
      const res = await getLeadFilterData(token);
      if (res?.data?.data) {
        const { companies, countries, industries, job_titles } = res.data.data;
        const companyDatas = companies.map((data: string) => {
          return {
            value: data,
            name: data.length > 20 ? data.slice(0, 20).concat('...') : data,
          };
        });

        const countryDatas = countries.map((data: CountryType) => {
          return {
            value: data.id,
            name:
              data.name.length > 20
                ? data.name.slice(0, 20).concat('...')
                : data.name,
          };
        });

        const industryDatas = industries.map((data: IndustryType) => {
          return {
            value: data.id,
            name:
              data.name.length > 20
                ? data.name.slice(0, 20).concat('...')
                : data.name,
          };
        });

        const jobTitleDatas = job_titles.map((data: string) => {
          return {
            value: data,
            name: data.length > 20 ? data.slice(0, 20).concat('...') : data,
          };
        });
        setCountries(countryDatas);
        setCompanies(companyDatas);
        setJobeTitles(jobTitleDatas);
        setIndustries(industryDatas);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchLeadsExport = async (token: string) => {
    try {
      const res: Blob = await getLeadsExport(token);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const dowloadFile = async (token: string) => {
    let url = `https://stg-api.shre.cactusminds.com/leads/exports`;
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ` + token,
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
      // mode: 'no-cors',
    })
      .then((res) => res.blob())
      .then((blob) => {
        console.log(blob);
        // var file = window.URL.createObjectURL(blob);
        // window.location.assign(file);
      })
      .catch((err) => {
        console.error(err);
      });
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
            <div className="flex flex-col gap-[1px]">
              <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                {contact.name}
              </p>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {contact.email}
              </p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {contact.phone}
          </p>
          countries
        </TableCell>
        <TableCell>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {contact.industry}
          </p>
        </TableCell>
        <TableCell>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {contact.company || '------'}
          </p>
        </TableCell>
        <TableCell>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {contact.job_title}
          </p>
        </TableCell>
        <TableCell className="text-right">
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => {
              alert('Under Development !');
            }}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <MoreIcon />
            </span>
          </button>
        </TableCell>
      </TableRow>
    );
  };

  const handleMultiSelectFilter = (type: string, values: string[]) => {
    setFilterData({ ...filterData, [type]: values, open: true });
  };

  const debounceSearch = debounce(handleSearch, 1000);

  return (
    <ClientContainer>
      <div className="flex flex-col gap-[30px]">
        <div className="flex justify-between items-center">
          <Text label="Lead Collections" />
          <div className="flex gap-[10px]">
            {filterData.open && (
              <Button
                type="button"
                label="Reset"
                rounded="full"
                callBack={() => {
                  handleReset();
                }}
              />
            )}

            <Button
              type="button"
              label="import"
              rounded="full"
              callBack={() => {
                router.push('/lead-collections/import');
              }}
            />
            <Button
              type="button"
              label="export"
              rounded="full"
              callBack={() => {
                if (session?.user?.token) {
                  //fetchLeadsExport(session?.user?.token);
                  dowloadFile(session?.user?.token);
                }
              }}
            />
          </div>
        </div>
        <div className="flex gap-5 mb-5 pb-8 border-b border-gray-200">
          <div className="max-w-[300px]">
            <InputRef
              refObj={searchRef}
              classes="w-[250px]"
              callBack={debounceSearch}
              placeHolder={'search...'}
            />
          </div>

          <MultiSelect
            optionLabel="name"
            placeholder="Select Industries"
            maxSelectedLabels={3}
            className="w-[300px]"
            options={industries}
            value={filterData.industry_id}
            onChange={(e) =>
              handleMultiSelectFilter('industry_id', e.target.value)
            }
          />

          <MultiSelect
            optionLabel="name"
            placeholder="Select Companies"
            maxSelectedLabels={3}
            className="w-[300px]"
            options={companies}
            value={filterData.company}
            onChange={(e) => {
              handleMultiSelectFilter('company', e.target.value);
            }}
          />

          <MultiSelect
            optionLabel="name"
            placeholder="Select Jobs"
            maxSelectedLabels={3}
            className="w-[300px]"
            options={jobeTitles}
            value={filterData.job_title}
            onChange={(e) => {
              handleMultiSelectFilter('job_title', e.target.value);
            }}
          />

          <MultiSelect
            optionLabel="name"
            placeholder="Select Countries"
            maxSelectedLabels={3}
            className="w-[300px]"
            options={countries}
            value={filterData.country_id}
            onChange={(e) => {
              handleMultiSelectFilter('country_id', e.target.value);
            }}
          />
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
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Profile</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Job Title</TableHead>
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

{
  /* <SelectDemo
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
            . <SelectItem value="0">Select a Country</SelectItem>
            {countries.length > 0 &&
              countries.map((country: any) => (
                <SelectItem value={country.id.toString()} key={country.id}>
                  {country.name}
                </SelectItem>
              ))}
          </SelectDemo> */
}

// const fetchCountries = async (token: string) => {
//   try {
//     const res = await getCountries(token);
//     const data = res?.data?.data?.map((data: CountryType) => {
//       return {
//         value: data.id,
//         name:
//           data.name.length > 20
//             ? data.name.slice(0, 20).concat('...')
//             : data.name,
//       };
//     });
//     setCountries(data);
//   } catch (err) {
//     console.error(err);
//   }
// };

// const fetchIndustries = async (token: string) => {
//   try {
//     const res = await getIndustries(token);
//     const data = res?.data?.data?.map((data: IndustryType) => {
//       return {
//         value: data.id,
//         name:
//           data.name.length > 20
//             ? data.name.slice(0, 20).concat('...')
//             : data.name,
//       };
//     });
//     setIndustries(data);
//   } catch (err) {
//     console.error(err);
//   }
// };
