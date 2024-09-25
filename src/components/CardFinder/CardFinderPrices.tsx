'use client'

import { Formik, Form } from 'formik';
import { MultiSelect, TextInput } from '../Form';
import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { getCardProperties } from '../../services/cardfinder.service';

interface Props {
  submit: (filters: any) => Promise<void>;
}


export const CardFinderPrices = ({submit}: Props) => {

  const [properties, setProperties] =  useState({
        products: [],
        rarities: [],
        prices: [],
    });

  const {products, rarities, prices} = properties;

  useEffect(() => {  

    const setCardProperties = async () => {
      setProperties( await getCardProperties() );
    }

    setCardProperties()
   
  },[]);

  return (
    <Formik 
        initialValues={{
            text: '',
            products: [],
            rarities: [],
            prices: [],
        }}
        onSubmit={ submit }
    >

        { formik => (
        <Form>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            

            <TextInput 
                name="text"
                placeholder="Nombre, Codigo o Efecto de la carta"
                className="w-full placeholder:text-neutral-500 text-primary px-2 rounded border-solid border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"
                style={{paddingTop: '0.5rem', paddingBottom: '0.35rem'}}
            />


            <MultiSelect
                name="products"
                options={products}
                placeholder="Productos"
                className="text-primary"
                multi={true}
            />

            <MultiSelect
                name="rarities"
                options={rarities}
                placeholder="Rareza"
                className="text-primary"
                multi={true}
            />

          <button type="submit" className='btn'>
            Buscar
          </button>

        </div>

        </Form>
        
        )}


    </Formik>
  )
}
