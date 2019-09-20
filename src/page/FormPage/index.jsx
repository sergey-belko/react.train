import React, { Component } from 'react'
import axios from 'axios'
import Section from '@component/Section'
import style from './style.css'

class Form extends Component {
    state = {
        isLoading: false,
        select: '',
        userName: '',
        description: ''
    }

    handleSubmit = (e) => {
        const { value } = e.target
        console.log({ e, value })
        e.preventDefault()

        this.setState(
            ({ isLoading }) => ({ isLoading: !isLoading }),
            () => {
                const { select = '', userName = '', description = '' } = this.state
                axios
                    .get('http://localhost:3001/', {
                        params: {
                            select,
                            userName,
                            description
                        }
                    })
                    .then((response) => {
                        console.log({ response })
                        return 1
                    })
                    .catch((response) => {
                        console.log({ response })
                        return 2
                    })
                    .finally((response) => {
                        console.log({ response })
                        this.setState(({ isLoading }) => ({ isLoading: !isLoading }))
                        return 'finnaly'
                    })
            }
        )
    }

    handleTextAreaChange = ({ target }) => {
        const { value: description } = target
        this.setState({ description })
    }
    handleInputChange = ({ target }) => {
        const { value: userName } = target
        this.setState({ userName })
    }
    handleSelectChange = ({ target }) => {
        const { value: select } = target
        this.setState({ select })
    }

    render() {
        const { method = 'post', url = '' } = this.props

        if (this.state.isLoading) {
            return <p>Please, wait a second! Operarion is in procces</p>
        }

        return (
            <form method={method} className={style.form} onSubmit={this.handleSubmit}>
                <fieldset>
                    <label> User name:</label>
                    <input type="text" onChange={this.handleInputChange}></input>
                    <label> Description:</label>
                    <textarea onChange={this.handleTextAreaChange}></textarea>
                </fieldset>
                <label> Select car:</label>
                <select onChange={this.handleSelectChange}>
                    <optgroup label="OPT GROUP">
                        <option value="1">Value 1</option>
                        <option value="2">Value 2</option>
                    </optgroup>
                    <option selected value="3">
                        Value 3
                    </option>
                    <option value="4">Value 4</option>
                </select>
                <button type="submit">Submit data</button>
                <button type="reset">Reset</button>
            </form>
        )
    }
}

export const FormPage = () => (
    <Section className={style.container}>
        <p>Here will be form</p>
        <Form url="http://localhost:3001/" />
        <hr />
    </Section>
)

export default FormPage
