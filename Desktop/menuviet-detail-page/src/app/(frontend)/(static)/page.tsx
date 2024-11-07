import { ActionButtons } from './components/ActionButtons'
import { Header } from './components/Header'
import Image from 'next/image'
import { getMediaFileUrl } from '@/utilities'
import shimmer from '@/utilities/shimmer'
import Link from 'next/link'

export { generateMetadata } from '../[tenant]/[...slug]/page'

function HomePage(props: {}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950">
      <Header />

      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-2">
            Xem nhanh <span className="text-[#E15B4E]">menu</span>
          </h1>
          <h2 className="text-4xl font-bold text-center mb-8">nhà hàng, quán ăn</h2>

          <ActionButtons />
          <div className="flex justify-center">
            <Link href="/dreamy-restaurant">
              <Image
                src={getMediaFileUrl('homepage_restaurant_demo.jpg')}
                alt="Demo"
                quality={75}
                width={320}
                height={320}
                loading="eager"
                placeholder={shimmer(320, 320)}
              />
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500">
        <p>© 2024 Powered by Roas.vn</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  )
}

export default HomePage
