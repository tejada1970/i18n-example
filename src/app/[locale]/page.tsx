import pick from 'lodash/pick';
import {useTranslations, NextIntlClientProvider, useMessages} from 'next-intl';
import Header from '@/components/Header';

export default function Home() {

  const t = useTranslations('Home'); // accede a en.json 'Home' y es.json 'Home' y trae el 'text' para mostrarlo de esta forma <h1>{t('text')}</h1>;
  const messages = useMessages();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-2xl">
      <NextIntlClientProvider messages={pick(messages, 'Header')}>
        <Header />
      </NextIntlClientProvider>
      <h1>{t('text')}</h1>
    </div>
  );
}
