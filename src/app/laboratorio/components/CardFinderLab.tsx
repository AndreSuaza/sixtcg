import { MultiSelect, TextInput } from "@/components/Form";
import { getCardProperties } from "@/services/cardfinder.service";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";

interface Props {
    setCardsFilters: (filters: any) => void;
}

export const CardFinderLab = ({setCardsFilters}: Props) => {

    const [properties, setProperties] =  useState({
        types: [],
        others: [],
        archetypes: [],
        keywords: [],
        products: [],
        });

    const {types, others, archetypes, products} = properties;

    useEffect(() => {  

        const setCardProperties = async () => {
          setProperties( await getCardProperties() );
        }
    
        setCardProperties()
       
    },[]);

    const searchCards = (filters: any) => { 

        let query = "";
    
        if (filters.text && filters.text !== "") query += '&text='+filters.text;
        if (filters.types && filters.types !== "") query += '&types='+filters.types;
        if (filters.archetypes && filters.archetypes !== "") query += '&archetypes='+filters.archetypes;
        if (filters.products && filters.products !== "") query += '&products='+filters.products;
        if (filters.cost && filters.cost !== "") query += '&cost='+filters.cost;
        
       return query;
    
    };

    const onSubmit = (filters: any) => {
        const queryParams = searchCards(filters);
        setCardsFilters(queryParams);
    }

  return (
    <Formik 
        initialValues={{
            text: "",
            types: "",
            cost: "",
            archetypes: "",
            products: "",
        }}
        onSubmit={ onSubmit }
    >

        { formik => (
            <Form>
            <div className="grid gap-1 lg:grid-cols-4 md:grid-cols-4 grid-cols-1">
                
                <div className='lg:col-span-4 md:col-span-4 col-span-2'>  
                    <div className="grid grid-cols-5 gap-1">
                        <TextInput 
                            name="text"
                            placeholder="Nombre, Codigo o Efecto de la carta"
                            className="col-span-4 placeholder:text-neutral-500 text-primary px-2 rounded border-solid border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"
                            style={{paddingTop: '0.5rem', paddingBottom: '0.35rem'}}
                        />
                        <button type="submit" className='bg-primary rounded'>
                            <MagnifyingGlassIcon className="w-5 m-auto"/>
                        </button>
                       
                    </div>
                    
                </div>

                {/* <MultiSelect
                  name="products"
                  options={products}
                  placeholder="Productos"
                  className="text-primary"
                  multi={false}
                />

                <MultiSelect
                    name="types"
                    options={types}
                    placeholder="Tipo"
                    className="text-primary"
                />

                <MultiSelect
                  name="archetypes"
                  options={archetypes}
                  placeholder="Arqueotipo"
                  className="text-primary"
                />

                <MultiSelect
                    name="cost"
                    options={others}
                    placeholder="Costo"
                    className="text-primary"
                /> */}

            </div>
            <div className='w-full mt-5 text-center'>
            
            </div>
            </Form>
            
            )}


        </Formik>
  )
}
