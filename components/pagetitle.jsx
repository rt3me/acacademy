import ContainerSmall from './containersmall'

export default function PageTitle({ text }) {
  return (
    <ContainerSmall className="mb-2">
      <h1 className="text-4xl font-bold text-gray-600">{text}</h1>
    </ContainerSmall>
  )
}
