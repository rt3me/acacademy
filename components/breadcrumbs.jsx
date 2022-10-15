import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import ContainerSmall from './containersmall'

// eslint-disable-next-line no-unused-vars
const defaultGetTextGenerator = (param, query) => null
const defaultGetDefaultTextGenerator = (path) => path

// Pulled out the path part breakdown because its
// going to be used by both `asPath` and `pathname`
const generatePathParts = (pathStr) => {
  const pathWithoutQuery = pathStr.split('?')[0]
  return pathWithoutQuery.split('/').filter((v) => v.length > 0)
}

export default function NextBreadcrumbs({
  getTextGenerator = defaultGetTextGenerator,
  getDefaultTextGenerator = defaultGetDefaultTextGenerator,
}) {
  const router = useRouter()

  const breadcrumbs = useMemo(
    // Generate breadcrumbs
    () => {
      const asPathNestedRoutes = generatePathParts(router.asPath)
      const pathnameNestedRoutes = generatePathParts(router.pathname)

      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        // Pull out and convert "[post_id]" into "post_id"
        const param = pathnameNestedRoutes[idx]
          .replace('[', '')
          .replace(']', '')

        const href = `/${asPathNestedRoutes.slice(0, idx + 1).join('/')}`
        return {
          href,
          textGenerator: getTextGenerator(param, router.query),
          text: getDefaultTextGenerator(subpath, href).replace(
            /(^\w{1})|(\s+\w{1})/g,
            (letter) => letter.toUpperCase(),
          ),
        }
      })

      return [{ href: '/', text: 'Home' }, ...crumblist]
    },
    [
      router.asPath,
      router.pathname,
      router.query,
      getTextGenerator,
      getDefaultTextGenerator,
    ],
  )

  return (
    <ContainerSmall>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4 rounded-md bg-white px-6 py-2 shadow">
          {breadcrumbs.map((crumb, idx) => (
            <Crumb
              {...crumb}
              key={crumb.text}
              first={idx === 0}
              last={idx === breadcrumbs.length - 1}
            />
          ))}
        </ol>
      </nav>
    </ContainerSmall>
  )
}

function Crumb({
  text: defaultText,
  textGenerator,
  href,
  first,
  last = false,
}) {
  const [text, setText] = useState(defaultText)

  useEffect(() => {
    async function runTextGenerator() {
      if (textGenerator) {
        // Run the text generator and set the text again
        const finalText = await textGenerator()
        setText(finalText)
      }
    }
    runTextGenerator()
  }, [textGenerator])

  if (first) {
    return (
      <li>
        <div>
          <Link
            className="text-sm font-medium text-gray-500 underline hover:text-gray-700"
            href={href}
          >
            {text}
          </Link>
        </div>
      </li>
    )
  }
  if (last) {
    return (
      <li>
        <div className="flex items-center">
          <ChevronRightIcon
            className="h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
            {text}
          </span>
        </div>
      </li>
    )
  }
  return (
    <li>
      <div className="flex items-center">
        <ChevronRightIcon
          className="h-5 w-5 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        />
        <Link
          className="ml-4 text-sm font-medium text-gray-500 underline hover:text-gray-700"
          href={href}
        >
          {text}
        </Link>
      </div>
    </li>
  )
}
