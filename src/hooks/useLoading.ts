import { useEffect, useState } from 'react';
import useRoom from './useRoom';

export default function useLoading(id: string) {
  const { hasBeenRequested } = useRoom(id);
  const [loading, setLoading] = useState(true);
  const [hasBeenLoaded, setHasBeenLoaded] = useState(false);

  useEffect(() => {
    if (hasBeenRequested && !hasBeenLoaded) {
      setLoading(!loading);
      setHasBeenLoaded(!hasBeenLoaded);
    }

    return () => {
      setLoading(!loading);
      setHasBeenLoaded(!hasBeenLoaded);
    };
  }, [hasBeenRequested]);

  return { loading };
}
