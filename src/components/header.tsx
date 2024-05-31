"use client"
import {useTranslations} from 'next-intl';

const Header = () => {
    const t = useTranslations('Header');
    return (
        <header>
            <h1>{t('text')}</h1>
        </header>
    );
}

export default Header