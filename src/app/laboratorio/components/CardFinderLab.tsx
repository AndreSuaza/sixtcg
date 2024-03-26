import { MultiSelect, TextInput } from "@/components/Form";
import { getCardProperties } from "@/services/cardfinder.service";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";

interface Props {
    setCardsFilters: (filters: any) => void;
}

export const CardFinderLab = ({setCardsFilters}: Props) => {

    const [showFilters, setShowFilters] = useState(false);
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

    const handlerFilters = () => {
        setShowFilters(!showFilters);
    }

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
        onSubmit={ onSubmit }
    >

        { formik => (
        <Form>
            <div className="grid gap-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                
            <div className='lg:col-span-2 md:col-span-2 col-span-1'>  
                <div className="grid grid-cols-6 gap-1">
                    <TextInput 
                        name="text"
                        placeholder="Nombre, Codigo o Efecto de la carta"
                        className="col-span-4 placeholder:text-neutral-500 text-primary px-2 rounded border-solid border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"
                        style={{paddingTop: '0.5rem', paddingBottom: '0.35rem'}}
                    />
                    <button type="submit" className='bg-primary rounded'>
                        <MagnifyingGlassIcon className="w-5 m-auto"/>
                    </button>
                    <button type="submit" className='bg-primary rounded' onClick={handlerFilters}>
                       {!showFilters ?  <AdjustmentsHorizontalIcon className="w-5 m-auto"/> : <XMarkIcon className="w-5 m-auto"/>}
                    </button>
                </div>
                
            </div>

            { showFilters &&
            <>
                <MultiSelect
                    name="products"
                    options={products}
                    placeholder="Productos"
                    className="text-primary"
                    multi={true}
                />
  
                <MultiSelect
                    name="types"
                    options={types}
                    placeholder="Tipo"
                    className="text-primary"
                    multi={true}
                />
  
                <MultiSelect
                    name="archetypes"
                    options={archetypes}
                    placeholder="Arqueotipo"
                    className="text-primary"
                    multi={true}
                />
  
                <MultiSelect
                    name="keywords"
                    options={keywords}
                    placeholder="Palabras Clave"
                    className="text-primary"
                    multi={true}
                />
  
  
              <MultiSelect
                  name="cost"
                  options={others}
                  placeholder="Costo"
                  className="text-primary"
                  multi={true}
              />
  
              <MultiSelect
                  name="force"
                  options={others}
                  placeholder="Fuerza"
                  className="text-primary"
                  multi={true}
              />
  
              <MultiSelect
                  name="defense"
                  options={others}
                  placeholder="Defensa"
                  className="text-primary"
                  multi={true}
              />
  
              <MultiSelect
                  name="limits"
                  options={limits}
                  placeholder="Limite"
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
            </>
            }
                

            </div>
            <div className='w-full mt-5 text-center'>
            
            </div>
        </Form>
            
        )}


        </Formik>
  )
}
