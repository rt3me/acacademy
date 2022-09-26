import clsx from 'clsx'

type ContainerProps = {
  classNameProp: string
}

export default function Container({ classNameProp, ...props }: ContainerProps) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', classNameProp)}
      {...props}
    />
  )
}
