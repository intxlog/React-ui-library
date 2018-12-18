import React from 'react'
import { storiesOf } from '@storybook/react';
import Input from './'

storiesOf('Input', module)
.add('default', () => (
  <Input></Input>
))
.add('email', () => (
  <Input
    type='email'
    onValid={(val) => {console.log(val)}}
  ></Input>
))
.add('password', () => (
  <Input
    type='password'
  ></Input>
))

storiesOf('TextArea', module)
.add('default', () => (
  <Input type={`textArea`}></Input>
))
.add('with placeholder', () => (
  <Input type={`textArea`} placeholder={`Example of a placeholder`}></Input>
))
.add('defaultValue', () => (
  <Input type={`textArea`} defaultValue={`Example of a default value`}></Input>
))


storiesOf('Input Select', module)
.add('default', () => (
  <Input
    type='select'
  ></Input>
))
.add('with options', () => (
  <Input
    type='select'
    defaultValue='default'
  >
    <option value="default" disabled>Choose an option</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Input>
))


storiesOf('Input Radio', module)
.add('default', () => (
  <>
    <Input
      type='radio'
      name={'test'}
      value={`option1`}
      idForLabel={`option1`}
      labelText={'Option 1'}
    ></Input>
    <Input
      type='radio'
      name={'test'}
      value={`option2`}
      idForLabel={`option2`}
      labelText={'Option 2'}
    ></Input>
  </>
))
.add('defaultChecked', () => (
  <>
    <Input
      type='radio'
      name={'test'}
      value={`option1`}
      idForLabel={`option1`}
      labelText={'Option 1'}
      defaultChecked
    ></Input>
    <Input
      type='radio'
      name={'test'}
      value={`option2`}
      idForLabel={`option2`}
      labelText={'Option 2'}
    ></Input>
  </>
))

storiesOf('Input Checkbox', module)
.add('default', () => (
  <Input
    type='checkbox'
    value={`Checkbox`}
    idForLabel={`option1`}
    labelText={'Awesome Checkbox'}
  ></Input>
))