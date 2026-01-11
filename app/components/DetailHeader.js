'use client';
import { useRouter } from 'next/navigation';

export default function DetailHeader() {
  const router = useRouter();

  return (
    <header>
      <button onClick={() => router.back()}>
        ← 一覧に戻る
      </button>
    </header>
  );
}
