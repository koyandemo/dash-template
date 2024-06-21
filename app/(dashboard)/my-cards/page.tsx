import MyCard from '@/components/Card/MyCard';
import MyNewCard from '@/components/Card/MyNewCard';

const MyCardsPage = () => {
  return (
    <div className="grid gap-5 justify-between grid-cols-[repeat(auto-fill,minmax(280px,280px))]">
      <MyNewCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
    </div>
  );
};

export default MyCardsPage;
