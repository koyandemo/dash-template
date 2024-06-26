import Input from '@/components/input/Input';
import TextArea from '@/components/input/TextArea';

const ProfileFormSection = () => {
  return (
    <section
      id="profile-form-section"
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
  );
};

export default ProfileFormSection;
