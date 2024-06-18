// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Sofortige Weiterleitung zur /page Seite
    router.push('/page');
  }, [router]);

  return (
    <div>
      
    </div>
  );
}
