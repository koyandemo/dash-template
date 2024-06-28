import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

type SelectDeomType = {
  label: string;
  value: string;
  placeHolder: string;
  children: React.ReactNode;
  callBack: (e: string | number) => void;
};

const SelectDemo = ({
  label,
  value,
  placeHolder,
  children,
  callBack,
}: SelectDeomType) => {
  return (
    <Select onValueChange={callBack} value={value}>
      <SelectTrigger className="min-w-[80px] min-h-[40px]">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectDemo;
