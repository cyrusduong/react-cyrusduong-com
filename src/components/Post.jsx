import React from 'react'
import classNames from 'classnames/bind'
import { Container, Input, TextArea, Form, Button } from 'semantic-ui-react'

import styles from './Post.scss'
import axios from 'axios'

const cx = classNames.bind(styles)

class Post extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      tags: ''
    }

    this.handleBodyChanged = this.handleBodyChanged.bind(this)
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
    this.handleTagsChanged = this.handleTagsChanged.bind(this)
    this.handleTitleChanged = this.handleTitleChanged.bind(this)
  }

  handleBodyChanged (e, { value }) {
    this.setState({ body: value })
  }

  handleSubmitButton () {
    const { title, body } = this.state

    if (title && body) {
      this.setState({ isLoading: true })

      const port = 5000
      const splitUrl = window.location.origin.split(':')
      const baseUrl = `${splitUrl[0]}:${splitUrl[1]}:${port}/article`
      const data = { title, body, tags: this.state.tags }

      axios.post(baseUrl, data).then(response => {
        console.log(('recieved response from server', response))
        this.setState({ isLoading: false })
      })
    }
  }

  handleTagsChanged (e, { value }) {
    this.setState({ tags: value })
  }

  handleTitleChanged (e, { value }) {
    this.setState({ title: value })
  }

  render () {
    const { isLoading } = this.state

    const inputClassName = cx('input', isLoading ? 'disabled field' : '')
    const buttonContainerClassName = cx('buttonContainer')

    return (
      <Container className={inputClassName}>
        <Form>
          <Input
            className={inputClassName}
            fluid
            disabled={isLoading}
            placeholder='Title'
            onChange={this.handleTitleChanged}
          />
          <Input
            label='Tags'
            className={inputClassName}
            fluid
            disabled={isLoading}
            placeholder='Tags'
            onChange={this.handleTagsChanged}
          />
          <TextArea
            className={inputClassName}
            placeholder='Body'
            onChange={this.handleBodyChanged}
          />
          <div className={buttonContainerClassName}>
            <Button
              loading={isLoading}
              primary
              type='submit'
              onClick={this.handleSubmitButton}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    )
  }
}

export default Post
