import React from 'react'
import { IconWrapper, Wrapper, Text, Icon } from './style'

type modalNavProps = {
    title: string
    showIcon: boolean
}

const ModalNav = (props: modalNavProps) => {
  return (
    <Wrapper>
        <Text>{props.title}</Text>
    </Wrapper>
  )
}

export default ModalNav