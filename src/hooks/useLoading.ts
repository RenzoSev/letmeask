import { useEffect, useState } from 'react';
import useRoom from './useRoom';

export default function useLoading(id: string) {
  const { questions } = useRoom(id);
  const [loading, setLoading] = useState(true);
  const [hasBeenLoaded, setHasBeenLoaded] = useState(false);

  useEffect(() => {
    if (questions.length && !hasBeenLoaded) {
      setLoading(!loading);
      setHasBeenLoaded(!hasBeenLoaded);
    }

    return () => {
      setLoading(!loading);
      setHasBeenLoaded(!hasBeenLoaded);
    };
  }, [questions]);

  return { loading };
}
