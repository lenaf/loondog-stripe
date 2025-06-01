import Link from '../common/Link'
import siteData from '@/data/siteData'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          {/* <SocialIcon kind="mail" href={`mailto:${siteData.email}`} size={6} /> */}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`©2024`}</div>
        </div>
      </div>
    </footer>
  )
}
