import { Redirect, Route as ReactRoute, RouteProps } from 'react-router-dom'
import { ComponentType } from 'react'

interface Props extends RouteProps {
  isPrivate?: boolean
  component: ComponentType
}

function Route({ isPrivate = false, component: Component, ...rest }: Props) {
  const accessToken = '' // TODO replace empty string with real token
  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? '/' : '/'} />
        )
      }
    />
  )
}

export default Route
