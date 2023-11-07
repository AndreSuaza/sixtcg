'use client'

import { Formik, Form } from 'formik';
import { MultiSelect, TextInput } from '../Form';
import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { fetchData } from './Service/cardfinder.service';

interface Props {
  submit: (filters: any) => Promise<void>;
}


export const CardFinder = ({submit}: Props) => {

  const [properties, setProperties] =  useState({
        types: [],
        others: [],
        archetypes: [],
        keywords: [],
        products: [],
        rarities: [],
        limits: [],
        });

  const {types, others, archetypes, keywords, products, rarities, limits} = properties;

  useEffect(() => {  

    const setCardProperties = async () => {
      setProperties( await fetchData() );
    }

    setCardProperties()
   
  },[]);

  return (
    <Formik 
        initialValues={{
            text: '',
            types: [],
            cost: [],
            force: [],
            defense: [],
            archetypes: [],
            keywords: [],
            products: [],
            rarities: [],
            limits: [],
        }}
        onSubmit={ submit }
    >

        { formik => (
        <Form>
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            
              <div className='lg:col-span-3 md:col-span-3'>  
              <TextInput 
                  name="text"
                  placeholder="Nombre, Codigo o Efecto de la carta"
                  className="w-full placeholder:text-neutral-500 text-indigo-500 px-2 rounded border-solid border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"
                  style={{paddingTop: '0.5rem', paddingBottom: '0.35rem'}}
              />
              </div>

              <MultiSelect
                  name="products"
                  options={products}
                  placeholder="Productos"
                  className="text-indigo-500 mt-3"
              />

              <MultiSelect
                  name="types"
                  options={types}
                  placeholder="Tipo"
                  className="text-indigo-500 mt-3"
              />

              <MultiSelect
                  name="archetypes"
                  options={archetypes}
                  placeholder="Arqueotipo"
                  className="text-indigo-500 mt-3"
              />

              <MultiSelect
                  name="keywords"
                  options={keywords}
                  placeholder="Palabras Clave"
                  className="text-indigo-500 mt-3"
              />


            <MultiSelect
                name="cost"
                options={others}
                placeholder="Costo"
                className="text-indigo-500 mt-3"
            />

            <MultiSelect
                name="force"
                options={others}
                placeholder="Fuerza"
                className="text-indigo-500 mt-3"
            />

            <MultiSelect
                name="defense"
                options={others}
                placeholder="Defensa"
                className="text-indigo-500 mt-3"
            />

            <MultiSelect
                name="limits"
                options={limits}
                placeholder="Limite"
                className="text-indigo-500 mt-3"
            />


            <MultiSelect
                name="rarities"
                options={rarities}
                placeholder="Rareza"
                className="text-indigo-500 mt-3"
            />


        </div>
        <div className='w-full mt-5 text-center'>
          <button type="submit" className='btn'>
            <MagnifyingGlassIcon className="h-6 w-5 float-left mr-1"/>
            Buscar
          </button>
        </div>
        </Form>
        
        )}


    </Formik>
  )
}
