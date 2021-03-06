import React, { Component, ReactNode, SyntheticEvent } from 'react'
import { find } from 'lodash'
import Router from '../router'
import { isMatching } from 'router/utils'
import history from 'router/history'

// import { Route } from '../router'

export interface LinkProps {
  dest: string
  className?: string
  active?: boolean
  children: ReactNode
}
export interface LinkState {
  url: string
}

class Link extends Component<LinkProps, LinkState> {
  constructor(props: LinkProps) {
    super(props)

    let url: string = props.dest
    // if (Router && Router.routes) {
    //   let route = find(Router.routes, r => isMatching(props.dest, r))
    //   if (route && route.url) url = route.url
    // }
    this.state = { url }
  }

  render() {
    const { dest, className } = this.props

    return (
      <a href={dest} className={className} onClick={this._onClick}>
        {this.props.children}
      </a>
    )
  }

  _onClick = (evt: SyntheticEvent): void => {
    evt.preventDefault()

    history.go(this.state.url)
  }
}

export default Link
