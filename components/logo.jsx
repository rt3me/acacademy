import Image from 'next/image'
import logoImage from '../public/aca-combination-mark-blue.svg'

export default function Logo({ classProps, widthProp = 150, heightProp = 60 }) {
  return (
    <Image
      src={logoImage}
      alt="Logo"
      className={classProps}
      width={widthProp}
      height={heightProp}
    />
  )
}
