'use client';

import { getCards } from '@/src/@pi/cardApi';
import MyCard from '@/src/components/card/MyCard';
import MyNewCard from '@/src/components/card/MyNewCard';
import getErrorMessage from '@/src/lib/getErrorMessage';
import { CardType } from '@/src/types/card';
import { ApiResponse } from '@/src/types/init';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

// const fetchMyCards = async (): Promise<ApiResponse<CardType[]>> => {
//   try {
//     const res = await getCards();
//     return { error: false, data: res?.data?.data, message: '' };
//   } catch (err) {
//     return { error: true, data: null, message: getErrorMessage(err) };
//   }
// };

const MyCardsPage = () => {
  const { data: session } = useSession();
  const [cards, setCards] = useState<ApiResponse<CardType[]> | null>(null);

  useEffect(() => {
    if (session?.user?.token) {
      fetchMyCards();
    }
  }, [session]);

  const fetchMyCards = async () => {
    try {
      const res = await getCards(session?.user?.token || '');
      const data = { error: false, data: res?.data?.data, message: '' };
      setCards(data);
    } catch (err) {
      const data = { error: true, data: null, message: getErrorMessage(err) };
      setCards(data);
    }
  };

  return (
    <div className="grid gap-5 justify-between grid-cols-[repeat(auto-fill,minmax(280px,280px))]">
      <MyNewCard />
      {cards &&
        !cards.error &&
        cards?.data?.map((card) => <MyCard key={card.id} {...card} />)}
    </div>
  );
};

export default MyCardsPage;
