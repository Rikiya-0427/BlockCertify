'use client'

import styles from '@/app/components/Components.module.scss'
import {
  UserCircleIcon,
  AcademicCapIcon,
  EnvelopeIcon,
  KeyIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

// ナビゲーション
const subNavigation = [
  {
    name: 'プロフィール',
    icon: UserCircleIcon,
    href: '/settings/profile',
  },
  {
    name: '登録済学歴情報',
    icon: AcademicCapIcon,
    href: '/settings/educational',
  },
  {
    name: 'メールアドレス',
    icon: EnvelopeIcon,
    href: '/settings/email',
  },
  {
    name: 'パスワード',
    icon: KeyIcon,
    href: '/settings/password',
  },
  {
    name: 'ログアウト',
    icon: ArrowLeftOnRectangleIcon,
    href: '/settings/logout',
  },
]

// レイアウト
const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const pathchk = () => {
    if (pathname.includes('/settings/educational/form') || pathname.includes('/settings/educational/confirm') || pathname.includes('/settings/educational/login') || pathname.includes('/settings/educational/application') || id) {
      return true
    } else {
      return false
    }
  }

  switch(pathchk()) {
    case true:
      return (
        <div className='col-span-3'>{children}</div>
      ) 
    default:
      return (
        <div className={`grid grid-cols-4 gap-3 my-10 ${styles.customMargin}`}>
          <aside className='col-span-1 text-sm space-y-1 font-bold flex flex-col self-start sticky top-36'>
            {subNavigation.map((item, index) => (
              <Link href={item.href} key={index}>
                <div
                  className={`${
                    item.href == pathname && 'bg-sky-100 text-sky-600'
                  } hover:bg-sky-100 px-3 py-2 rounded-full`}
                >
                  <item.icon className='inline-block w-5 h-5 mr-2' />
                  {item.name}
                </div>
              </Link>
            ))}
          </aside>
          <main className='col-span-3'>{children}</main>
        </div>
      )
  }
}

export default SettingsLayout