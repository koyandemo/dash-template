import Button from '@/components/button/Button';
import Text from '@/components/typography/Text';
import { CapitalIcon, TrashIcon } from '@/lib/shreIcon';

const SocialMediaLinkSection = () => {
  return (
    <section
      id="social-media-link-section"
      className="flex flex-col gap-[20px] h-auto pb-5 border-b"
    >
      <Text label="Web & Social Media Links" classes="text-center" />
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center">
          <input id="checked-checkbox" type="checkbox" className="w-4 h-4" />
          <label
            htmlFor="checked-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Show Title
          </label>
        </div>
        <div className="">
          <div className="flex items-center px-[15px] justify-between border border-gray-200 w-full rounded-[20px] h-[70px]">
            <CapitalIcon />
            <div className="flex flex-col gap-[2px]">
              <Text label="Own Website" size="sm" />
              <Text
                label="ownwebsite.com"
                size="sm"
                weight="extralight"
                active={false}
              />
            </div>
            <TrashIcon />
          </div>
        </div>
        <Button
          type="button"
          label="Add another link"
          isOutline={true}
          callBack={() => {}}
          width="full"
          height="md"
        />
      </div>
    </section>
  );
};

export default SocialMediaLinkSection;
