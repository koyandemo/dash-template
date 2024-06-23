import MyCard from '@/components/card/MyCard';
import MyNewCard from '@/components/card/MyNewCard';

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
