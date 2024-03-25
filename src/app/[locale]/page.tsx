'use client';
import Image from "next/image";
import { useParams } from 'next/navigation'
import { useTranslation } from '@/app/i18n/i18n'
export default function Home() {
  //lang
  const params = useParams<{ locale: string }>()
  const { t } = useTranslation(params.locale)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{t('hello')}</div>
    </main>
  );
}
