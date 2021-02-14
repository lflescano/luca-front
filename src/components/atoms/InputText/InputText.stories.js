import React from 'react';

import InputTextComponent from '.';

export default {
    title: 'Atoms/InputText'
}

export const InputText = () => {
    return <InputTextComponent label={'Mostrar caracteres'} type={'text'} placeholder={'Ingresá tu email'} />
}

export const InputTextPassword = () => {
    return <InputTextComponent label={'Mostrar caracteres'} type={'password'} placeholder={'Ingresá tu password'} />
}