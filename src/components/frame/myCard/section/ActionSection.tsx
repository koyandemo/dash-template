import Button from '@/components/button/Button';

const ActionSection = () => {
  return (
    <section id="action-section" className="flex flex-col gap-[15px] pt-5">
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
  );
};

export default ActionSection;
