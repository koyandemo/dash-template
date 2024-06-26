'use client';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import TextArea from '@/components/input/TextArea';
import Text from '@/components/typography/Text';
import { cardBanners, cardColors } from '@/lib/initData';
import {
  CapitalIcon,
  LayoutBusinessFrame,
  LayoutHightLightFrame,
  LayoutPersonalFrame,
  TrashIcon,
  UploadIcon,
} from '@/lib/shreIcon';
import Image from 'next/image';

const MyCardEdit = () => {
  return (
    <div className="flex p-5 gap-[5px] m-auto w-[1000px] h-[800px] border border-[0.5px] border-[#1009250D] shadow-lg rounded-md">
      <div className="flex flex-col gap-[10px] w-[500px] overflow-y-scroll border-r pr-5 shreScrollBar pb-10">
        <section
          id="layout-section"
          className="flex flex-col gap-[15px] min-h-[300px] border-b"
        >
          <Text label="Layout" classes="text-center" />
          <div className="flex justify-center gap-[50px]">
            <div className="flex flex-col gap-[10px] text-center">
              <LayoutPersonalFrame />
              <Text label="Personal" size="sm" weight="normal" />
            </div>
            <div className="flex flex-col gap-[10px] text-center">
              <LayoutBusinessFrame />
              <Text label="Business" size="sm" weight="normal" />
            </div>
            <div className="flex flex-col gap-[10px] text-center">
              <LayoutHightLightFrame />
              <Text label="Hight Lights" size="sm" weight="normal" />
            </div>
          </div>
        </section>

        <section
          id="profile-section"
          className="flex items-center flex-col gap-[20px] min-h-[300px] border-b"
        >
          <Text label="Profile" />
          <div>
            <div className="w-[101px] h-[101px] rounded-[50%] max-w-[unset] border border-3 border-gray-300"></div>
          </div>
          <div className="w-full h-[300px] rounded-sm border border-3 border-gray-300"></div>
        </section>

        <section
          id="form-section"
          className="flex flex-col gap-[10px] min-h-[460px] border-b pt-5"
        >
          <div id="form" className="flex flex-col gap-[20px] w-full">
            <div className="w-full flex gap-[10px]">
              <Input
                name="name"
                type="text"
                value=""
                label="Full Name"
                placeholder="Enter name"
                callBack={() => {}}
              />
              <Input
                name="email"
                type="text"
                value=""
                label="Email address"
                placeholder="Enter email"
                callBack={() => {}}
              />
            </div>
            <div className="w-full flex gap-[10px]">
              <Input
                name="phone"
                type="text"
                value=""
                label="Mobile number"
                placeholder="+44 7777 123 456"
                callBack={() => {}}
              />
              <Input
                name="title"
                type="text"
                value=""
                label="Title"
                placeholder="e.g. Graphic Designer"
                callBack={() => {}}
              />
            </div>
            <TextArea
              name="bio"
              value=""
              label="Bio"
              placeholder={`Max "x" characters`}
              callBack={() => {}}
            />
          </div>
        </section>

        <section
          id="social-section"
          className="flex flex-col gap-[20px] h-auto pb-5 border-b"
        >
          <Text label="Web & Social Media Links" classes="text-center" />
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                className="w-4 h-4"
              />
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
              // classes="self-center"
            />
          </div>
        </section>

        <section
          id="media-section"
          className="flex flex-col gap-[20px] min-h-[180px] border-b"
        >
          <Text label="Add photos/videos" classes="text-center" />
          <div className="flex gap-[16px] min-h-[132px] overflow-y-hidden shreScrollBar">
            <div className="flex flex-col items-center justify-center min-w-[104px] h-[100px] rounded-[16px] px-[8px] py-[16px] bg-white border border-[0.5px] border-[#1009250D]">
              <UploadIcon />
              <div className="text-center">
                <Text
                  label="Upload a photo or"
                  size="xs"
                  weight="medium"
                  active={false}
                />
                <Text label="a video" size="xs" active={false} />
                <Text label="(max xxMB)" size="xs" active={false} />
              </div>
            </div>

            {cardBanners.map((banner, i: number) => (
              <div
                key={i}
                className="min-w-[104px] h-[100px] rounded-[16px]  bg-white border border-[0.5px] border-[#1009250D] overflow-hidden"
              >
                <Image
                  id={`banner-${i}`}
                  alt={`banner-${i}`}
                  width={104}
                  height={100}
                  src={banner}
                  style={{
                    height: '100px',
                    borderRadius: '0.5px',
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="colors-section"
          className="flex flex-col gap-[20px] min-h-[130px] border-b"
        >
          <Text label="Colors" classes="text-center" />
          <div className="flex justify-between">
            {cardColors.map((color: string) => (
              <div
                key={color}
                className="w-[48px] h-[48px] rounded-full border border-gray-200"
                style={{ background: color }}
              />
            ))}
          </div>
        </section>
        <section id="button-section" className="flex flex-col gap-[15px] pt-5">
          <Button
            type="button"
            label="Save my profile"
            callBack={() => {}}
            width="full"
            height="md"
            rounded="full"
          />
          <Button
            type="button"
            label="Preview profile"
            isOutline={true}
            callBack={() => {}}
            width="full"
            height="md"
            rounded="full"
          />
        </section>
      </div>
      <div className="flex justify-center items-center min-w-[500px] max-w-[600px]">
        <Image
          alt="user-preview"
          src={'/images/user-preview.png'}
          width={500}
          height={700}
          style={{ height: '700px', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default MyCardEdit;

// border: 0.5px solid

// border: 3px solid #FFFFFF
